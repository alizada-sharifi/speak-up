/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { MdOutlineMail } from 'react-icons/md';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

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
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const isEmail = type === 'email';

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
          className={`ring rounded-sm w-full bg-white px-3 py-2 text-sm outline-none transition
          ${isEmail ? 'pr-10' : ''}
          ${isPassword ? 'pr-10' : ''}
          ${
            error
              ? 'ring-red-500 focus:ring-red-500'
              : 'ring-neutral-200 focus:ring-primary-400'
          }`}
        />

        {/* Email Icon */}
        {isEmail && (
          <MdOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg pointer-events-none" />
        )}

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg"
          >
            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
};
