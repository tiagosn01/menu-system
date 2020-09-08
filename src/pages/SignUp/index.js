import React, { useCallback, useRef } from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Button from '../../components/Button';

import * as S from './styles';
import api from '../../services/api';

const SignUp = () => {
  const formRef = useRef();
  const location = useLocation();
  const history = useHistory();

  // Informação do tipo de usuário que vem pela Location no do Link
  const title = location.state;

  // função de submit do formulario
  const handleSubmit = useCallback(
    async data => {
      try {
        // Pegando as informações do formulário manualmente e adicionando o tipo de usuário
        let allData = formRef.current.getData();

        allData = { ...data, title };

        // validação dos dados do form com yup
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email(),
          confirmEmail: Yup.string().when('email', (email, field) =>
            email ? field.required().oneOf([Yup.ref('email')]) : field,
          ),
          password: Yup.string().min(6, 'No mínimo 6 digitos.'),
          confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field,
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // script se passou na validação

        await api.post('users', allData);

        window.alert('Usuário cadastrado com sucesso!');

        // direcionando para o login
        history.push('/');
        return console.log('PASSOU', allData);
      } catch (err) {
        return console.log('ERRO', err);
      }
    },
    [title, history],
  );

  return (
    <S.Container>
      <S.Title>NextLogo</S.Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Finalizando cadastro:</h2>

        <S.InputSignUp name="name" placeholder="Nome" />
        <S.InputSignUp name="email" placeholder="E-mail" />
        <S.InputSignUp
          name="confirmEmail"
          placeholder="Confirmação de e-mail"
        />
        <S.InputSignUp name="cpf_cnpj" placeholder="CPF/CNPJ" />
        <S.InputSignUp name="password" type="password" placeholder="Senha" />
        <S.InputSignUp
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <Button type="submit">Cadastrar</Button>
      </Form>

      <Link to="/select-type">
        <FiArrowLeft />
        Voltar
      </Link>
    </S.Container>
  );
};

export default SignUp;
