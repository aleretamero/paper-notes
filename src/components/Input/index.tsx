import * as Styled from './styles';
import { ComponentPropsWithRef, Dispatch, SetStateAction } from 'react';

interface IInputProps extends ComponentPropsWithRef<'input'> {
  name: string;
  label: string;
  value: string;
  type: string;
  error?: string | null;
  validate: () => boolean;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input = ({
  name,
  label,
  value,
  type,
  error,
  setValue,
  validate,
  ...props
}: IInputProps): JSX.Element => {
  return (
    <Styled.Wrap>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={(ev) => setValue(ev.target.value)}
        onBlur={validate}
        placeholder={label}
        {...props}
      />
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrap>
  );
};
