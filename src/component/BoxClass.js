import React, { Component } from 'react'
import 초기사진 from "../assets/init.jpg"

export default class BoxClass extends Component {
    constructor(props) {
        super(props);
        this.result = "";
    }
    getResult = () => {
        if(this.props.name === "컴퓨터" && this.props.result !== "비김" && this.props.result !== "" ) {
            this.result = this.props.result === "이김" ? "짐" : "이김";
        } else {
            this.result = this.props.result;
        }
    }
  render() {
    this.getResult();
    return (
        <div>
        <div className={`box ${this.result}`}>
            <h2>{this.props.name}</h2>
            <img className="box-img" src={(this.props.image1 || (this.props.image && this.props.image.img)) || 초기사진}/>
            <h3>{this.result}</h3>
          </div>
      </div>
    )
  }
}
