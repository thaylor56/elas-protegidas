
<template>
  <main class="solicitar-pagina">

    <!-- CAPA -->
    <section class="solicitar-capa">
      <div class="capa-conteudo">
        <span class="etiqueta">ELAS PROTEGIDAS · ACOLHIMENTO</span>

        <h1>
          Você não está
          <span>sozinha.</span>
        </h1>

        <p>
          Informação, acolhimento e orientação são passos importantes.
          Conheça os caminhos de apoio e os seus direitos.
        </p>

        <div class="capa-detalhe">
          <span>♡</span>
          Sua voz merece ser ouvida e respeitada.
        </div>
      </div>

      <div class="capa-decoracao">
        <span>♡</span>
        <span>✿</span>
        <span>✧</span>
      </div>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <section class="conteudo-principal">

      <div class="formulario-container">

        <div class="formulario-intro">
          <span class="subtitulo">ESPAÇO DE ACOLHIMENTO</span>

          <h2>Como podemos ajudar?</h2>

          <p>
            Selecione o assunto sobre o qual deseja obter informações.
            Compartilhe apenas aquilo com que se sentir confortável.
          </p>
        </div>

        <form @submit.prevent="enviarFormulario">

          <div class="campo">
            <label for="nome">
              Como podemos te chamar?
              <span>(opcional)</span>
            </label>

            <input
              id="nome"
              v-model.trim="form.nome"
              type="text"
              placeholder="Seu nome ou apelido"
              maxlength="60"
              autocomplete="off"
            />
          </div>

          <div class="campo">
            <label for="tipo">
              Qual assunto deseja consultar?
            </label>

            <select id="tipo" v-model="form.tipo" required>
              <option value="" disabled>
                Selecione uma opção
              </option>

              <option value="Direitos das mulheres">
                Direitos das mulheres
              </option>

              <option value="Relacionamento abusivo">
                Relacionamentos abusivos
              </option>

              <option value="Orientação sobre violência">
                Orientação sobre violência
              </option>

              <option value="Serviços de apoio">
                Serviços de apoio
              </option>

              <option value="Outro assunto">
                Outro assunto
              </option>
            </select>
          </div>

          <div class="campo">
            <label for="contato">
              Como prefere consultar as informações?
            </label>

            <select id="contato" v-model="form.contato" required>
              <option value="" disabled>
                Selecione uma opção
              </option>

              <option value="Telefone">
                Informações por telefone
              </option>

              <option value="E-mail">
                Informações por e-mail
              </option>

              <option value="Atendimento presencial">
                Atendimento presencial
              </option>

              <option value="Consultar informações">
                Apenas consultar informações no site
              </option>
            </select>
          </div>

          <div class="campo">
            <label for="mensagem">
              Deseja deixar uma mensagem?
              <span>(opcional)</span>
            </label>

            <textarea
              id="mensagem"
              v-model.trim="form.mensagem"
              placeholder="Escreva somente o que se sentir confortável em compartilhar."
              rows="5"
              maxlength="500"
            ></textarea>

            <small>
              {{ form.mensagem.length }}/500 caracteres
            </small>
          </div>

          <!-- AVISO -->
          <div class="aviso-privacidade">
            <div class="aviso-icone">♡</div>

            <div>
              <strong>Sua privacidade importa.</strong>

              <p>
                Este formulário é uma demonstração escolar.
                Nenhuma informação é enviada ou armazenada.
                Não informe endereço, telefone, senhas ou dados
                pessoais sensíveis.
              </p>
            </div>
          </div>

          <button type="submit" class="botao-enviar">
            Enviar solicitação demonstrativa
            <span>→</span>
          </button>

          <!-- CONFIRMAÇÃO -->
          <div
            v-if="enviado"
            class="mensagem-sucesso"
            role="status"
            aria-live="polite"
          >
            <div class="sucesso-icone">✓</div>

            <h3>Preenchimento concluído!</h3>

            <p>
              Esta foi apenas uma simulação. Nenhuma solicitação
              foi enviada a uma equipe de atendimento.
            </p>

            <button
              type="button"
              class="botao-novo"
              @click="limparFormulario"
            >
              Preencher novamente
            </button>
          </div>

        </form>
      </div>

      <!-- LATERAL INFORMATIVA -->
      <aside class="lateral-ajuda">

        <div class="lateral-card">
          <span class="lateral-icone">♡</span>

          <h3>Você merece respeito.</h3>

          <p>
            Nenhuma forma de violência deve ser normalizada.
            Conhecer seus direitos é importante.
          </p>

          <RouterLink to="/direitos">
            Conheça seus direitos →
          </RouterLink>
        </div>

        <div class="lateral-card lateral-rosa">
          <span class="lateral-icone">✿</span>

          <h3>Informação é proteção.</h3>

          <p>
            Aprenda a reconhecer sinais de relacionamentos
            abusivos e a importância dos limites pessoais.
          </p>

          <RouterLink to="/relacionamentos">
            Saiba mais →
          </RouterLink>
        </div>

      </aside>
    </section>

    <!-- CANAIS OFICIAIS -->
    <section class="canais-oficiais">

      <div class="canais-intro">
        <span class="subtitulo">REDE DE APOIO</span>

        <h2>Precisa de ajuda?</h2>

        <p>
          Conheça os canais oficiais de atendimento disponíveis no Brasil.
        </p>
      </div>

      <div class="grade-canais">

        <article class="canal canal-emergencia">
          <div class="canal-numero">190</div>

          <span class="canal-etiqueta">EMERGÊNCIA</span>

          <h3>Polícia Militar</h3>

          <p>
            Em situações de perigo imediato, ligue para a Polícia Militar.
          </p>

          <a href="tel:190" class="botao-canal">
            Ligar 190 →
          </a>
        </article>

        <article class="canal canal-orientacao">
          <div class="canal-numero">180</div>

          <span class="canal-etiqueta">ATENDIMENTO À MULHER</span>

          <h3>Central Ligue 180</h3>

          <p>
            Canal gratuito para orientação e atendimento sobre
            violência contra a mulher.
          </p>

          <a
            href="https://www.gov.br/mulheres/pt-br/ligue180"
            target="_blank"
            rel="noopener noreferrer"
            class="botao-canal"
          >
            Conhecer o Ligue 180 →
          </a>
        </article>

      </div>
    </section>

    <!-- FRASE FINAL -->
    <section class="frase-final">
      <span>♡</span>

      <h2>Você merece viver com liberdade, respeito e segurança.</h2>

      <p>Informação é proteção. Conhecimento é poder.</p>
    </section>

  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const enviado = ref(false)

