'use client';

import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import React, { useState } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Mail, Eye, EyeOff } from 'lucide-react';

export type CustomInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  description?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
  inputClassName?: string;
} & Omit<React.ComponentProps<'input'>, 'name' | 'defaultValue'>;

const CustomInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  placeholder = 'Enter value',
  type = 'text',
  containerClassName,
  labelClassName,
  required = false,
  inputClassName,
  ...rest
}: CustomInputProps<TFieldValues, TName>) => {
  const [showPassword, setShowPassword] = useState(false);

  const isNumber = type === 'number';
  const isEmail = type === 'email';
  const isPassword = type === 'password';

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(containerClassName)}>
          {label && (
            <FormLabel
              className={cn(
                'block text-sm font-semibold text-primary-550',
                labelClassName,
              )}
            >
              {label} {required && <span className="text-red-600">*</span>}
            </FormLabel>
          )}

          {description && <FormDescription>{description}</FormDescription>}

          <FormControl>
            <div className="relative w-full">
              <Input
                {...field}
                {...rest}
                placeholder={placeholder}
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                value={
                  isNumber
                    ? field.value === undefined || field.value === 0
                      ? ''
                      : field.value
                    : (field.value ?? '')
                }
                onChange={(e) => {
                  if (isNumber) {
                    const val = e.target.value;
                    field.onChange(val === '' ? undefined : Number(val));
                  } else {
                    field.onChange(e.target.value);
                  }
                }}
                className={cn(
                  'w-full rounded-sm p-3 text-sm sm:text-base placeholder:text-sm placeholder:text-neutral-300/50 border border-neutral-200 transition-all duration-200 focus:ring-1! focus:ring-primary-400! pr-10',
                  inputClassName,
                )}
              />

              {/* Email icon */}
              {isEmail && (
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 size-4 pointer-events-none" />
              )}

              {/* Password toggle */}
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg"
                >
                  {showPassword ? (
                    <Eye className="size-5 text-gray-500" />
                  ) : (
                    <EyeOff className="size-5 text-gray-500" />
                  )}
                </button>
              )}
            </div>
          </FormControl>

          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
