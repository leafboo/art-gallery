import React from "react"
import ProfilePictureCSS from "./styles/ProfilePicture.module.css"

export default function ProfilePicture(props) {
  return (
    <div className={ProfilePictureCSS['profile-picture-container']}>
      <img className={ProfilePictureCSS['profile-picture']} src={props.profile} alt="Profile Picture." />
    </div>
    
  )
}