const form = reactive({
  nome: '',
  tipo: '',
  contato: '',
  mensagem: ''
})

function enviarFormulario() {
  enviado.value = true
}

function limparFormulario() {
  form.nome = ''
  form.tipo = ''
  form.contato = ''
  form.mensagem = ''

  enviado.value = false
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.solicitar-pagina {
  min-height: 100vh;
  padding: 35px 7% 70px;
  background: #fcf9ff;
  color: #40334c;
}

/* CAPA */

.solicitar-capa {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  min-height: 310px;
  padding: 65px 8%;
  margin-bottom: 55px;
  border-radius: 28px;
  background: linear-gradient(120deg, #eee3ff, #fce9f3);
}

.capa-conteudo {
  position: relative;
  z-index: 2;
  max-width: 620px;
}

.etiqueta,
.subtitulo {
  color: #9163b5;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.solicitar-capa h1 {
  margin: 18px 0;
  color: #745092;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(38px, 5vw, 55px);
  line-height: 1.15;
}

.solicitar-capa h1 span {
  display: block;
  color: #b47eaa;
}

.solicitar-capa p {
  max-width: 540px;
  color: #695a73;
  line-height: 1.8;
  font-size: 15px;
}

.capa-detalhe {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  color: #80599f;
  font-size: 13px;
  font-weight: 600;
}

.capa-detalhe span {
  font-size: 23px;
}

.capa-decoracao {
  position: relative;
  width: 180px;
  height: 180px;
  flex-shrink: 0;
}

.capa-decoracao span {
  position: absolute;
  color: #b28ac5;
  opacity: 0.65;
}

.capa-decoracao span:nth-child(1) {
  top: 25px;
  left: 35px;
  font-size: 100px;
}

.capa-decoracao span:nth-child(2) {
  top: 90px;
  right: 5px;
  font-size: 65px;
}

.capa-decoracao span:nth-child(3) {
  top: 0;
  right: 20px;
  font-size: 45px;
}

/* CONTEÚDO */

.conteudo-principal {
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(230px, 0.8fr);
  align-items: start;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
}

.formulario-container {
  padding: 38px;
  border: 1px solid #f0e7f5;
  border-radius: 24px;
  background: white;
  box-shadow: 0 12px 40px #75528b0d;
}

.formulario-intro {
  margin-bottom: 30px;
}

.formulario-intro h2,
.canais-intro h2 {
  margin: 12px 0;
  color: #805ca0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 30px;
}

.formulario-intro p,
.canais-intro p {
  color: #756b7c;
  line-height: 1.7;
  font-size: 14px;
}

/* CAMPOS */

.campo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 23px;
}

.campo label {
  color: #51445e;
  font-size: 14px;
  font-weight: 700;
}

.campo label span {
  color: #9a8ba2;
  font-size: 12px;
  font-weight: 400;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #e8dced;
  border-radius: 12px;
  background: #fdfbff;
  color: #493b55;
  font: inherit;
  font-size: 14px;
  outline: none;
  transition: 0.25s;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  border-color: #a47ac2;
  background: white;
  box-shadow: 0 0 0 4px #a47ac21c;
}

.campo textarea {
  resize: vertical;
  min-height: 120px;
}

.campo input::placeholder,
.campo textarea::placeholder {
  color: #a89caf;
}

.campo small {
  color: #8a7c92;
  text-align: right;
  font-size: 12px;
}

/* PRIVACIDADE */

.aviso-privacidade {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 19px;
  margin: 27px 0;
  border: 1px solid #e9dff1;
  border-radius: 15px;
  background: #f7f1fb;
  color: #71558b;
}

.aviso-icone {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #eadcf3;
  font-size: 20px;
}

.aviso-privacidade strong {
  font-size: 14px;
}

.aviso-privacidade p {
  margin: 7px 0 0;
  font-size: 13px;
  line-height: 1.7;
}

/* BOTÕES */

.botao-enviar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 17px;
  border: none;
  border-radius: 13px;
  background: linear-gradient(120deg, #a17ac0, #bd8caf);
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.botao-enviar:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #9870b83b;
}

.botao-enviar span {
  font-size: 20px;
}

/* CONFIRMAÇÃO */

.mensagem-sucesso {
  padding: 25px;
  margin-top: 25px;
  border: 1px solid #dcebdc;
  border-radius: 16px;
  background: #f1f8f0;
  color: #426b48;
  text-align: center;
}

.sucesso-icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: #dcefd9;
  font-size: 24px;
}

