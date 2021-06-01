import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps';

function Map(props) {
    return (
        <div id='map'>
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: 5.408300, lng:-73.295890 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: 5.408300, lng: -73.295890}} />}
            </GoogleMap>
        </div>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
