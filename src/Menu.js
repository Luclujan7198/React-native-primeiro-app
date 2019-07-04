import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Contador from './componentes/Contador';
import Inverter, { MegaSena } from './componentes/Multi';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';

export default createDrawerNavigator({
    TextoSincronizado: {
        screen: () => <TextoSincronizado nome='João' sobrenome='Silva'/>,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'/>
    },
    Evento: {
        screen: () => <Evento/>
    }, 
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>
    },
    Plataforma: {
        screen: () => <Plataformas/>
    },
    Contador: {
        screen: () => <Contador/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: {title: 'Par e Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto='flexivel'/>
    }
    
}, {drawerWidth: 300});