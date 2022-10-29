import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CONTACTLISTS } from '../../utils/queries';
function MessageForm() {
  //get community names
  let contactlistArray;
  const { loading, error, data } = useQuery(GET_CONTACTLISTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if(!loading && !error){
  contactlistArray = data.contactList.contactlists
  }


    const handleChange = ()=>{
        console.log("sent message")
    }
    const handleFormSubmit = ()=>{
        console.log("sent message")
    }
  return (
    <div>
        <form className='form'>
                    <div className='form-field message'>
                    <div className='form-field message'>
                        <label htmlFor="recipients">Send Message To:</label>
                        <select name= 'recipients' type='recipients' id='recipients'
                            onChange={handleChange}>
                                <option value="null">Select Recipients</option>
                                {contactlistArray.map((contactlist)=>{
                                    return <option value={contactlist._id} key={contactlist._id}>{contactlist.contactListTitle}</option>
                                })}
                            </select>
                    </div>
                    </div>
                    <div className='form-field message messagetextarea'>
                        <label htmlFor="message">Message</label>
                        <textarea name='message' type='message' id='message'
                            onChange={handleChange}></textarea>
                    </div>
                    <button className='form-field message form-field-button ' type='button' onClick={handleFormSubmit}>Send Message </button>
            </form>
    </div>
  )
}

export default MessageForm