import React from "react"
import PlusButtonCSS from "./PlusButton.module.css"
import plusButton from "../../../../assets/plusButton.png"

export default function PlusButton(props) {
  return (
    <div className={PlusButtonCSS['plus-button-container']}>
      <img src={plusButton} className={PlusButtonCSS['plus-button']} alt="Plus Button." onClick={() => { props.onImageClick(3) }} />
    </div>
  )
}