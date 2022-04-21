import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const App = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{  
       alert:"Login Successfull !!"
      }}
      onSubmit={async () => {
        await new Promise((r) => setTimeout(r, 500));
        alert("Login Successfull !!!")
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="emailField"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          required="required"
        />
        <label htmlFor="password">Password</label>
        <Field
          id="pswField"
          name="password"
          type="password"
          required="required"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
