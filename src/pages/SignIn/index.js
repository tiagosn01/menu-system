import React, { useRef, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { Container, Title } from './styles';

const SignIn = () => {
  const formRef = useRef();
  const cpf_cnpjInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const { signIn } = useAuth();

  // função de submit do formulario
  const handleSubmit = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          cpf_cnpj: Yup.string().required('Campo obrigatório'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          cpf_cnpj: data.cpf_cnpj,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        console.log(err);
        if (err) {
          // mostrar erros para usuário(ainda falta fazer)

          window.alert('Erro no login');

          return;
        }
        window.alert('Ja pode fazer login na apolicação');
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Title>NextLogo</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Acesso ao sistema</h1>

        <Input
          name="cpf_cnpj"
          type="text"
          placeholder="CPF/CNPJ"
          ref={cpf_cnpjInputRef}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          ref={passwordInputRef}
        />

        <Button type="submit">Entrar</Button>

        <Link to="/signup">Esqueci a senha</Link>
      </Form>

      <Link to="/select-type">
        <FiLogIn />
        Cadastre-se
      </Link>

      <Link to="/signup">
        <FiLogIn />
        Telas cadastro final [TESTE]
      </Link>
    </Container>
  );
};

export default SignIn;
