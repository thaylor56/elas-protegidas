<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuAberto = ref(false)

function fecharMenu() {
  menuAberto.value = false
}
</script>

<template>
  <div class="site">
    <header class="cabecalho">
      <RouterLink to="/" class="marca" @click="fecharMenu">
        <span class="marca-icone">♡</span>

        <span class="marca-texto">
          <strong>Elas Protegidas</strong>
          <small>Informação é proteção</small>
        </span>
      </RouterLink>

      <button
        class="botao-menu"
        type="button"
        :aria-expanded="menuAberto"
        aria-label="Abrir ou fechar menu"
        @click="menuAberto = !menuAberto"
      >
        {{ menuAberto ? '✕' : '☰' }}
      </button>

      <nav class="navegacao" :class="{ 'navegacao-aberta': menuAberto }">
        <RouterLink to="/" @click="fecharMenu">
          Início
        </RouterLink>

        <RouterLink to="/direitos" @click="fecharMenu">
          Direitos
        </RouterLink>

        <RouterLink to="/relacionamentos" @click="fecharMenu">
          Relacionamentos
        </RouterLink>

        <RouterLink to="/ajuda" class="link-ajuda" @click="fecharMenu">
          Buscar ajuda
        </RouterLink>
      </nav>
    </header>

    <main class="conteudo-principal">
      <RouterView />
    </main>

    <footer class="rodape">
      <RouterLink to="/" class="rodape-marca">
        Elas Protegidas ♡
      </RouterLink>

      <p>Informação é proteção. Conhecimento é poder.</p>

      <p class="rodape-aviso">
        Projeto educativo. Não substitui serviços de emergência
        ou orientação profissional.
      </p>

      <div class="rodape-links">
        <RouterLink to="/direitos">Conheça seus direitos</RouterLink>
        <RouterLink to="/ajuda">Canais de atendimento</RouterLink>
      </div>

      <small>© 2026 Elas Protegidas · Informação e acolhimento</small>
    </footer>
  </div>
</template>