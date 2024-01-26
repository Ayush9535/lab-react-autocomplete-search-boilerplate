import { useState } from 'react'
import './App.css'
import countryData from "./resources/countryData.json"

function App() {
  const [letter, setletter] = useState("")
  const [showSug , setSug] = useState(true)

  let handleChange = (e) =>{
    // console.log(e.target.value)
    setletter(e.target.value)
    setSug(true)
  }

  // console.log(countryData[0])

  let suggestion = countryData.filter((ele)=>{
    if (ele.name.toUpperCase().startsWith(letter.toUpperCase())){
      return ele.name
    }
  })

  // console.log(suggestion)

  let handleList = (e) =>{
    if (e.keyCode === 27){
      setSug(false)
      console.log("Escape")
    }
  }
  return (
    <>
      <h2>Search Country</h2>

      <input type="text" onChange={handleChange} list='suggestions' onKeyDown={handleList}/>
      <datalist id='suggestions'>
        {showSug && suggestion.map((ele , i)=>{
          return <option key={i}>{ele.name}</option>
        })} 
      </datalist>
    </>
  )
}

export default App
