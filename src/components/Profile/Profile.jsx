import PropTypes from 'prop-types';
import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </StyledDescription>

      <ul>
        <li>
          <span>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
