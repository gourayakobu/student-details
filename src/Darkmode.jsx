import React, {useState} from 'react'

const Darkmode = () => {
const [dark, setdark] = useState(false)


return(
 <div style={{backgroundColor: dark? "black" : "white", color: dark? "white" : "black"}} className="card-dark">
 <button onClick={() => setdark(!dark)}> Dark</button> 
 <h1>{dark? "Dark mode":"light mode"}</h1>
        </div>
    )
}

export default Darkmode