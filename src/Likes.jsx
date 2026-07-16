import {useState} from "react"

const Likes = () => {
    
//   let [count,setcount] = useState(0)

let [name,Setname] = useState("surendra")
let [count,setcount] = useState(20)


    function increment(){
        setcount(count+1)
        console.log(count)
    }
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={increment}>
        like
      </button>
    </div>
  )
}

export default Likes