import styled from 'styled-components';

type MainPropsNav = {
    hasSearch: boolean
}

export const StyledNav = styled.div<MainPropsNav>`
  padding: 25px 30px 0 30px;
  font-family: 'Ubuntu', sans-serif;

  .ant-input-affix-wrapper {
    background-color: #191818;
    border: none;
    box-shadow: ${props => props.hasSearch ? '0 0 0 2px rgb(104 104 104 / 20%)' : 'none'};
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: 0 0 0 2px rgb(104 104 104 / 20%);
  }

  .search-input {
    width: 232px;
    height: 32px;
  }

  input {
    background-color: #191818;
    color: #686868;
    margin-left: 4px;
  }

`;

type MainPropsNavLink = {
    isSelected: boolean
}

export const StyledLink = styled.div<MainPropsNavLink>`
  margin-right: 20px;
  font-size: 28px;
  font-weight: 700;
  color: #FFFFFF;
  opacity: ${props => props.isSelected ? 1 : .5}
`;