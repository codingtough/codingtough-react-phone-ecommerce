import styled from 'styled-components'

export const ButtonContainer = styled.button`
   margin: 0.3rem 0.8rem 0.3rem 0;
   padding: 0.3rem 0.8rem;
   background: transparent;
   border: 0.1rem solid var(--lightBlue);
   border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
   border-radius: 0.8rem;
   color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
   font-size: 2.2rem;
   text-transform: capitalize;
   cursor: pointer;
   transition: all 0.5s ease-in-out;

   &:hover {
      background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
      color: var(--mainBlue);
   }

   &:focus {
      outline: none;
   }
`