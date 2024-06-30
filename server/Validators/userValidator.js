import z from "zod";

const userSignup = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "User must have at least 3 characters" })
        .max(255, { message: "User can have a maximum of 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must have at least 3 characters" })
        .max(255, { message: "Email can have a maximum of 255 characters" }),
    phone: z
        .string({ required_error: "Phone number is required" })
        .refine((value) => /^\d+$/.test(value), { message: "Phone number must be a valid number" })
        .min(3, { message: "Phone number must have at least 3 characters" })
        .max(15, { message: "Phone number can have a maximum of 15 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must have at least 8 characters" })
        .max(255, { message: "Password can have a maximum of 255 characters" })
});

export default userSignup;
