import React, { useEffect, useState } from "react"
import axios from "axios";
import CardMenu from "../../components/CardMenu/CardMenu";
import {
  Container,
  ContainerRestaurant,
  Logo,
  Name,
  Category,
  DeliveryTime,
  Shipping,
  Address,
  ContainerMenu
} from "./RestaurantStyle"

export const RestaurantPage = () => {
  const [details, setDetails] = useState({})
  const [cart, setCart] = useState([])

  useEffect(() => {
    getRestaurantDetail()
  }, [])

  const getRestaurantDetail = () => {
    const header = {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhRcjJPQzJDVjZhcWtuZTV3MDd0IiwibmFtZSI6Ik1pbGVueSBGYXJpYSIsImVtYWlsIjoibWlsZW55QGdlYnJ1LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTIyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1MTE1NTYzOH0.lGvid8l9jFm7ozAmC7WSN0l3QW2eC85ZqSmFcUZEPw0 "
      }
    }

    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/2`,header)
      .then((res) => setDetails(res.data.restaurant))
  }

  const addItemToCart = (newItem) => {
    const newCart = [...cart]
    const index = newCart.findIndex((i) => i.id === newItem.id)

    if (index === -1) {
      const cartItem = { ...newItem, amount: 1 };
      newCart.push(cartItem)
    } else {
      newCart[index].amount += 1
    }

    setCart(newCart)
  }

  const renderedMenu =
    details.products &&
    details.products.map((item) => {
      return (
        <div key={item.id}>
          <CardMenu item={item} addItemToCart={addItemToCart} />
        </div>
      )
    })

  return (
    <Container>
      <ContainerRestaurant>
        <Logo src={details.logoUrl} />
        <Name>{details.name}</Name>
        <Category>{details.category}</Category>
        <DeliveryTime>{details.deliveryTime} min.</DeliveryTime>
        <Shipping>Frete R$ {details.shipping},00</Shipping>
        <Address>{details.address}</Address>
      </ContainerRestaurant>
      <hr width="100%" size="1" color="gray" />
      <ContainerMenu>{renderedMenu}</ContainerMenu>
    </Container>
  )
}

