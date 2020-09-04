import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import logo from '../img/logo.PNG';
import { media } from '../lib/styleUtils';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 0px;
`;

const Logo = styled.div`
    margin-left: 10px;
    margin-right: 450px;
    font-size: 1.2rem;
    letter-spacing: 2px;
    color: ${oc.gray[9]};
    font-family: 'Cooper Black';
    letter-spacing: 0;
    Text-shadow: 2px 2px 2px grey;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    display: flex;
    height: 200px;
    background: black;
    flex-direction: row;
`;

// 해더의 내용
const FooterContents = styled.div`
    margin-left: 150px;
    margin-top: 40px;
    line-height: 15px;
    width: 100%
    height: auto;
    display: flex;
    color: white;
    flex-direction: column;
    background: black;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;


// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 5px;
    background: linear-gradient(to right, ${oc.grape[7]}, ${oc.violet[7]});
`;

const Footer = () => {
    return (
        <Positioner>
            <GradientBorder />
            <WhiteBackground>
                <FooterContents style={{marginRight:"-100px"}}>
                    <p style={{fontSize:"1.3rem"}}>Contacts&nbsp;&nbsp;&nbsp;</p>
                </FooterContents>
                <FooterContents>
                    <p>Address:</p>
                    <p>Phone:</p>
                    <p>Email:  wave-0@naver.com</p>
                    <p>Instagram:  sports_wave1</p>
                </FooterContents>
                <FooterContents style={{marginLeft:"800px", marginTop: "100px"}}>
                    <p><img style={{borderRadius: "100%", boxShadow: "2px 2px 2px grey"}} src={logo} alt="logo" width="55" height="55" />&nbsp;THE WAVE</p>
                </FooterContents>
            </WhiteBackground>
        </Positioner>
    );
};

export default Footer;
