import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const BiddingTable = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped hover variant="light">
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default BiddingTable