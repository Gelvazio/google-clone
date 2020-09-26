import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core';

import { useStateValue } from '../../config/StateProvider'
import { actionTypes } from '../../config/reducer'

import './Search.css'

function Search({ hideButtons = false }) {
    const [, dispatch] = useStateValue()

    const [input, setInput] = useState("")
    const history = useHistory()

    const search = (e) => {
        e.preventDefault()

        console.log('Pesquisa usando butão  Procurar no Google >>>', input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }

    return (
        <form className="search" >

            <div className="search__input">
                <SearchIcon className="search__inputicon" />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <MicIcon />
            </div>

            { !hideButtons ? (
                <div className="search__buttons">
                    <Button
                        type="submit"
                        onClick={search}
                        variant="outlined"
                    >
                        Procurar no Google
                    </Button>

                    <Button
                        variant="outlined"
                    >
                        Eu estou com sorte
                    </Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button
                        className="search__buttonshidden"
                        type="submit"
                        onClick={search}
                        variant="outlined"
                    >
                        Procurar no Google
                    </Button>

                    <Button
                        className="search__buttonshidden"
                        variant="outlined"
                    >
                        Eu estou com sorte
                    </Button>
                </div>
            )}

        </form>
    )
}

export default Search
