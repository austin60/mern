import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fd5of48', 'template_8gpsrcg', form.current, 'PgEmoPELDtiSAFBWh')
      .then((result) => {
          console.log(result.text);
          console.log("sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" className='form-control' />
      <label>Email</label>
      <input type="email" name="user_email" className='form-control'/>
      <label>Message</label>
      <textarea name="message" className='form-control' />
      <input type="submit" value="Send"  className='btn btn-primary '/>
    </form>
  );
};