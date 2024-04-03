import React from "react"
import ProfileCSS from "../../Artist_Profile/Details/styles/Profile.module.css"

export default function Profile(props) {
  return (
    <div className={ProfileCSS['profile-container']}>
      <div className={ProfileCSS['profile-picture-container']}>
        <img className={ProfileCSS['profile-picture']} src={props.profilePicture} alt="Profile Picture." />
      </div>
      <div className={ProfileCSS['name-container']}>
        <div className={ProfileCSS['name']}>{props.name}</div>
      </div>
      
    </div>
    
  )
}