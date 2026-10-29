<template>
  <div>
    <section class="pagina-capa capa-direitos">
      <span class="etiqueta">CONHECIMENTO É PODER</span>

      <h1>Conheça seus direitos.</h1>

      <p>
        Toda mulher tem direito à dignidade, à liberdade, à igualdade
        e a uma vida sem violência.
      </p>

      <span class="capa-decoracao">⚖</span>
    </section>

    <section class="secao">
      <div class="titulo-secao">
        <span class="etiqueta">SEUS DIREITOS IMPORTAM</span>

        <h2>O que você precisa conhecer</h2>

        <p>
          A informação ajuda a reconhecer direitos e compreender
          quais proteções e serviços podem estar disponíveis.
        </p>
      </div>

      <div class="grade-cartoes">
        <article class="cartao cartao-direito">
          <div class="icone-cartao icone-lilas">⚖</div>

          <h3>Igualdade e dignidade</h3>

          <p>
            A Constituição Federal estabelece a igualdade perante a lei
            e protege direitos fundamentais, incluindo dignidade,
            liberdade e segurança.
          </p>
        </article>

        <article class="cartao cartao-direito">
          <div class="icone-cartao icone-rosa">🛡</div>

          <h3>Proteção contra a violência</h3>

          <p>
            A Lei Maria da Penha prevê mecanismos para prevenir e
            combater a violência doméstica e familiar contra a mulher.
          </p>
        </article>

        <article class="cartao cartao-direito">
          <div class="icone-cartao icone-pessego">♡</div>

          <h3>Respeito e liberdade</h3>

          <p>
            Toda mulher merece ter sua autonomia respeitada e tomar
            decisões sem ameaças, coerção ou violência.
          </p>
        </article>

        <article class="cartao cartao-direito">
          <div class="icone-cartao icone-rosa">✿</div>

          <h3>Acesso à informação</h3>

          <p>
            É importante conhecer os serviços públicos, os canais de
            orientação e as opções de proteção disponíveis.
          </p>
        </article>

        <article class="cartao cartao-direito">
          <div class="icone-cartao icone-pessego">☏</div>

          <h3>Orientação e atendimento</h3>

          <p>
            Existem serviços que oferecem orientação, acolhimento e
            informações sobre como procurar ajuda.
          </p>
        </article>

        <article class="cartao cartao-direito">
          <div class="icone-cartao icone-lilas">✧</div>

          <h3>Direito à proteção</h3>

          <p>
            Conforme a situação e os requisitos legais, podem ser
            solicitadas medidas protetivas e outras formas de proteção.
          </p>
        </article>
      </div>
    </section>

    <section class="painel-informativo">
      <span class="etiqueta">LEGISLAÇÃO BRASILEIRA</span>

      <h2>O que é a Lei Maria da Penha?</h2>

      <p>
        A Lei nº 11.340/2006 cria mecanismos para prevenir e enfrentar
        a violência doméstica e familiar contra a mulher. Ela contempla
        diferentes formas de violência, como a física, psicológica,
        sexual, patrimonial e moral.
      </p>

      <a
        class="botao botao-principal"
        href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar a lei oficial ↗
      </a>
    </section>

    <section class="chamada-ajuda">
      <div>
        <span class="etiqueta">INFORMAÇÃO E APOIO</span>

        <h2>Quer saber onde procurar orientação?</h2>

        <p>
          Consulte os canais de atendimento e conheça as opções disponíveis.
        </p>
      </div>

      <RouterLink to="/ajuda" class="botao botao-principal">
        Ver canais de ajuda →
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>