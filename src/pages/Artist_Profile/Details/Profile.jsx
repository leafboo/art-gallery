import React from "react"
import ProfileCSS from "./styles/Profile.module.css"

export default function Profile(props) {
  return (
    <div className={ProfileCSS['profile-container']}>
      <img className={ProfileCSS['profile-picture']} src={props.profilePicture} alt="Profile Picture." />
      <div>name here</div>
    </div>
    
  )
}