import React from 'react';
import './Navbar.css'

const Navbar = (props) => {


    const closeNav = () => {
        if (window.innerWidth < 770) {
            console.log('clicked');
            document.getElementById('toggleNav').click()
        }
        else {
            return
        }
    }

    const signup = () => {
        window.scrollTo(0, 0)
        closeNav()
    }
    const signin = () => {
        window.scrollTo(0, 2330)
        closeNav()
    }
    const verify = () => {
        window.scrollTo(0, 3250)
        closeNav()
    }
    const reset = () => {
        window.scrollTo(0, 4225)
        closeNav()
    }
    const Google = () => {
        window.scrollTo(0, 6110)
        closeNav()
    }
    const delet = () => {
        window.scrollTo(0, 8060)
        closeNav()
    }
    const support = () => {
        window.scrollTo(0, 10000)
        closeNav()
    }


    return (
        <nav class="navbar navbar-expand-md bg-light sticky-top navbar-shrink py-2" id="mainNav">
            <div class="container-fluid"><a class="navbar-brand d-flex align-items-center mt-0 mb-0" href="/"><span class="bs-icon-sm bs-icon-circle bs-icon-primary  d-flex justify-content-center align-items-center me-2 bs-icon"><img src={require('./music.png')} alt="" srcset="" height='45px' width='' /></span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1" id='toggleNav'><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={signup}>Signup</button></li>
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={signin}>Signin</button></li>
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={verify}>Verify</button></li>
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={reset}>Reset</button></li>
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={Google}>Google</button></li>
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={delet}>Delete</button></li>
                        <li class="nav-item"><button class="nav-link btn myBtn" onClick={support}>Support</button></li>
                    </ul>
                    <a class="btn myBtn svg" role="button" href="https://github.com/MR-DHRUV/Tunify-The-Music-API" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
