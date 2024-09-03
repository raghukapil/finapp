import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { SignInFormSchema } from '@/schema/SignIn';

const formSchema = SignInFormSchema('sign-up');
interface InputFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  label: string;
  type?: string;
}

const InputField = ({control, name, placeholder,label, type}: InputFieldProps) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className='form-item'>
        <FormLabel className='form-label'>{label}</FormLabel>
        <div className='flex w-full flex-col'>
          <FormControl>
            <Input 
              placeholder={placeholder}
              className='input-class'
              type={type}
              {...field}
            />
          </FormControl>
          <FormMessage className='form-message mt-2' />
        </div>
      </div>
    )}
  />
  )
}

export default InputField