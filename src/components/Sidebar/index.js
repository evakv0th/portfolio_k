import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (<>
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/glib-petryshyn-03143b262/'>
                        <FontAwesomeIcon icon={faLinkedin} color={'#4d4d4e'} />
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/evakv0th'>
                        <FontAwesomeIcon icon={faGithub} color={'#4d4d4e'} />
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/hlib.kvth/'>
                        <FontAwesomeIcon icon={faInstagram} color={'#4d4d4e'} />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://telegram.me/Kvthkv'>
                        <FontAwesomeIcon icon={faTelegram} color={'#4d4d4e'} />
                    </a>
                </li>
            </ul>
    </div>
</>)

export default Sidebar