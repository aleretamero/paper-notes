import { LayoutSection } from '../layouts/SectionLayout';
import { Button, Form, Input, Title } from '../components';
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import { useUserContext } from '../hooks/useUserContext';

export const Register = () => {
  const name = useForm('name');
  const email = useForm('email');
  const password = useForm('password');

  const { userRegister } = useUserContext();

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    name.validate();
    email.validate();
    password.validate();

    if (!name.validate() || !email.validate() || !password.validate()) return;

    await userRegister({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <LayoutSection className="bg-violet-400 dark:bg-violet-950 py-8">
      <Title className="text-zinc-900 dark:text-zinc-100">Registrar</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="name" label="Nome" type="text" {...name} />
        <Input name="email" label="email" type="text" {...email} />
        <Input name="password" label="password" type="text" {...password} />
        <Button>Cadastrar</Button>
      </Form>
    </LayoutSection>
  );
};
