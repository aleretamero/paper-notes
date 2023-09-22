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
    <LayoutSection className="bg-[var(--primary-light)]">
      <div
        className="
          flex justify-center items-center gap-8 flex-col
          w-full [&_button]:mt-4
        "
      >
        <Title>Registrar</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="name" label="Nome" type="text" {...name} />
          <Input name="email" label="email" type="text" {...email} />
          <Input name="password" label="password" type="text" {...password} />
          <Button>Cadastrar</Button>
        </Form>
      </div>
    </LayoutSection>
  );
};
