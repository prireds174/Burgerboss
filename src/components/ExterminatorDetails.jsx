import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ExterminatorDetails(props) {
    const [exterminator, setExterminator] = useState([])
    const {id} = useParams()
useEffect(()=>{
    const URL = "https://bobsburgers-api.herokuapp.com/pestControlTruck/" + id
        fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            let exterminatorDetails = res
            setExterminator(exterminatorDetails);
        })
        .catch(err => {
            console.log(err);
        }) 
        console.log(exterminator)
    }, []);

    return(
        <div className="details-container">
        <img
          src={exterminator.image}
          alt={exterminator.name}
        />
        <div className="details">
          <h2>Name:</h2>
          <h2>{exterminator.name}</h2>
          <br></br>
          <h3>Season Appearance:</h3>
          <h3>{exterminator.season}</h3>
          

        
        </div>
      </div>
    )
}
export default ExterminatorDetails