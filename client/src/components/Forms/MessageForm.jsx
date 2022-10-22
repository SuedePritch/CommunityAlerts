import React from 'react'

function MessageForm() {
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
                                {/* {communityNamesArray.map((community)=>{
                                    return <option value={community._id} key={community._id}>{community.communityname}</option>
                                })} */}
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