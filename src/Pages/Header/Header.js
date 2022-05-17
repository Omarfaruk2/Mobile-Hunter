import { signOut } from 'firebase/auth'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import './Header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth)
    if (user) {
        // console.log(user, "user")

    }
    if (loading) {

    }
    return (
        <>
            <Navbar collapseOnSelect className='py-3 sticky-top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home#home">
                        <img src="https://www.warehousemobile.co.nz/themes/project/assets/build/img/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-item'>
                            {
                                user && <>
                                    <Link to="/home">Home</Link>
                                    <Link to="/inventory">Inventory</Link>
                                    <Link to="/additems">Add Items</Link>
                                    <Link to="/myitems">My Items</Link>
                                </>
                            }
                            <Link to="/blogs">Blogs</Link>
                            {
                                user ?
                                    <button onClick={() => signOut(auth)} style={{ color: "yellow" }} className='bg-info fw-bold border-0'>SignOut</button>
                                    :
                                    <Link to="/login">Login</Link>


                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header