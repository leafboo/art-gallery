import React from "react"
import FindArtist from "./pages/Find_Artist/FindArtist.jsx"
import ArtistProfile from "./pages/Artist_Profile/ArtistProfile.jsx"
import DisplayMode from "./pages/DisplayMode.jsx"
import ArtGallery from "./pages/Art_Gallery/ArtGallery.jsx"


export default function App() {
  const [toggleComponent, setToggleComponent] = React.useState(true)

  function switchPages() {
    setToggleComponent(prevToggleComponent => !prevToggleComponent)
    console.log("hello")
  }
  
  return (
    <div>
      {toggleComponent ? (<ArtGallery onImageClick={switchPages} />) : (<ArtistProfile />)}
      
      {/*<ArtistProfile />*/}
      {/*<FindArtist/ >*/}
      <DisplayMode />
    </div>
  )
}