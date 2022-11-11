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
  const closeContacts = () =>{
    setViewContacts(false)
  }
  return (
    <div>
      {viewContacts ?
      <div className="contact-list">
        <button className="close-contact-button" onClick={closeContacts}>x</button>
        {contactlistArray.map((contactlists) =>{
          return <div>
            <h2>{contactlists.contactListTitle}</h2>
            {contactlists.contacts.map((contact)=>{
              return <div className='contact'>
                <p>{contact.firstname} {contact.lastname}</p>
                <p>{contact.phonenumber}</p>
              </div>
            })}
          </div>
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