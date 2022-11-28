import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
import { ADD_CONTACT } from '../../utils/mutations';
function CreateContactList({setAddContactListModal}) {
   // BUILD MUTATION FOR LOGIN_USER
   const [addcontactList] = useMutation(ADD_CONTACT); 
   const [addContactListFormData, setAddContactListFormData] = useState({ firstname: '', lastname: '', phonenumber: ''});

  let contactlistTitleArray;

  const { loading, error, data } = useQuery(GET_CONTACTLISTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if(!loading && !error){
  contactlistTitleArray = data.contactList.contactlists
  }


  const addContactList = async () =>{
        try {
            await addcontactList ({
                variables: { 
                    contactLists: addContactListFormData.contactLists,
                    contacts:{
                        firstname: addContactListFormData.firstname,
                        lastname: addContactListFormData.lastname,
                        phonenumber: `+1${addContactListFormData.phonenumber}`
                        }
                    },
            });
        } catch (e) {
        console.log(e)
            alert('Add Contact Failed')
        }
        setAddContactListModal(false)
}

    const handleChange =(event)=>{
        const { name, value } = event.target;
            setAddContactListFormData({
                ...addContactListFormData,
                [name]: value,
            });
       
    }

    const exitAddContactListModal = () =>{
        setAddContactListModal(false)
    }
 






  return (
    <div>
        <form className='form'>
                    <div className='form-field message'>
                    <div className='form-field message'>
                        <label htmlFor="contactLists">Add Contact to:</label>
                        <select name='contactLists' type='contactLists' id='contactLists' onChange={handleChange}>
                                <option value="null">Select Community</option>
                                {contactlistTitleArray.map((contactlist)=>{
                                    return <option value={contactlist._id}
                                    key={contactlist._id}>{contactlist.contactListTitle}</option>
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
                    <button className='form-field message form-field-button ' type='button' onClick={addContactList}>Add Contact</button>
            <button className='add contact-button' onClick={exitAddContactListModal}>+</button>
            <button className='close contact-button' onClick={exitAddContactListModal}>x</button>
            </form>
    </div>
  )
}

export default CreateContactList