import BoxClass from './component/BoxClass'
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
import React, { Component } from 'react'

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

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userImage: null,
            computerImage: null,
            userResult: "",
        }
    }

    play = (userChoice) => {
        this.setState({userImage:  choice[userChoice], })
        let randomNum = Math.floor((Math.random()*10)%3);
        if (randomNum == 0) {
            this.setState({computerImage: cr, })
        } else if (randomNum == 1) {
            this.setState({computerImage: cp, })
        } else {
            this.setState({computerImage: cs, })
        }
        this.judgement(choice[userChoice], randomNum);
    };

    judgement = (user,computer) => {
        user.num == computer ? this.setState({userResult: "비김", }) : (user.num == 0 && computer == 2) || (user.num == 1 && computer == 0) || (user.num == 2 && computer == 1) ? this.setState({userResult: "이김", }) : this.setState({userResult: "짐", })
    }
    
  render() {
    return (
        <div>
        <h1 className="box-cover">가위바위보 게임 하자.</h1>
        <div className="box-cover">
          <BoxClass name="유저" image={this.state.userImage} result={this.state.userResult}/>
          <BoxClass name="컴퓨터" image1={this.state.computerImage} result={this.state.userResult}/>
        </div>
        <div className="box-cover">
          <button onClick={() => this.play("주먹")}><FontAwesomeIcon icon={faHandBackFist} size="4x" color='rgb(106, 97, 97)'/></button>
          <button onClick={() => this.play("보")}><FontAwesomeIcon icon={faHand} size="4x" color='rgb(106, 97, 97)'/></button>
          <button onClick={() => this.play("가위")}><FontAwesomeIcon icon={faHandPeace} size="4x" color='rgb(106, 97, 97)'/></button>
        </div>
      </div>
    )
}
}