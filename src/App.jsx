import { RecoilRoot } from "recoil"
import Count from "./components/Count"


function App() {


  return (
    <div style={{margin:"10px"}}>
    <RecoilRoot>
      <Count />
      </RecoilRoot>
    </div>
  )
}

export default App