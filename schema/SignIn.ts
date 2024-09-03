"use client"
 
import { z } from "zod"
 
export const SignInFormSchema = (type: string) => z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(2),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(2),
  address1: type === 'sign-in' ? z.string().optional() : z.string().min(2),
  state: type === 'sign-in' ? z.string().optional() : z.string().min(2),
  pin: type === 'sign-in' ? z.number().optional() : z.number().min(6).max(6),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(2),
  phone: type === 'sign-in' ? z.number().optional() : z.number().min(10).max(10),
})
