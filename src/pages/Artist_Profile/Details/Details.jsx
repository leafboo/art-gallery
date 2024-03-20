import React from "react" 
import DetailsCSS from "./styles/Details.module.css"
import Profile from "./Profile.jsx"
import Socials from "./Socials.jsx"

export default function Details(props) {
  
  const [name, setName] = React.useState(null); // Initialize name state as null

  React.useEffect(() => {
    // Check if artistsData exists and has at least one item
    if (props.artistsData && props.artistsData.length > 0) {
      const artistName = props.artistsData[0].tag_string_artist;
      setName(artistName); // Set the name once data is available
    }
  }, [props.artistsData]); // Re-run effect whenever artistsData changes
  console.log(name)

  return (
    <div className={DetailsCSS['details-container']}>
      <Profile profilePicture="https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg"
               name={name}/>
      <Socials />
    </div>
    
  )
}