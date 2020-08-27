import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Carousel from 'react-bootstrap/Carousel';
import main1 from '../img/main1.jpg';
import main2 from '../img/main2.jpg';
import main3 from '../img/main3.jpg';
import {media} from "../lib/styleUtils";
import oc from 'open-color';

const SlideContainer = styled.div`
    margin-left: 40px;
    margin-top: -380px;
    width: 75%;
    height: 600px;
    z-index: -1 !important;
    box-shadow: 2px 2px 2px grey;
    border-radius: 10%;
`;

const Main1 = styled.div`
     flex-direction: row;
`;

const Main2 = styled.div`
     flex-direction: row;
`;

const Title = styled.div`
     position: relative;
     margin-top: 250px;
     margin-left: 800px;
     font-weight: normal;
     font-size: 3rem;
     z-index: 1 !important;
     color: white;
     font-family: Fair Prosper;
     Text-shadow: 3px 3px 3px grey;
`;

const Main = () => {
    return (
        <div>
            <Header />
            <Main1>
                <Title>Learn and become the best <br /> We are here for the support</Title>
                <SlideContainer>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main1}
                                style={{borderRadius: "10%", boxShadow: "5px 5px 5px grey"}}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{fontWeight: "bold", color: "white", textShadow: "1px 1px 1px grey"}}>스키의 원리에 대해 이해하면 <br /> 스키가 쉬워집니다.</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main2}
                                style={{borderRadius: "10%", boxShadow: "5px 5px 5px grey"}}
                                alt="second slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{fontWeight: "bold", color: "white", textShadow: "1px 1px 1px grey"}}>못타는 사람은 없습니다. <br /> 다만, 이해하지 못해서입니다.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main3}
                                style={{borderRadius: "10%", boxShadow: "5px 5px 5px grey"}}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{fontWeight: "bold", color: "white", textShadow: "1px 1px 1px grey"}}>원하시는 목표에 도달할수 있도록 <br /> 저희가 도와드리겠습니다.</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </SlideContainer>
            </Main1>
            <Main2>
        </div>
    );
};

export default Main;
