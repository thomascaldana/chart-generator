import styled, { css, keyframes } from 'styled-components'


const slideDownAnimation = keyframes`
  from {
    transform: translateY(-12%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background: #e6e6e6;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,.75);
  border-bottom: 2px solid  #6600ff;
  padding: 0 1rem;
  

  .menu {
  width: 100%;
  height: 10rem;
  background-color: #e6e6e6;
  top: 0;
  z-index: -1;
}

.menu-options {
  padding: 1.2rem 1rem ;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  gap: 20px;
  font-size: 1.1rem;
  font-family: sans-serif;  

  .li-item{
  list-style-type: none;
  cursor: pointer;

  a{
    text-decoration: none;
  }
}
}
`

export const LogoImg = styled.img`
  width: 9rem;

  @media screen and (max-width: 500px) {
   width: 10rem;
}

`
export const Nav = styled.nav`
  width: 100%;
  height: 4em;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 1em;

  .burger-menu {
  height: 100%;
  width: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (min-width: 768px) {
   display: none;
}

  }

  .burger-bar {
  width: 2em;
  height: 0.25em;
  background-color: #000000;
  border-radius: 0.5em;
}

.burger-bar.clicked:nth-child(1){
  transform: rotate(45deg) translate(0.25em, .5em);
  transition: ease-out 0.5s;
}

.burger-bar.clicked:nth-child(2){
  transform: scale(0.01);
  /* // transition: ease-out 0.01s; */
}

.burger-bar.clicked:nth-child(3){
  transform: rotate(135deg) translate(-.7em, 1em);
  transition: ease-out 0.5s;
}

/* unclicked */
.burger-bar.unclicked {
  transform: rotate(0) translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
}


  `



export const MenuOptions = styled.div`

${({ isVisible }) => css`
    display: ${isVisible ? 'block' : 'none'};
  `}

  animation: ${({ isVisible }) => (isVisible ? css`${slideDownAnimation} 0.5s ease` : 'none')}; 
  
  @media screen and (min-width: 768px) {
   display: none;
  }
  `

export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 30px;
  font-size: 1.1rem;
  font-family: sans-serif; 
  cursor: pointer;

  


  .li-item{
  list-style-type: none;

  .link-routes{
  text-decoration: none;
  color: #000;
}
  
  &:hover{
      border-bottom: 2px solid lightgray;
    }
  }
  
  @media screen and (max-width: 768px) {
   display: none;
}
  `