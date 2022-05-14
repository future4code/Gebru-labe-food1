import { Card, Select, TextField } from "@mui/material";
import styled from "styled-components";

export const TextFieldStyled = styled(TextField)`
  width: 95vw;
  margin: 20px !important;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 3rem;
`;

export const CardStyled = styled(Card)`
   width: 350px;
  height: 250x;
  padding: 0px;
  border: solid 1px #b8b8b8;
  margin-bottom: 10px;
`;

export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SelectStyled = styled(Select)`
  width: 40vw;
`;