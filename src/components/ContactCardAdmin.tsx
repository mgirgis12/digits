
'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
import type { Note } from '@prisma/client';
import type { Contact } from '@/lib/validationSchemas';
import NoteItem from '@/components/NoteItem';

/** Render a single contact card on the List Contacts page. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact & { owner: string }; notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image
        src={contact.image}
        alt={`${contact.firstName} ${contact.lastName}`}
        width={75}
        roundedCircle
      />
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {contact.firstName} {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {contact.address}
      </Card.Subtitle>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => <NoteItem key={note.id} note={note} />)}
    </ListGroup>
  </Card>
);

export default ContactCardAdmin;
