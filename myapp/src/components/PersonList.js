import React from 'react'
import Person from './Person'

function PersonList() {
    const Persons = ['Abcd', 'Recsc', 'Ewsfe'];
    // we can use index as a key here
    // but we should not use index as a key when our list will be dynamic
    // if our list is going to change (insert, delete, filter, sort), then we should not use index as a key
    // we should use index as a key only when our list doesn't have a unique id
    const printPerson = Persons.map((item, index) => <h1 key = {index}>{item}</h1>)
    return (
        <div>
            <Person names = {printPerson}/>
        </div>
    )
}


export default PersonList
