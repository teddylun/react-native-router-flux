import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form/immutable';

const submit = values => {
  // use toJS() to cast to plain object
  console.log('submitting form', values.toJS())
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput}/>
}

const Form = (props) => {
  const { handleSubmit } = props
  return (
    <View style={styles.container}>
      <Text>Email: </Text>
      <Field name="email" component={renderInput}></Field>
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}


export default reduxForm({
  form: 'test'
})(Form)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  }
});
