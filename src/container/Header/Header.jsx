import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
      <div className="app__wrapper_info">
        <SubHeading tittle="Veja o novo sabor" />

        <h1 className="app__header-h1"> A chave para um bom jantar</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}> Sit tellus lobortis sed senectus vivamis molestie. Condimentum volupat morbu faculisis quam scelerisque sapien. Et, penatubis aliquam amet tellus. </p>
      <button type="button" className='custom__button'>Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
  </div>
);

export default Header;
