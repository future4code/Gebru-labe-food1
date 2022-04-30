import React, { useEffect, useState } from "react"
import axios from "axios"
import img from "../../assets/carrinho-vazio.png"

export const CartPage = () => {
    const [detailsCart, setCartDetails] = useState()

    useEffect(() => {
        getCartDetail()
    }, []);

    const getCartDetail = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")

            }
        };

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
            });
    };

    return (
        <div>
            <h3>Endereço de entrega:</h3>
            <hr width="100%" size="1" color="gray" />
            <div className="App">{detailsCart}</div>
            <hr width="100%" size="1" color="gray" />
            <h2>SUBTOTAL</h2>
            <h4>Frete: </h4>
            <hr width="100%" size="1" color="gray" />
            <h3>
                Forma de pagamento
            </h3>
            <select>
                <option>Cartão de crédito</option>
                <option>Dinheiro</option>
            </select>
        </div>
    )
}

