/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  required?: boolean;
  disabled?: boolean;
};

export const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
  required,
  disabled,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={`ring rounded-sm w-full bg-white ring-neutral-200 px-3 py-2 text-sm outline-none transition
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-200 focus:ring-primary-400'}
        `}
      />

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
};
