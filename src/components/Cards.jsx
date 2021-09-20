import React from 'react';
import styled from 'styled-components';

import workers from "../data/workers"

import BackgroundCard from '../assets/images/background-card.png';
import Logo from '../assets/images/logo.svg';

function Cards() {
    return (
        <>
            <ContainerCards>
                {workers.map(worker => (
                        <WrapCard key={worker.id}>
                            <Card>
                                <img src={BackgroundCard} alt="Presentation Card"></img>
                                <Content>
                                    <h1>{worker.name}</h1>
                                    <h1>{worker.lastName}</h1>
                                    <p>{worker.charge}</p>
                                    <p>{worker.cellNumber}</p>
                                </Content>
                                <ContentBack>
                                    <img src={Logo} alt="logo"></img>
                                    <div>
                                        <p><strong>Email </strong>candy-fruit@gmail.com</p>
                                        <p><strong>N° em </strong>3125002141</p>
                                    </div>
                                </ContentBack>
                            </Card>
                        </WrapCard>
                ))}
            </ContainerCards>
        </>
    )
}

export default Cards;


const ContainerCards = styled.section`
    width: 100vw;
    min-height: 50vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const WrapCard = styled.div`
    margin: 10px;
    perspective: 1500;
`
const Card = styled.div`
    width: 30rem;
    height: 16rem;
    position: relative;
    box-shadow: 0 0 50px 5px #D7D7D7;
    border-radius: 4px;
    transform-style: preserve-3d;
    transition: .7s ease;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    }
    &:hover {
        transform: rotateY(180deg);
    }
`
const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    h1 {
        color: #352929;
        font-family: Cinzel;
    }
    p {
        font-family: sans-serif;
        font-size: 12px;
        margin-top: 5px;
    }
`
const ContentBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: #F1F3EB;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        p, strong {
            color: #352929;
            font-family: sans-serif;
        }
    }
`
