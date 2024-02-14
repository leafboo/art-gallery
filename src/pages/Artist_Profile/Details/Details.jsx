import React from "react" 
import DetailsCSS from "./styles/Details.module.css"
import ProfilePicture from "./ProfilePicture.jsx"
import Socials from "./Socials.jsx"

export default function Details() {
  return (
    <div className={DetailsCSS['details-container']}>
      <ProfilePicture profile="https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg"/>
      <Socials />
    </div>
    
  )
}