import React from 'react';
import '../Styles/Welcome.css';
import styled from 'styled-components'

import Agriculture from '../Data/Images/agriculture.png'
import CocoaBean from '../Data/Images/cocoa-bean.png'
import ChocolateBar from '../Data/Images/chocolate-bar.png'
import QRCode from '../Data/Images/qr-code.png'

import AgricultureBW from '../Data/Images/agriculture-bw.png'
import CocoaBeanBW from '../Data/Images/cocoa-bean-bw.png'
import ChocolateBarBW from '../Data/Images/chocolate-bar-bw.png'
import QRCodeBW from '../Data/Images/qr-code-bw.png'

import {
    MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBIcon 
  } from 'mdb-react-ui-kit';

const UnList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  color: black;
  // margin-left: 15%;
  // margin-right: 15%;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 2vw;
  text-align: center;
`;

const PageTitle = styled.h3`
  color: black;
  font-size: 3vw;
  text-align: center;
  margin-bottom: 50px
`;

const ImageContainer = styled.div`
    margin-top: 50px;
    width: 80%;
    // height: 400px;
    text-align: center;
    color: black;
`

const BeanToBarImage = styled.img`
    width: 100%;
    height: auto;
`

const Welcome = () => (
  <div>
          {/* <div className='bg-image' >
      <ForestImage src={CacaoForest} className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
        <PageTitle>Our bean to bar data visualization service is coming soon!</PageTitle>
        </div>
      </div>
    </div> */}
    <PageTitle>Our bean to bar data visualization service is coming soon!</PageTitle>
    <MDBContainer>
      <MDBRow>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <BeanToBarImage src={AgricultureBW}></BeanToBarImage>
            </ImageContainer>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <MDBIcon fas icon="long-arrow-alt-right" size='3x'/>
            </ImageContainer>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <BeanToBarImage src={CocoaBeanBW}></BeanToBarImage>
            </ImageContainer>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <MDBIcon fas icon="long-arrow-alt-right" size='3x'/>
            </ImageContainer>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <BeanToBarImage src={ChocolateBarBW}></BeanToBarImage>
            </ImageContainer>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <MDBIcon fas icon="long-arrow-alt-right" size='3x'/>
            </ImageContainer>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
            <ImageContainer>
                <BeanToBarImage src={QRCodeBW}></BeanToBarImage>
            </ImageContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>

);

export default Welcome;