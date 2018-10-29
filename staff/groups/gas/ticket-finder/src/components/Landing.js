import React from 'react'
import { Button } from "mdbreact";

function Landing(props) {
    return <section className="container-landing">
        
        <div className="container-landing-left">

        <div className="container-landing-left-claim">

            <ul>

            <li className="landing-claim" ><i className="fas fa-ticket-alt">&nbsp;&nbsp; Find tickets for the best events</i></li>

            <li className="landing-claim"><i className="fas fa-bookmark">&nbsp;&nbsp; Save your favourite events</i></li>

            <li className="landing-claim"><i className="fas fa-thumbtack">&nbsp;&nbsp; Get custom recommendations</i></li>

            </ul>

            </div>

        </div>

        <div className="container-landing-right">

            <h1 className="landing-title">Ticket Finder</h1>

            <Button color="unique" onClick={props.onRegisterClick}>Register</Button>

            <Button color="unique" onClick={props.onLoginClick}>Login</Button>

        </div>
        
    </section>
}

export default Landing

