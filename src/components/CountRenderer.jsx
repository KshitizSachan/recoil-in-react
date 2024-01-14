import { useRecoilValue } from "recoil";
import {countAtom, evenSelector} from "../store/atoms/count";

const CountRenderer =() =>{
const count= useRecoilValue(countAtom);
const isEven = useRecoilValue(evenSelector)

    return (<div>
    <div>
    {count}
    </div>
      
      {isEven? "It is even":null}
    </div>)
  }
export default CountRenderer;  