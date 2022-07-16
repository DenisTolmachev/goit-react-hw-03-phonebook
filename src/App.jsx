import { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import shortid from 'shortid';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/common/Notification.styled';
import { Container } from 'components/common/Container.styled';

const KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  

  componentDidMount() {
    const contacts = localStorage.getItem(KEY);
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  formSubmitHandler = data => {
    const addContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === addContact.name)
        ? alert(`${addContact.name} is already in contacts`)
        : { contacts: [addContact, ...contacts] }
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
  };

  getFiteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFiteredContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Notification>There are no contacts in the phone book.</Notification>
        )}
      </Container>
    );
  }
}
