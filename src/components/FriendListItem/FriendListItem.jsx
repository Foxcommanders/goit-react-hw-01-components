import PropTypes from 'prop-types';
import { StyledFriendListItem } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendListItem className={isOnline ? '' : 'is-offline'}>
      <span>{isOnline ? '🟢' : '🔴'}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
