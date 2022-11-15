import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
import './PhoneList.scss'
import AddContact from '../Forms/AddContact';

function PhoneList() {
  const [viewContacts, setViewContacts] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false)

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
    setAddContactModal(false)
  }
  const addContact = () =>{
    setAddContactModal(true)
    setViewContacts(false)
    console.log(addContactModal)
  }

  return (
    <div>
      {viewContacts ?
      <div className="contact-list-container">
        <button className="close contact-button" onClick={closeContacts}>x</button>
        <button className="add contact-button" onClick={addContact}>+</button>
        {contactlistArray.map((contactlists) =>{
          return <div className='contact-list' key={contactlists._id}>
            <h2>{contactlists.contactListTitle}</h2>
            {contactlists.contacts.map((contact)=>{
              return <div className='contact' key={Math.random()}>
                <p>{contact.firstname} {contact.lastname}</p>
                <p>{contact.phonenumber}</p>
              </div>
            })}
          </div>
        }
        )}
      </div>
      : addContactModal ?
      <AddContact/>:

      <button className="phone-list-button" onClick={openContacts}>Contacts</button>
      }

    </div>
  )
}

export default PhoneList