/* @flow weak */

import React, {Component} from 'react';
import { reduxForm } from 'redux-form/immutable';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import {
  Input,
  Select,
  Switch,
} from 'react-native-clean-form/redux-form-immutable';
import{
  View,
  Text,
} from 'react-native';

const onSubmit = (values, dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values.toJS())
      resolve()
    }, 1500)
  })
}

const countryOptions = [
  { label: 'Denmark', value: 'DK' },
  { label: 'Germary', value: 'DE' },
  { label: 'United State', value: 'US'}
]

class CleanForm extends Component {
  render() {
    const { handleSubmit, submitting} = this.props
    return (

      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <Input name="first_name" label="First name" placeholder="Teddy" />
            <Input name="last_name" label="Last name" placeholder="Lun" />
            <Input name="email" label="Email" placeholder="something@domain.com"/>
            <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" />
          </Fieldset>
          <Fieldset label="Shipping details" last>
            <Input name="address" label="Address" placeholder="Hejrevej 33" />
            <Input name="city" label="City" placeholder="Copenhagen" />
            <Input name="zip" label="ZIP Code" placeholder="2400" />
            <Select
              name="country"
              label="Country"
              options={countryOptions}
              placeholder="Denmark"
            />
            <Switch label="Save my details" border={false} name="save_details"/>
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right"
            onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}


export default reduxForm({
  form: 'Form',
  validate: values => {
    const errors = {}
    values = values.toJS()

    if (!values.first_name) {
      errors.first_name = 'First name is requred.'
    }

    if (!values.last_name) {
      errors.last_name = 'Last name is requried.'
    }

    if (!values.email) {
      errors.email = 'Email is required.'
    }

    return errors
  }
})(CleanForm);
