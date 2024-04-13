import React from "react"
import darkModeLogo from "../../assets/darkModeLogo.png"
import lightModeLogo from "../../assets/lightModeLogo.png"
import DisplayModeCSS from "./DisplayMode.module.css"


export default function DisplayMode(props) {
  
  function changeMode() {
    props.setMode(prevMode => !prevMode)
    localStorage.setItem('mode', !props.mode)
  }
  
  React.useLayoutEffect(() => {
    document.body.style.backgroundColor = props.mode ? 'white' : 'black'
    document.body.style.color = props.mode ? 'black' : 'rgb(222, 222, 222)'
    document.body.style.borderColor = props.mode ? 'black' : 'rgb(222, 222, 222)'
  },);

  return (
    <img  className={props.mode ? DisplayModeCSS['dark-mode-logo'] : DisplayModeCSS['light-mode-logo']} 
          onClick={changeMode} 
          src={props.mode ? darkModeLogo : lightModeLogo} 
          alt="Display mode logo." />
  )
}