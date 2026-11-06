
'use client';

import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';
import type { Contact } from '@/lib/validationSchemas';

/** Render a single contact card on the List Contacts page. */
const ContactCard = ({ contact }: { contact: Contact & { id: number } }) => (
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
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
