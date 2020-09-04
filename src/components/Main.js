import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import main1 from '../img/main1.jpg';
import main2 from '../img/main2.jpg';
import main3 from '../img/main3.jpg';
import jisanlogo from '../img/jisanlogo.jpg';
import instagram from '../img/instagram.png';
import phone from '../img/phone.png';
import email from '../img/email.png';
import oc from 'open-color';
import '../index.css';
import logo from "../img/logo.PNG";

const SlideContainer = styled.div`
    margin-left: 40px;
    width: 75%;
    height: 756px;
    z-index: -1 !important;
    box-shadow: 4px 4px 4px red;
    border-radius: 0px 0px 50px 50px;
    
`;

const Title = styled.div`
    margin-top: 250px;
    margin-left: -400px;
     position: relative;
     font-weight: normal;
     font-size: 3rem;
     z-index: 1 !important;
     color: white;
     font-family: Fair Prosper;
     Text-shadow: 3px 3px 3px black;
`;

const Main1 = styled.div`
     margin-top: 30px;
     display: flex;
     flex-direction: row;
`;

const Main2 = styled.div`
    margin-top: 550px;
    width: 1400px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    background: transparent;
`;

const Main3 = styled.div`
    margin-top: 200px;
    width: 1400px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    background: transparent;
`;

const Morebox1 = styled.div`
    position: absolute;
    left: 0;
    width: 47%;
    height: 280px;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
    box-shadow: 4px 4px 4px gray;
    background: linear-gradient(to right, ${oc.grape[2]}, ${oc.violet[6]});
`;

const Morebox2 = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    width: 47%;
    height: 280px;
    border-radius: 20px 0px 0px 20px;
    box-shadow: 4px 4px 4px gray;
    background: linear-gradient(to right, ${oc.blue[6]}, ${oc.cyan[3]});
`;

const Morebox3 = styled.div`
    position: absolute;
    left: 0;
    width: 47%;
    height: 280px;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
    box-shadow: 4px 4px 4px gray;
    background: linear-gradient(to right, ${oc.indigo[2]}, ${oc.blue[7]});
`;

const Morebox4 = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    width: 47%;
    height: 280px;
    border-radius: 20px 0px 0px 20px;
    box-shadow: 4px 4px 4px gray;
    background: linear-gradient(to right, ${oc.violet[5]}, ${oc.indigo[3]});
`;

const SemiTitle = styled.div`
     font-weight: normal;
     font-size: 3rem;
     z-index: 1 !important;
     color: white;
     font-family: Fair Prosper;
     Text-shadow: 3px 3px 3px black;   
`;

const Context = styled.div`
     font-weight: normal;
     color: white;
     font-size: 1.2rem;
     Text-shadow: 2px 2px 2px black;
`;

const LearnMore = styled.div`
    text-align: center;
    align-items: center;
    color: white;
    font-family: "Arial Rounded MT Bold";
    margin-left: 50px;
    margin-top: 25px;
    width: 140px;
    height: 40px;
    padding-top:8px;
    font-size:0.85rem;
    border: solid 1px white;
    background-color: black;
    border-radius: 5%;
`;

const Main4 = styled.div`
    margin-top: 500px;
    width: 100%
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    background: transparent;
    font-family: "Arial Rounded MT Bold";
    color: black;
    text-decoration: underline;
    font-weight: bold;
    text-shadow: 2px 2px 2px black;
    font-size: 1.8rem;
`;

const Main5 = styled.div`
    margin-top: 50px;
    width: 100%
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    background: transparent;
    margin-bottom: 330px;
`;

const InfoContainer = styled.div`
    margin-top: 25px;
    margin-left: 200px;
    width: 350px;,
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    font-family: "Arial Rounded MT Bold";
    color: black;
    text-shadow: 1px 1px 1px black;
    font-size: 1.2rem;
    line-height: 50px;
`;

const Bar = styled.div`
    background: black;
    margin-left: 120px;
    width: 5px;
    height: 100px;    
`;


