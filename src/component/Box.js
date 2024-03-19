import React from 'react'
import 초기사진 from "../assets/초기사진.jpg"

function Box(props) {
    let result;
    if(props.name === "컴퓨터" && props.result !== "비김" && props.result !== "" ) {
        result = props.result === "이김" ? "짐" : "이김";
    } else {
        result = props.result;
    }
    //console.log(result);
  return (
    <div>
      <div className={`box ${result}`}>
          <h2>{props.name}</h2>
          <img className="box-img" src={(props.image1 || (props.image && props.image.img)) || 초기사진}/>
          <h3>{result}</h3>
        </div>
    </div>
  )
}

export default Box
