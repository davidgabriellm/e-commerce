import styled from "styled-components";

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 5px;
  font-size: 10px;
  font-weight: bolder;
  background-color: limegreen;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  width: 160px;

  &:hover {
    background-color: #188b18;
  }
`;
