import React from "react";
import style from  './Header.module.scss'
import logo_samanta from '../../assets/img/logo-samanta-sem-fundo.png'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render() {
        return(
            <header className={style.container_header}>
                <div>
                    <Link to="/">
                        <img className={style.header_logo} src={logo_samanta} alt="" />
                    </Link>
                </div>
                <nav>
                    <ul>

                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header