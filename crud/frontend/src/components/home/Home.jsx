/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Main from "../template/Main";

export default props =>

    <Main icon="home" title="Início" subtitle="Projeto de React.">
        <div className="display-4">Bem Vindo!</div>
        <hr></hr>
        <p className="mb-">Sistema para exemplificar a construção
            de um cadastro desenvolvido em React!</p>
    </Main>