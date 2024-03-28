import React from "react"
import ArtistCSS from "./Artist.module.css"

export default function Artist(props) {
  return (
    <div className={ArtistCSS['artist-container']}>
      <img className={ArtistCSS['profile-picture']} src={props.profilePicture} alt="" />
      <span className={ArtistCSS['name']}>{props.name}</span>
    </div>
  )
}