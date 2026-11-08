
'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import type { Note } from '@prisma/client';
import type { Contact } from '@/lib/validationSchemas';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from '@/components/AddNoteForm';

/** Render a single contact card on the List Contacts page. */
const ContactCard = ({ contact, notes }: { contact: Contact & { id: number }; notes: Note[] }) => (
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
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => <NoteItem key={note.id} note={note} />)}
    </ListGroup>
    <AddNoteForm contactId={contact.id} />
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
