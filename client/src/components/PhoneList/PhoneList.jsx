import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
import './PhoneList.scss'

function PhoneList() {
  const [viewContacts, setViewContacts] = useState(false);

   //get contact list titles
   let contactlistTitleArray;

   const { loading, error, data } = useQuery(GET_CONTACTLISTS);
   if (loading) return 'Loading...';
   if (error) return `Error! ${error.message}`;
   if(!loading && !error){
   contactlistTitleArray = data.contactList.contactlists
   }
  const openContacts = () =>{
    setViewContacts(true)
  }
  return (
    <div>
      {viewContacts ?
      <div className="contact-list">

      </div>
      :
      <button className="phone-list-button" onClick={openContacts}>Contacts</button>
      }

    </div>
  )
}

export default PhoneList