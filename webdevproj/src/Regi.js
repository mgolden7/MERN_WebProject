import React from 'react'

const Registration = () => {
  return (
    <div className='registration'>
        <form className='registrationForm'>Create Account
            <div className='registrationFormQuestions'>
                <label className='inputLabel'>name
                    <input type='text' placeholder='name'></input>
                </label>
                <label className='inputLabel'>email
                    <input type='text' placeholder='name'></input>
                </label>
                <label className='inputLabel'>confirm email
                    <input type='text' placeholder='name'></input>
                </label>
                <label className='inputLabel'>password
                    <input type='text' placeholder='name'></input>
                </label>
                <label className='inputLabel'>confirm password
                    <input type='text' placeholder='name'></input>
                </label>
            </div>
            <button className='submitButton'>submit</button>
        </form>
    </div>
  )
}

export default Registration