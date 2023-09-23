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
    <div className={'w-full relative'}>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={(ev) => setValue(ev.target.value)}
        onBlur={validate}
        placeholder={label}
        className="
          w-full bg-zinc-300
          border-black border-2 p-4
          shadow-[4px_4px] shadow-black
          text-lg font-bold text-zinc-900
          font['Roboto Flex'] outline-none
          placeholder:text-zinc-500
        "
        {...props}
      />
      {error && (
        <p className="absolute left-0 -bottom-9 text-base text-red-500 font-bold">
          {error}
        </p>
      )}
    </div>
  );
};
