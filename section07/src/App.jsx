import "./App.css";
import Viewer from "./components/Viewer";
import Controler from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  // 스테이트를 계층 구조상에서 위로 끌어올려 그 아래에 있는 컴포넌트들이 모두
  // 공유할 수 있게 하는 방법을 스테이트 끌어올리기(state lifting) 라고 함
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트: 탄생(의존성 배열을 빈 배열로)
  useEffect(() => console.log("mount"), []);

  // 2. 업데이트: 변화, 리렌더링(의존성 배열 생략)
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트: 죽음

  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]); // 의존성 배열, dependency array, deps

  // 이벤트 핸들러 함수를 Controller 컴포넌트에 props로 전달
  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count); // state는 비동기로 업데이트되기 때문에 오답
    // 변경된 스테이트의 값을 바로 사용해서 무언가 Side Effect에 해당하는
    // 부가적인 작업을 진행하려면 useEffect 사용해야 함
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controler onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
