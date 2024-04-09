import React from "react"
import MiniBoxProfileCSS from "./MiniBoxProfile.module.css"

export default function MiniBoxProfile(props) {
  return (
    <div className={MiniBoxProfileCSS['mini-box-profile-container']}>
      <img src={props.selectedArtist.profile_picture} 
           alt="Profile picture." 
           className={MiniBoxProfileCSS['profile-picture']} 
           onClick={() => { props.onImageClick(2) }} />
           
      <span className={MiniBoxProfileCSS['name']}>{props.selectedArtist.name}</span>
    </div>
  )
}