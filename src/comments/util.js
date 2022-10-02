import React from "react";

export function findComment(comments, id) {
  for (let index = 0; index < comments.length; index++) {
    const comment = comments[index];
    if (comment.id === id) {
      return comment;
    } else if (comment.replies?.length) {
      const result = findComment(comment.replies, id);
      if (result) return result;
    }
  }
}

export const UserContext = React.createContext();
