import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
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
  ContainerMenu,
  CategoryFoods
} from "./RestaurantStyle"
import { BASE_URL } from "../../constants/Urls"

export const RestaurantPage = () => {
  const [details, setDetails] = useState({})
  const [cart, setCart] = useState([])
  const {id} = useParams();

  useEffect(() => {
    getRestaurantDetail(id)
  }, [])

  const getRestaurantDetail = (id) => {
    const header = {
      headers: {
        auth: localStorage.getItem("token")
          
      }
    }

    axios
      .get(`${BASE_URL}/restaurants/${id}`,header)
      .then((res) => setDetails(res.data.restaurant))
  }

  const categories = [];
  details &&
    details.products &&
    details.products.forEach((item) => {
      categories.push(item.category);
    });

  const filteredList = categories.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  const itensList = filteredList.map((item) => {
    const list = details.products.filter((prod) => prod.category === item);
    const productsList = list.map((prod) => {
      return <CardMenu item={prod} />;
    });

    return (
      <div key={item.id}>
        <CategoryFoods>{item}</CategoryFoods>
        <hr width="100%" size="1" color="gray" />
        {productsList}
      </div>
    );
  });

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
      <ContainerMenu>{itensList}</ContainerMenu>
    </Container>
  );
};
