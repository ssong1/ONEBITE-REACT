import "./App.css";
import Viewer from "./components/Viewer";
import Controler from "./components/Controller";
import { useState } from "react";

function App() {
  // 스테이트를 계층 구조상에서 위로 끌어올려 그 아래에 있는 컴포넌트들이 모두
  // 공유할 수 있게 하는 방법을 스테이트 끌어올리기(state lifting) 라고 함
  const [count, setCount] = useState(0);

  // 이벤트 핸들러 함수를 Controller 컴포넌트에 props로 전달
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controler onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
