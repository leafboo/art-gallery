import React from "react"
import Artist from "./Artist.jsx"
import ExistingFavArtistsCSS from "./styles/ExistingFavArtists.module.css"

export default function ExistingFavArtists() {
  return (
    <div className={ExistingFavArtistsCSS['existing-artists-container']}>

      <Artist profilePicture="https://pbs.twimg.com/profile_images/1155680462464942081/JBCvjutU_400x400.jpg" 
              name="米山 舞 Yoneyama Mai"
      />

      <Artist profilePicture="https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg" 
              name="TrNyteal"
      />

      <Artist profilePicture="https://pbs.twimg.com/profile_images/1377908153052917760/7YPJXGir_400x400.jpg" 
              name="Fajyobore"
      />

      
    </div>
  )
}