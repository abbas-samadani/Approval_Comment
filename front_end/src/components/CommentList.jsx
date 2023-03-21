import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { getComments, approveComment } from "./../Api";
import { SearchBar } from "./SearchBar";
import { SortDropdown } from "./SortDropdown";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [sortBy, setSortBy] = useState("dateDesc");
  const [searchBy, setSearchBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const loadComments = () => {
    getComments(sortBy, searchBy).then(data => {
      setComments(data);
    });
  };

  useEffect(() => {
    loadComments();
  }, [sortBy, searchBy, searchTerm]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchedName = searchTerm.toLowerCase();
    getComments(sortBy, searchedName).then(data => {
      setComments(data);
    });
  };

  const handleApproveClick = (id, approved) => {
    approveComment(id, approved).then(updatedComment => {
      setComments(comments =>
        comments.map(comment =>
          comment.id === updatedComment.id ? updatedComment : comment
        )
      );
    });
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-row gap-24 my-5">
        <SearchBar
          searchTerm={searchTerm}
          searchBy={searchBy}
          onSubmit={handleSearchSubmit}
          onSearchTermChange={setSearchTerm}
        />
        <SortDropdown sortBy={sortBy} onSortByChange={setSortBy} />
      </div>

      <ul>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            handleApprove={handleApproveClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
