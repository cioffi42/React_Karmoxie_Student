import React  from 'react';
import Person from './Person.js'

function PeopleList(props) {
    return(
        <div>
            <Person name={props.people[0]} />
            <Person name={props.people[1]} />
            <Person name={props.people[2]} />
        </div>
    )
}

export default PeopleList;