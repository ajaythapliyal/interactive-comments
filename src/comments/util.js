export function findComment(comments, id) {
  for (let index = 0; index < comments.length; index++) {
    const comment = comments[index];
    if (comment.id === id) {
      return comment;
    } else if (comment.replies?.length) {
      return findComment(comment.replies, id);
    }
  }
}