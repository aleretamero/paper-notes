import { useState } from 'react';

import { z } from 'zod';

import { password } from '../helpers/regex/password';

const typesValidate = {
  name: {
    schema: z.string().min(3),
    message: 'Nome inválido',
  },

  email: {
    schema: z.string().email(),
    message: 'Email inválido',
  },

  password: {
    schema: z.string().regex(password),
    message: 'Digite uma senha forte',
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
