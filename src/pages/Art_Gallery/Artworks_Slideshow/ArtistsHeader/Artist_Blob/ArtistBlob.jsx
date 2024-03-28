import React from "react"
import ArtistBlobCSS from "./ArtistBlob.module.css"

export default function ArtistBlob(props) {
  return (
    <div className={'artist-blob-container'}>
      <img src={props.picture} alt="Profile picture." className={ArtistBlobCSS['profile-picture']} />
    </div>
  )
} 