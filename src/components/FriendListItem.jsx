import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<div className="friend-list-item">
			<img src={avatar} alt={`${name} avatar`} width="48" />
			<p className="friend-name">{name}</p>
			<p className={`status ${isOnline ? "online" : "offline"}`}>
				{isOnline ? "Online" : "Offline"}
			</p>
		</div>
	);
};
export default FriendListItem;
