import React from 'react'
import Button from 'react-bootstrap/Button'
import Cards from './Cards'

function Appointments() {
  return (
    <div className='my-5'>
        <div className='d-flex justify-content-around' >
            <h3 style={{"display":"inline-block"}} className=' primary-font-color'>Most Advanced Technology</h3>
            <Button className='primary-bg-color'>Make An Appointment</Button>
        </div>

        <Cards />
    </div>
  )
}

export default Appointments