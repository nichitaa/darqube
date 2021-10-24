import styled from 'styled-components';
import {Button} from 'antd';

export const StyledPaginationButton = styled(Button)`
  width: 116px;
  height: 25px;
  line-height: 11px;
  border-radius: 60px;
  padding: 7px;
  color: #fff;
  background-color: #3C3C3C;
  border: none;
  margin-left: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;

  &:hover, &:focus {
    background: #3C3C3C;
    color: #fff;
  }
`;