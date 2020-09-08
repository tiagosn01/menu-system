import React, { useCallback, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Button from '../../components/Button';

import * as S from './styles';

const SignUp = () => {
  const formRef = useRef();
  const location = useLocation();

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
          cpfcnpj: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido obrigatório'),
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
        return console.log('PASSOU', allData);
      } catch (err) {
        return console.log('ERRO', err);
      }
    },
    [title],
  );

  return (
    <S.Container>
      <S.Title>NextLogo</S.Title>

      <S.Pageitemlist>
        <main>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Perfil selecionado: {title}</h1>

            <h3>Preencha o formulário para continuar o cadastro.</h3>

            <S.InputSignUp name="cpf" type="text" placeholder="CPF" />
            <S.InputSignUp name="rg" type="text" placeholder="RG" />
            <S.InputSignUp name="name" placeholder="Nome" />
            <S.InputSignUp
              name="birth"
              type="date"
              placeholder="Data de nascimento"
            />
            <S.InputSignUp name="cep" type="password" placeholder="CEP" />
            <S.InputSignUp name="number" type="password" placeholder="Número" />
            <S.InputSignUp
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </main>
      </S.Pageitemlist>
      <Link to="/select-type">
        <FiArrowLeft />
        Voltar
      </Link>
    </S.Container>
  );
};

export default SignUp;
