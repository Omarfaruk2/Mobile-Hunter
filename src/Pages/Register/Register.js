import React, { useEffect, useRef } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import GoogleLogin from '../GoogleLogin/GoogleLogin'
import "./Register.css"

const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const emailRef = useRef("")
    const nameRef = useRef("")
    const passwordRef = useRef("")
    const navigate = useNavigate()

    let location = useLocation()
    let from = location?.state?.from?.pathname || "/"

    useEffect(() => {

        if (user) {
            navigate(from, { replace: true })
        }

    }, [from, navigate, user])

    if (loading) {
        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
                <Spinner className='mx-2' animation="grow" variant="secondary" />
                <Spinner className='mx-2' animation="grow" variant="success" />
            </div>
        )
    }

    console.log(user, "hello")

    const handleSubmitRegisterForm = async (event) => {

        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await createUserWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    return (
        <div className='my-4'>
            <Form onSubmit={handleSubmitRegisterForm} className='login mx-auto'>
                <h3 className='text-center fw-bold'>Register</h3>

                <Form.Group className="mb-3 fromInput" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 fromInput" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 fromInput" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <span>Already Register ? <Link className='text-decoration-none text-danger' to="/login ">Go to Login</Link> </span>

                <div className='d-flex mt-3 justify-content-center'>
                    <Button variant="primary w-50" type="submit">
                        Sign Up
                    </Button>
                </div>
                {/* <GooglelLogin></GooglelLogin> */}
                <GoogleLogin></GoogleLogin>
            </Form>
        </div>
    )
}

export default Register