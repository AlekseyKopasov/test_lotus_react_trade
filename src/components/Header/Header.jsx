import React from 'react'
import { Container } from 'react-bootstrap'
import TradeTitle from '../TradeTitle/TradeTitle'

const Header = () => {
  return (
    <header className="header mb-5">
        <Container>
          <TradeTitle />
        </Container>
    </header>
  )
}

export default Header