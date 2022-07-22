import React from 'react'
import Context from '../Context';
import { useContext } from 'react';

export default function Output({ deletePerson }) {

    const list = useContext(Context);
    return (
        <div className='outer'>
            <h1>List Component</h1>
            <ul>
                {list.map((eachPerson, index) => {
                    let fullName = '';
                    if (eachPerson.gender === '') {
                        fullName = `${eachPerson.fName} ${eachPerson.lName}`
                    }
                    else if (eachPerson.gender === 'male') {
                        fullName = `Mr. ${eachPerson.fName} ${eachPerson.lName}`
                    }
                    else {
                        fullName = `Ms. ${eachPerson.fName} ${eachPerson.lName}`
                    }
                    return (<span key={`${{ fullName }}-${index}`}>
                        <li>
                            <div className='full-name-div'>{fullName} <button className='delete-person' onClick={() => deletePerson(index)}>X</button></div>
                        </li>

                    </span>);
                })}
            </ul>
        </div>
    )
}
