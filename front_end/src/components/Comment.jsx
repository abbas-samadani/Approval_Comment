import React from "react";
import Markdown from "markdown-to-jsx";

export const Comment = ({ comment , handleApprove }) => {
  const { id } = comment;
  return (
    <li key={id} className="flex flex-col border p-4">
      <p className="font-bold text-lg">{comment.name}</p>
      <Markdown>{comment.comment}</Markdown>
      <button className="px-2 py-1 rounded bg-red-600 text-white" onClick={() => handleApprove(comment.id , comment.approved)}>
        {comment.approved ? "Disapprove" : "Approve"}
      </button>
    </li>
  );
};
