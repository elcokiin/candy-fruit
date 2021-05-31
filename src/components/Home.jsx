import React from 'react';

import Section from './Section';
import Cards from './Cards';
import Map from './Map';

function Home() {
    return (
        <div>
            <Section />
            <Cards />
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback"
                containerElement= {<div style={{height: '100vh'}}/>}
                mapElement= {<div style={{height: '100%'}}/>}
                loadingElement= {<p>Cargando ...</p>}
            />
        </div>
    )
}

export default Home
