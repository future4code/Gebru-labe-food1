import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/Urls"

const GlobalState = (props) => {
  const [restaurants, getRestaurants, isLoading, error] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );
  const [addressData, getDataAddress, isLoadingAddress, errorAddress] =

  useRequestData("", `${BASE_URL}/profile/address`)
  const [userData, getUserData, isLoadingUserData] = useRequestData(
  [],
  `${BASE_URL}/profile`
  );
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  const [cart, setCart] = useState([])
  const [restaurantDetail, setRestaurantDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const [totalValue, setTotalValue] = useState(0)

  const dataAdressDown = addressData;
  

  useRequestData("", `${BASE_URL}/profile/address`);
const [userData, getUserData, isLoadingUserData] = useRequestData(
  [],
  `${BASE_URL}/profile`
);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [cpf, setCpf] = useState("");

const dataAdressDown = addressData;

  const data = {
    restaurants,
    getRestaurants,
    isLoading,
    error,
    addressData,
    getDataAddress,
    isLoadingAddress,
    errorAddress,
    dataAdressDown,
    userData,
    getUserData,
    isLoadingUserData,
    setCpf,
    cpf,
    setEmail,
    email,
    setName,
    name,
    cart,
    setCart,
    restaurantDetail,
    setRestaurantDetail,
    loading,
    setLoading,
    totalValue,
    setTotalValue,
  }
  

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState;

