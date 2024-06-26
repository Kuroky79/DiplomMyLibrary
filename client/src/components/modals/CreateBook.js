import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, DropdownButton, DropdownToggle, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateBook = ({show, onHide}) => {
    const {book} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number ))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>Выберите тип</DropdownToggle>
                        <Dropdown.Menu>
                            {book.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>Выберите бренд</DropdownToggle>
                        <Dropdown.Menu>
                            {book.types.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название книги"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название книги"
                        type="file"
                    />
                    <hr/>
                    <Button onClick={addInfo} variant={"outline-dark"}>Добавить местоположение книги в библиотеке</Button>
                    {info.map(i =>
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Шкаф"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Полка"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={()=> removeInfo(i.number)}
                                    variant={"outline-danger"}>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button  variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBook;