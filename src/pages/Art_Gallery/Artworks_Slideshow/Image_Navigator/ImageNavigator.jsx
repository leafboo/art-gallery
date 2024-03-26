import React from "react";
import ImageNavigatorCSS from "./ImageNavigator.module.css"

export default function ImageNavigator(props) {
  return (
    <div className={ImageNavigatorCSS['image-navigator-container']}>
      <div className={ImageNavigatorCSS['arrow-button']} onClick={() => {props.changeImageIndex(2)}} >&lt;</div>
      <div className={ImageNavigatorCSS['arrow-button']} onClick={() => {props.changeImageIndex(1)}} >&gt;</div>
    </div>
  )
}