import styles from "./App.module.css";
import { Comment } from "./comments/Comment/Comment";
import data from "../src/mocks/data.json";

function App() {
  const { comments, currentUser } = data;
  return (
    <div className={styles["app-container"]}>
      <div></div>
      <main className={styles["main-container"]}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            score={comment.score}
            username={comment.user.username}
            src={comment.user.image.png}
            text={comment.content}
            replies={comment.replies}
          ></Comment>
        ))}
      </main>
      <div></div>
    </div>
  );
}

export default App;
