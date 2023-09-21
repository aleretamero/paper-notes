import { useState } from 'react';

import { z } from 'zod';

import { password } from '../helpers/regex/password';

const typesValidate = {
  name: {
    schema: z.string().min(3),
    message: 'Username deve ter pelo menos 3 caracteres!',
  },

  email: {
    schema: z.string().email(),
    message: 'Email inválido',
  },

  password: {
    schema: z.string().regex(password),
    message:
      'Senha deve ter pelo menos 8 caracteres, maiúscula, minúscula, número e símbolo!',
  },
};

export const useForm = (type: keyof typeof typesValidate) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string): boolean => {
    if (!typesValidate[type].schema.safeParse(value).success) {
      setError(typesValidate[type].message);

      return false;
    }

    setError(null);
    return true;
  };

  return {
    value,
    error,
    setValue,
    validate: () => validate(value),
  };
};
