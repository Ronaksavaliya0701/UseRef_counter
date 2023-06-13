import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import laptop1 from '../../../public/laptop1.png'
import laptop2 from '../../../public/laptop2.png'
import laptop3 from '../../../public/laptop3.jpg'
import laptop4 from '../../../public/laptop4.jpg'
import UseRef from '../UseRef/UseRef';
// import Counter from '../Counter/Counter';

function Cart() {
    return (
        <Container>
            <Row xs={1} md={4} className="mt-4">
                {/* {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}> */}
                <Card>
                    <Card.Img variant="top" src={laptop1} />
                    <Card.Body>
                        <Card.Title>HP Laptop</Card.Title>
                        <Card.Text>
                            Is a battery- or AC-powered personal computer (PC) smaller than a briefcase.
                        </Card.Text>
                        
                        <UseRef/>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={laptop2} />
                    <Card.Body>
                        <Card.Title>DELL Laptop</Card.Title>
                        <Card.Text>
                            Focuses today on sales of personal computers, network servers, data storage solutions, and software.
                        </Card.Text>
                        {/* <h5 style={{marginTop: 10}}>price : 50,000</h5> */}
                        
                        <UseRef/>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={laptop3} />
                    <Card.Body>
                        <Card.Title>ASUS Laptop</Card.Title>
                        <Card.Text>
                            ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company
                        </Card.Text>
                        {/* <h5 style={{marginTop: 10}}>price : 60,000</h5> */}
                        
                        <UseRef/>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={laptop4} />
                    <Card.Body>
                        <Card.Title>MacBook</Card.Title>
                        <Card.Text>
                            The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc.
                        </Card.Text>
                        {/* <h5 style={{marginTop: 10}}>price : 1,00,000</h5> */}
                        
                        <UseRef/>

                    </Card.Body>
                </Card>
                {/* </Col> */}
                {/* ))} */}
            </Row>
        </Container>

    );
}

export default Cart;