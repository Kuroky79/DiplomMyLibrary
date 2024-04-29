import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image"
import bigStar from '../assets/bigStar.png'
const BookPage = () => {
    const book = {id: 1, name: 'Проектирование установок ракетного вооружения', rating: 5, img: 'https://www.mashin.ru/images/cms/thumbs/09ea4b145079ada84852002d3e65badd9b5964a9/978-5-217-03435-2_137_auto_jpg.jpg'}
    const description = [
        {id: 1, title: 'Авторы', description: 'Ожегов'},
        {id: 2, title: 'Издательство', description: 'Ожеговское'},
        {id: 3, title: 'Год издания', description: '2016'},
        {id: 4, title: 'Язык', description: 'Русский'},
        {id: 5, title: 'Количество страниц', description: '256'},
    ]
    return (
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={book.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{book.name}</h2>
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                            >
                                {book.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                        >
                            <Button variant={"outline-dark"}>Добавить в выбранные книги</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h2>Характеристики</h2>
                    {description.map((info, index) =>
                        <Row key={info.id} style={{background: index %2===0 ? 'lightgray' : 'transparent', padding: 10, marginTop: 10}}>
                            {info.title} : {info.description}
                        </Row>
                    )}
                </Row>
        </Container>
    );
};

export default BookPage;