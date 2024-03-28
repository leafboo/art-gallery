import React from "react"
import Artist from "./Artist/Artist.jsx"
import ExistingFavArtistsCSS from "./ExistingFavArtists.module.css"
import defaultProfile from "../../../assets/defaultProfile.png"

export default function ExistingFavArtists(props) {

  let artists = []
  if (props.foundArtist) {
    artists = props.foundArtist.map(artist => 
      <Artist profilePicture={defaultProfile}
              name={artist.name}
      />)
  }
  

  return (
    <div className={ExistingFavArtistsCSS['existing-artists-container']}>
      {artists}
    </div>
  )
}