import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './style/Character.css'

function Characters(){
    const[characters, setCharacters] = useState([])

    useEffect(() => {
        const URL = "https://bobsburgers-api.herokuapp.com/characters/[47,48,168,261,272,277,293,351,386,447,473,496]"
        fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            let newCharacter = res
            setCharacters(newCharacter);
        })
        .catch(err => {
            console.log(err);
        }) 
        console.log(characters)
    }, []);

    return(
        <div>
            <h1 className="charactitle"><img src="https://fontmeme.com/permalink/220216/436499906becfd47d799c14f0df39a93.png" alt="bobs-burgers-tv-show-font" border="0"/></h1>
<section className="container">
    {
    characters.map((character) => {
        return (
        
    <Link to ={`/charactersdetails/${character.id}`} key={character.id}>        
        <div className="card" 
        >
  <img src={ character.image } className="card-img-top" alt={ character.name }
  width= "200px"
  height= "300px"/>
  <div className="card-body">
    <h5 className="card-title">{ character.name }</h5>
    <p className="card-text"></p>
  </div>
</div>
  </Link>
  )
    })
}
  
</section>

            
        </div>
    )
}
export default Characters