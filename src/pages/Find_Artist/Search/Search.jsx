import React from "react"
import SearchCSS from "./Search.module.css"

export default function Search(props) {
  const [name, setName] = React.useState('')
  

  async function findArtist(name) {
    const response = await fetch(`https://danbooru.donmai.us/artists.json?search[any_other_name_like]=*${name}*`)
    const data = await response.json()
    props.setFoundArtist(data)
  }

  function updateNameRealtime(event) {
    setName(event.target.value)
  }
  console.log(name) // TEMPORARY

  return (
    <div className={SearchCSS['search-container']}>
      <input className={SearchCSS['search-bar']} type="text" value={name} onChange={(event) => {updateNameRealtime(event); findArtist(name)}} />
      <img className={SearchCSS['magnifying-glass']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt="Magnifying glass." onClick={() => { findArtist(name) }} />
    </div>
  )
}