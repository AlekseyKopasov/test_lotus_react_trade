import React from 'react'
import { Container } from 'react-bootstrap'
import TradeTitle from '../TradeTitle/TradeTitle'
import TradeInfo from '../TradeInfo/TradeInfo'

const Header = () => {
  return (
    <header className="header mb-5">
      <div className="header__top mb-1">
        <Container>
          <TradeTitle />
        </Container>
      </div>
      <div className="header__bottom">
        <Container>
          <TradeInfo />
        </Container>
      </div>
    </header>
  )
}

export default Header