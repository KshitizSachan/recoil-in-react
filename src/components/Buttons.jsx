import { useRecoilState, useSetRecoilState } from "recoil";
import {countAtom} from "../store/atoms/count";

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom)
  // const [count, setCount] = useRecoilState(countAtom)


  // setCount(c => c+1); is equivalent to setCount(count+1)
  // therefore we can use useRecoil

  console.log("render in button");

  const increase = () =>{
    setCount(count => count+1);
  }
  const decrease = () =>{
    setCount(count => count-1);
  }

    return <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  }

export default Buttons;