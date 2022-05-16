import React, { useContext } from "react"
import Header from '../../components/Header/Header';
import Navigation from "../../components/Navigation/Navigation";
import useProtectedPage from "../../hooks/useProtectedPage"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { Payment } from "../../components/Payment/Payment"
import CardMenu from "../../components/CardMenu/CardMenu"
import {
    ContainerCart,
    ContainerEndereco,
    ContainerRestaurante,
    Loading
  } from "./CartStyle"

  const header = {
    headers: {
        auth: localStorage.getItem("token")
    }
}

export const CartPage = (props) => {
  useProtectedPage()
    const { restaurantDetail, cart, loading } = useContext(GlobalStateContext)

    const cartList = cart.map((prod) => {
      return (
        <CardMenu item={prod} button={true} />
      )
    })

    

    return (
      <div>
        <ContainerCart>
          <Header title="Meu Carrinho" goBack={true} />
          {loading && cart ? (
            <Loading></Loading>
          ) : (
            <div>
              <ContainerEndereco>
                <p>Endereço de entrega</p>
              </ContainerEndereco>

              {cart.length ? (
                <div>
                  <ContainerRestaurante>
                    <h2>{restaurantDetail.name}</h2>
                    <p>{restaurantDetail.address}</p>
                    <p>{restaurantDetail.deliveryTime} min</p>
                  </ContainerRestaurante>
                
                  {cartList}

              </div>
            
              ) : (
                <p>Carrinho Vazio</p>
              )}
                            

              <Payment shipping={restaurantDetail.shipping} />

            </div>
            )}
          <Navigation screen={0} />
          </ContainerCart>
      </div>
    )
}

