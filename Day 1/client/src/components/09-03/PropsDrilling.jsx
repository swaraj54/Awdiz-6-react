import React from 'react'
import Children from './Children'

const PropsDrilling = ({ students, counter }) => {
    // console.log(students, "students")
    return (
        <div>
            <Children students={students} counter={counter} />
        </div>
    )
}

export default PropsDrilling