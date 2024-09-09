import { useState, useEffect } from "react"
import MyComponents from "./Components/MyComponents"
import User from "./Components/User"
import gJson from "./assets/generated.json"
import Students from "./Components/Students"


function App() {

  const [gData, setGData] = useState([])

  useEffect(() => {
    setGData(gJson)
  }, [])

  const userInfo = [
    {
      id: 1,
      name: "Asif",
      city: "Dhaka"
    },
    {
      id: 2,
      name: "Sadat",
      city: "Dhaka"
    },
    {
      id: 3,
      name: "Abir",
      city: "Dhaka"
    },
    {
      id: 4,
      name: "Rakib",
      city: "Dhaka"  
    }
  ]

  return (
    <>
      <h1>React App</h1>
      <Sadat />
      <MyComponents />
      {userInfo.map((user) => (
        <User key={user.id} name={user.name} city={user.city} />
      ))}
      {gData && gData.map((data) => (
        <Students key={data._id} name={data.name} gender={data.gender} company={data.company} email={data.email} phone={data.phone} address={data.address} />
      )) 
      }
    </>
  )
}

export default App

function Sadat () {
  return (
    <>
      <h1>Sadat is not a bad boy!</h1>
      <p>Sada live in Dhaka</p>
      <button>Read more</button>
    </>
  )
}
