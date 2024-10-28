// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'
// import emailjs from '@emailjs/browser'


// const Contact = () => {
//     const formRef = useRef()
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: '',
//     })
//     const [Loading, setLoading] = useState(false)
//     const handleChange = ({target: {name, value}}) =>    {
//         setForm({...form, [name]: value})
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             await emailjs.send(
//                 service_jysmmvr, 
//                 template_zmrexed,
//                 {
//                     from_name: form.name,
//                     to_name: 'Mahmoud',
//                     from_email: form.email,
//                     to_email: 'mahmoud-h-a@hotmail.com',
//                     message: form.message,
//                   },
//                 '_6d3DdaOMkXUhfmyi'
//             )
//             setLoading(false);
//             alert("Message sent successfully!");
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//             alert('Something went wrong!')
//         }
//     }
//   return (
//     <section className='c-space my-20'>
//         <div className='relative min-h-screen flex items-center justify-center flex-col'>
//             <img src="assets/terminal.png" alt="terminal-bg" 
//                 className='absolute inset-0 min-h-screen' />
//             <div className='contact-container'>
//                 <h3 className='head-text'>Contact Me</h3>
//                 <p className='text-lg text-white-600 mt-3' >
//                     I am currently open for work. Send me a message 
//                     and I will get back to you as soon as possible.
//                 </p>
//                 <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
//                     <label className='space-y-3'>
//                         <span className='field-label'>Full Name</span>
//                         <input 
//                             type='text' 
//                             name='name' 
//                             value={form.name} 
//                             onChange={handleChange}
//                             required
//                             className='field-input'
//                             placeholder='John Doe' 
//                         />
//                     </label>

//                     <label className='space-y-3'>
//                         <span className='field-label'>Email</span>
//                         <input 
//                             type='email' 
//                             name='email' 
//                             value={form.email} 
//                             onChange={handleChange}
//                             required
//                             className='field-input'
//                             placeholder='johndoe@gmail.com' 
//                         />
//                     </label>

//                     <label className='space-y-3'>
//                         <span className='field-label'>Your Message</span>
//                         <textarea 
//                             type='text' 
//                             name='message' 
//                             value={form.message} 
//                             onChange={handleChange}
//                             required
//                             rows={5}
//                             className='field-input'
//                             placeholder="Hi, I'm interested in..." 
//                         />
//                     </label>
//                     <button className='field-btn' type="submit" disabled={Loading}>
//                         {Loading ? 'Sending...' : 'Send Message'}
//                         <img src="assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Contact


import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
        .send(
            'service_jxnasau',  
            'template_v7ibh8t',
            {
                from_name: form.name,
                to_name: 'Mahmoud Abdelsalam',
                from_email: form.email,
                to_email: 'mahmoud-h-a@hotmail.com',
                message: form.message,
            },
            '_6d3DdaOMkXUhfmyi'
        )
        .then(
            () => {
                setLoading(false);
                showAlert({
                    show: true,
                    text: 'Thank you for your message 😃',
                    type: 'success',
                });

                setTimeout(() => {
                    hideAlert(false);
                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                }, 3000); // Remove brackets around 3000
            },
            (error) => {
                setLoading(false);
                console.error(error);

                showAlert({
                    show: true,
                    text: "I didn't receive your message 😢",
                    type: 'danger',
                });
            }
        );
};

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            I’m currently open for work and eager to connect! 
            Feel free to reach out with any questions or opportunities, 
            and I will get back to you as soon as possible—typically within 24-48 hours. 
            I look forward to hearing from you!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;