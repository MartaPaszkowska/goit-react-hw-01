import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
	return (
		<div className="profile-container">
			<div>
				<img
					src={image}
					alt={`${name}'s avatar`}
					className="profile-image"
				/>
				<p className="profile-name">{name}</p>
				<span className="profile-tag">@{tag}</span>
				<p className="profile-location">{location}</p>
			</div>
			<div className="profile-stats-container">
				<ul className="profile-stats">
					<li className="profile-stat-item">
						<span className="profile-stat-title">Followers</span>
						<span className="profile-stat-value">
							{stats.followers}
						</span>
					</li>
					<li className="profile-stat-item">
						<span className="profile-stat-title">Views</span>
						<span className="profile-stat-value">
							{stats.views}
						</span>
					</li>
					<li className="profile-stat-item">
						<span className="profile-stat-title">Likes</span>
						<span className="profile-stat-value">
							{stats.likes}
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
