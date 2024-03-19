import Box from './component/Box';
import ur from "./assets/ur.jpg";
import up from "./assets/up.jpg";
import us from "./assets/us.jpg";
import cr from "./assets/cr.jpg";
import cp from "./assets/cp.jpg";
import cs from "./assets/cs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faHandPeace } from "@fortawesome/free-regular-svg-icons";
import './App.css';
import { useState } from 'react';

const choice = {
  주먹: {
    name: "주먹",
    img: ur,
    num: "0"
  },
  보: {
    name: "보",
    img: up,
    num: "1"
  },
  가위: {
    name: "가위",
    img: us,
    num: "2"
  }
};

function App(props) {
  const [userImage, setClickPlay] = useState(0);
  const [computerImage, setAutoPlay] = useState(0);
  const [userResult, setUserResult] = useState("");
  //const [computerResult, setComResult] = useState("");

  const play = (userChoice) => {
    setClickPlay(choice[userChoice]);
      let randomNum = Math.floor((Math.random()*10)%3);
      // console.log(randomNum);
      if (randomNum == 0) {
        setAutoPlay(cr);
      } else if (randomNum == 1) {
        setAutoPlay(cp);
      } else {
        setAutoPlay(cs); // 2
      }
      judgement(choice[userChoice], randomNum);
    };
    
    //        이김  짐  비김
    // 주먹0 - 가위2  보1 주먹0
    // 보1 - 주먹0 가위2 보1
    // 가위2 - 보1 주먹0 가위2

  const judgement = (user,computer) => {
    // console.log(user.num, computer);
    user.num == computer ? setUserResult("비김") : (user.num == 0 && computer == 2) || (user.num == 1 && computer == 0) || (user.num == 2 && computer == 1) ? setUserResult("이김") : setUserResult("짐")
    //user.num == computer ? setComResult("비김") : (user.num == 0 && computer == 2) || (user.num == 1 && computer == 0) || (user.num == 2 && computer == 1) ? setComResult("짐") : setComResult("이김")
    }
  
  return (
    <div>
      <h1 className="box-cover">가위바위보 게임 하자.</h1>
      <div className="box-cover">
        <Box name="유저" image={userImage} result={userResult}/>
        <Box name="컴퓨터" image1={computerImage} result={userResult}/>
      </div>
      <div className="box-cover">
        <button onClick={() => play("주먹")}><FontAwesomeIcon icon={faHandBackFist} size="4x" color='rgb(106, 97, 97)'/></button>
        <button onClick={() => play("보")}><FontAwesomeIcon icon={faHand} size="4x" color='rgb(106, 97, 97)'/></button>
        <button onClick={() => play("가위")}><FontAwesomeIcon icon={faHandPeace} size="4x" color='rgb(106, 97, 97)'/></button>
      </div>
    </div>
  );
}

export default App;

// 1. 박스 두 개 만들기. (플레이어, 사진, 승패 결과)
// 2. 유저는 박스 하단의 버튼을 볼 수 있다.
// 3. 유저가 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4. 유저가 버튼을 클릭하면 컴퓨터 아이템은 랜덤으로 선택된다.
// 5. 3, 4번 아이템을 통해 승패 결과를 보여준다.
// 6. 결과에 따라 박스 테두리의 색이 변한다. (이김: 초록, 짐: 빨강, 비김: 검정)
