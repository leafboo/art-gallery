import React from "react";
import ImageNavigatorCSS from "./ImageNavigator.module.css"

export default function ImageNavigator() {
  return (
    <div className={ImageNavigatorCSS['image-navigator-container']}>
      <div className={ImageNavigatorCSS['arrow-button']} >&lt;</div>
      <div className={ImageNavigatorCSS['arrow-button']} >&gt;</div>
    </div>
  )
}