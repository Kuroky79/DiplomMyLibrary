import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateBook from "../components/modals/CreateBook";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [bookVisible, setBookVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" onClick={()=>setTypeVisible(true)}>Добавить тип</Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" onClick={()=>setBrandVisible(true)}>Добавить бренд</Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" onClick={()=>setBookVisible(true)}>Добавить книгу</Button>
            <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
            <CreateBook show={bookVisible} onHide={()=>setBookVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;