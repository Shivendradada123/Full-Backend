import { z } from "zod";

const emailValidation = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["student", "teacher"]),
});

export default emailValidation;
