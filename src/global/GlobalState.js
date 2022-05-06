import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/Urls"

const GlobalState = (props) => {
  const [restaurants, getRestaurants, isLoading, error] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );

  const data = {
    restaurants,
    getRestaurants,
    isLoading,
    error
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;