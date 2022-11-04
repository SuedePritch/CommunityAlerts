import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
function MessageForm() {
    const [messageForm, setMessageForm] = useState({recipients: {}, message:''})
    const messageAPIUrl ="http://localhost:3007/api/messages"
  //get contact list titles
  let contactlistTitleArray;

  const { loading, error, data } = useQuery(GET_CONTACTLISTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if(!loading && !error){
  contactlistTitleArray = data.contactList.contactlists
  }


  const sendMessages = (event) =>{
    event.preventDefault();
    fetch(messageAPIUrl, {method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify({
        body: messageForm.message, 
        from: '+18704937503', 
        to: messageForm.recipients.split(',')
    })}).then(res => res.json());
}

    const handleChange =(event)=>{
        const { name, value } = event.target;
            setMessageForm({
                ...messageForm,
                [name]: value,
            });
            console.log(messageForm);
       
    }
 






  return (
    <div>
        <form className='form'>
                    <div className='form-field message'>
                    <div className='form-field message'>
                        <label htmlFor="recipients">Send Message To:</label>
                        <select name='recipients' type='recipients' id='recipients' onChange={handleChange}>
                                <option value="null">Select Recipients</option>
                                {contactlistTitleArray.map((contactlist)=>{
                                    return <option value={
                                        contactlistTitleArray.map((contactlist)=>{
                                            const phonenumberArray = []
                                            return contactlist.contacts.map((contacts)=>{
                                                    phonenumberArray.push(contacts.phonenumber)
                                                    return phonenumberArray
                                                
                                                
                                            })
                                        })
                                    } key={contactlist._id}>{contactlist.contactListTitle}</option>
                                })}
                            </select>
                    </div>
                    </div>
                    <div className='form-field message messagetextarea'>
                        <label htmlFor="message">Message</label>
                        <textarea name='message' type='message' id='message'
                            onChange={handleChange}></textarea>
                    </div>
                    <button className='form-field message form-field-button ' type='button' onClick={sendMessages}>Send Message </button>
            </form>
    </div>
  )
}

export default MessageForm