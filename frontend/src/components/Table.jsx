import React from "react"
import styled from 'styled-components';

import Global from "../styles";

export default function TableComponent({data}) {
    return (
        <>
            <Table >
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Telefone</Th>
                        <Th>Nascimento</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, i) => (
                        <Tr key={i} >
                            <Td>{item.username}</Td>
                            <Td>{item.telefone}</Td>
                            <Td>{new Date(item.nascimento).toLocaleDateString('pt-BR')}</Td>
                            <Td>{item.email}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Global />
        </>
    )
}



const Table = styled.table`
  cursor: pointer;
  width: 100%;
  background-color: #101110;
  padding: 20px;
  box-shadow: 0px 0px 5px #c  cc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: #4AFF02;
  text-align: start;
  border-bottom: 2px solid #999;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
 
  color: #fff;
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;