import { Container, ContainerItems, PhotoContainer, MyPhoto, Thanks, GrayText, LinkedinContainer, LinkedinButton, SiLinkedinStyled, Informations } from './styles'
import myPhoto from '../../assets/imgs/my-photo.png'


const Footer = () => {


  return (
    <Container>
      <ContainerItems>
        <PhotoContainer>
          <MyPhoto src={myPhoto} alt="my-picture" />
          <Thanks>Thank you!</Thanks>
        </PhotoContainer>

        <Informations>
          <GrayText>E-mail: thomascaldana@gmail.com</GrayText>
          <GrayText className='phone-number'>Phone: +55 19 99601-8238</GrayText>
        </Informations>

        <LinkedinContainer>
          <GrayText>Follow me on Linkedin and let's talk</GrayText>
          <LinkedinButton href='https://www.linkedin.com/in/thomas-caldana/' target='_blank' >
            <SiLinkedinStyled />
          </LinkedinButton>

        </LinkedinContainer>
      </ContainerItems>

    </Container>
  )
}

export default Footer