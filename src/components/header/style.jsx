import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  /* background: #f2f2f2; */
  background: #0059b3;
  width: 100%;
  height: 10rem;
  border-bottom: solid 1px #b3b3b3;
  padding-top: 4px;
  padding-bottom: 3.2px;

  @media screen and (max-width: 900px) {
    padding-bottom: 9px;
    height: 5rem;
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
  margin-left: -732px;
  margin-top: 84px;
  letter-spacing: 1px;

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
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

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 38px;
  margin-left: 3px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;

  /*   transition: ease 0.7s; */

  &:hover {
    border: none;
  }

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
  margin-left: -297px;
  margin-top: 15px;

  @media screen and (max-width: 900px) {
    width: 110px;
    margin-top: 0px;

    height: 52px;
    margin-left: 20px;
  }
`

export const ImgLupa = styled.img`
  width: 32px;

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    z-index: 9999;
  }
`
export const SpanLinksMenu = styled.span`
  margin-bottom: 7px;
  cursor: pointer;
  transition: ease 0.4s;

  &:hover {
    background: #0059b3;
    color: orange;
  }
`

export const SpanFones = styled.span`
  margin-left: 150px;
  margin-top: -40px;
  font-size: 14px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`



export const HeaderOptions = styled.div`
  
margin-left: 42px;
transition: ease 0.5s;

&:hover{
  color: orange
}

`

export const HeaderSpan = styled.span`
  
transition: ease 0.5s;

&:hover{
  color: orange
}

`