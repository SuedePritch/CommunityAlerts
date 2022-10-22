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
                    <div className='form-field message '>
                        <label htmlFor="community">Community</label>
                        <select name= 'community' type='community' id='community'
                            onChange={handleChange}>
                                <option value="null">Select Your Community</option>
                                {/* {communityNamesArray.map((community)=>{
                                    return <option value={community._id} key={community._id}>{community.communityname}</option>
                                })} */}
                            </select>
                    </div>
                    </div>
                    <div className='form-field message'>
                        <label htmlFor="password">Message</label>
                        <textarea name='password' type='password' id='password' autoComplete="current-password"
                            onChange={handleChange}></textarea>
                    </div>
                    <button className='form-field message form-field-button ' type='button' onClick={handleFormSubmit}>Send Message </button>
            </form>
    </div>
  )
}

export default MessageForm