const Main = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Header />
            <Main1>
                <SlideContainer>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main1}
                                style={{borderRadius: "0px 0px 50px 50px", boxShadow: "5px 5px 5px red"}}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{fontWeight: "bold", color: "white", textShadow: "1px 1px 1px black", marginRight:"300px", paddingBottom: "100px"}}>원리를 설명하여 이해도를 높이고</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main2}
                                style={{borderRadius: "0px 0px 50px 50px", boxShadow: "5px 5px 5px red"}}
                                alt="second slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{fontWeight: "bold", color: "white", textShadow: "1px 1px 1px black", marginRight:"300px", paddingBottom: "100px"}}>최신 지도법과 다양한 티칭 노하우로</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main3}
                                style={{borderRadius: "0px 0px 50px 50px", boxShadow: "5px 5px 5px red"}}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{fontWeight: "bold", color: "white", textShadow: "1px 1px 1px black", marginRight:"300px", paddingBottom: "100px"}}>스키를 쉽게 접근 할수 있도록 도와드립니다.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </SlideContainer>
                <Title data-aos="fade-in" data-aos-delay="400" data-aos-easing="ease-in">Learn and become the best <br /> We are here for the support</Title>
                <Context data-aos="fade-in" data-aos-delay="600" data-aos-easing="ease-in" style={{marginLeft: "900px", marginTop: "470px", display: "flex", position:"absolute", textShadow: "1px 1px 1px black", fontWeight:"bold", flexDirection:"column"}}>
                    <span><span style={{color:"purple", fontSize:"30px"}}>“</span><span style={{color:"#3bc9db"}}>스키의 원리에 대해 이해</span>하면 스키가 쉬워집니다.</span>
                    못타는 사람은 없습니다. 다만, 이해하지 못해서입니다.
                    <span>이해하고 반복하면 <span style={{color:"#3bc9db"}}>알찬연습</span></span>
                    <span>이해하지 못하고 반복하면 <span style={{color:"#3bc9db"}}>성과없는 훈련</span>이 됩니다.<span style={{color:"purple", fontSize:"30px"}}>“</span></span>
                </Context>
            </Main1>
            <Main2>
                <Morebox1 data-aos="fade-right" data-aos-delay="200">
                    <SemiTitle style={{marginLeft:"40px", marginTop: "30px"}}>Instructor</SemiTitle>
                    <br />
                    <Context style={{marginLeft: "40px"}}>
                        지산리조트 최고레벨 강사진으로 구성<br />
                        강사들에 대한 꾸준한 관리와 교육을 통해<br />
                        파도 강사의 교육의 질과 격을 최상급으로 유지하고 있습니다.
                    </Context>
                    <LearnMore style={{marginLeft: "530px", marginTop:"-90px"}}>강사진 보기</LearnMore>
                </Morebox1>
                <Morebox2 data-aos="fade-left" data-aos-delay="300">
                    <SemiTitle style={{marginLeft: "270px", marginTop:"30px"}}> Instruction and fees</SemiTitle>
                    <Context style={{position:"absolute", textAlign:"right", right:"0", marginTop:"120px", marginRight: "30px"}}>
                        자세교정, 실력향상, 자격증취득, 선수반등<br />
                        폭넓은 범위의 스키강습 프로그램으로 <br />
                        원하시는 목표에 도달할수 있도록 지도합니다.
                    </Context>
                    <LearnMore style={{position:"absolute", marginTop:"120px", marginRight: "30px"}}>강습 커리큘럼 보기</LearnMore>
                </Morebox2>
            </Main2>
            <Main3>
                <Morebox3 data-aos="fade-right" data-aos-delay="400">
                    <SemiTitle style={{marginLeft:"40px", marginTop: "30px"}}>Reservation</SemiTitle>
                    <Context style={{marginLeft: "40px", marginTop:"30px"}}>
                        상세예약 방법 및 절차를 알려드립니다.<br />
                        문의사항 또한 자세히 답변해 드리겠습니다.
                    </Context>
                    <LearnMore style={{marginLeft: "530px", marginTop:"-60px"}}>예약 및 문의</LearnMore>
                </Morebox3>
                <Morebox4 data-aos="fade-left" data-aos-delay="500">
                    <SemiTitle style={{marginLeft: "430px", marginTop:"30px"}}>Preparation</SemiTitle>
                    <Context style={{position:"absolute", right:"0", marginTop:"120px", marginRight: "30px"}}>
                        예약직후, 강습 당일 준비사항 및 <br />강습 후 안내사항입니다.
                    </Context>
                    <LearnMore style={{position:"absolute", marginTop:"120px"}}>준비사항 보기</LearnMore>
                </Morebox4>
            </Main3>
            <Main4 data-aos="fade-up" data-aos-delay="200">
                <p style={{ marginLeft:"280px"}}>Partnership</p>
                <Bar/>
                <p style={{ marginLeft:"140px", marginRight:"50px"}}>Contact</p>
                <Bar/>
                <p style={{ marginLeft:"150px"}}>Location</p>
            </Main4>
            <Main5  data-aos="fade-up" data-aos-delay="400">
                <InfoContainer style={{marginLeft:"250px"}}>
                    <img style={{boxShadow: "1px 1px 1px grey"}} src={jisanlogo} alt="jisanlogo" />
                </InfoContainer>
                <InfoContainer style={{marginRight:"40px"}}>
                    <p><img style={{boxShadow: "1px 1px 1px grey", width: "20%", height:"auto", borderRadius:"25%"}} src={instagram} alt="instagram" />&nbsp;&nbsp;sports_wave1</p>
                    <p><img style={{boxShadow: "1px 1px 1px grey", width: "20%", height:"auto", borderRadius:"50%"}} src={phone} alt="phone" />&nbsp;&nbsp;Phone: ""</p>
                    <p><img style={{boxShadow: "1px 1px 1px grey", width: "20%", height:"auto", borderRadius:"50%"}} src={email} alt="email" />&nbsp;&nbsp;Email: ""</p>
                </InfoContainer>
                <InfoContainer style={{marginRight:"180px"}}>
                    <p>Location: ""</p>
                </InfoContainer>
            </Main5>
            <Footer/>
        </div>
    );
};

export default Main;
