import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

let str = 'Contact me';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs 
        .sendForm('service_6kqqpcd', 'template_5jxx4po', refForm.current,'3ZPjwgyb9Z7ZerefR')
        .then(
            () => {
                alert('Message succesfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                       <AnimatedLetters 
                       letterClass={letterClass}
                       strArray={str.split('')}
                        idx={15}
                       /> 
                    </h1>
                    <p>
                        i'm good ok ok contact me
                    </p>
                    <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='send' />
                            </li>
                        </ul>
                    </form>

                    </div>
                </div>
                <div className="info-map">
          Petryshyn Glib,
          <br />
          Ukraine, Kyiv,
          <br />
          Sribnokilska 8a, 02095<br />
          <br />
          <span>evakv0th@gmail.com</span>
        </div>
                <div className="map-wrap">
          <MapContainer center={[50.400272,30.624920897]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.400272,30.624920897]}>
              <Popup>Glib lives here, come over for a cup of tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact