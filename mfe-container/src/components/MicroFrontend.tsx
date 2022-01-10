import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface MicroFrontendProps {
    hostNameApp: string,
}

const Container = styled.div`
  display: block;
`;

const MicroFrontend: React.FC<MicroFrontendProps> = (props) => {

    const { hostNameApp } = props;

    useEffect(() => {
        const getMfApp = async () => {
            //CHAMADA DO APP CONTAINER AO SERVER INTERMEDIÁRIO PASSANDO O NOME DO MFE A SER IMPORTADO
            const axiosResponse = await axios.get(`${process.env.REACT_APP_BFF_HOST}/bundle/${hostNameApp}`);

            const bundle = axiosResponse.data;

            //CRIAÇÃO DA TAG SCRIPT
            const script = document.createElement('scipt');
            script.id = `container-${hostNameApp}`;
            script.innerHTML = bundle;

            //INSERÇÃO DA TAG COM O CÓDIGO NO HEAD DA PÁGINA HTML
            document.head.appendChild(script);
            ////-------console.log('bundle', bundle);
            // eslint-disable-next-line no-eval
            eval(bundle);            
        }
        console.log('{hostNameApp}-app', `${hostNameApp}-app`)
        getMfApp();
    });

    //RETORNO DE UMA DIV CONTENDO O ID, ONDE O MFE VAI CAPTURAR E RENDERIZAR A APLICAÇÃO IMPORTADA
    return <Container id={`${hostNameApp}-app`}></Container>
}

export default MicroFrontend;