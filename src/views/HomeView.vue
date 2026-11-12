
<template>
  <div>
    <section class="hero">
      <div class="hero-conteudo">
        <span class="etiqueta">UM ESPAÇO DE INFORMAÇÃO E ACOLHIMENTO</span>

        <h1>
          Toda mulher merece
          <span>viver com liberdade.</span>
        </h1>

        <p class="hero-descricao">
          Conhecer seus direitos é um passo importante para reconhecer
          situações de violência, construir relações saudáveis e saber
          onde encontrar ajuda.
        </p>

        <div class="hero-botoes">
          <RouterLink to="/direitos" class="botao botao-principal">
            Conheça seus direitos →
          </RouterLink>

          <RouterLink to="/ajuda" class="botao botao-secundario">
            Onde buscar ajuda?
          </RouterLink>
        </div>

        <div class="hero-frase">
          <span>♡</span>
          Você merece respeito, segurança e liberdade.
        </div>
      </div>

      <div class="hero-visual">
        <img
          class="hero-imagem"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
          alt="Retrato de uma mulher em um ambiente iluminado"
        />

        <div class="cartao-flutuante">
          <span class="cartao-coracao">♡</span>

          <div>
            <strong>Você importa.</strong>
            <p>Sua voz merece ser ouvida.</p>
          </div>
        </div>

        <span class="decoracao decoracao-um">✿</span>
        <span class="decoracao decoracao-dois">✧</span>
      </div>
    </section>

    <section class="secao secao-introducao">
      <div class="titulo-secao">
        <span class="etiqueta">POR ONDE COMEÇAR?</span>

        <h2>Informação que transforma.</h2>

        <p>
          Um espaço para aprender, refletir e descobrir caminhos
          para uma vida com mais respeito e segurança.
        </p>
      </div>

      <div class="grade-cartoes">
        <RouterLink to="/direitos" class="cartao">
          <div class="icone-cartao icone-lilas">⚖</div>

          <span class="categoria">CONHECIMENTO</span>

          <h3>Direitos das mulheres</h3>

          <p>
            Conheça direitos fundamentais, formas de proteção e
            informações sobre a Lei Maria da Penha.
          </p>

          <span class="cartao-link">Explorar conteúdo ↗</span>
        </RouterLink>

        <RouterLink to="/relacionamentos" class="cartao">
          <div class="icone-cartao icone-rosa">♡</div>

          <span class="categoria">BEM-ESTAR</span>

          <h3>Relacionamentos saudáveis</h3>

          <p>
            Aprenda a reconhecer respeito, limites pessoais,
            confiança e sinais de alerta em uma relação.
          </p>

          <span class="cartao-link">Descobrir mais ↗</span>
        </RouterLink>

        <RouterLink to="/ajuda" class="cartao">
          <div class="icone-cartao icone-pessego">✿</div>

          <span class="categoria">REDE DE APOIO</span>

          <h3>Onde encontrar ajuda</h3>

          <p>
            Consulte canais oficiais de atendimento e conheça
            opções para procurar orientação e proteção.
          </p>

          <span class="cartao-link">Ver canais de ajuda ↗</span>
        </RouterLink>
      </div>
    </section>

    <section class="faixa-reflexao">
      <h2>
        Respeito não é um favor.
        <span>É um direito.</span>
      </h2>

      <p>
        Toda mulher merece ser ouvida, respeitada e viver sem violência.
      </p>

      <RouterLink to="/direitos" class="botao botao-claro">
        Saiba mais sobre seus direitos
      </RouterLink>
    </section>

    <!-- HOMENAGEM À MÚSICA MARIA, MARIA -->
    <section class="frase-musica">
      <span class="musica-etiqueta">UMA HOMENAGEM À FORÇA FEMININA</span>

      <div class="musica-icone">♫</div>

      <h2>Maria, Maria</h2>

      <p class="musica-frase">
        Toda Maria carrega uma força que merece ser reconhecida.
      </p>

      <span class="musica-credito">
        Inspirado na canção de Milton Nascimento
      </span>
    </section>

    <section class="secao secao-sobre">
      <div class="sobre-simbolo">♡</div>

      <div class="sobre-texto">
        <span class="etiqueta">SOBRE O PROJETO</span>

        <h2>Conhecimento também é uma forma de proteção.</h2>

        <p>
          O Elas Protegidas é um projeto educativo criado para
          compartilhar informações sobre os direitos das mulheres,
          relacionamentos saudáveis e serviços de atendimento.
        </p>

        <p>
          Nosso objetivo é tornar informações importantes mais
          acessíveis e incentivar uma cultura de respeito,
          igualdade e prevenção da violência.
        </p>
      </div>
    </section>

    <section class="chamada-ajuda">
      <div>
        <span class="etiqueta">VOCÊ NÃO PRECISA SABER TUDO SOZINHA</span>

        <h2>Precisa de informações sobre onde buscar ajuda?</h2>

        <p>
          Conheça os canais oficiais de atendimento disponíveis no Brasil.
        </p>
      </div>

      <RouterLink to="/ajuda" class="botao botao-principal">
        Encontrar canais de ajuda →
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.frase-musica {
  text-align: center;
  padding: 65px 25px;
  margin: 45px 0;
  background: linear-gradient(135deg, #f3eafa, #fceef4);
  border-radius: 24px;
  border: 1px solid #ead9f2;
}

.musica-etiqueta {
  color: #966bb0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.musica-icone {
  color: #a477bd;
  font-size: 35px;
  margin: 18px 0 8px;
}

.frase-musica h2 {
  color: #70458f;
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  margin-bottom: 15px;
}

.musica-frase {
  color: #634b70;
  font-family: 'Playfair Display', serif;
  font-size: 23px;
  font-weight: 600;
  max-width: 650px;
  margin: 0 auto 18px;
  line-height: 1.5;
}

.musica-credito {
  color: #927c9c;
  font-size: 13px;
}

@media (max-width: 600px) {
  .frase-musica {
    padding: 45px 18px;
  }

  .frase-musica h2 {
    font-size: 27px;
  }

  .musica-frase {
    font-size: 19px;
  }
}
</style>
