import styles from "./App.module.css";
import { Comment } from "./comments/Comment/Comment";
import data from "../src/mocks/data.json";
import { useState } from "react";
import { findComment } from "./comments/util";
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

  const loggedInUser = <User src={data.currentUser.image.png}></User>;

  return (
    <div className={styles["app-container"]}>
      <div></div>
      <main className={styles["main-container"]}>
        {comments.map((comment) => {
          const user = (
            <User
              username={comment.user.username}
              src={comment.user.image.png}
            ></User>
          );
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              user={user}
              score={comment.score}
              increment={increment}
              decrement={decrement}
              text={comment.content}
              replies={comment.replies}
            ></Comment>
          );
        })}
        <AddComment user={loggedInUser}></AddComment>
      </main>
      <div></div>
    </div>
  );
}

export default App;
