import React, { Component } from 'react';
import shortid from 'shortid';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { Form } from './Form.styled';
import { Button, Input, InputNumber, Label } from 'components/commons';

// const mySchema = yup.object().shape({
//   name: yup.string().min(2).required('Name is required'),
//   number: yup.string().length(9).required('Number is required'),
// });

export class ContactForm extends Component {
  // Контрольована форма
  state = {
    name: '',
    number: '',
  };

  nameInput = shortid.generate();
  numberInput = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      // <Formik
      //   initialValues={this.state}
      //   validationSchema={mySchema}
      //   onSubmit={this.hadleSubmit}
      // >
      // {props => ()};
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInput}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Rosie Simpson"
            required
            id={this.nameInput}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor={this.numberInput}>
          Number
          <InputNumber
          {...this.props} mask="+3\8 (999) 999 99 99" maskChar=" "
            // format="+38 (###) ###-##-##"
            // allowEmptyFormatting
            // mask="_"
            type="tel"
            name="number"
            placeholder='+38 (000) 000-00-00'
            required
            id={this.numberInput}
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
      //</Formik>
    );
  }
}