.mensagem-sucesso h3 {
  margin: 8px 0;
}

.mensagem-sucesso p {
  font-size: 13px;
  line-height: 1.7;
}

.botao-novo {
  padding: 13px 20px;
  margin-top: 12px;
  border: none;
  border-radius: 10px;
  background: #6f9873;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}

.botao-novo:hover {
  background: #527b57;
}

/* LATERAL */

.lateral-ajuda {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.lateral-card {
  padding: 25px;
  border: 1px solid #eadff2;
  border-radius: 20px;
  background: #f3ebfa;
}

.lateral-rosa {
  border-color: #f2e1eb;
  background: #fbedf3;
}

.lateral-icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  background: white;
  color: #9a70b6;
  font-size: 24px;
}

.lateral-card h3 {
  margin: 18px 0 10px;
  color: #76518f;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 21px;
}

.lateral-card p {
  color: #756b7c;
  font-size: 13px;
  line-height: 1.7;
}

.lateral-card a {
  display: inline-block;
  margin-top: 8px;
  color: #80599f;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.lateral-card a:hover {
  text-decoration: underline;
}

/* CANAIS */

.canais-oficiais {
  max-width: 1100px;
  margin: 65px auto 0;
}

.canais-intro {
  margin-bottom: 25px;
  text-align: center;
}

.grade-canais {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.canal {
  padding: 30px;
  border: 1px solid #eadff2;
  border-radius: 20px;
  background: white;
  box-shadow: 0 8px 25px #75528b0a;
}

.canal-emergencia {
  border-top: 4px solid #c98b9f;
}

.canal-orientacao {
  border-top: 4px solid #a47ac2;
}

.canal-numero {
  color: #80599f;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 42px;
  font-weight: 700;
}

.canal-etiqueta {
  display: block;
  margin: 5px 0 12px;
  color: #a184b3;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.canal h3 {
  margin: 8px 0;
  color: #805ca0;
  font-size: 19px;
}

.canal p {
  min-height: 48px;
  color: #756b7c;
  font-size: 13px;
  line-height: 1.7;
}

.botao-canal {
  display: inline-block;
  padding: 12px 17px;
  margin-top: 10px;
  border-radius: 10px;
  background: #f0e7f6;
  color: #76518f;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s;
}

.botao-canal:hover {
  background: #e6d7f0;
  transform: translateY(-2px);
}

/* FRASE FINAL */

.frase-final {
  padding: 45px 25px;
  margin: 55px auto 0;
  border-radius: 22px;
  background: linear-gradient(120deg, #f0e7f8, #fcecf3);
  text-align: center;
}

.frase-final span {
  color: #a47ac2;
  font-size: 30px;
}

.frase-final h2 {
  max-width: 650px;
  margin: 15px auto;
  color: #76518f;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 25px;
  line-height: 1.5;
}

.frase-final p {
  color: #927c9c;
  font-size: 13px;
}

/* CELULAR */

@media (max-width: 850px) {
  .conteudo-principal {
    grid-template-columns: 1fr;
  }

  .lateral-ajuda {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .capa-decoracao {
    width: 120px;
  }
}

@media (max-width: 600px) {
  .solicitar-pagina {
    padding: 20px 15px 45px;
  }

  .solicitar-capa {
    min-height: auto;
    padding: 45px 22px;
    margin-bottom: 30px;
  }

  .capa-decoracao {
    display: none;
  }

  .solicitar-capa h1 {
    font-size: 39px;
  }

  .formulario-container {
    padding: 25px 18px;
  }

  .lateral-ajuda {
    grid-template-columns: 1fr;
  }

  .grade-canais {
    grid-template-columns: 1fr;
  }

  .canal {
    padding: 25px 20px;
  }

  .frase-final {
    padding: 35px 20px;
  }

  .frase-final h2 {
    font-size: 21px;
  }
}
</style>
