import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';

const validate = (values = {}) => {
  const errors = {};

  if (!values.name)
    errors.name = 'Required';
  else if (values.name.length < 5)
    errors.name = 'The name is too short';

  if (!values.lastName)
    errors.lastName = 'Required';
  else if (values.lastName.length < 5)
    errors.lastName = 'The last name is too short';

  if (!values.radio)
    errors.radio = 'Required';

  return errors;
}

function App() {
  return (
    <Formik 
      initialValues={{ name: '', lastName: '', email: '', type: '', radio: '' }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="First Name" />
        <br />
        <TextInput name="lastName" label="Last Name" />
        <br />
        <TextInput name="email" label="Email" />
        <br />
        <Select name="type" label="Type">
          <option value="">Select type</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <br />
        <Radio name="radio" value="radio1" label="Radio 1" />
        <Radio name="radio" value="radio2" label="Radio 2" />
        <Radio name="radio" value="radio3" label="Radio 3" />
        <ErrorMessage name="radio" />
        <br />
        <Checkbox name="accept">Aceptar T&C</Checkbox>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
