import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const MovieImg = styled.img`
  width: 300px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
`;

export const MovieMoreInform = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;

  padding: 20px 0;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MoreInformList = styled.ul`
  display: flex;
  gap: 60px;
  justify-content: center;

  padding-top: 20px;
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  display: block;
  width: 80px;

  cursor: pointer;

  padding: 6px 12px;

  color: #010101;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  background-color: #79caea;

  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 8px 8px 5px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ade0f4;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
