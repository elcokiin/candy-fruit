import React from 'react';

import Section from './Section';
import Cards from './Cards';
import Map from './Map';

function Home() {
    return (
        <div>
            <Section />
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFD9HQ1uWxioTBZRW6XnJA2LFiantUhCk"
                containerElement= {<div style={{height: '100vh'}}/>}
                mapElement= {<div style={{height: '100%'}}/>}
                loadingElement= {<p>Cargando ...</p>}
                isMarkerShown={true}
            />
            <Cards />
        </div>
    )
}

export default Home
