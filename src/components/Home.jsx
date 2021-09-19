import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import Cards from './Cards';
import Map from './Map';
import Product from "./Product";

function Home() {
    return (
        <ContainerHome>
            <section>
                <Section />
            </section>
            <section>
                <Cards />
            </section>
            <section>
                <Product />
            </section>
            <section>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFD9HQ1uWxioTBZRW6XnJA2LFiantUhCk"
                    containerElement= {<div style={{height: '100vh'}}/>}
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
