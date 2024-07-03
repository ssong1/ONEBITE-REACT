import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (if, for 등 사용 불가)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.(true, false, 객체 등 표현 불가)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.(마땅한 태그가 없다면 빈 태그<> 사용)
const Main = ({ children }) => {
  const user = {
    name: "송진석",
    isLogin: true,
  };

  return <div>{children}</div>;
  // if (user.isLogin) {
  //   return <div className="logout">로그아웃</div>;
  // } else {
  //   return <div>로그인</div>;
  // }
};

// return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

export default Main;
