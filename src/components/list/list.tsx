import { useScreenSize } from "../context"
import "../../files.css/list/list.css"
import fetchData from "../fetch"


function List() {
  const {isMobile} = useScreenSize()
  console.log(fetchData("drivers"))
    return (
        <>
          {isMobile ?
          <div id="list">
            <h1>this is mobile</h1>
          </div>
           : 
          <div id="list">
            
          </div>}
        </>
    )
}

export default List