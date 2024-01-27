import styled from 'styled-components';

export const StyledFriendListItem = styled.li`
  height: 100px;
  background-color: #fff;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);

  &.is-offline {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    margin-right: auto;
    margin-left: 20px;
    font-size: 26px;
  }
`;
