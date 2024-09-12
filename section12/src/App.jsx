import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotionImage } from "./util/get-emotion-image";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-09-09").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-09-08").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-08-17").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav("/new");
  // };

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* <div> vite의 이미지 최적화를 사용할 수 없음
        <img src={"/emotion1.png"} />
        <img src={"/emotion2.png"} />
        <img src={"/emotion3.png"} />
        <img src={"/emotion4.png"} />
        <img src={"/emotion5.png"} />
      </div> */}
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div> */}

      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      /> */}

      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      <a href="/">Home</a> a 태그 사용 시 화면 새로 고침 발생함
        <a href="/new">New</a>
        <a href="/diary">Diary</a>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button> */}
      {/* <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "hello");
        }}
      >
        일기 추가 테스트{" "}
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다");
        }}
      >
        일기 수정 테스트{" "}
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트{" "}
      </button> */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
