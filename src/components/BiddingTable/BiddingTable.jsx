import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Timer from '../Timer/Timer'

const timeInMs = 10 * 1000;
const currentTime = new Date().getTime()
const endProgressTime = currentTime + timeInMs

const BiddingTable = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Table className="bidding-table">
            <thead>
              <tr>
                <th>Ход</th>
                <th>
                  <Timer
                    active={'true'}
                    targetTime={endProgressTime}
                />
                </th>
                <th> <Timer /> </th>
                <th> <Timer /> </th>
                <th> <Timer /> </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bidding-table__params">
                <td className="bidding-table__params-title">Параметры и требования</td>

                <td>
                  <p className="bidding-table__participants">
                    <span className="bidding-table__participants-num">Участник №1</span>
                    <span>Лотос</span>
                  </p>
                </td>
                <td>
                  <p className="bidding-table__participants">
                    <span className="bidding-table__participants-num">Участник №2</span>
                  </p>
                </td>
                <td>
                  <p className="bidding-table__participants">
                    <span className="bidding-table__participants-num">Участник №3</span>
                  </p>
                </td>
                <td>
                  <p className="bidding-table__participants">
                    <span className="bidding-table__participants-num">Участник №4</span>
                  </p>
                </td>
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
                <span className="bidding-table__percent">30</span>
                <span>&nbsp;%</span>
              </td>
              <td>
                <span className="bidding-table__percent">100</span>
                <span>&nbsp;%</span>
              </td>
              <td>
                <span className="bidding-table__percent">60</span>
                <span>&nbsp;%</span>
              </td>
              <td>
                <span className="bidding-table__percent">50</span>
                <span>&nbsp;%</span>
              </td>
            </tr>
            <tr>
              <td>Стоимость изготовления лота, руб. (без НДС)</td>
              <td>
                <p className="bidding-table__price">
                  <span className="original">3,700,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
              <td>
                <p className="bidding-table__price">
                  <span className="original">3,200,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
              <td>
                <p className="bidding-table__price">
                  <span className="original">2,800,000 руб.</span>
                  <span className="sale">-25,000 руб.</span>
                  <span className="total">2,475,000 руб.</span>
                </p>
              </td>
              <td>
                <p className="bidding-table__price">
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

export default BiddingTable