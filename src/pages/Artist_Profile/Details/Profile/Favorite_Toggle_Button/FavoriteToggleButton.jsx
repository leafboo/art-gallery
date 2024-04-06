import React from "react"
import FavoriteToggleButtonCSS from "./FavoriteToggleButton.module.css"

export default function FavoriteToggleButton() {
  return (
    <div className={FavoriteToggleButtonCSS['favorite-toggle-button-container']}>
      <span>Add to favorites</span>
    </div>
  )
}