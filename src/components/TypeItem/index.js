import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const TypeItem = ({ image, title, description }) => {
  return (
    <S.Article>
      <header>
        <img src={image} alt="Imagem do item" />
        <div>
          <strong>{title}</strong>
        </div>
      </header>

      <p>{description}</p>

      <footer>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolor,
          ut excepturi provident nam incidunt. Doloribus deleniti, repudiandae
          eveniet in, vitae id veritatis dolor ratione, exercitationem
          consectetur unde accusamus rem!
        </p>
        <S.ButtonItem to={{ pathname: '/signup-item', state: title }}>
          Selecionar
        </S.ButtonItem>
      </footer>
    </S.Article>
  );
};

export default TypeItem;

TypeItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
