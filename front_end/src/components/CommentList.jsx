import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { getComments, approveComment } from "./../Api";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [orderBy, setOrderBy] = useState('dateDesc');
  const [searchName, setSearchName] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const fetchComments = () => {
    getComments(orderBy, searchName).then(data => {
      setComments(data);
    });
  };

  useEffect(() => {
    fetchComments();
  }, [orderBy,searchName]);


  const handleSearch = e => {
    e.preventDefault();
    const searchedName = searchInput.toLowerCase();
    getComments(orderBy, searchedName).then(data => {
      setComments(data);
    });
  };

  const handleApproveClick = (id, approved) => {
    approveComment(id, approved).then(updatedComment => {
      setComments((comments) =>
        comments.map((comment) =>
          comment.id === updatedComment.id ? updatedComment : comment
        )
      );
    })
  };

  return (
    <div className="container m-auto">
      <form onSubmit={handleSearch}>
        <input
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          type="text"
          placeholder="Search by name"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>
      <select value={orderBy} onChange={e => setOrderBy(e.target.value)}>
        <option value="dateDesc">Newest First</option>
        <option value="dateAsc">Oldest First</option>
        <option value="nameAsc">Name (A-Z)</option>
        <option value="nameDesc">Name (Z-A)</option>
      </select>

      <ul>
        {comments.map(comment => (
            <Comment key={comment.id} comment={comment} handleApprove={handleApproveClick}/>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
