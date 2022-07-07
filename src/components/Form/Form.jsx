import React, { Component } from 'react';
import shortid from 'shortid';
//import NumberFormat from 'react-number-format';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { Form } from './Form.styled';
import { Button, Input,InputNumber, Label } from 'components/commons';

// const mySchema = yup.object().shape({
//   name: yup.string().min(2).required('Name is required'),
//   number: yup.string().length(9).required('Number is required'),
// });

export class ContactForm extends Component {
  // Контрольована форма
  // state = {
  //   name: '',
  //   number: '',
  // };

  nameInput = shortid.generate();
  numberInput = shortid.generate();

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.props.onSubmit({
      name: form.elements.name.value,
      number: form.elements.number.value,
    });
    form.reset();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

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
            // value={this.state.name}
            // onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor={this.numberInput}>
          Number
          <InputNumber
            format="+38 (###) ###-##-##"
            allowEmptyFormatting
            mask="_"
            type="tel"
            name="number"
            required
            id={this.numberInput}
            value=""
            // onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
      //</Formik>
    );
  }
}
