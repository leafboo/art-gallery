import React from "react"
import SearchCSS from "./styles/Search.module.css"

export default function Search() {
  return (
    <div className={SearchCSS['search-container']}>
      <img className={SearchCSS['magnifying-glass']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt="Magnifying glass." />
      <input className={SearchCSS['search-bar']} type="text" />
    </div>
  )
}