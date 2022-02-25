import styled from "styled-components"

const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  padding: 1rem;
  margin: 1rem;

  width: 40rem;
  `

const Card = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Card