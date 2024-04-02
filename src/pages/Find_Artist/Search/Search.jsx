import React from "react"
import SearchCSS from "./Search.module.css"
import magnifyingGlassLight from "../../../assets/magnifyingGlassLight.png"
import magnifyingGlassDark from "../../../assets/magnifyingGlassDark.png"

export default function Search(props) {
  const [name, setName] = React.useState('')

  React.useEffect(() => {
    const getArtist = setTimeout(async () => {
      let data = []
      if (name) {
        const response = await fetch(`https://danbooru.donmai.us/artists.json?search[any_other_name_like]=*${name}*`)
        data = await response.json()  
      }
      props.setFoundArtist(data)
    }, 250)

    return () => clearTimeout(getArtist) 
  }, [name])

  return (
    <div className={SearchCSS['search-container']}>
      <input className={`${SearchCSS['search-bar']} ${props.mode ? SearchCSS['light'] : SearchCSS['dark']}`} type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
      <img className={SearchCSS['magnifying-glass']} src={props.mode ? magnifyingGlassDark : magnifyingGlassLight} alt="Magnifying glass." />
    </div>
  )
}