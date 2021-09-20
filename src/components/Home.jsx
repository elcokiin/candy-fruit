import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import Cards from './Cards';
import Map from './Map';
import Product from "./Product";

function Home() {
    return (
        <ContainerHome>
            <section id='home'>
                <Section />
            </section>
            <section id="product">
                <Title>Producto</Title>
                <Product />
            </section>
            <section id="cards">
                <Title>Tarjetas de presentación</Title>
                <Cards />
            </section>
            <section id='map'>
                <Title>Localizanos</Title>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFD9HQ1uWxioTBZRW6XnJA2LFiantUhCk"
                    containerElement= {<div style={{height: '89vh', width: "94%", marginLeft: 50}}/>}
                    mapElement= {<div style={{height: '100%'}}/>}
                    loadingElement= {<p>Cargando ...</p>}
                    isMarkerShown={true}
                />
            </section>
        </ContainerHome>
    )
}

export default Home;

const ContainerHome = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    section {
        scroll-snap-align: center;
    }
`
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