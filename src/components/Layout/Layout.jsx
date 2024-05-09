import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Layout = () => {

    const [coasters, setCoasters] = useState([])

    useEffect(() => {
        fetch('https://multiapi-app.fly.dev/coasters/coastersSelection')
            .then(res => res.json())
            .then(data => setCoasters(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="Layout">

            <Container className="mt-5">
                <h1>Esto es el layout de BS</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, magnam rerum quos voluptas labore provident velit porro temporibus eaque maiores, commodi blanditiis possimus. Et harum voluptas magnam soluta ad quam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, magnam rerum quos voluptas labore provident velit porro temporibus eaque maiores, commodi blanditiis possimus. Et harum voluptas magnam soluta ad quam!</p>

                <hr />

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <h3>Los datos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae. Sint corporis ad quidem distinctio eveniet! Minima, quod vero libero aliquid incidunt porro hic rerum, fuga maiores eius consequatur nobis?</p>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <h3>Estepona wins</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae. Sint corporis ad quidem distinctio eveniet! Minima, quod vero libero aliquid incidunt porro hic rerum, fuga maiores eius consequatur nobis?</p>
                    </Col>
                </Row>

                <hr />

                <h2>Galería</h2>

                <Row>

                    {
                        coasters.map(elm => {
                            return (

                                // LAS COLUMNAS ESTABLECEN EN SU PROPIEDAD span LOS HUECOS QUE OCUPARÁN SOBRE BASE 12

                                <Col sm={{ span: 4 }} className="mb-5">

                                    <Card>
                                        <Card.Img variant="top" src={elm.imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{elm.title}</Card.Title>
                                            <Card.Text>Inversiones: {elm.inversions}</Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            )
                        })
                    }

                </Row>

            </Container>

        </div>
    )
}

export default Layout