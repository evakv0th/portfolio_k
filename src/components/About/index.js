import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faJsSquare, faReact, faCss3, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons"
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <h2>Positive, motivated, friendly, team player</h2>
                <p>Have a great desire to change my working field, can have a basic conversation in English. Have an experience in React, HTML, JS, CSS. Familliar with GIT, have been working with Node.js.</p>
                <p>As of now i've finished 3 FreeCodeCamp courses for Front-end developers, had an experience with real commercial project on POS (small bug-fixes). There is also this *CV*, simple To-do list and TicToe game on my github.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#f06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#28a4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#5ed4d4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#3fd81d' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color='#ec4v28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About