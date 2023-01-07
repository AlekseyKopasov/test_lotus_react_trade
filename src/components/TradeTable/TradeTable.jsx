import React, { useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Timer from '../Timer/Timer'

const TradeTable = ({ bidders, targetTime }) => {

  const [ activeTimer, setActiveTimer ] = useState( { id: 0, name: '', active: false } )
  /*
  * 1. Установить первый активный таймер при монтировании
  * 2. Когда вернется ссылка на отработавший таймер - установить следуующий активный таймер
  * */

  const toggleTimerHandler = (timerId, refTimer) => {

    console.log('id----', timerId, refTimer.current, activeTimer)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Table className="trade-table">
            <thead>
            <tr>
              <th>Ход</th>
              { bidders.map((elem) =>
                  <th key={ elem.id }>
                    <Timer
                      timerId={ elem.id }
                      targetTime={ targetTime }
                      isActive={ elem.active }
                      handleTimerToggle={ toggleTimerHandler }
                    />
                  </th>
              )
              }
            </tr>
            </thead>

            <tbody>
            <tr className="trade-table__params">
              <td className="trade-table__params-title">Параметры и требования</td>

              { bidders.map(b => {
                return <td key={ b.id }>
                  <p className="trade-table__participants">
                    <span className="trade-table__participants-num">Участник №{ b.id + 1 }</span>
                    <span>{ b.name }</span>
                  </p>
                </td>
              }) }
            </tr>
            <tr>
              <td>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Срок изготовления лота, дней</td>
              <td>80</td>
              <td>90</td>
              <td>75</td>
              <td>120</td>
            </tr>
            <tr>
              <td>Гарантийные обязательства, мес</td>
              <td>24</td>
              <td>24</td>
              <td>22</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Условия оплаты</td>
              <td>
                <span className="trade-table__percent">30</span>
                <span>&nbsp;%</span>
              </td>
              <td>
                <span className="trade-table__percent">100</span>
                <span>&nbsp;%</span>
              </td>
              <td>
                <span className="trade-table__percent">60</span>
                <span>&nbsp;%</span>
              </td>
              <td>
                <span className="trade-table__percent">50</span>
                <span>&nbsp;%</span>
              </td>
            </tr>
            <tr>
              <td>Стоимость изготовления лота, руб. (без НДС)</td>
              <td>
                <p className="trade-table__price">
                  <span className="original">3,700,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
              <td>
                <p className="trade-table__price">
                  <span className="original">3,200,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
              <td>
                <p className="trade-table__price">
                  <span className="original">2,800,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
              <td>
                <p className="trade-table__price">
                  <span className="original">2,500,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
            </tr>
            </tbody>
          </Table>
          <p>Действия:</p>
        </Col>
      </Row>
    </Container>
  )
}

export default TradeTable