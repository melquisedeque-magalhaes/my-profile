'use client'
import { ArrowRight, Circle } from 'lucide-react'
import { ButtonPrimary } from './button-primary'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string({
    required_error: 'Digite seu nome!',
  }),
  email: z
    .string({
      required_error: 'Digite seu e-mail',
    })
    .email({
      message: 'Digite um e-mail valido',
    }),
  msg: z.string().optional(),
})

type FormType = z.infer<typeof formSchema>

export function FormContact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit({ email, name, msg }: FormType) {
    try {
      setIsLoading(true)

      await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          msg,
        }),
      })

      toast.success('E-mail enviado com sucesso!')
    } catch {
      console.log('err')
      toast.error('Ops! ocorreu um erro em enviar seu e-mail')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-[488px] w-full"
    >
      <div className="flex flex-col gap-2">
        <input
          {...register('name')}
          placeholder="Nome..."
          className="py-3 px-4 bg-surface-background rounded-lg text-text-secondary border border-surface-background focus:border-secondary-500 outline-none"
        />

        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <input
          {...register('email')}
          placeholder="E-mail..."
          className="py-3 px-4 bg-surface-background rounded-lg text-text-secondary border border-surface-background focus:border-secondary-500 outline-none"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          {...register('msg')}
          placeholder="Sua mensagem..."
          className="py-3 px-4 h-40 resize-none bg-surface-background rounded-lg text-text-secondary border border-surface-background focus:border-secondary-500 outline-none"
        />
        {errors.msg && (
          <span className="text-red-500 text-sm">{errors.msg?.message}</span>
        )}
      </div>

      <div className="w-[225px]">
        <ButtonPrimary disabled={isLoading} type="submit">
          {isLoading ? (
            <Circle className="w-6 h-6 animate-spin" />
          ) : (
            <>
              Enviar Mensagem
              <ArrowRight className="text-text-primary w-6 h-6" />
            </>
          )}
        </ButtonPrimary>
      </div>
    </form>
  )
}
