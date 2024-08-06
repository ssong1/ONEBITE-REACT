import { useEffect } from "react";
const Even = () => {
  // 1. 마운트: 탄생(의존성 배열을 빈 배열로)
  useEffect(() => console.log("even mount"), []);
  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log("even unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
