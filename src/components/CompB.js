import { useRecoilState } from "recoil";
import { textState } from "../recoil/atom";
const CompB = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <h1>B {text}</h1>
      <button onClick={() => setText("Ismail")}>Change Name</button>
    </div>
  );
};

export default CompB;
