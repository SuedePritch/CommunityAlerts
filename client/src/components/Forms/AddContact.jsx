import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
import { ADD_CONTACT } from '../../utils/mutations';
function AddContact() {
   // BUILD MUTATION FOR LOGIN_USER
   const [addcontact] = useMutation(ADD_CONTACT); 
   const [addContactFormData, setAddContactFormData] = useState({ firstname: '', lastname: '', phonenumber: ''});

  let contactlistTitleArray;

  const { loading, error, data } = useQuery(GET_CONTACTLISTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if(!loading && !error){
  contactlistTitleArray = data.contactList.contactlists
  }


  const sendMessages = (event) =>{
    // event.preventDefault();
    // AddContact.recipients.split(',').forEach((phonenumber)=>{
    //     fetch(messageAPIUrl, {method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify({
    //         body: AddContact.message, 
    //         from: '+18704937503', 
    //         to: phonenumber
    //     })}).then(res => res.json());
    // })
}

    const handleChange =(event)=>{
        const { name, value } = event.target;
            setAddContactFormData({
                ...addContactFormData,
                [name]: value,
            });
       
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
                                    return <option value={contactlist.contacts.map((contact)=>{
                                        return contact.phonenumber
                                    })
                                    } key={contactlist._id}>{contactlist.contactListTitle}</option>
                                })}
                            </select>
                    </div>
                    </div>
                    <div className='form-field login'>
                        <label htmlFor="firstname">First Name</label>
                        <input name= 'firstname' type='firstname' id='firstname' 
                            onChange={handleChange}></input>
                    </div>
                    <div className='form-field login'>
                        <label htmlFor="lastname">Last Name</label>
                        <input name='lastname' type='lastname' id='lastname' 
                            onChange={handleChange}></input>
                    </div>
                    <div className='form-field login'>
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input name='phonenumber' type='phonenumber' id='phonenumber' 
                            onChange={handleChange}></input>
                    </div>
                    <button className='form-field message form-field-button ' type='button' onClick={sendMessages}>Send Message </button>
            </form>
    </div>
  )
}

export default AddContact