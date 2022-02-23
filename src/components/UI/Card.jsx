import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  background-color: hsl(0, 0%, 100%);

  max-width: 20rem;
  min-width: 20rem;

  word-break: break-all;

  list-style-type: none;

  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  `

const Card = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Card