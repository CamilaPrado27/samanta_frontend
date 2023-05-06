import React from "react";
import Table from "react-bootstrap/Table"
import style from "./Table.module.scss"

export default function TableUpdate(){
    return(
            <Table striped bordered hover size="sm" >
                <thead className={style.table}>
                    <tr >
                        <th className={style.th_name} >Data</th>
                        <th className={style.th_name} >Água</th>
                        <th className={style.th_name} >Luz</th>
                    </tr>
                </thead> 
            </Table>
    )
}