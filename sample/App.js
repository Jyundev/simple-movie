import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // 지켜볼 대상이 없으므로 한번만 실행 
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    if (keyword != "" && keyword.length >=5 ) {
      console.log(`i run when keyword changes : ${keyword}`);
    }
  }, [keyword])

  useEffect(() => {
    if (keyword != "" && keyword.length >=5 ) {
      console.log(`i run when counter changes`);
    }
  }, [counter])

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder='Search here... ' />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;

// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능