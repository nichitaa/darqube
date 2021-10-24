import styled from 'styled-components';

const StyledPageLayout = styled.div`
  height: 911px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .pagination-row {
    width: 100%;
    padding: 0 9px 0 9px;
    font-family: 'Ubuntu', serif;
  }

  .pagination-info {
    font-size: 12px;
    color: #fff;
    line-height: 14px
  }

  @media only screen and (min-width: 1440px) {
    & {
      .card-row {
        justify-content: space-between;
      }
    }
  }
`;

export default StyledPageLayout;