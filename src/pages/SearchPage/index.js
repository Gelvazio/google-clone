import React from 'react'
import { Link } from 'react-router-dom'

import { useStateValue } from '../../config/StateProvider'
import useGoogleSearch from '../../config/useGoogleSearch'

import Search from '../../components/Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './SearchPage.css'

function SearchPage() {
    const [{ term }, ] = useStateValue()
    const { data } = useGoogleSearch(term)

    return (
        <div className="searchpage">

            <div className="searchpage__header">
                <Link to='/'>
                    <img
                        className="searchpage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>

                <div className="searchpage__headsbody">
                    <Search hideButtons />

                    <div className="searchpage__options">
                        <div className="searchpage__optionsLeft">
                            <div className="searchpage__option">
                                <SearchIcon />
                                <Link to='/todas'>Todas</Link>
                            </div>
                            <div className="searchpage__option">
                                <DescriptionIcon />
                                <Link to='/descricao'>Descrição</Link>
                            </div>
                            <div className="searchpage__option">
                                <ImageIcon />
                                <Link to='/imagem'>Imagem</Link>
                            </div>
                            <div className="searchpage__option">
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="searchpage__option">
                                <RoomIcon />
                                <Link to='/mapa'>Mapa</Link>
                            </div>
                            <div className="searchpage__option">
                                <MoreVertIcon />
                                <Link to='/avancado'>Mais</Link>
                            </div>
                        </div>

                        <div className="searchpage__optionsRigth">
                            <div className="searchpage__option">
                                <Link to='/configuracao'>Configuração</Link>
                            </div>
                            <div className="searchpage__option">
                                <Link to='/ferramenta'>Ferramentas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchpage__results">
                    <p className="searchpage__resultcount">
                        Aproximadamente {" "}
                        {data?.searchInformation.formattedTotalResults} {" "}
                        resultado
                        ({data?.searchInformation.formattedSearchTime} segundos) para {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchpage__result">
                            <a
                                className="searchpage__resultlink"
                                href={item.link}
                                // target="_blank"
                            >
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchpage__resultimage"
                                            src={
                                                item.pagemap?.cse_image[0]?.src
                                            }
                                            alt=""
                                        />
                                    )
                                }
                                {item.displayLink}
                            </a>

                            <a
                                className="searchpage__resulttitle"
                                href={item.link}
                                // target="_blank"
                            >
                                <h2>{item.title}</h2>
                            </a>
                            <p
                                className="searchpage__resultsnipet"
                            >
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SearchPage
