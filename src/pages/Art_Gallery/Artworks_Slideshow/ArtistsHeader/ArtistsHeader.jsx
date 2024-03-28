import React from "react"
import ArtistsHeaderCSS from "./ArtistsHeader.module.css"
import ArtistBlob from "./Artist_Blob/ArtistBlob.jsx"
import PlusButton from "./Plus_Button/PlusButton.jsx"

export default function ArtistsHeader(props) {
  return (
    <div className={ArtistsHeaderCSS['artists-header-container']}>
      <PlusButton onImageClick={props.onImageClick}s />
      <ArtistBlob picture="https://pbs.twimg.com/profile_images/1155680462464942081/JBCvjutU_400x400.jpg" />
      <ArtistBlob picture="https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg" />
      <ArtistBlob picture="https://pbs.twimg.com/profile_images/1466177220905295878/iwAMQRAw_400x400.jpg" />
      <ArtistBlob picture="https://pbs.twimg.com/profile_images/1749147693732315136/-j1GU7R8_400x400.jpg" />
      <ArtistBlob picture="https://pbs.twimg.com/profile_images/1360625679184797699/vS5rWDjv_400x400.jpg" />
    </div>
  )
}