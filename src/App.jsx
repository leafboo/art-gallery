import React from "react"
import FindArtist from "./pages/Find_Artist/FindArtist.jsx"
import ArtistProfile from "./pages/Artist_Profile/ArtistProfile.jsx"
import DisplayMode from "./pages/DisplayMode.jsx"


export default function App() {
  return (
    <div>
      <ArtistProfile />
      <DisplayMode />
    </div>
  )
}