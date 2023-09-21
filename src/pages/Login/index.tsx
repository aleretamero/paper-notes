import * as Styled from './styles';

import { FormEvent } from 'react';

import { Section } from '../../layouts/Section';
import { Button, Input, Title, Form } from '../../components';
import { useForm } from '../../hooks/useForm';
import { useUserContext } from '../../hooks/useUserContext';

export const Login = () => {
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = useUserContext();

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    email.validate();
    password.validate();

    if (!email.validate() || !password.validate()) return;

    await userLogin({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Section bg="var(--primary-light)">
      <Styled.Container>
        <Title>Entrar</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="email" label="email" type="text" {...email} />
          <Input name="password" label="password" type="text" {...password} />
          <Button>Entrar</Button>
        </Form>
      </Styled.Container>
    </Section>
  );
};
