import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import Cards from './Cards';
import Map from './Map';

function Home() {
    return (
        <ContainerHome>
            <section>
                <Section className='sections-home'/>
            </section>
            <section>
                <Cards className='sections-home'/>
            </section>
            <section>
            <Map className='sections-home'
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
    -webkit-scroll-snap-type: y mandatory;
    scroll-snap-type: y mandatory;
    section {
        -webkit-scroll-snap-align: center;
        scroll-snap-align: center;
    }
`
