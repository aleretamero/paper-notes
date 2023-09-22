import { FormEvent } from 'react';

import { LayoutSection } from '../layouts/SectionLayout';
import { Button, Input, Title, Form } from '../components';
import { useForm } from '../hooks/useForm';
import { useUserContext } from '../hooks/useUserContext';

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
    <LayoutSection className="bg-[var(--primary-light)]">
      <div
        className="
          flex justify-center items-center gap-8 flex-col
          w-full [&_button]:mt-4
        "
      >
        <Title>Entrar</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="email" label="email" type="text" {...email} />
          <Input name="password" label="password" type="text" {...password} />
          <Button>Entrar</Button>
        </Form>
      </div>
    </LayoutSection>
  );
};
