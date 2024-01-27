import styled from 'styled-components';

export const StyledStatistics = styled.section`
  text-align: center;
  margin-bottom: 100px;

  h2 {
    font-size: 30px;
    text-transform: uppercase;
    color: #969696;
    text-shadow: -1px -1px 0 hsl(0deg 0% 77.14%),
      -2px -2px 1px hsl(0deg 0% 100%);
    margin-bottom: 15px;
  }

  ul {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 600px;
    gap: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgb(165 125 125 / 34%);
    border: 1px solid #d947ffb5;
  }

  span.percentage {
    font-weight: bold;
    font-size: 25px;
    color: #9755d5;
  }
`;
