import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
//https://www.youtube.com/watch?v=DTPERO1bl7w
//https://www.youtube.com/watch?v=i8fAO_zyFAM
export const Navbar= (props) =>  {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Presences</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Student">Student</Nav.Link>
            <Nav.Link href="#Učitel">Učitel</Nav.Link>
            <Nav.Link href="#Úkoly">Úkoly</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

