import React from "react" 
import BackButtonCSS from "./styles/BackButton.module.css"
import leftArrow from "../../assets/leftArrowBlack.png"


export default function BackButton(props) {
  return (
    <div className={BackButtonCSS['back-button-container']}>
      <button className={BackButtonCSS['back-button']}>
        <img className={BackButtonCSS['left-arrow']} src={leftArrow} alt="Left arrow." onClick={() => { props.onImageClick(1) }} />
      </button>
    </div>
  )
}