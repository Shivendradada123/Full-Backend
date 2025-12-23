import z from 'zod'

export const tokenValidation = z.object({
    userId:z.string(),
    role:z.enum(["teacher" , "student"])
})

export const tokenSchema =z.string().min(10)