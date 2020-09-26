import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Search from '../../components/Search';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import './Home.css'

function Home() {
    const [seed, setSeed] = useState(0)

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerleft">
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/loja">Loja</Link>
                </div>
                <div className="home__right">
                    <Link to="/email">E-mail</Link>
                    <Link to="/imagen">Images</Link>
                    <AppsIcon />
                    <div className="home__avatar">
                        <Avatar
                            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="home__body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                />

                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
