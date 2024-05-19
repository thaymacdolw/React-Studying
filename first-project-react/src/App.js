import React from 'react';
// JSX é a misturar HTML com JS dentro do React. Para acrescentar o código JS dentro ali da função React,preciso colocar {}.
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './styles';

const App = () => {
  return (
    <Container>
      <Image />
      <ContainerItens>
        <H1>Hello!</H1>
        <InputLabel>Name</InputLabel>
        <Input placeholder='Name'/>
        <InputLabel>Age</InputLabel>
        <Input placeholder='Age'/>
        <Button>Register</Button>
      </ContainerItens>
    </Container>
  );
}
export default App