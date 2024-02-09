import React from "react"
import Artists from "./Artists.jsx"
import HeaderCSS from "./styles/header.module.css"

export default function Header() {
  return (
    <div className={HeaderCSS['header-container']}>
      <h1>Artists go here</h1>
      <Artists />
    </div>
  )
}