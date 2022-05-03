import React, { useState } from "react";
import {
  Container,
  ContainerPopup,
  Select,
  TitleText,
  ButtonAdd
} from "./PopupStyle";

export const Popup = (props) => {
  const [cart, setCart] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);

  const addItemToCart = (newItem) => {
    const newCart = [...cart];
    const index = newCart.findIndex((i) => i.id === newItem.id);

    if (index === -1) {
      const cartItem = { ...newItem, amount: selectedValue };
      newCart.push(cartItem);
    }
    setCart(newCart);
  };

  const changeSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };

  console.log(cart);

  return props.trigger ? (
    <Container>
      <ContainerPopup>
        <TitleText>Selecione a quantidade desejada</TitleText>
        <Select onChange={changeSelectedValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Select>
        <ButtonAdd
          onClick={() => {
            props.setTrigger();
            addItemToCart(props.item);
          }}
        >
          ADICIONAR AO CARRINHO
        </ButtonAdd>
      </ContainerPopup>
    </Container>
  ) : (
    ""
  );
};