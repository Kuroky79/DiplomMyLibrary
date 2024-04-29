import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {book} = useContext(Context)
    return (
        <ListGroup >
            {book.types.map(type =>
                <ListGroup.Item
                    active={type.id === book.selectedType.id}
                    key={type.id}
                    style={{width: 270, cursor: "pointer"}}
                    onClick={()=>book.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;