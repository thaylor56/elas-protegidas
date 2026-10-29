<template>
  <div>
    <section class="pagina-capa capa-relacionamentos">
      <span class="etiqueta">AFETO COM RESPEITO</span>

      <h1>Amar também é respeitar.</h1>

      <p>
        Relações saudáveis são construídas com respeito, confiança,
        diálogo e liberdade para ser quem você é.
      </p>

      <span class="capa-decoracao">♡</span>
    </section>

    <section class="secao">
      <div class="titulo-secao">
        <span class="etiqueta">RELAÇÕES QUE FAZEM BEM</span>

        <h2>Como é uma relação saudável?</h2>

        <p>
          Nenhuma relação é perfeita, mas respeito, segurança e
          liberdade devem fazer parte dela.
        </p>
      </div>

      <div class="grade-cartoes">
        <article class="cartao">
          <div class="icone-cartao icone-lilas">♡</div>

          <h3>Respeito mútuo</h3>

          <p>
            Cada pessoa pode expressar opiniões, sentimentos e
            necessidades sem humilhação ou medo.
          </p>
        </article>

        <article class="cartao">
          <div class="icone-cartao icone-rosa">☁</div>

          <h3>Confiança</h3>

          <p>
            Existe espaço para ter amizades, interesses próprios
            e privacidade, sem vigilância ou controle constante.
          </p>
        </article>

        <article class="cartao">
          <div class="icone-cartao icone-pessego">✿</div>

          <h3>Diálogo</h3>

          <p>
            As pessoas conseguem conversar sobre problemas e
            discordar sem ameaças ou intimidação.
          </p>
        </article>

        <article class="cartao">
          <div class="icone-cartao icone-rosa">🦋</div>

          <h3>Liberdade</h3>

          <p>
            Cada pessoa mantém sua individualidade e pode fazer
            escolhas sem ser forçada ou isolada.
          </p>
        </article>

        <article class="cartao">
          <div class="icone-cartao icone-pessego">🌷</div>

          <h3>Limites pessoais</h3>

          <p>
            Um limite deve ser respeitado. Ninguém tem obrigação
            de aceitar algo que não deseja.
          </p>
        </article>

        <article class="cartao">
          <div class="icone-cartao icone-lilas">☀</div>

          <h3>Apoio mútuo</h3>

          <p>
            As pessoas apoiam os objetivos uma da outra sem
            diminuir conquistas ou impedir seu crescimento.
          </p>
        </article>
      </div>
    </section>

    <section class="secao secao-alerta">
      <div class="titulo-secao">
        <span class="etiqueta">FIQUE ATENTA</span>

        <h2>Alguns sinais merecem atenção.</h2>

        <p>
          Certos comportamentos podem indicar controle, abuso
          ou violência. Leve seus sentimentos e sua segurança a sério.
        </p>
      </div>

      <div class="lista-alertas">
        <article class="alerta-item">
          <span class="alerta-icone">!</span>

          <div>
            <h3>Controle excessivo</h3>

            <p>
              Querer controlar roupas, amizades, rotina, localização
              ou decisões pessoais.
            </p>
          </div>
        </article>

        <article class="alerta-item">
          <span class="alerta-icone">!</span>

          <div>
            <h3>Humilhações e ameaças</h3>

            <p>
              Ofender, intimidar, ameaçar ou fazer a pessoa sentir
              medo de expressar suas opiniões.
            </p>
          </div>
        </article>

        <article class="alerta-item">
          <span class="alerta-icone">!</span>

          <div>
            <h3>Isolamento</h3>

            <p>
              Tentar afastar alguém de amigos, familiares ou outras
              pessoas que poderiam oferecer apoio.
            </p>
          </div>
        </article>

        <article class="alerta-item">
          <span class="alerta-icone">!</span>

          <div>
            <h3>Invasão de privacidade</h3>

            <p>
              Exigir senhas, ler mensagens sem consentimento ou
              monitorar a pessoa sem autorização.
            </p>
          </div>
        </article>
      </div>

      <div class="aviso-suave">
        <strong>Importante:</strong>
        nenhuma pessoa merece sofrer violência. Se você estiver
        preocupada com sua segurança ou com a de alguém, procure
        uma pessoa de confiança ou um serviço de atendimento.
      </div>
    </section>

    <section class="faixa-reflexao">
      <span class="aspas">“</span>

      <h2>
        O amor não exige
        <span>que você abra mão de si.</span>
      </h2>

      <p>
        Você merece relações baseadas em respeito, cuidado e liberdade.
      </p>

      <RouterLink to="/ajuda" class="botao botao-claro">
        Conheça os canais de ajuda
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>