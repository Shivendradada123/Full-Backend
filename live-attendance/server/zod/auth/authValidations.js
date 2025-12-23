import { z } from "zod";

export const emailValidation = z.object({
  name: z.string(),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["student", "teacher"]),
});



export const loginBodyValidation = z.object({
  email:z.email(),
  password:z.string()
})

export const currentUserDataBody = z.object({
  Autherization: z.jwt("Invalid token!")
})



