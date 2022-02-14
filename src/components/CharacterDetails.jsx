import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CharacterDetails(props) {
    const [character, setCharacter] = useState([])
    const {id} = useParams()
useEffect(()=>{
    const URL = "https://bobsburgers-api.herokuapp.com/characters/" + id
        fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            let characterDetails = res
            setCharacter(characterDetails);
        })
        .catch(err => {
            console.log(err);
        }) 
        console.log(character)
    }, []);

    return(
        <div className="details-container">
        <img
          src={character.image}
          alt={character.name}
        />
        <div className="details">
          <h2>{character.name}</h2>
          <h3>{character.gender}</h3>
          <h3>Age:{character.age}</h3>
          <p>First Episode: </p>
              <p>{character.firstEpisode}</p>
            <br></br>
          <p>Occupation:</p>
          <p>{character.occupation}</p>
          <br></br>
        
        </div>
      </div>
    )
}
export default CharacterDetails