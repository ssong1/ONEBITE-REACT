const Viewer = ({ count }) => {
  // 오답
  // Viewer와 Controller 간 state 공유가 불가능 하기 때문
  // state는 부모 컴포넌트에서 자식 컴포넌트로만 props로 전달 가능
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div>현재 카운트: </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
