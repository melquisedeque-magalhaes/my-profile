import { EmailTemplate } from '@/components/email-template'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  msg: z.string().optional().default('sem msg'),
})

export async function POST(request: NextRequest) {
  try {
    const res = await request.json()

    const { email, name, msg } = sendEmailSchema.parse(res)

    const data = await resend.emails.send({
      from: email,
      to: ['melqui.sodre15@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ name, msg }),
      text: 'meu teste',
    })

    console.log('data', data)

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
