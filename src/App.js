import './App.scss'
import { Col, Container, Navbar, Row, Table } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="mb-5">
        <Navbar className="navbar" bg="$blue-100" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <h1>Trade room</h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row>
            <Col>
              <div className="mb-5">Timer</div>

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
      </main>
    </div>
  )
}

export default App
