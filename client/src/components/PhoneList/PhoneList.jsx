import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
import { DELETE_CONTACT } from '../../utils/mutations';
import './PhoneList.scss'
import AddContact from '../Forms/AddContact';
import CreateContactList from '../Forms/CreateContactList';

function PhoneList() {
  const [viewContacts, setViewContacts] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false)
  const [deletecontactmutation] = useMutation(DELETE_CONTACT)
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
  const deleteContact = async (event) =>{
    event.preventDefault();
        try {
            await deletecontactmutation ({
                variables: { 
                  contactLists: event.target.dataset.contactlistsid, 
                  contactid: event.target.dataset.contactid},
            });
            
        } catch (e) {
            alert('Delete Failed');
        }
  }

  return (
    <>
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
                <p>{contact.phonenumber.split('+1')}</p>
                <button className='delete-contact' data-contactlistsid={contactlists._id} data-contactid={contact._id} onClick={deleteContact}>
                  x
                </button>
              </div>
            })}
          </div>
        }
        )}
      </div>
      : addContactModal ?
      <AddContact setAddContactModal={setAddContactModal}/>:
    <button className="phone-list-button" onClick={openContacts}>Contacts</button>
    }
  {/* <CreateContactList/> */}
    </>
  )
}

export default PhoneList