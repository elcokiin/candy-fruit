import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import Background from '../assets/images/background-home.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Section() {
    return (
        <Wrap id='home'>
            <ItemText>
                <Fade bottom>
                    <h1>Disfruta de tu Snack con Tranquilidad</h1>
                    <h3>Prueba Candy Fruit</h3>
                </Fade>
            </ItemText>
            <DownArrow>
                <FontAwesomeIcon icon={faArrowDown} />
            </DownArrow>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 75vh;
    background-position: center;
    background-image: url(${Background});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30vh;
    text-shadow: 0 0 20px #fefefe;
    font-size: 2rem;
`
const DownArrow = styled.div`
    font-size: 60px;
    color: #000;
    animation: animateDown infinite 1.5s;
`