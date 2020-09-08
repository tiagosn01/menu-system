import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import TypeItem from '../../components/TypeItem';
import imgCartorio from '../../assets/cartorio.png';
import imgConstrucao from '../../assets/construcao.jpg';
import imgContador from '../../assets/contador.jpg';
import imgContribuinte from '../../assets/contribuinte.jpg';
import imgFinanceiro from '../../assets/financeiro.jpg';
import imgGrafico from '../../assets/grafico.jpg';
import imgOrgaoPublico from '../../assets/orgao_publico.jpg';
import imgPrestador from '../../assets/prestador.jpg';
import * as S from './styles';

const SelectType = () => {
  return (
    <S.Container>
      <S.Title>Selecione o perfil do seu usuário</S.Title>

      <S.Pageitemlist>
        <main>
          <TypeItem
            image={imgCartorio}
            title="Cartório"
            description="Específico para cartórios."
          />

          <TypeItem
            image={imgConstrucao}
            title="Construção Civil"
            description="Específico para empresas de construção civil."
          />
          <TypeItem
            image={imgContador}
            title="Escritório contábil ou Contador"
            description="Para escritórios e contadores."
          />
          <TypeItem
            image={imgContribuinte}
            title="Escritório contábil ou Contador"
            description="Para os contribuintes municipais que desejam consultar seus débitos e emitir certidões. (NÃO É UTILIZADO POR EMPRESAS PRESTADORAS/TOMADORES DE SERVIÇO OU EMISSORES DE NFS-E)."
          />
          <TypeItem
            image={imgFinanceiro}
            title="Instituição Financeira"
            description="Para instituições financeiras."
          />
          <TypeItem
            image={imgGrafico}
            title="Gráfica"
            description="Específico para empresas do setor gráfico."
          />
          <TypeItem
            image={imgOrgaoPublico}
            title="Orgão Público"
            description="Para órgãos públicos."
          />
          <TypeItem
            image={imgPrestador}
            title="Cartório"
            description="Específico para cartórios"
          />

          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </main>
      </S.Pageitemlist>
    </S.Container>
  );
};

export default SelectType;
