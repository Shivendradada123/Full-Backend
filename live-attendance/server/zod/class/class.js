import z from 'zod'

export const classValidation =z.object({
    className:z.string("Please provide valid class name!")
})

export const studeIdValidaton = z.object({
    studentId:z.string()
})