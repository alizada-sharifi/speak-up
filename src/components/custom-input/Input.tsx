'use client';

import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import React from 'react';
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
  const isNumber = type === 'number';

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
            <Input
              {...field}
              {...rest}
              placeholder={placeholder}
              type={type}
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
                'w-full rounded-sm p-3 text-sm sm:text-base font-medium border border-neutral-200 transition-all duration-200 focus-within:ring-1 focus-within:ring-primary-450',
                inputClassName,
              )}
            />
          </FormControl>

          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
