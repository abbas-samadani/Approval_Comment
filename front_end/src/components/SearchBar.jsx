import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { getComments, approveComment } from "./../Api";

export const SearchBar = ({ searchTerm, searchBy, onSubmit, onSearchTermChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border"
        type="text"
        placeholder={`Search by ${searchBy}`}
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button className="px-2 py-1 bg-red-600 text-white ml-5" type="submit">
        Search
      </button>
    </form>
  );
};
