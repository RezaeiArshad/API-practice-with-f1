import { useScreenSize } from "../context"
import "../../files.css/list/list.css"
import fetchData from "../fetch"
import { useEffect, useState } from "react"

type DriverType = {
  driver_number: number,
  full_name: string,
  team_name: string,
  team_colour: string,
}


function List() {
  const {isMobile} = useScreenSize()
  const [drivers, setDrivers] = useState<DriverType[] | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const driverData = await fetchData("drivers?session_key=latest")
      console.log(driverData)
      setDrivers(driverData)
    }
    loadData();
  }, [])

    return (
        <>
          {isMobile ?
          <div id="list">
            <h1>this is mobile</h1>
          </div>
           : 
          <div id="list">
            {drivers?.map((driver) => (
              <div className="driver" key={driver.driver_number}>
                <div style={{backgroundColor: `#${driver.team_colour}`}} className="driver-color"></div>
                <h5 className="driver-name">{driver.full_name}</h5>
                <h6 className="driver-team">{driver.team_name}</h6>
              </div>
            ))}
          </div>}
        </>
    )
}

export default List


const recoverSecret = function(triplets: string[][]): string {
  let holderHash = {}
  triplets.map((triplet: string[]) => {
    triplet.map((letter) => {
      holderHash[letter] = 1
    })
  })
  let holderArr = new Set(Object.keys(holderHash))
  triplets.map((triplet) => {
    for (let i = 2; i > 0; i--) {
      let previous = holderArr.findeIndex((element) => element === triplet[i - 1])
      let now = holderArr.findIndex((element) => element === triplet[i])
      holderArr[now]
    }
  })

  return "h"
}

console.log(recoverSecret([
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]))