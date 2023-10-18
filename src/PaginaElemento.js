import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PersonagemCard from './PersonagemCard';
import Menu from './Menu';
import Image from 'react-bootstrap/Image';

export default function PaginaElemento() {
    const { elemento } = useParams();
    const [personagens, setPersonagens] = useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:3030/Personagem`)
        .then((response) => {
          setPersonagens(response.data);
        });
    }, []);

    const deletePersonagem = (id) => {
      // Envie uma solicitação de exclusão para o servidor com o ID do personagem
      axios.delete(`http://localhost:3030/Personagem/${id}`).then((response) => {
        if (response.status === 200) {
          // Atualize a lista de personagens após a exclusão bem-sucedida
          setPersonagens(personagens.filter((personagem) => personagem.id !== id));
        }
      });
    }; 
  
    // Filtrar os personagens que têm o elemento correspondente
    const personagensDoElemento = personagens.filter((personagem) => personagem.elemento === elemento);
  
    
      return <>
        <Menu />
      <div className="row">
        <div className="col-12">
          <Image src="https://img.youtube.com/vi/1hJ5J5QiyIY/maxresdefault.jpg" className="custom-image" fluid />
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-center">
          <h2>Elemento: {elemento}</h2>
        </div>
        <div className="card-container row">
          {personagensDoElemento.map((personagem) => (
            <div className="col-12 col-md-6 col-lg-3" key={personagem.id}>
              <PersonagemCard
                id={personagem.id} // Passando o ID do personagem
                nome={personagem.nome}
                elemento={personagem.elemento}
                arma={personagem.arma}
                imagem={personagem.imagem}
                onDelete={deletePersonagem} // Passando a função de exclusão
              />
            </div>
          ))}
        </div>
      </div>
    </>
  }
