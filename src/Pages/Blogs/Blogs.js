import React from 'react'
import { Accordion } from 'react-bootstrap'
import "./Blogs.css"

const Blogs = () => {

    return (
        <div className='w-75 mx-auto mt-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Difference between javascript and nodejs ?</Accordion.Header>
                    <Accordion.Body className='row m-0 p-0'>
                        <div className="col-lg-6">
                            <h2>Javascript</h2>
                            <p>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser.</p>

                        </div>
                        <div className="col-lg-6">
                            <h2>Node Js</h2>
                            <p>Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between Sql and No-sql ?</Accordion.Header>
                    <Accordion.Body className='row m-0 p-0'>
                        <div className="col-lg-6">
                            <h2>Javascript</h2>
                            <li>SQL databases are relational.</li>
                            <li>SQL databases use structured query language and have a predefined schema</li>
                            <li>SQL databases are vertically scalable.</li>
                            <li>SQL databases are table-based.</li>
                            <li>SQL databases are better for multi-row transactions</li>

                        </div>
                        <div className="col-lg-6">
                            <h2>Node Js</h2>
                            <li> NoSQL databases are non-relational.</li>
                            <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>NoSQL databases are horizontally scalable.</li>
                            <li> NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>NoSQL is better for unstructured data like documents or JSON.</li>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of jwt and how does it works.</Accordion.Header>
                    <Accordion.Body>
                        <p><b>JWT</b>, or <b>JSON Web</b> Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Blogs