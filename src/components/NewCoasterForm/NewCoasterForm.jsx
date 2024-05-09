import { Container, Form, Button, Row, Col } from "react-bootstrap"

const NewCoasterForm = () => {

    return (
        <div className="NewCoasterForm mt-3">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <Form>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="length">
                                <Form.Label>Longitud</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewCoasterForm