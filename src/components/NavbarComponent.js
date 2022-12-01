import React from 'react'
 
import { Container,  Nav, Navbar, NavDropdown} from 'react-bootstrap'
const NavbarComponent = () => {
    return(
    <Navbar  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><strong>Kasir App</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Sukses">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavbarComponent