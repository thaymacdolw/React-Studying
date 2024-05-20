import React, { useState, useRef } from 'react';
// JSX é a misturar HTML com JS dentro do React. Para acrescentar o código JS dentro ali da função React,preciso colocar {}.
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg';
import Trash from './assets/trash.svg';

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './styles';

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    setUsers([
      ...users, 
      { 
        id: Math.random(), 
        name: inputName.current.value,
        age: inputAge.current. value 
      },
    ]);
  }
  function deleteUser(userId) {
    const newUsers = users.filter (user => user.id !== userId)
    setUsers(newUsers);
  }
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Hello!</H1>
        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder='Name' />
        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder='Age' />
        <Button onClick={addNewUser}>Register <img alt="arrow" src={Arrow} /></Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="trash can" /></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}
export default App