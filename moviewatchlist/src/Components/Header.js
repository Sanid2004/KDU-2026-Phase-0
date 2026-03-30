import React from 'react'
import { Card,CardBody, CardTitle ,CardHeader, CardFooter,CardText,Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Header = ()=>{

    const navigate = useNavigate();

    return (
        <div>
            <Card
             className="TextCenter"
    style={{
      width: '100rem'
    }}>
  <CardHeader className='Heading'>
    Movie WatchList
  </CardHeader>
  <CardBody>
    <CardTitle className='color'>
      Track movies you want to watch 
    </CardTitle>
    <div className='btn-group'>
    <button className='btn1' onClick={()=> navigate("/")}>
      Add Movie to WatchList
    </button>
    <button className='btn2' onClick={() => navigate("/ViewMovies")}>
      View WatchList
    </button>
    <button className='btn3' onClick={()=> navigate("/SearchMovies")}>
      Search Movies
    </button>
    <button className='btn4' onClick={()=> navigate("/AboutUs")}>
      About Us
    </button>
    </div>
   </CardBody>
    </Card>
        </div>
    )
}

export default Header