import React, { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { getRestaurantsDetails } from "../../services/restaurants"
import CardMenu from "../../components/CardMenu/CardMenu"
import Header from '../../components/Header/Header'
import Navigation from "../../components/Navigation/Navigation"
import useProtectedPage from "../../hooks/useProtectedPage"
import { Container, ContainerRestaurant, Loading, ContainerMenu, CategoryFoods } from "./RestaurantStyle"
import { CardDetailsRestaurant } from "../../components/CardDetailsRestaurant/CardDetailsRestaurant"

export const RestaurantPage = () => {
  useProtectedPage()
  const params = useParams()
  const { restaurantDetail, setRestaurantDetail, loading, setLoading } = useContext(GlobalStateContext)

  const clearFilter = () => {
    setRestaurantDetail([]);
}
  
  useEffect(() => {
    getRestaurantsDetails(setRestaurantDetail, params.id, setLoading)
    clearFilter()
  }, [setRestaurantDetail, params.id])

  const categories = []

  restaurantDetail &&
  restaurantDetail.products &&
  restaurantDetail.products.forEach((item) => {
      categories.push(item.category);
    });

  const filteredList = categories.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  const itensList = filteredList.map((item) => {
    const list = restaurantDetail.products.filter((prod) => prod.category === item);
    const productsList = list.map((prod) => {
      return <CardMenu item={prod} button={true} />;
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
      <Header title="Restaurante" />
      <ContainerRestaurant>
      {loading === true ? <Loading></Loading> : restaurantDetail && 
        <CardDetailsRestaurant 
          name={restaurantDetail.name}
          category={restaurantDetail.category}
          deliveryTime={restaurantDetail.deliveryTime}
          logoUrl={restaurantDetail.logoUrl}
          shipping={restaurantDetail.shipping}
          address={restaurantDetail.address}
        />}
      </ContainerRestaurant>
      <ContainerMenu>{itensList}</ContainerMenu>
      <Navigation screen={0} />
    </Container>
  );
};
