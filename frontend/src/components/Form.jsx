import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import Global from "../styles";

import axios from "axios";

export default function FormComponent() {

    const dataInput = useRef();

    const handleSubmit = async () => {

        await axios.post('http://localhost:8080/post', {
            nome: dataInput.current.nome.value,
            telefone: dataInput.current.telefone.value,
            nascimento: dataInput.current.nascimento.value,
            email: dataInput.current.email.value,
        }).then(({ data }) => toast.success(data))
            .catch(({ error }) => toast.error(error))
    };

    return (

        <ContainerForm ref={dataInput} onSubmit={handleSubmit}>
            <ContainerInput>
                <Label htmlFor="nome">Nome</Label>
                <Input name="nome" id="nome" type="text"  />
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" />
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor="telefone">Telefone</Label>
                <Input name="telefone" id="telefone"  />
            </ContainerInput>
            <ContainerInput>
                <Label htmlFor="nascimento">Nascimento</Label>
                <Input name="nascimento" id="nascimento" type="date"/>
            </ContainerInput>

            <Global />
            <Button type="submit">Enviar</Button>
        </ContainerForm>

    );
};


const ContainerForm = styled.form`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 20px;
    border-radius: 15px;   
    align-items: flex-end;  
    align-items: center;
    box-shadow: 0px 0px 10px #4AFF02;

    &:hover {
        box-shadow: 0px 0px 20px #4AFF02;
    }
`
const ContainerInput = styled.div`
    cursor: pointer;    
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    cursor: pointer;
    width: 120px;
    padding: 0px 15px;
    border: 0.1px solid #fff;
    color: #fff;
    border-radius: 4px;
    background-color: #101110;
    height: 35px;
    outline: none;
`;

const Button = styled.button`
        cursor: pointer;  
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

export const Label = styled.label`
    color: #4AFF02;
    cursor: pointer:
`