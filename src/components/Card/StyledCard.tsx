import styled from 'styled-components';

type MainProps = {
    img: null | string,
    isLatest?: boolean
}

export const StyledCard = styled.div<MainProps>`

  font-family: 'Ubuntu', sans-serif;

  .card {
    position: relative;
    overflow: hidden;

    width: ${props => props.isLatest ? '478px' : '280px'};
    height: ${props => props.isLatest ? '678px' : '425px'};

    @media only screen and (max-width: 600px) {
      & {
        width: 100%;
        height: ${props => props.isLatest ? '80vh' : '325px'};
      }
    }

    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.56s ease-in-out;

    .card-content {
      display: flex;
      height: 100%;
      justify-content: space-between;
      flex-direction: column;

      .top-row {
        margin: 10px 15px 10px 15px;
      }

      .card-header {
        color: #fff;
        opacity: .9;
        font-size: 20px;
        line-height: 28px;
        margin: 0 15px 10px 15px;
        font-weight: 500;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -ms-box-orient: vertical;
        box-orient: vertical;
        -webkit-line-clamp: 3;
        -moz-line-clamp: 3;
        -ms-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
      }

      .card-summary {
        color: #fff;
        opacity: .75;
        font-size: 12px;
        line-height: 18px;
        margin: 0 15px 5px 15px;
        font-weight: 400;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -ms-box-orient: vertical;
        box-orient: vertical;
        -webkit-line-clamp: 3;
        -moz-line-clamp: 3;
        -ms-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
      }

      .card-footer {
        margin: 0 15px 0px 15px;
        font-weight: 400;
        font-size: 12px;
        color: #fff;
        opacity: .75;

        .bookmark-btn {
          border: none;
          padding: 5px;
          background-color: transparent;
          color: #fff;
          opacity: .75;
        }
      }

      .bookmark-source {
        opacity: 0.5;
        color: #fff;
        font-size: 10px;
        margin-bottom: 5px;
      }

      .latest-label {
        text-align: end;
        font-size: 8px;
        line-height: 9px;
        color: #fff;
        letter-spacing: 0.06em;
        font-family: 'Ubuntu', sans-serif;
        border-radius: 2px;
        padding: 4px 8px;
        background-color: #b73556;
      }


    }

    .related-label {
      border-radius: 30px;
      height: 21px;
      font-size: 10px;
      line-height: 0;
      background-color: transparent;
      border-color: #fff;
      color: #fff;

      &[ant-click-animating-without-extra-node='true']::after,
      .ant-click-animating-node {
        box-shadow: none !important;
      }
    }
  }

  .card:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255, 0.09) 0 5px 15px;
  }

  .has-bg-img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .bg-img-nature {
    transition: ease all .3s;
    opacity: 1;
    background-image: linear-gradient(180deg, rgba(28, 58, 82, 0.4) 0%, rgba(5, 20, 27, 0.9) 75%), url(${props => props.img ? props.img : ''});
  }
`;