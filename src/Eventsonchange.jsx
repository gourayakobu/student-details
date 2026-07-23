import React, {useState} from 'react'

const Eventsonchange = () => {


    const [name, setName] = useState("")
    return(

        <>
        <label >Username: </label>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
         <p>Name: {name}</p>
        </>
       

    )
}

export default Eventsonchange 