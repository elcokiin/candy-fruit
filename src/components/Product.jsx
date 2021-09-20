import React from "react";
import styled from 'styled-components';

import product from "../assets/images/cubitos-de-fruta-confitada_surtido.jpg";
import audio from "../assets/audio/Avisopublicitario.mp3";

const Product = () => {
    return(
        <div>
            <Container>
                <img src={product} alt="product"></img>
                <div>
                    <p>
                        La fruta confitada a base de tomate de árbol, está pensada
                        para que el consumidor disfrute y apoye a los aguicultores
                        encargados de proveernos esta deliciosa fruta.
                    </p>
                    <audio controls>
                        <source src={audio} />
                    </audio>
                </div>
            </Container>
        </div>
    )
}

export default Product;

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
    div {
        width: 20%;
        display: flex;
        flex-direction: column;
        p {
            padding: 20px 0;
            font-family: sans-serif;
        }
    }
`