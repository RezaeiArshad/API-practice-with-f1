import { useScreenSize } from "../context"
import "../../files.css/list/list.css"
import fetchData from "../fetch"
import { useEffect, useState } from "react"

type DriverType = {
  driver_number: number;
  full_name: string;
  team_name: string;
  team_colour: string;
}

function List() {
  const {isMobile} = useScreenSize()
  const [drivers, setDrivers] = useState<DriverType[] | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData("drivers?session_key=latest")
      console.log(data)
      setDrivers(data)
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