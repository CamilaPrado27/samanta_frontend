import React from "react";
import style from './Home.module.scss'
import platinha from '../../assets/img/plantar.png'
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <Header />
            <h1 className={style.titulo_home}>Plantinhas</h1>
            <div className={style.container_main_home}>
                <Link className={style.link_plantinha} to="/plantinha">
                    <div className={style.container_post}>
                        <div className={style.container_img}>
                            <img src={platinha} alt="platinha" className={style.img_plantinha} />
                        </div>
                        <div className={style.infos_plantinha}>
                            <h3 className={style.nome_platinha}>Nome: Plantinha</h3>
                            <p className={style.descricao_platinha}>Nome científico da plantinha</p>
                        </div>
                        
                    </div>
                </Link>
                <div className={style.container_adicionar_post}>
                    <p className={style.p_adicionar_plantinha}>
                        Adicione mais uma <br/>plantinha
                    </p>

                    <h2 className={style.h2_plus}>
                        +
                    </h2>

                    <img src="" alt="" />
                    
                </div>
            </div>
        </>
    )
}