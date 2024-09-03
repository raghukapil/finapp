'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignInFormSchema } from '@/schema/SignIn'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputField from './InputField'
import { Loader2 } from 'lucide-react'


const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formschema = SignInFormSchema(type);
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formschema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    console.log(values)
    setIsLoading(false);
  }
  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link 
          href='/' 
          className='flex cursor-pointer items-center gap-1'>
            <Image 
              src="/icons/logo.svg" 
              width={34} 
              height={34} 
              alt="logo" 
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
              Personal Banking
            </h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
            { user 
                ? 'Link Account'
                : type  === 'sign-in'
                  ? 'Sign In'
                  : 'Sign Up'
            }
            <p className='text-16  font-normal text-gray-600'>
              { user
                ? 'Link your account to get started'
                : 'Enter your details to get started'
              }
            </p>
          </h1>
        </div>
      </header>
      { user ? (<div className='flex flex-col gap-4'></div>)
        : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {
                  type === 'sign-up' && (
                    <>
                      <div className='flex gap-4'>
                        <InputField control={form.control} name="firstName" placeholder="Enter your First Name" label="First Name" type="text" />
                        <InputField control={form.control} name="lastName" placeholder="Enter your Email" label="Last Name" type="text" />
                      </div>
                      <InputField control={form.control} name="address1" placeholder="Enter your address" label="Address" type="text" />
                      <div className='flex gap-4'>
                        <InputField control={form.control} name="state" placeholder="Enter your state" label="State" type="text"/>
                        <InputField control={form.control} name="pin" placeholder="123456" label="Pin" type="number"/>
                      </div>
                      <div className='flex gap-4'>
                        <InputField control={form.control} name="dateOfBirth" placeholder="yyyy-mm-dd" label="Date of Birth" type="text"/>
                        <InputField control={form.control} name="phone" placeholder="0000000000" label="Phone" type="number"/>
                      </div>
                    </>                
                  )
                }
                <InputField control={form.control} name="email" placeholder="Enter your Email" label="Email" type="text"/>
                <InputField control={form.control} name="password" placeholder="Enter your password" label="Password" type="password"/>
                <div className='flex flex-col gap-4'>
                  <Button type="submit" className='form-btn' disabled={isLoading}>
                    {isLoading 
                      ? (<>
                          <Loader2 size={20} className='animate-spin'/> &nbsp;
                          Loading...
                        </>) 
                      : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                  </Button>
                </div>
              </form>
            </Form>
            <footer className='flex jestify-center gap-1'>
              <p className='text-14 text-gray-600 font-normal'>
                  {type === 'sign-in' ? 'Don\'t have an account?' : 'Already have an account?'}
              </p>
              <Link
                href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                className='form-link'>
                  {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
            </footer>
          </>
        )}
    </section>
  )
}

export default AuthForm