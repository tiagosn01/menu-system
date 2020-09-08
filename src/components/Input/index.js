import React, { useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

// eslint-disable-next-line no-unused-vars
const Input = ({ name, ...rest }, ref) => {
  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const inputRef = useRef(null);

  // logica para registrar o input do formulário corretamente quando ele é carregado em tela
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};
