import React from 'react'
import style from "./Progress_bar.module.scss"

interface Props{
    value: number
}

export default function ProgressBar(props: Props){
    const {value} = props
    return(
        <> 
            <div className={style.container_progress}>
                <progress className={style.progress_bar} value={value} max={100} />
                <span className={style.porcentagem}>{value}%</span>

            </div>
        </>
    )
}