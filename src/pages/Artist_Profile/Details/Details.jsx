import React from "react" 
import DetailsCSS from "./Details.module.css"
import Profile from "./Profile/Profile.jsx"
import Socials from "./Socials/Socials.jsx"
import defaultProfileDark from "../../../assets/defaultProfileDark.png"
import defaultProfileWhite from "../../../assets/defaultProfileLight.png"

export default function Details(props) {
  const [name, setName] = React.useState(null);
  const defaultProfile = props.mode ? defaultProfileDark : defaultProfileWhite

  React.useEffect(() => {
    // Check if artistsData exists and has at least one item
    if (props.artistsData && props.artistsData.length > 0) {
      const artistName = props.artistsData[0].tag_string_artist;
      setName(artistName); // Set the name once data is available
    }
  }, [props.artistsData]); // Re-run effect whenever artistsData changes


  return (
    <div className={DetailsCSS['details-container']}>
      <Profile profilePicture={props.selectedArtist ? props.selectedArtist.profile_picture : defaultProfile}
               name={name} />
      <Socials />
    </div>
    
  )
}