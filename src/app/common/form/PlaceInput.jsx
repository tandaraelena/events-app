import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import { Form, Label, Segment, List } from "semantic-ui-react";
  // console.log(PlacesAutocomplete)


const PlaceInput = ({
  input:
      {onBlur,
      onChange,
      value,
      },
      placeholder,
      width,
      options,
  meta: {touched, error}
      }) => (
    <PlacesAutocomplete 
      value={value}
      onChange={onChange}
      searchOptions={options}
    >
      {({ getInputProps, getSuggestionItemProps, loading, suggestions }) => 
        (<Form.Field error={touched && !!error}>
    {console.log(suggestions)}
            <input placeholder={placeholder} {...getInputProps({onBlur, placeholder})}/>
            {touched && error && <Label basic color='red'>{error}</Label>}
            {suggestions.length > 0 && (
              <Segment style={{position: 'absolute', zIndex:'10', width: '100%', marginTop: '0' }}>
                {loading && <div>Loading...</div>}
                <List selection>
                  {suggestions.map(suggestion => (
                    <List.Item
                      {...getSuggestionItemProps(suggestion)}
                    >
                      <List.Header>
                        {suggestion.formattedSuggestion.mainText}
                      </List.Header>
                      <List.Description>
                        {suggestion.formattedSuggestion.secondaryText}
                      </List.Description>
                    </List.Item>
                  ))}
                </List>
              </Segment>
              )}
            {/* </input> */}
        </Form.Field>
      )}
    </PlacesAutocomplete>
)
export default PlaceInput
