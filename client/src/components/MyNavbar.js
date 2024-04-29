import React, {useContext} from 'react';
import {Button, Nav, Navbar, NavLink} from "react-bootstrap";
import {Context} from "../index";
import {ADMIN_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const MyNavbar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="justify-content-between">
            <NavLink style={{ color: 'white',fontWeight: 'bold'}} to={MAIN_ROUTE} className="p-2">Library</NavLink> {/* "Library" слева */}
            <Nav className="justify-content-end p-2" style={{ color: 'white' }}> {/* Кнопки справа */}
                {user.isAuth ?
                    <>
                        <Button variant={"outline-light"} className="me-2" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
                    </>
                    :
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                }
            </Nav>
        </Navbar>



    );
});

export default MyNavbar;