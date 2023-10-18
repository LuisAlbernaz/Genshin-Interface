import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';

const { SubMenu } = Menu;
const App = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const [elementos, setElementos] = useState([]);
  const [armas, setArmas] = useState([]);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/Personagem`)
      .then((dados) => {
        setPersonagens(dados.data); 

      const unicoElemento = [...new Set (dados.data.map((personagem) => personagem.elemento ))];
      setElementos(unicoElemento);
      const unicaArma = [...new Set (dados.data.map((personagem) => personagem.arma ))];
      setArmas(unicaArma);
      });
  }, []);

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="/" icon={<MailOutlined />}>
        <Link to="/">Página Inicial</Link>
      </Menu.Item>
      <SubMenu key="elementos" icon={<AppstoreOutlined />} title="Elementos">
        {elementos.map((elemento) => (
          <Menu.Item key={`/elemento/${elemento}`} key={elemento}>
            <Link to={`/elemento/${elemento}`}>{elemento}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
      <SubMenu key="armas" icon={<AppstoreOutlined />} title="Armas">
        {armas.map((arma) => (
          <Menu.Item key={`/arma/${arma}`} key={arma}>
            <Link to={`/arma/${arma}`}>{arma}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
};

export default App;