import { useRecoilState } from "recoil";
import { textState, arrayState } from "../recoil/atom";
const CompA = () => {
  const [text, setText] = useRecoilState(textState);
  const [array, setArray] = useRecoilState(arrayState);
  return (
    <div>
      <h1>A {text}</h1>
      {array.map((arr) => (
        <p>{arr}</p>
      ))}
    </div>
  );
};

export default CompA;
