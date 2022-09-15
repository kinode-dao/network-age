import React from 'react'
import Col from '../spacing/Col'

import './Card.scss'

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ( { children, ...props }) => {

  return (
    <Col className='card' {...props}>
      <div className='white'></div>
      {children}
    </Col>
  )
}

export default Card