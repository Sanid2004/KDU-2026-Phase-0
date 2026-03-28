import react from "react";
import { useState } from "react";
import Movie from "./Movie"

const PremiumRentals = ()=>{

    const[movie,setMovie] = useState([
        {title:"3 Idiots",genre:"comedy"},
        {title:"Sholay",genre:"thriller"},
        {title:"PK",genre:"comedy"}
    ])


    return (
        <div>
            <p className="premimum-movies">List of premium movies are as follows : </p>
            {
                movie.length > 0 ? movie.map((item) => <Movie key={item.id} movie={item}/>) : "No Movies"
            }
        </div>
    )
}

export default PremiumRentals
