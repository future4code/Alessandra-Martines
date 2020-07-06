import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Planner from './Components/Planner/Planner';
import '@testing-library/jest-dom/extend-expect';


describe("iniciando renderizações", () => {
   /* testando input */
  test("Checando input, se existe", () => {
  const { getByPlaceholderText } = render( <Planner/> )
  const input = getByPlaceholderText(/atividade/i)
  expect(input).toBeInTheDocument();
});
  /* testando select */
  test("Checando select, se existe", () => {
  const { getByTestId } = render( <Planner/> )
  expect(getByTestId(/dia/i)).toHaveValue("");
});
 /* testando botão ADICIONAR */
 test("Checando botão ADICIONA, se existe", () => {
  const { getByText } = render( <Planner/> )
  expect(getByText(/adicionar/i)).toBeInTheDocument();
});
 /* testando botão DELETE */
 test("Checando botão DELETE, se existe", () => {
  const { getByText } = render( <Planner/> )
  expect(getByText(/delete/i)).toBeInTheDocument();
});
});

/* Parte 2 dos testes */
describe("Criando atividade, input utilizado", () => {
    test("Digitando as atividades", () => {
      const {getByPlaceholderText} = render ( <Planner /> )
      const input = getByPlaceholderText("Adicionar tarefa")

      expect(input).toBeInTheDocument()
    })

    test("Se o botão ADICIONAR existe na tela", () => {
      const { getByText } = render( <Planner />)
      expect(getByText(/Adicionar/)).toBeInTheDocument()
    })

    test("Usando select", () => {
      const {getByTestId, queryByText} = render ( <Planner /> )
      const input = getByTestId("select")

      userEvent.selectOptions(select, queryByText("tuesday").value)

      expect(select).toHaveValue("tuesday")
    })
})



