import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
import './PhoneList.scss'

function PhoneList() {
  const [viewContacts, setViewContacts] = useState(false);

   //get contact list titles
   let contactlistArray;

   const { loading, error, data } = useQuery(GET_CONTACTLISTS);
   if (loading) return 'Loading...';
   if (error) return `Error! ${error.message}`;
   if(!loading && !error){
   contactlistArray = data.contactList.contactlists
   }
  const openContacts = () =>{
    setViewContacts(true)
  }
  return (
    <div>
      {viewContacts ?
      <div className="contact-list">
        {contactlistArray.map((contactlists) =>{
          return contactlists.contacts.map((contact)=>{
            return <div>
              <p>{contact.firstname}</p>
              <p>{contact.lastname}</p>
              <p>{contact.phonenumber}</p>
            </div>
          });
        }
        )}
      </div>
      :
      <button className="phone-list-button" onClick={openContacts}>Contacts</button>
      }

    </div>
  )
}

export default PhoneList