import React from 'react';
import { Form, actions, Control, Field, Errors } from 'react-redux-form';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(user) {
    const { dispatch } = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
    const somePromise = new Promise((resolve) => {
      /* eslint-disable no-console */
      console.log(user);
      /* eslint-enable no-console */
      setTimeout(() => { resolve(true); }, 1000);
    });
    dispatch(actions.submit('user', somePromise));
  }
  render() {
    return (
      <Form model="user" onSubmit={v => console.log(v)}>
        <div>
          <label>First name:</label>
          <Control.text model="user.firstName" validators={{len: (val) => val.length > 8}} />
          <Errors model=".firstName" messages={{
            len: 'len must be > 4'
          }} />
        </div>

        <div>
          <label>Last name:</label>
          <Control model="user.lastName" />
        </div>

        <Field model="user.bag">
          <label>
            <input type="radio" value="paper" />
            <span>Paper</span>
          </label>
          <label>
            <input type="radio" value="plastic" />
            <span>Plastic</span>
          </label>
        </Field>
        <button type="submit">
          Finish registration!
        </button>
        <input type="reset" value="fasdf" title="reset"/>
      </Form>
    );
  }
}

UserForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  user: React.PropTypes.shape({
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default UserForm;
