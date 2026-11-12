
<template>
  <main class="quiz-pagina">

    <!-- CAPA -->
    <section class="quiz-capa">
      <div class="capa-icone">✿</div>

      <span class="etiqueta">ELAS PROTEGIDAS</span>

      <h1>
        Conhecimento é
        <span>uma forma de proteção.</span>
      </h1>

      <p>
        Teste seus conhecimentos sobre direitos das mulheres,
        respeito e relacionamentos saudáveis.
      </p>

      <div class="capa-detalhes">
        <span>♡ 7 perguntas</span>
        <span>✧ Aprenda enquanto joga</span>
      </div>
    </section>

    <!-- QUIZ -->
    <section class="quiz-container">

      <div v-if="!finalizado">

        <!-- PROGRESSO -->
        <div class="progresso">
          <div class="progresso-texto">
            <span>PERGUNTA {{ atual + 1 }} DE {{ perguntas.length }}</span>
            <span>{{ Math.round(progresso) }}%</span>
          </div>

          <div
            class="barra"
            role="progressbar"
            :aria-valuenow="Math.round(progresso)"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="`Progresso do quiz: ${Math.round(progresso)}%`"
          >
            <div :style="{ width: progresso + '%' }"></div>
          </div>
        </div>

        <!-- CATEGORIA -->
        <div class="categoria">
          <span>♡</span>
          {{ perguntas[atual].categoria }}
        </div>

        <!-- PERGUNTA -->
        <h2 class="pergunta">
          {{ perguntas[atual].pergunta }}
        </h2>

        <p class="instrucao">
          Escolha a alternativa que considera correta.
        </p>

        <!-- ALTERNATIVAS -->
        <div class="opcoes">
          <button
            v-for="(opcao, indice) in perguntas[atual].opcoes"
            :key="indice"
            type="button"
            class="opcao"
            :class="{
              selecionada: resposta === indice && !respondido,
              correta: respondido && indice === perguntas[atual].correta,
              incorreta: respondido &&
                resposta === indice &&
                indice !== perguntas[atual].correta
            }"
            :disabled="respondido"
            @click="resposta = indice"
          >
            <span class="letra">
              {{ String.fromCharCode(65 + indice) }}
            </span>

            <span class="texto-opcao">
              {{ opcao }}
            </span>

            <span
              v-if="respondido && indice === perguntas[atual].correta"
              class="icone-resposta"
            >
              ✓
            </span>

            <span
              v-else-if="respondido && resposta === indice"
              class="icone-resposta"
            >
              ✕
            </span>
          </button>
        </div>

        <!-- CONFERIR -->
        <button
          v-if="!respondido"
          type="button"
          class="botao"
          :disabled="resposta === null"
          @click="conferirResposta"
        >
          Conferir resposta →
        </button>

        <!-- FEEDBACK -->
        <div
          v-if="respondido"
          class="feedback"
          :class="{
            'feedback-correto': acertou,
            'feedback-erro': !acertou
          }"
          role="status"
          aria-live="polite"
        >
          <div class="feedback-titulo">
            <span>{{ acertou ? '✓' : '♡' }}</span>

            <h3>
              {{ acertou ? 'Muito bem!' : 'Continue aprendendo!' }}
            </h3>
          </div>

          <p>{{ perguntas[atual].explicacao }}</p>

          <button
            type="button"
            class="botao-proxima"
            @click="proxima"
          >
            {{ atual === perguntas.length - 1
              ? 'Ver meu resultado'
              : 'Próxima pergunta →'
            }}
          </button>
        </div>

        <p class="rodape-quiz">
          Cada resposta é uma oportunidade de aprender. ♡
        </p>

      </div>

      <!-- RESULTADO FINAL -->
      <div v-else class="resultado">

        <div class="resultado-icone">
          {{ pontos >= 5 ? '🏆' : '♡' }}
        </div>

        <span class="etiqueta">RESULTADO FINAL</span>

        <h2>Quiz concluído!</h2>

        <p class="resultado-descricao">
          {{ mensagemResultado }}
        </p>

        <div class="pontuacao">
          <strong>{{ pontos }}/{{ perguntas.length }}</strong>
          <span>respostas corretas</span>
        </div>

        <div class="resultado-barra">
          <div :style="{ width: porcentagem + '%' }"></div>
        </div>

        <span class="porcentagem">
          {{ porcentagem }}% de aproveitamento
        </span>

        <div class="resultado-mensagem">
          <span>♡</span>

          <p>
            Conhecer seus direitos é importante.
            Continue aprendendo e compartilhando informação.
          </p>
        </div>

        <button
          type="button"
          class="botao"
          @click="reiniciar"
        >
          ↻ Fazer quiz novamente
        </button>

        <RouterLink to="/" class="voltar-inicio">
          Voltar para a página inicial
        </RouterLink>

      </div>

    </section>

    <!-- FRASE FINAL -->
    <section class="frase-final">
      <span>♡</span>

      <h2>Informação é proteção. Conhecimento é poder.</h2>

      <p>Elas Protegidas</p>
    </section>

  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const atual = ref(0)
