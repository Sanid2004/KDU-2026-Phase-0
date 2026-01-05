import React from 'react'
import { Card,CardBody, CardTitle ,CardHeader} from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Header = ()=>{

    const navigate = useNavigate();

    return (
        <div style={{ width: '100%', padding: '0 10px', boxSizing: 'border-box' }}>
        <Card
         className="TextCenter"
    style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto'
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
    <button className='btn5' onClick={()=> navigate("/PremiumMovies")}>
      Premium Movies
    </button>
    </div>
   </CardBody>
    </Card>
        </div>
    )
}

export default Header