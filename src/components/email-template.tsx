import * as React from 'react'

interface EmailTemplateProps {
  name: string
  msg: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  msg,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>{msg}</p>
  </div>
)