const resposta = ref(null)
const pontos = ref(0)
const respondido = ref(false)
const finalizado = ref(false)
const acertou = ref(false)

const perguntas = [
  {
    categoria: 'RELACIONAMENTOS SAUDÁVEIS',

    pergunta: 'Qual destas atitudes demonstra respeito em uma relação?',

    opcoes: [
      'Controlar as amizades da pessoa',
      'Respeitar opiniões e decisões',
      'Exigir senhas pessoais',
      'Impedir a pessoa de sair sozinha'
    ],

    correta: 1,

    explicacao:
      'Respeitar opiniões, escolhas e limites é fundamental para construir uma relação saudável.'
  },

  {
    categoria: 'VIOLÊNCIA PSICOLÓGICA',

    pergunta: 'O que pode caracterizar violência psicológica?',

    opcoes: [
      'Apoiar as escolhas da pessoa',
      'Conversar sobre sentimentos',
      'Humilhar, ameaçar ou controlar alguém',
      'Respeitar opiniões diferentes'
    ],

    correta: 2,

    explicacao:
      'Humilhações, ameaças, manipulação e controle podem causar danos emocionais e caracterizar violência psicológica.'
  },

  {
    categoria: 'CANAIS DE APOIO',

    pergunta: 'Qual é o canal de atendimento para orientação sobre violência contra a mulher?',

    opcoes: [
      '192',
      '180',
      '193',
      '199'
    ],

    correta: 1,

    explicacao:
      'O Ligue 180 é a Central de Atendimento à Mulher. É gratuito e oferece orientação e informações sobre serviços de atendimento.'
  },

  {
    categoria: 'EMERGÊNCIA',

    pergunta: 'Em uma situação de perigo imediato, qual número deve ser acionado para chamar a Polícia Militar?',

    opcoes: [
      '190',
      '180',
      '192',
      '100'
    ],

    correta: 0,

    explicacao:
      'O número 190 é utilizado para acionar a Polícia Militar em situações de emergência.'
  },

  {
    categoria: 'DIREITOS DAS MULHERES',

    pergunta: 'Qual é o principal objetivo da Lei Maria da Penha?',

    opcoes: [
      'Regular os relacionamentos amorosos',
      'Criar regras para o casamento',
      'Proteger mulheres contra a violência doméstica e familiar',
      'Substituir todas as leis brasileiras'
    ],

    correta: 2,

    explicacao:
      'A Lei Maria da Penha estabelece mecanismos para prevenir e combater a violência doméstica e familiar contra a mulher.'
  },

  {
    categoria: 'RESPEITO E AUTONOMIA',

    pergunta: 'Quem tem o direito de tomar decisões sobre a própria vida?',

    opcoes: [
      'Somente o parceiro',
      'Somente os familiares',
      'A pessoa deve ter sua autonomia respeitada',
      'Apenas pessoas mais velhas'
    ],

    correta: 2,

    explicacao:
      'Cada pessoa tem direito à autonomia e deve ter suas escolhas e decisões respeitadas.'
  },

  {
    categoria: 'PREVENÇÃO DA VIOLÊNCIA',

    pergunta: 'Qual atitude pode ajudar a construir uma sociedade com mais respeito e segurança?',

    opcoes: [
      'Ignorar situações de violência',
      'Culpar quem sofre violência',
      'Tratar a violência como algo normal',
      'Compartilhar informações e combater preconceitos'
    ],

    correta: 3,

    explicacao:
      'A informação, a conscientização e o combate aos preconceitos são importantes para prevenir a violência e promover o respeito.'
  }
]

