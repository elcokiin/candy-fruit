import React from "react";
import styled from 'styled-components';

import product from "../assets/images/cubitos-de-fruta-confitada_surtido.jpg";

const Product = () => {
    return(
        <div id="product">
            <Title>Producto</Title>
            <Container>
                <img src={product} alt="product"></img>
                <p>
                    La fruta confitada a base de tomate de árbol, está pensada
                    para que el consumidor disfrute y apoye a los aguiculturos
                    encargados de proveernos esta deliciosa fruta.
                </p>
            </Container>
        </div>
    )
}

export default Product;

const Title = styled.h1`
    width: 100%;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 30px;
    font-size: 2rem;
    font-weight: 200;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 50vh;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 40%;
        object-fit: cover;
    }
    p {
        width: 20%;
    }
`