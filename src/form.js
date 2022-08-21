import React, { useRef } from 'react';
import emailjs from "emailjs-com";


export default function Form(){
    
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
  
        if (name.current.value === '') {
            alert('Please enter your name');
            return;
        }
        else if (email.current.value === '' || !email.current.value.includes('@') || !email.current.value.includes('.')) {
            alert('Please enter a valid email');
            return;
        }
        else if (subject.current.value === '') {
            alert('Please enter a subject');
            return;
        }
        else if (message.current.value === '') {
            alert('Please enter a message');
            return;
        }
        emailjs.sendForm('service_nsuvu0p', 'template_yprz2hu', form.current, 'jyJXKs6OObkkMPftL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
        console.log(error.text);
    });
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <input ref={name} name='name' type="text" id="name" className="form" placeholder="Name"/>
            <input ref={email} name='email' type="email" id="email" className="form" placeholder="Email"/>
            <input ref={subject} name='subject' type="text" id="subject" className="form" placeholder="Subject"/>
            <textarea ref={message} name='message' type="message" id="message" placeholder="Message"/>
            <input type="submit" id="submit" value="Send"/>
        </form>
    );
}