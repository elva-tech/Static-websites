import { z } from "zod";

export const ROLES = ["Home Buyer", "Investor", "NRI", "Real-Estate Professional", "Other"] as const;

export const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ()-]{7,20}$/, "Please enter a valid mobile number")
    .refine((v) => v.replace(/\D/g, "").length >= 8 && v.replace(/\D/g, "").length <= 15, "Please enter a valid mobile number"),
  role: z.enum(ROLES, { errorMap: () => ({ message: "Please choose an option" }) }),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
  website: z.string().max(0).optional().or(z.string()),
});

export type LeadInput = z.infer<typeof leadSchema>;
