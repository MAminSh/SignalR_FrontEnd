import { useState } from 'react'
import './App.css'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'
import SolidChart from './SolidChart/SolidChart'
import SpeedMeterChart from './SpeedMeterChart/SpeedMeterChart'
import TextShow from './TextShow/TextShow'
import { Col, Container, Row } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Row >
          <Col sm={7}  className='border-col' ><LineChart  /></Col>
          <Col className='border-col' > <PieChart /></Col>
        </Row>
        <Row>
          <Col className='border-col' > <SolidChart /></Col>
          <Col className='border-col' > <SpeedMeterChart /></Col>
          <Col className='border-col' ><TextShow /></Col>
        </Row>


      </Container>
      


    </>
  )
}

export default App
