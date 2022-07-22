import React, { useState } from 'react'

export default function Input() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [gender, setGender] = useState('');

    const haldleSubmit = (e) => {
        e.preventDefault();
        console.log(fName)
        console.log(lName)
        console.log(gender)
    }
    return (
        <div className='inner'>
            <h1>Input Component</h1>
            <form className='input-fields'>
                <input type="text" placeholder='First Name' value={fName} onChange={e => setFName(e.target.value)} />
                <input type="text" placeholder='Last Name' value={lName} onChange={e => setLName(e.target.value)} />
                <select name="gender" id="" onChange={e => setGender(e.target.value)}>
                    <option value="">Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type='submit' className='submit-btn' onClick={haldleSubmit}>Submit</button>
            </form>
        </div>
    )
}
