import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Homepage.scss'
import {Button} from "@mui/material"
const Homepage = ({value}) => {
  
  const navigate=useNavigate();
    const datas=require("../../Data/Userdata.json");
    
  return (
    <>
    <div className='Homepage'>        {
            datas.map((data)=>(
                <div 
                className='user-id'
                key={data.name+data.address}
            
                >
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                    
                </div>
            ))
        }

    </div>
    <div>
      {
        value.map((values)=>(
          <div className='inputvalue' key={values.username}>
              <p>{values.username}</p>
              <p>{values.password}</p>
          </div>
        ))
      }
    </div>
    <div className='movies'>
      <Button variant='contained' onClick={()=>navigate("/Movies")}>Movies</Button>
    </div>
    </>
  )
}

export default Homepage