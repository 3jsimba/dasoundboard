import React from "react";
import { Card, Button } from 'react-bootstrap';

function card({ title, howlClass }) {
    return(
        <>
            <Card border = 'white' style = {{width: '10rem'}} className = 'card'>
                <Card.Body>

                    <Card.Title>{title}</Card.Title>

                    <Card.Text></Card.Text>

                    <Button onClick={() => howlClass.sound.play()} variant="dark">play</Button>


                </Card.Body>
            </Card>
        </>
    )
}

export default card;


