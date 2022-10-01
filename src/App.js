import styles from "./App.module.css";
import { Comment } from "./comments/Comment/Comment";
import data from "../src/mocks/data.json";
import { useState } from "react";
import { findComment } from "./comments/util";
import AddComment from "./comments/AddComment/AddComment";

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

  return (
    <div className={styles["app-container"]}>
      <div></div>
      <main className={styles["main-container"]}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            score={comment.score}
            increment={increment}
            decrement={decrement}
            username={comment.user.username}
            src={comment.user.image.png}
            text={comment.content}
            replies={comment.replies}
          ></Comment>
        ))}
        <AddComment></AddComment>
      </main>
      <div></div>
    </div>
  );
}

export default App;