const progresso = computed(() => {
  const perguntasConcluidas = atual.value + (respondido.value ? 1 : 0)

  return (perguntasConcluidas / perguntas.length) * 100
})

const porcentagem = computed(() => {
  return Math.round((pontos.value / perguntas.length) * 100)
})

const mensagemResultado = computed(() => {
  if (pontos.value === perguntas.length) {
    return 'Incrível! Você acertou todas as perguntas e demonstrou muito conhecimento.'
  }

  if (pontos.value >= 5) {
    return 'Parabéns! Você demonstrou um ótimo conhecimento sobre esses assuntos.'
  }

  if (pontos.value >= 3) {
    return 'Muito bem! Você já conhece pontos importantes. Continue aprendendo!'
  }

  return 'Este é só o começo! Continue explorando o Elas Protegidas e aprendendo sobre seus direitos.'
})

function conferirResposta() {
  if (resposta.value === null || respondido.value) return

  acertou.value = resposta.value === perguntas[atual.value].correta

  if (acertou.value) {
    pontos.value++
  }

  respondido.value = true
}

function proxima() {
  if (!respondido.value) return

  if (atual.value < perguntas.length - 1) {
    atual.value++
    resposta.value = null
    respondido.value = false
    acertou.value = false
  } else {
    finalizado.value = true
  }
}

