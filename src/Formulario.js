import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Importe a biblioteca Axios

export default function ArmazenarDados() {
  const [nome, setNome] = useState('');
  const [elemento, setElemento] = useState('');
  const [arma, setArma] = useState('');
  const [imagem, setImagem] = useState('');
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    // Esta função será executada sempre que cadastros for atualizado
    console.log('Lista de Cadastros:', cadastros);
  }, [cadastros]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCadastro = {
      nome,
      elemento,
      arma,
      imagem
    };

    axios
      .post('http://localhost:3030/Personagem', novoCadastro)
      .then((response) => {
        if (response.status === 201) {
          console.log('Novo usuário cadastrado:', response.data);

          // Atualize a lista de cadastros após o cadastro bem-sucedido
          setCadastros([...cadastros, response.data]);

          // Limpe os campos de email e senha
          setNome('');
          setElemento('');
          setArma('');
          setImagem('');
        } else {
          console.error('Erro ao cadastrar usuário:', response.data);
        }
      })
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="string"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicString">
          <Form.Label>Elemento</Form.Label>
          <Form.Control
            type="string"
            placeholder="Elemento"
            value={elemento}
            onChange={(e) => setElemento(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicString">
          <Form.Label>Arma</Form.Label>
          <Form.Control
            type="string"
            placeholder="Arma"
            value={arma}
            onChange={(e) => setArma(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicString">
          <Form.Label>Imagem do Personagem</Form.Label>
          <Form.Control
            type="string"
            placeholder="Imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Termos e Serviços" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    <div className='row'>
    <h2>Cadastros:</h2>
      <ul>
        {cadastros.map((cadastro, index) => (
          <li key={index}>
            Nome: {cadastro.nome} -  Elemento: {cadastro.elemento} - Arma: {cadastro.arma}
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}