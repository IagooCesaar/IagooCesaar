import React from 'react';

import '../styles/pages/contact.css'

import contacts from '../database/contacts.json'
import { ContactCard } from '../components/ContactCard';

const Contact: React.FC = () => {
  console.log(contacts)
  return (
    <div className="mainContainer contactContainer">
      <section>
        <div>
          <h2>Contact</h2>
          <p>If you want to contact me for networking, to offer a job, or just to chat, try one of the following means of contact:</p>
        </div>
      </section>
      <main>
        <ul>
          { contacts && (
            contacts.map(data => 
              <ContactCard cardData={data} />
            )
          )}
        </ul>
      </main>
    </div>
  );
}
export { Contact }