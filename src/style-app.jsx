import styled from 'styled-components'
import Circulo from './assets/circulo.jpg'

export const ContainerAppBackgroundImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
  background: url(${Circulo}) no-repeat fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  border-bottom: solid 1px #b3b3b3;
  padding-bottom: 3.2px;

  @media screen and (max-width: 800px) {
    padding-bottom: 9px;
    width: 100vw;
    height: auto;

    background-size: contain;
    background: #99dfff;

  }
`

export const ContainerApp = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: solid 1px #b3b3b3;
  padding-bottom: 3.2px;

  @media screen and (max-width: 800px) {
    padding-bottom: 9px;
    width: 100vw;
    align-items: center;


  }
`

export const Form = styled.form`
  display: flex;
  margin-left: 13px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const FormDois = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;
  background: linear-gradient(to right top, #8c8c8c 55%, #4d4d4d 45%);
  /* background:  black; */
  /* backdrop-filter: blur(20px) saturate(120%) contrast(200%); */
  /* backdrop-filter: blur(90px) saturate(90%); */
  width: 80%;
  /* margin-left: 200px; */
  padding-left: 10px;
  padding-right: 3px;
  padding-bottom: 9px;

  @media screen and (max-width: 800px) {
    width: 90%;
    margin-top: 10px;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: -345px;
  margin-top: 84px;
  letter-spacing: 1px;

  @media screen and (max-width: 800px) {
    display: none;
    /* width: 20px; */
  }
`

export const LinksContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 15px;
    font-size: 0.9rem;
  }
`
export const Input = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  border: solid 1px #cccccc;
  border-radius: 5px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 2.1rem;
    margin-left: 0px;
    z-index: 9999;
    margin-top: 10px;
    /* filter: blur(5px); */
  }
`

export const Button = styled.button`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 38px;
    margin-left: 3px;
    cursor: pointer;
    background: none;
    border: none;
    /*   transition: ease 0.7s; */

    &:hover {
      /* background: darkgray; */
    }
  }
`
export const ImgLogo = styled.img`
  width: 150px;
  height: 70px;
  margin-left: 90px;

  @media screen and (max-width: 800px) {
    width: 110px;

    height: 52px;
    margin-left: 10px;
  }
`

export const ImgLupa = styled.img`
  width: 32px;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    z-index: 9999;
  }
`
export const IFrameContainer = styled.div`
  display: flex;
    justify-content: center;


  @media screen and (max-width: 800px) {
    flex-direction: column;
    
  margin-left: -165px;
  margin-top: -10px;
    align-items: center;
display: flex;
  }
`

export const Imagem = styled.img`
  display: flex;
  margin-left: -70px;
  margin-top: 50px;
  width: 550px;
  height: 305px;
  border-radius: 18px;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 170px;
  margin-left: 160px;

  }
`

export const AulaContainer = styled.div`
  display: flex;
  justify-content: center;

  background: #f2f2f2;
  border-radius: 15px;
  font-size: 16px;
  margin-top: 55px;
  height: 320px;
  width: 400px;
  margin-left: 20px;
  opacity: 0.9;

  @media screen and (max-width: 800px) {
    width: 275px;
    height: 340px;
    align-items: center;
    display: flex;
    margin-bottom: 50px ;


    margin-left: 160px;
  }
`
export const HR = styled.hr`
  border-top: 1px solid black;
  width: 110%;
  height: 1px;

   @media screen and (max-width: 800px) {
    width: 240px;
      width: 80%;

  }
`
