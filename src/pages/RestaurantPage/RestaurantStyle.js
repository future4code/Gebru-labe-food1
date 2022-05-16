import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerRestaurant = styled.div`
  height: 320px;
  position: relative;
  padding: 10px;
`

export const Loading = styled.h1`
  left: 0;
  right: 0;
  margin: 50% auto;
  animation: is-rotating 1s infinite;
  border: 6px solid #b8b8b8;
  border-radius: 50%;
  border-top-color: #e8222e;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`

export const ContainerMenu = styled.div`
  padding: 10px;
`

export const CategoryFoods = styled.div`
  color: #000000;
  font-weight: bold;
  font-size: 19px;
  margin-top: 10px;
`;

