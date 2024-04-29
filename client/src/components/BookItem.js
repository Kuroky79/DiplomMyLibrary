import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image"
import stars from '../assets/stars.jpg'
import { useNavigate } from 'react-router-dom';
import {BOOK_ROUTE} from "../utils/consts";
const BookItem = ({book}) => {
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(BOOK_ROUTE + '/' + book.id)}>
            <Card style={{width: 150, cursor: "pointer", border: "light"}}>
                <Image width={150} height={150} src={book.img}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div>
                        Книга
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            {book.rating}
                        </div>
                        <Image width={15} height={15} src={stars}/>
                    </div>
                </div>
                <div>{book.name}</div>
            </Card>
        </Col>
    );
};

export default BookItem;