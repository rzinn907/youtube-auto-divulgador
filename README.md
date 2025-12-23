
  <h1>🚀 youtube-auto-divulgador</h1>
  <p>
    Divulgação automática de vídeos do YouTube para
    <b>WhatsApp</b>, <b>Discord</b> e <b>Telegram</b> — totalmente em Node.js.
  </p>

  <div class="badges">
    <img src="https://img.shields.io/badge/node-%3E%3D14-brightgreen">
    <img src="https://img.shields.io/badge/license-MIT-blue">
  </div>
</header>

<section>
<h2>📌 Sobre o projeto</h2>
<p>
Ferramenta simples e leve que verifica periodicamente um canal do YouTube e envia avisos automáticos
quando um novo vídeo é publicado. Ideal para criadores, lojas e pequenas equipes.
</p>
</section>

<section>
<h2>✨ Highlights</h2>
<div class="cards">
  <div class="card">🔍 Detecta vídeos novos via YouTube Data API v3</div>
  <div class="card">📲 Envia para WhatsApp, Discord e Telegram</div>
  <div class="card">🔁 Evita envios duplicados</div>
  <div class="card">⚙️ Funciona em segundo plano</div>
  <div class="card">✏️ Mensagem personalizável com {link}</div>
</div>
</section>

<section>
<h2>🚀 Funcionalidades</h2>
<ul>
  <li>Verificação periódica de canal</li>
  <li>Mensagem automática com link</li>
  <li>WhatsApp (QR Code na primeira execução)</li>
  <li>Discord (bot ou webhook)</li>
  <li>Telegram (bot)</li>
  <li>Persistência do último vídeo enviado</li>
</ul>
</section>

<section>
<h2>🧰 Requisitos</h2>
<ul>
  <li>Node.js LTS (>=14, recomendado >=16)</li>
  <li>NPM ou Yarn</li>
  <li>YouTube Data API v3</li>
  <li>Token Telegram Bot</li>
  <li>Token ou Webhook Discord</li>
  <li>Conta WhatsApp (whatsapp-web.js)</li>
</ul>
</section>

<section>
<h2>📁 Estrutura do Projeto</h2>
<pre>
youtube-auto-divulgador/
├── app.js
├── config.json
├── lastVideo.json
├── package.json
└── services/
    ├── youtube.js
    ├── whatsapp.js
    ├── discord.js
    └── telegram.js
</pre>
</section>

<section>
<h2>⚙️ Exemplo de config.json</h2>
<pre>{
  "youtube": {
    "apiKey": "SUA_API_KEY",
    "channelId": "ID_DO_CANAL"
  },
  "mensagem": {
    "texto": "📢 NOVO VÍDEO!\n{link}"
  },
  "intervaloSegundos": 60
}</pre>
</section>

<section>
<h2>▶️ Como Rodar</h2>
<pre>
npm install
npm start
</pre>
<p>Na primeira execução, escaneie o QR Code do WhatsApp.</p>
</section>

<section>
<h2>🔐 Boas Práticas</h2>
<ul>
  <li>Nunca publique tokens no GitHub</li>
  <li>Use variáveis de ambiente</li>
  <li>Respeite limites da API</li>
  <li>Evite spam</li>
</ul>
</section>

<section>
<h2>🤝 Contribuição</h2>
<ul>
  <li>Abrir issues</li>
  <li>Enviar pull requests</li>
  <li>Seguir padrão de commits</li>
</ul>
</section>

<footer>
  <p>Licença MIT • Feito com ❤️ em Node.js</p>
</footer>

</body>
</html>
