import React from "react"
import { ContainerCard, Image, Name, Description, Price, Button } from "./CardMenuStyle"

const CardMenu = (props) => {
    return (
      <ContainerCard>
        <Image src={props.item.photoUrl} />
        <div>
          <Name>{props.item.name}</Name>
          <Description>{props.item.description}</Description>
          <Price>R$ {props.item.price}</Price>
        </div>
        <Button onClick={() => props.addItemToCart(props.item)}>adicionar</Button>
      </ContainerCard>
    )
  }

  export default CardMenu;