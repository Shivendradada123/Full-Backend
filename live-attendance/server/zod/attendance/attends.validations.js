import z from "zod"

export const attendanceStartBodyValidation = z.object({
    classId:z.string(),
})
