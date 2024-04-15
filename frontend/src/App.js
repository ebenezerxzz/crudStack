import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify'; 

import axios from 'axios';

import styled from "styled-components";
import Global from "./styles";
import FormComponent from "./components/Form";
import TableComponent from "./components/Table";


function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const registers = await axios.get('http://localhost:8080/get');
      setUsers(registers.data)
    } catch(error) {
      toast.error(error);
    }
  }
  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <MainContainer>
        <FormComponent />
        <TableComponent data={users}/>
      </MainContainer>
      <Global />
    </>
  );
}

export const MainContainer = styled.div`
    margin-top: 2rem;
    font-family: 'Roboto', Sans-serif';
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  `

export default App;
