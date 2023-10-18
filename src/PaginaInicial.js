
import Menu from './Menu';
import Image from 'react-bootstrap/Image';
import ArmazenarDados from './Formulario';

export default function PaginaInicial(){

    return <>
      <Menu/>
      <div className="row">
        <div className="col-12">
          <Image src="https://img.youtube.com/vi/1hJ5J5QiyIY/maxresdefault.jpg" className="custom-image" fluid />
          <ArmazenarDados/>
        </div>
      
      </div>

    
    </>
}