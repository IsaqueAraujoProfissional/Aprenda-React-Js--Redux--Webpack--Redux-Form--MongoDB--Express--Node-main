/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from "react";
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Desafio Megasena" color="#B9006E">
                <Mega qtde={6}></Mega>
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={15}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
               <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
               <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
               <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Isaque'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'isaquearaujo@ibm.com'}}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#FF432E">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Araújo">
                    <FamiliaMembro nome="Isaque"></FamiliaMembro>
                    <FamiliaMembro nome="Izarele"></FamiliaMembro>
                    <FamiliaMembro nome="Izael"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={10} max={60}></Aleatorio>
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito legal!"
                    numero={15}></ComParametro>
            </Card>
            <Card titulo="#01 - Primeiro" color="#588C73">
                <Primeiro />        
            </Card>
        </div>
    </div>

