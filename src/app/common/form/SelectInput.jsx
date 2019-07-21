import React from 'react'
import { Form, Label, Select} from 'semantic-ui-react'

const SelectInput = ({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: {touched, error}
}) => {
  console.log(multiple)
  return (
    <Form.Field error={touched && !!error}>
      <Select 
        value={input.value || null}
        onChange={(event, selectedItem) => input.onChange(selectedItem.value)}
        placeholder={placeholder}
        options={options}
      />
      {touched && error && <Label basuc color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default SelectInput
