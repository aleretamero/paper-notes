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
    <div
      className={
        'w-full relative flex justify-center items-start flex-col gap-2'
      }
    >
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={(ev) => setValue(ev.target.value)}
        onBlur={validate}
        placeholder={label}
        className="
          w-full relative -bottom-6 bg-slate-200
          items-center flex-col gap
          border-zinc-900 border-solid border-2
          shadow-[4px_4px] shadow-zinc-900
          text-base font-bold text-zinc-900
          py-1 px-2 outline-none
          placeholder:text-zinc-500 opacity-80  
        "
        {...props}
      />
      {error && <p className="absolute left-0 -bottom-6">{error}</p>}
    </div>
  );
};
