import React from "react"
import MiniBoxProfileCSS from "./MiniBoxProfile.module.css"

export default function MiniBoxProfile() {
  return (
    <div className={MiniBoxProfileCSS['mini-box-profile-container']}>
      <img src="https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg" alt="Profile picture." className={MiniBoxProfileCSS['profile-picture']} />
      <span className={MiniBoxProfileCSS['name']}>TrNyteal</span>
    </div>
  )
}