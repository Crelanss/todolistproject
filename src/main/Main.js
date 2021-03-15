import React from 'react'
import styled from "styled-components";
import HeaderText from "./landing/HeaderText";
import Picture from "./landing/Picture";
import Quote from "./landing/Quote";
import Marks from "./landing/Marks";
import TodoHelped from "./landing/TodoHelped";
import BreadCrumbs from "./landing/breadCards/BreadCrumbs";
import CardsRender from "./landing/breadCards/CardsRender";
import YouCanTrust from "./landing/YouCanTrust";
import Tranquility from "./landing/Tranqulity";
import Footer from "./landing/footer/Footer";
import Header from "./landing/header/Header";

const MainComponent = styled.div`
`

const LandingPage = () => {
    return (
        <MainComponent>
                <Header/>
                <HeaderText/>
                <Picture/>
                <Quote/>
                <Marks/>
                <TodoHelped/>
                <CardsRender/>
                <BreadCrumbs/>
                <YouCanTrust/>
                <Tranquility/>
                <Footer/>
        </MainComponent>
    )
}

export default LandingPage