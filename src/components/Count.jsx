import Buttons from "./Buttons"
import CountRenderer from "./CountRenderer"


function Count() {
  console.log("render in count");
    return <div>
      <CountRenderer />
      <Buttons />
    </div>
  }

  export default Count;