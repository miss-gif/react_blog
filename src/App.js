/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "가", "나"]);
  let [좋아요, 좋아요변경] = useState(0);

  function 제목변경() {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천";
    글제목변경(copy);
  }

  function 이름정렬() {
    let 정렬 = [...글제목];
    정렬.sort();
    글제목변경(정렬);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        <button onClick={제목변경}>버튼임</button>
        <button onClick={이름정렬}>이름정렬</button>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>
          {글제목[1]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            ❤️
          </span>
          {좋아요}
        </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <ul></ul>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

let Modal1 = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