function reiniciar() {
  atual.value = 0
  resposta.value = null
  pontos.value = 0
  respondido.value = false
  finalizado.value = false
  acertou.value = false
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.quiz-pagina {
  min-height: 100vh;
  padding: 40px 7% 70px;
  background: #fcf9ff;
  color: #40334c;
}

/* CAPA */

.quiz-capa {
  position: relative;
  overflow: hidden;
  padding: 55px 25px;
  border-radius: 26px;
  background: linear-gradient(135deg, #eee3ff, #fce9f3);
  text-align: center;
}

.capa-icone {
  margin-bottom: 12px;
  color: #a47ac2;
  font-size: 32px;
}

.etiqueta {
  color: #9163b5;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.quiz-capa h1 {
  margin: 18px 0;
  color: #745092;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(30px, 5vw, 45px);
  line-height: 1.2;
}

.quiz-capa h1 span {
  display: block;
  color: #b47eaa;
}

.quiz-capa p {
  max-width: 580px;
  margin: auto;
  color: #695a73;
  line-height: 1.8;
}

.capa-detalhes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 25px;
  color: #80599f;
  font-size: 13px;
  font-weight: 600;
}

/* CONTAINER */

.quiz-container {
  max-width: 750px;
  min-height: 440px;
  margin: 40px auto;
  padding: 38px;
  border: 1px solid #f0e7f5;
  border-radius: 24px;
  background: white;
  box-shadow: 0 10px 35px #75528b12;
}

/* PROGRESSO */

.progresso {
  margin-bottom: 30px;
}

.progresso-texto {
  display: flex;
  justify-content: space-between;
  color: #805ca0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

.barra,
.resultado-barra {
  height: 9px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 20px;
  background: #eee5f4;
}

.barra div,
.resultado-barra div {
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, #9870b8, #c18caf);
  transition: width 0.4s ease;
}

/* PERGUNTA */

.categoria {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 13px;
  margin-bottom: 15px;
  border-radius: 20px;
  background: #f4ecf9;
  color: #9163b5;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

.pergunta {
  margin: 10px 0;
  color: #745092;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 25px;
  line-height: 1.5;
}

.instrucao {
  margin-bottom: 22px;
  color: #92849b;
  font-size: 13px;
}

/* OPÇÕES */

.opcoes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.opcao {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 15px;
  border: 1px solid #e8dced;
  border-radius: 13px;
  background: #fdfbff;
  color: #51445e;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;
}

.opcao:not(:disabled):hover {
  border-color: #b28ac5;
  background: #f8f2fb;
  transform: translateX(3px);
}

.opcao.selecionada {
  border: 2px solid #9870b8;
  background: #f2eafa;
  color: #745092;
  font-weight: 700;
}

.letra {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: #eee5f4;
  color: #80599f;
  font-size: 13px;
  font-weight: 800;
}

.texto-opcao {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
}

.opcao.correta {
  border: 2px solid #75a87a;
  background: #eff8ef;
  color: #426b48;
}

.opcao.correta .letra {
  background: #dcefd9;
  color: #426b48;
}

.opcao.incorreta {
  border: 2px solid #d69a9a;
  background: #fff1f1;
  color: #975656;
}

.opcao.incorreta .letra {
  background: #f7dddd;
  color: #975656;
}

.icone-resposta {
  font-size: 20px;
  font-weight: 800;
}

/* BOTÕES */

.botao,
.botao-proxima {
  width: 100%;
  padding: 16px;
  margin-top: 23px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(120deg, #9870b8, #b58ab9);
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s;
}

.botao:hover,
.botao-proxima:hover {
  background: #80599f;
  transform: translateY(-2px);
}

.botao:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

/* FEEDBACK */

.feedback {
  padding: 20px;
  margin-top: 25px;
  border-radius: 15px;
  animation: aparecer 0.3s ease;
}

.feedback-correto {
  border: 1px solid #d5e9d5;
  background: #f0f8ef;
  color: #426b48;
}

.feedback-erro {
  border: 1px solid #f0dada;
  background: #fff3f3;
  color: #925656;
}

.feedback-titulo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feedback-titulo span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffffa8;
  font-weight: 800;
}

.feedback-titulo h3 {
  margin: 0;
  font-size: 17px;
}

.feedback p {
  font-size: 13px;
  line-height: 1.7;
}

.botao-proxima {
  margin-top: 10px;
}

.rodape-quiz {
  margin-top: 28px;
  color: #a394ac;
  font-size: 12px;
  text-align: center;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESULTADO */

.resultado {
  padding: 10px 0;
  text-align: center;
}

.resultado-icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: #f4eafa;
  font-size: 35px;
}

.resultado h2 {
  margin: 12px 0;
  color: #745092;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 32px;
}

.resultado-descricao {
  color: #756b7c;
  line-height: 1.7;
}

.pontuacao {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 25px;
  margin: 25px 0;
  border-radius: 18px;
  background: #f5eef9;
}

.pontuacao strong {
  color: #80599f;
  font-size: 43px;
}

.pontuacao span {
  color: #8b7898;
  font-size: 13px;
}

.resultado-barra {
  height: 12px;
  margin-top: 10px;
}

.porcentagem {
  display: block;
  margin-top: 12px;
  color: #80599f;
  font-size: 13px;
  font-weight: 700;
}

.resultado-mensagem {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  margin-top: 28px;
  border-radius: 14px;
  background: #fcf1f6;
  color: #895f7c;
  text-align: left;
}

.resultado-mensagem span {
  font-size: 25px;
}

.resultado-mensagem p {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
}

.voltar-inicio {
  display: block;
  margin-top: 20px;
  color: #80599f;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.voltar-inicio:hover {
  text-decoration: underline;
}

/* FRASE FINAL */

.frase-final {
  padding: 35px 20px;
  margin-top: 45px;
  border-radius: 20px;
  background: linear-gradient(120deg, #f0e7f8, #fcecf3);
  text-align: center;
}

.frase-final span {
  color: #a47ac2;
  font-size: 27px;
}

.frase-final h2 {
  color: #76518f;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 22px;
}

.frase-final p {
  color: #927c9c;
  font-size: 12px;
}

/* CELULAR */

@media (max-width: 600px) {
  .quiz-pagina {
    padding: 22px 15px 45px;
  }

  .quiz-capa {
    padding: 40px 18px;
  }

  .quiz-capa h1 {
    font-size: 30px;
  }

  .capa-detalhes {
    gap: 12px;
    flex-direction: column;
  }

  .quiz-container {
    padding: 25px 17px;
    margin: 25px auto;
  }

  .pergunta {
    font-size: 21px;
  }

  .opcao {
    padding: 13px 11px;
  }

  .texto-opcao {
    font-size: 13px;
  }

  .resultado h2 {
    font-size: 27px;
  }

  .frase-final h2 {
    font-size: 19px;
  }
}
</style>
