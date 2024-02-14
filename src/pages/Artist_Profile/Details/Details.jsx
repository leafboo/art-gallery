import React from "react" 
import DetailsCSS from "./styles/Details.module.css"
import ProfilePicture from "./ProfilePicture.jsx"
import Socials from "./Socials.jsx"

export default function Details() {
  return (
    <div className={DetailsCSS['details-container']}>
      <ProfilePicture />
      <Socials />
    </div>
    
  )
}