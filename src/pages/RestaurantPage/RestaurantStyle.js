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

export const Logo = styled.img`
  width: 98%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  position: absolute;
  object-fit: contain;
`

export const Name = styled.h3`
  position: absolute;
  bottom: 80px;
  color: #e8222e;
`

export const Category = styled.p`
  position: absolute;
  bottom: 60px;
  color: #b8b8b8;
`

export const DeliveryTime = styled.p`
  position: absolute;
  bottom: 30px;
  color: #b8b8b8;
`

export const Shipping = styled.p`
  position: absolute;
  bottom: 30px;
  left: 100px;
  color: #b8b8b8;
`

export const Address = styled.p`
  position: absolute;
  bottom: 0;
  color: #b8b8b8;
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

