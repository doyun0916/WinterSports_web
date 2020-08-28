import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import logo from '../img/logo.PNG';
import { shadow, media } from '../lib/styleUtils';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 11;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: ${oc.gray[0]};
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1400px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    background: ${oc.gray[0]};
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
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

const Menu = styled.div`
    margin-left: 50px;
    font-size: 0.89rem;
    letter-spacing: 2px;
    color: ${oc.gray[9]};
    font-family: 'Cooper Black';
    font-weight: 900;
    letter-spacing: 1px;
    Text-shadow: 1px 1px 1px grey;
    text-decoration: underline;
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 5px;
    background: linear-gradient(to right, ${oc.grape[7]}, ${oc.violet[7]});
`;

const Header = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <img style={{borderRadius: "100%", boxShadow: "2px 2px 2px grey"}} src={logo} alt="logo" width="75" height="75" />
                    <Logo>THE WAVE</Logo>
                    <Menu>인사말</Menu>
                    <Menu>강사진 소개</Menu>
                    <Menu>강습소개 및 비용</Menu>
                    <Menu>상담 및 예약</Menu>
                    <Menu>준비사항</Menu>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>
        </Positioner>
    );
};

export default Header;
