import React from "react"
import darkModeLogo from "../assets/darkModeLogo.png"
import lightModeLogo from "../assets/lightModeLogo.png"
import DisplayModeCSS from "./DisplayMode.module.css"


export default function DisplayMode() {
  const [mode, setMode] = React.useState(true)

  function changeMode() {
    setMode(prevMode => !prevMode)
  }
  
  React.useLayoutEffect(() => {
    document.body.style.backgroundColor = mode ? 'white' : 'black'
    document.body.style.color = mode ? 'black' : 'rgb(222, 222, 222)'
  });

  return (
    <img  className={mode ? DisplayModeCSS['dark-mode-logo'] : DisplayModeCSS['light-mode-logo']} 
          onClick={changeMode} 
          src={mode ? darkModeLogo : lightModeLogo} 
          alt="Display mode logo." />
  )
}