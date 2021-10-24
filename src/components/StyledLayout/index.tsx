import styled from 'styled-components';

export const StyledAppLayout = styled.div`
  padding: 25px 30px 10px 30px;
  display: flex;
  flex-direction: row;

  .ant-spin-container {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;

      .latest-news {
        margin-bottom: 18px;
        width: 100%;
        height: 100%;
      }
    }
  }

`;

export const StyledLatestNews = styled.div`
  width: 478px;
  margin-right: 24px;
`;