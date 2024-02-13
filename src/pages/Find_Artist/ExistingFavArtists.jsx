import React from "react"
import Artist from "./Artist.jsx"
import ExistingFavArtistsCSS from "./styles/ExistingFavArtists.module.css"

export default function ExistingFavArtists() {
  return (
    <div className={ExistingFavArtistsCSS['existing-artists-container']}>
      <Artist profilePicture="https://pbs.twimg.com/profile_images/1155680462464942081/JBCvjutU_400x400.jpg" 
              name="米山 舞 Yoneyama Mai"
      />
    </div>
  )
}