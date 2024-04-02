import React from "react"
import Artist from "./Artist/Artist.jsx"
import ExistingFavArtistsCSS from "./ExistingFavArtists.module.css"
import defaultProfileDark from "../../../assets/defaultProfileDark.png"
import defaultProfileLight from "../../../assets/defaultProfileLight.png"

export default function ExistingFavArtists(props) {

  let artists = []
  if (props.foundArtist) {
    artists = props.foundArtist.map(artist => 
      <Artist profilePicture={props.mode ? defaultProfileDark : defaultProfileLight}
              name={artist.name}
              mode={props.mode}
      />)
  }

  return (
    <div className={ExistingFavArtistsCSS['existing-artists-container']}>
      {artists}
    </div>
  )
}