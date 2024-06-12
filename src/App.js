
import './App.css';
import React from 'react';
import Expenseltem from './components/expenses/Expenseltem';

const App=() => {

  // jsx 문법
  // const $h2 = React.createElement('h2', null, '방가방가햄토리');
  const $h2 = <h2>방가봉가햄톨이</h2>;

  // jsx 규칙 
  // 1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
  // 2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
  // 3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  // 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

  const hello = '안녕안녕?';

  return (
    <>
      <Expenseltem title="치킨먹음" price={30000} date={new Date(2024,6,12)}/>
      <Expenseltem title="족발먹음" price={40000} date={new Date(2024,6,12)}/>
      <Expenseltem title="헬스장등록" price={300000} date={new Date(2024,6,12)}/>
    </>
  );
}

export default App;
