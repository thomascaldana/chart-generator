import styled from 'styled-components'
import { FaLinkedinIn } from "react-icons/fa"


export const Container = styled.footer`
  margin-top: 2rem;
  width: 100%;
  background: #f1f1f1;

`
export const ContainerItems = styled.footer`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 800px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`

export const Informations = styled.div`
  .phone-number{
    text-align: center;
  }
`

export const Thanks = styled.p`
  font-family: 'Inter', sans-serif;
  color: black;
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 0;
}
`
export const GrayText = styled.p`
    color: gray;
    font-family: 'Inter', sans-serif;
    line-height: 1.75rem;
    text-align: justify;
    font-size: 0.9rem;


    
`
export const MyPhoto = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 0;
}
`
export const LinkedinContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  @media screen and (min-width: 800px) {
    margin-top: 0;
}
`
export const PhotoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;


  @media screen and (min-width: 800px) {
    flex-flow: row nowrap;
    gap: 1rem;
}
`

export const LinkedinButton = styled.a`
width: 2.8rem;
height: 2.8rem;
background:  linear-gradient(rgb(78, 115, 255) 0%, rgb(80, 108, 207) 100%);
border-radius: 1.5rem;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.6;
}
`

export const SiLinkedinStyled = styled(FaLinkedinIn)`
width: 1.4rem;
height: 1.4rem;
color: white;
`