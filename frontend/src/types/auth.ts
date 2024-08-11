import z from 'zod'


export const loginSchema = z.object({
    username:z.string({required_error:"Please enter Username"}).min(1,"Please enter Username"),
    password:z.string({required_error:"Please enter password"}).min(1,"Please enter Password"),
})

export type LoginType = z.infer<typeof loginSchema>;