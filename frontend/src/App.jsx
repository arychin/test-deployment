import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {

  const [data,setData] = useState('')

  const getData = async () => {
    const response = await Axios.get("http://localhost:3000")
    setData(response.data)
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <div>
      {data}
    </div>
  )
}

export default App