import React from 'react'
import { Form, Label } from 'semantic-ui-react'

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  console.log(placeholder)
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} rows={rows}/>
      {touched && error && <Label basuc color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default TextArea
