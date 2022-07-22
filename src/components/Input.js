import React, { useState } from 'react'


export default function Input({ addPerson }) {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [gender, setGender] = useState('');

    const haldleSubmit = (e) => {
        e.preventDefault();
        if (fName.length < 1) {
            window.alert('First is required!')
            return;
        }
        const person = {
            fName,
            lName,
            gender
        }
        addPerson(person);
        setFName('');
        setLName('');
        setGender('');
    }

    return (
        <div className='inner'>
            <h1>Input Component</h1>
            <form className='input-fields'>
                <input type="text" placeholder='First Name' value={fName} onChange={e => setFName(e.target.value)} required />
                <input type="text" placeholder='Last Name' value={lName} onChange={e => setLName(e.target.value)} required />
                <select name="gender" id="gender" onChange={e => setGender(e.target.value)} value={gender}>
                    <option value="">Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type='submit' className='submit-btn' onClick={haldleSubmit}>Submit</button>
            </form>
        </div>
    )
}
