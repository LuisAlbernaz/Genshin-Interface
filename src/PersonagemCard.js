import React from 'react';
import { Card, Button } from 'antd';

const cardStyle = {
  width: 300,
};

const imageStyle = {
  height: '280px',
};

const PersonagemCard = ({ id, nome, elemento, arma, imagem, onDelete }) => {
  const handleDelete = () => {
    // Chame a função onDelete com o ID do personagem a ser excluído
    onDelete(id);
  }; 

  return (
    <Card style={cardStyle} cover={<img alt={nome} src={imagem} style={imageStyle} />}>
      <h3>{nome}</h3>
      <p>Elemento: {elemento}</p>
      <p>Arma: {arma}</p>
      <Button type="danger" onClick={handleDelete}>
        Excluir
      </Button>
    </Card>
  );
};

export default PersonagemCard;