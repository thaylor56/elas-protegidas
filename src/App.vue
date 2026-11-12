
<template>
  <div class="aplicacao">
    <header class="cabecalho">
      <RouterLink to="/" class="marca">
        <span class="marca-simbolo">E</span>
        <span>Elas <strong>Protegidas</strong></span>
      </RouterLink>

      <button
        class="menu-botao"
        type="button"
        @click="menuAberto = !menuAberto"
        :aria-expanded="menuAberto"
        aria-label="Abrir ou fechar menu"
      >
        {{ menuAberto ? 'Fechar' : 'Menu' }}
      </button>

      <nav class="navegacao" :class="{ aberto: menuAberto }">
        <RouterLink to="/" @click="fecharMenu">Início</RouterLink>
        <RouterLink to="/direitos" @click="fecharMenu">
          Direitos
        </RouterLink>
        <RouterLink to="/relacionamentos" @click="fecharMenu">
          Relacionamentos
        </RouterLink>
        <RouterLink to="/ajuda" @click="fecharMenu">
          Ajuda
        </RouterLink>
        <RouterLink to="/quiz" @click="fecharMenu">
          Quiz
        </RouterLink>
        <RouterLink
          to="/solicitar-ajuda"
          class="link-solicitar"
          @click="fecharMenu"
        >
          Solicitar ajuda
        </RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="rodape">
      <RouterLink to="/" class="rodape-marca">
        Elas Protegidas
      </RouterLink>

      <p>Informação é proteção. Conhecimento é poder.</p>

      <p class="rodape-aviso">
        Projeto educativo. Não substitui serviços oficiais de atendimento.
      </p>

      <div class="rodape-links">
        <RouterLink to="/direitos">Direitos</RouterLink>
        <RouterLink to="/ajuda">Canais de ajuda</RouterLink>
        <RouterLink to="/solicitar-ajuda">Solicitar ajuda</RouterLink>
      </div>

      <small>© 2026 Elas Protegidas. Projeto educativo.</small>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuAberto = ref(false)

function fecharMenu() {
  menuAberto.value = false
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'DM Sans', Arial, sans-serif;
  background: #fcf9ff;
}

a {
  text-decoration: none;
}

.cabecalho {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 17px 7%;
  background: #ffffffed;
  border-bottom: 1px solid #eee5f3;
  backdrop-filter: blur(12px);
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #745092;
  font-size: 20px;
}

.marca-simbolo {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: #eee3ff;
  color: #805ca0;
  font-weight: 800;
}

.navegacao {
  display: flex;
  align-items: center;
  gap: 22px;
}

.navegacao a {
  color: #65566f;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.navegacao a:hover,
.navegacao a.router-link-active {
  color: #986cba;
}

.navegacao .link-solicitar {
  padding: 11px 17px;
  border-radius: 25px;
  background: #9870b8;
  color: white;
}

.navegacao .link-solicitar:hover,
.navegacao .link-solicitar.router-link-active {
  background: #80599f;
  color: white;
}

.menu-botao {
  display: none;
  padding: 9px 14px;
  border: 1px solid #e4d8ed;
  border-radius: 10px;
  background: white;
  color: #80599f;
  font-weight: 700;
}

.rodape {
  padding: 45px 20px;
  background: #f1eafa;
  color: #74627e;
  text-align: center;
}

.rodape-marca {
  color: #80599f;
  font-size: 23px;
  font-weight: 800;
}

.rodape-aviso {
  font-size: 13px;
}

.rodape-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.rodape-links a {
  color: #80599f;
  font-weight: 600;
}

.rodape small {
  color: #8d8095;
}

@media (max-width: 900px) {
  .cabecalho {
    flex-wrap: wrap;
  }

  .menu-botao {
    display: block;
  }

  .navegacao {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .navegacao.aberto {
    display: flex;
  }

  .navegacao a {
    padding: 13px 8px;
  }

  .navegacao .link-solicitar {
    text-align: center;
    margin-top: 8px;
  }
}
</style>
