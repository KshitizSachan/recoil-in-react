import { useRecoilState } from "recoil";
import countAtom from "../store/atoms/count";

const Buttons = () => {
  const [count, setCount] = useRecoilState(countAtom)

  const increase = () =>{
    setCount(count+1);
  }
  const decrease = () =>{
    setCount(count-1);
  }

    return <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  }

export default Buttons;