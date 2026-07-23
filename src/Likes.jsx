import {useState} from 'react'

const Likes = () => {
  const students = [
    {
      name: 'surendra',
      age: 20,
      branch: 'cse'
    },
    {
      name: 'sumanth',
      age: 20,
      branch: 'cse'
    },
    {
      name: 'Aneesh',
      age: 20,
      branch: 'cse-aiml'
    }
  ]
  const [index, setIndex] = useState(0)

  function changeStudent() {
    setIndex((index + 1) % students.length)

  }

  return (
    <div className='likes'>
      <div className = 'student'>
      <h1>Name: {students[index].name}</h1>
      <h1>Age: {students[index].age}</h1>
      <h1>Branch: {students[index].branch}</h1>
      </div>
      <button onClick = {changeStudent} className='next-student'> 
        Next Student 
      </button>
         
     </div>
  )
}

export default Likes