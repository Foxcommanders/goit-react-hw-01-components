import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 600px;
  margin: 0 auto 50px;
  padding-top: 30px;
  background-color: rgb(255, 255, 255);
  border: 2px solid #0000ff8a;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    height: 70px;
    text-align: center;
  }

  li {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5px 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  li:nth-child(1) {
    background-color: #7ecdfc;
  }

  li:nth-child(2) {
    background-color: #b3ffb4;
  }

  li:nth-child(3) {
    background-color: #a186ff;
  }

  span.quantity {
    font-size: 24px;
    font-weight: bold;
    color: #4e4f50;
  }
`;

export const StyledDescription = styled.div`
  padding: 50px 20px 40px;
  text-align: center;

  p {
    display: inline;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 24px;
    color: #626262de;
    font-weight: bold;
  }
`;

export const StyledAvatar = styled.img`
  display: block;
  width: 300px;
  margin: 0 auto 40px;
`;
