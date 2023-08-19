import styled from 'styled-components'
import { FiDownload } from 'react-icons/fi'

export const FirstTitle = styled.h1`
font-family: 'Preahvihear',sans-serif;
  text-align: center;
  font-size: 1.6rem;

`

export const Container = styled.div`

    margin: 7rem auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  @media screen and (max-width: 500px){

  }

`
export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 14rem;
  align-items: center;
  gap: 6rem;
  @media screen and (max-width: 500px){

  }

`
export const Img = styled.img`
  width: 25rem;
  border: 2px dashed lightgray;
  @media screen and (max-width: 500px){

  }

`
