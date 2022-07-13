import React from 'react';
import './Message.css';

function Message() {
    return (
        <section className='message'>
            <div id="container">
                <div id="sendMessage">
                    <input id="messColumn" type="text">
                    <input id="btn" type="button" value="Leaving a message.">
                </div>
                <!--belong content Put a ul-->
                <div id="content"></div>
            </div>
        </section>
    );
}