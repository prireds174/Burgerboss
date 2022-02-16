import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './style/Exterminator.css'

function Exterminators(){
    const[exterminators, setExterminators] = useState([])

    useEffect(() => {
        const URL = "https://bobsburgers-api.herokuapp.com/pestControlTruck/[124,20,79,217,211,207,84,179,187,63,45,73]"
        fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            let newExterminator = res
            setExterminators(newExterminator);
        })
        .catch(err => {
            console.log(err);
        }) 
        console.log(exterminators)
    }, []);

    return(
        <div>
            <h1 className="extertitle"><img src="https://fontmeme.com/permalink/220216/b854b847e5e0c98f211ace1f96675cc5.png" alt="bobs-burgers-tv-show-font" border="0"/></h1>
<section className="container">
    {
    exterminators.map((exterminator) => {
        return (
        
    <Link to ={`/exterminatordetails/${exterminator.id}`} key={exterminator.id}>        
        <div className="card">
        <div className="card-image">
            <img
             src={ exterminator.image }  alt={ exterminator.name }
             width= "250px"
             height= "200px" 
            />
            
        </div>
        <div className="card-title">
      <h3 className="extname">{ exterminator.name }</h3>
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

export default Exterminators