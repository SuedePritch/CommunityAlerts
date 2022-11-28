import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_CONTACTLIST } from '../../utils/mutations';
function CreateContactList({setAddContactListModal}) {
   // BUILD MUTATION FOR LOGIN_USER
   const [createcontactList] = useMutation(CREATE_CONTACTLIST); 
   const [createContactListFormData, setCreateContactListFormData] = useState({ contactlisttitle: ''});
  const createContactList = async () =>{
        try {
            await createcontactList ({
                variables: { contactListTitle: createContactListFormData.contactlisttitle},
            });
        } catch (e) {
        console.log(e)
            alert('Creating Contact List Failed')
        }
        setAddContactListModal(false)
}

    const handleChange =(event)=>{
        const { name, value } = event.target;
            setCreateContactListFormData({
                ...createContactListFormData,
                [name]: value,
            });
       
    }
 
  return (
    <div>
        <form className='form'>
                    <div className='form-field message'>
                    </div>
                    <div className='form-field login'>
                        <label htmlFor="contactlisttitle">Contract List Title</label>
                        <input name= 'contactlisttitle' type='contactlisttitle' id='contactlisttitle' 
                            onChange={handleChange}></input>
                    </div>
                    
                    <button className='form-field message form-field-button ' type='button' onClick={createContactList}>Add Contact List</button>
            {/* <button className='add contact-button' onClick={exitAddContactListModal}>+</button> */}
            {/* <button className='close contact-button' onClick={exitAddContactListModal}>x</button> */}
            </form>
    </div>
  )
}

export default CreateContactList