import Avatar from "../Avatar/Avatar";

export default function User(props) {
  return (
    <div>
      <Avatar src={props.src}></Avatar>
      <span>{props.username}</span>
    </div>
  );
}
