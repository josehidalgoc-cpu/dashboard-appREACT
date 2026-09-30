import type { Contact } from '../types/contact';
import ContactRow from './ContactRow';

const contacts: Contact[] = [
  { id: 1, name: 'Maria Lopez', email: 'maria@gmail.com' },
  { id: 2, name: 'Carlos Ruiz', email: 'carlos@gmail.com' }
];

function ContactList() {
  return (
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th scope="col1">#</th>
                <th scope="col2">Nombre</th>
                <th scope="col3">Email</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
        </tbody>
    </table>
  );
}

export default ContactList;