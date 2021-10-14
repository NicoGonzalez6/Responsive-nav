import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const App = ({ Home, About, Contact, Profile }) => {
    const [show, setShow] = useState(false);
    const linksCointainer = useRef();
    const links = useRef();

    useEffect(() => {
        const linksHeight = links.current.getBoundingClientRect().height;
        if (show) {
            linksCointainer.current.style.height = `${linksHeight}px`;
        } else {
            linksCointainer.current.style.height = `0px`;
        }
    }, [show]);

    return (
        <Wrapper>
            <div className="navCenter">
                <header>
                    <h1>Responsive Nav</h1>
                    <FaBars onClick={() => setShow(!show)}></FaBars>
                </header>
                <div className="linksContainer" ref={linksCointainer}>
                    <ul ref={links}>
                        <li>
                            <a>{Home}</a>
                        </li>
                        <li>
                            <a>{About}</a>
                        </li>
                        <li>
                            <a>{Contact}</a>
                        </li>
                        <li>
                            <a>{Profile}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.nav`
    width: 100%;
    background: #eadeff;

    svg {
        font-size: 20px;
        cursor: pointer;
        transition: 0.3s ease;
    }

    svg:hover {
        transform: rotate(90deg);
        color: #fff;
    }

    h1 {
        font-size: 20px;
    }

    .navCenter {
        width: 90%;
        margin: 0 auto;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding-bottom: 10px;
    }

    .linksContainer {
        height: auto;
        overflow: hidden;
        transition: 0.3s ease;
    }

    li {
        border-bottom: 1px solid #d3c9e5;
    }

    a {
        display: block;
        padding: 10px 5px;
        cursor: pointer;
        transition: 0.2s ease;
    }
    a:hover {
        background: #d3c9e5;
        color: #fff;
    }

    @media (min-width: 800px) {
        .navCenter {
            width: 80%;
            margin: 0 auto;
            display: flex;
        }

        svg {
            display: none;
        }

        header {
            width: 40%;
        }

        h1 {
            font-size: 24px;
        }

        .linksContainer {
            width: 60%;
            height: auto !important;
            overflow: hidden;
            transition: 0.3s ease;
        }

        ul {
            display: flex;
            align-items: center;
            height: 5rem;
            justify-content: space-between;
            padding-bottom: 0px;
        }

        li {
            border-bottom: 0px solid #d3c9e5;
        }

        a {
            display: block;
            padding: 10px 5px;
            cursor: pointer;
            transition: 0.2s ease;
            font-size: 20px;
        }
        a:hover {
            background: transparent;
            color: #fff;
        }
    }

    @media (min-width: 1000px) {
        .navCenter {
            width: 70%;
            margin: 0 auto;
            display: flex;
        }

        header {
            width: 50%;
        }

        h1 {
            font-size: 24px;
        }

        .linksContainer {
            width: 50%;
            height: auto !important;
            overflow: hidden;
            transition: 0.3s ease;
        }
    }
`;

App.propTypes = {
    Home: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
    Contact: PropTypes.string.isRequired,
    Profile: PropTypes.string.isRequired,
};

App.defaultProps = {
    Home: 'Home',
    About: 'About',
    Contact: 'Contact',
    Profile: 'Profile',
};
