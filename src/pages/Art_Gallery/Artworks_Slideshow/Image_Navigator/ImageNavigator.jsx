import React from "react";
import ImageNavigatorCSS from "./ImageNavigator.module.css"
import leftArrowBlack from "../../../../assets/leftArrowBlack.png"
import rightArrowBlack from "../../../../assets/rightArrowBlack.png"
import leftArrowWhite from "../../../../assets/leftArrowWhite.png"
import rightArrowWhite from "../../../../assets/rightArrowWhite.png"

export default function ImageNavigator(props) {
  return (
    <div className={ImageNavigatorCSS['image-navigator-container']}>
      <div className={ImageNavigatorCSS['arrow-button']} onClick={() => {props.changeImageIndex(2)}} >
        <img src={leftArrowBlack} alt="Left Arrow." className={ImageNavigatorCSS['arrow']} />
      </div>
      <div className={ImageNavigatorCSS['arrow-button']} onClick={() => {props.changeImageIndex(1)}} >
        <img src={rightArrowBlack} alt="Right Arrow." className={ImageNavigatorCSS['arrow']} />
      </div>
    </div>
  )
}