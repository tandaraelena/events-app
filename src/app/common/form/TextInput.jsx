import React from 'react'
import { Form, Label } from 'semantic-ui-react'

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  meta: {touched, error}
}) => {
  console.log(input)
  return (
    <Form.Field error={touched && !!error}>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && error && <Label basuc color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default TextInput
