import React from "react";
import Header from "../../components/Header";
import style  from "./Plantinha.module.scss";
import img_plantinha from "../../assets/img/planta-suculenta-em-um-objeto-de-decoracao-para-casa-em-vaso-de-terracota-removebg-preview.png"
import {TbClockHour7} from "react-icons/tb"
import { Link } from "react-router-dom";
import {MdOutlineArrowBackIos} from 'react-icons/md'
import ProgressBar from "../../components/Progress-bar";
import TableUpdate from "../../components/Table";


export default function Plantinha(){
    return(
        <React.Fragment>
            <Header />

            
                <div className={style.div_voltar_home}>
                    <Link className={style.link_home} to="/">
                        <MdOutlineArrowBackIos color="#f5f5f5" size={20} />
                        <p className={style.p_voltar_home}>
                            Voltar a Home
                        </p>
                    </Link> 
                </div>
            
                <div className={style.div_main_plantinha}>
                    <div className={style.div_esquerda}>
                        <img className={style.img_plantinha} src={img_plantinha} alt="" />
                        
                        <div className={style.div_nome_plantinha}>
                            <h3 className={style.h3_nome_plantinha}>Nome</h3>
                            <p className={style.p_nome_cientifico_plantinha}>Nome científico</p>
                        </div>
                    </div>
                    <div className={style.div_centro}>

                        <div className={style.div_atualizacao}>
                            <p className={style.p_plantinha_att}>Planta</p>
                            <p className={style.p_atualizacao}> <TbClockHour7 size={18} color="#2A9681" /> Atualização à x min</p>
                        </div>

                        <div>
                            <p className={style.p_progress_bar}>Água</p>
                            {/* informações api */}
                            <ProgressBar value={30} />
                            <p className={style.p_progress_bar}>Luminosidade</p>
                            {/* informações api */}
                            <ProgressBar value={80} />
                        </div>
                        <div>
                            <h3 className={style.h3_infos_plantinha}>
                                Informações
                            </h3>

                            <p className={style.p_informarcaoes_plantinha}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                    </div>

                    <div className={style.div_direita}>
                        <h3 className={style.h3_historico}>
                            Histórico
                        </h3>
                            <TableUpdate />
                    </div>
                </div>

        </React.Fragment>
    )
}