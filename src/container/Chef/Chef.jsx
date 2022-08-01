import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef} alt="chef" />
        </div>

      <div className="app__wrapper_info">
          <SubHeading tittle="Palavra do chefe" />
        <h1 className="headtext__cormorant"> O que nós acreditamos</h1>

        <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote" />
              <p className="p__opensans">Lorem ipsum dolor sit amet.ashuahsuahuashuash </p>
            </div>
            <p className="p__opensans">Et quia molestiae vel consectetur fuga et nostrum nihil ab deserunt voluptatem est galisum internos ut doloribus nisi. Et adipisci modi et earum nesciunt et similique quis ad velit maxime eos incidunt quis aut veritatis error. </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chefe e fundador</p>
          <img src={images.sign} alt="signuture" />
        </div>
      </div>
   </div>
);

export default Chef;
