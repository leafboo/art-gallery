import React from "react"
import darkMode from "../assets/darkModeLogo.png"
import DisplayModeCSS from "./DisplayMode.module.css"

export default function DisplayMode() {
  return (
    <img className={DisplayModeCSS['dark-mode-logo']} src={darkMode} alt="" />
  )
}