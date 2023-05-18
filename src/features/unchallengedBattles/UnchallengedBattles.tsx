import { useEffect, useState } from 'react'
import axios from 'axios'

function UnchallengedBattles() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [battles, setBattles] = useState([])  

  useEffect(() => {
    // TO DO check for ID (user is loggedin 
    setIsLoading(true)
    axios.get(`http://localhost:5000/battles`)
      .then((res) => {
        setBattles(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong...</div>
  }

  return (
    <div id="unchallenged-battles">
      <h2>Unchallenged Battles</h2>
      { battles?.length === 0 && 
        <div className="no-battles">
          It looks like it's time to setup a new battle! 
        </div>
      }
      <table >
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Number of Planes</th>
            <th>Sky Size</th>
          </tr>
        </thead>
        <tbody>
          { battles && battles.length > 0 &&
            battles.map((index,battles) => (
            <tr key={index}>
              <td>{battles[index][0]}</td>
              <td>{battles[index][1]}</td>
              <td>{battles[index][2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UnchallengedBattles
