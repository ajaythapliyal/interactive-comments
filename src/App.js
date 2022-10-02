import styles from "./App.module.css";
import { Comment } from "./comments/Comment/Comment";
import data from "../src/mocks/data.json";
import React, { useState } from "react";
import { findComment, UserContext } from "./comments/util";
import AddComment from "./comments/AddComment/AddComment";
import User from "./comments/User/User";

function App() {
  const [comments, setComments] = useState(data.comments);

  function increment(id) {
    const comment = findComment(comments, id);
    comment.score += 1;
    setComments([...comments]);
  }

  function decrement(id) {
    const comment = findComment(comments, id);
    comment.score -= 1;
    setComments([...comments]);
  }

  function onComment(comment, id) {
    if (comment?.replyingTo) {
      const parentComment = findComment(comments, id);
      parentComment.replies.push(comment);
      setComments([...comments]);
      return;
    }
    setComments([...comments, comment]);
  }

  return (
    <UserContext.Provider value={data.currentUser}>
      <div className={styles["app-container"]}>
        <div></div>
        <main className={styles["main-container"]}>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              user={comment.user}
              score={comment.score}
              increment={increment}
              decrement={decrement}
              text={comment.content}
              replies={comment.replies}
              onReply={onComment}
            ></Comment>
          ))}
          <AddComment onComment={onComment}></AddComment>
        </main>
        <div></div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
