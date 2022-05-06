import React, { useEffect, useState } from "react"
import axios from "axios"
import img from "../../assets/carrinho-vazio.png"
import {
    ContainerCart,
    ScrollSection,
    ContainerCarrinho,
    ContainerEndereco,
    SubtotalContainer,
    StyledForm,
    ContainerRestaurante,
    Header
  } from "./CartStyle"

  const header = {
    headers: {
        auth: localStorage.getItem("token")
    }
}

export const CartPage = () => {
    const [detailsCart, setCartDetails] = useState()
    const [details, setDetails] = useState({})

    useEffect(() => {
        getCartDetail()
        getDetail()
    }, []);

    const getCartDetail = () => {

        axios
            .get(
                `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/active-order`,
                header
            )
            .then((res) => {
                if (res.data.order === null) {
                    setCartDetails(<img src={img} />)
                } else {
                    setCartDetails(res.data.order)
                }
            })
    }

    const getDetail = () => {
        
        axios
          .get(
            `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile/address`,
            header
          )
          .then((res) => {
            setDetails(res.data.address);
          })
          .catch((err) => {
            console.log("deu ruim")
          })
      }

    return (
        <ContainerCart>
      <Header>Meu carrinho</Header>
      <ScrollSection>
        <ContainerEndereco>
          <p>Endereço da entrega:</p>
          <p>
            {details.neighbourhood}, {details.number}
          </p>
        </ContainerEndereco>
        <div>
          <ContainerRestaurante>
            <h2>restaurante</h2>
            <p>rua</p>
            <p>min</p>
          </ContainerRestaurante>
        </div>
        <ContainerCarrinho>
        <SubtotalContainer>
          <span>SUBTOTAL</span>
          <div>
            <span>Frete:</span>
            <span>R$</span>
          </div>
        </SubtotalContainer>
        <StyledForm>
          <div>
            <p>Forma de pagamento</p>
            <form>
              <div>
                <label>
                  <input type="radio" name="pagamento" value="Dinheiro" />
                  Dinhero
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="pagamento" value="Cartão de crédito" />
                  Cartão de crédito
                </label>
              </div>
            </form>
          </div>
          <button> confirmar</button>
        </StyledForm>
        </ContainerCarrinho>
      </ScrollSection>
    </ContainerCart>
    )
}

