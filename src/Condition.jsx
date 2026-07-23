import React from 'react'

const Condition = () => {
//         const age = 17
//         if (age >= 18) {
//             return <h1>You are age is grater  than 18.</h1>
//         }
//         return <h1>You age is less than 18.</h1>

    return(
        <div> 
            <h1>
                { age >= 18? "age is greater tha 18 " : "age is less than 18"}
            </h1>
        </div>
    )
}

export default Condition