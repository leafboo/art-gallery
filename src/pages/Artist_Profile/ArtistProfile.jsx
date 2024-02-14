import React from "react"
import ArtistProfileCSS from "./styles/ArtistProfile.module.css"
import Details from "./Details/Details.jsx"
import Artworks from "./Artworks/Artworks.jsx"

export default function ArtistProfile() {
  return (
    <div className={ArtistProfileCSS['artist-profile-container']}>
      <Details />
      <Artworks />
    </div>
  )
}