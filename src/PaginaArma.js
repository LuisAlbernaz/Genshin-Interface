import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'antd';
import Menu from './Menu';
import Image from 'react-bootstrap/Image';

export default function PaginaElemento() {
    const { arma } = useParams();
    const [personagens, setPersonagens] = useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:3030/Personagem`)
        .then((response) => {
          setPersonagens(response.data);
        });
    }, []);
  
    // Filtrar os personagens que têm o elemento correspondente
    const personagensDaArma = personagens.filter((personagem) => personagem.arma === arma);
  
    // Componente de Card para exibir informações de um personagem
    const cardStyle = {
        width: 300, // Largura fixa para os cards
      };
      
      const imageStyle = {
        height: '300px', // Altura fixa para as imagens
      };
      
      const PersonagemCard = ({ nome, elemento, arma, imagem }) => (
        <Card style={cardStyle} cover={<img alt={nome} src={imagem} style={imageStyle} />}>
          <h3>{nome}</h3>
          <p>Elemento: {elemento}</p>
          <p>Arma: {arma}</p>
        </Card>
      );
    
      return <>
        <Menu/>
        <div className="row">
        <div className="col-12">
          <Image src="https://img.youtube.com/vi/1hJ5J5QiyIY/maxresdefault.jpg" className="custom-image" fluid />
        </div>
        </div>
        <div>
            <div className="d-flex justify-content-center">
                <h2>Arma: {arma}</h2>
            </div>
        <div className="card-container row">
            {personagensDaArma.map((personagem) => (
            <div className="col-12 col-md-6 col-lg-3" key={personagem.id}>
                <PersonagemCard
                    nome={personagem.nome}
                    elemento={personagem.elemento}
                    arma={personagem.arma}
                    imagem={personagem.imagem}
                />
            </div>
            ))}
        </div>
    </div>
    </>
  }