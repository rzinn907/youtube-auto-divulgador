<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>youtube-auto-divulgador</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Segoe UI,Arial,sans-serif;
}
body{
  background:#0b0b12;
  color:#fff;
  line-height:1.6;
}
.bg{
  position:fixed;
  inset:0;
  background:
    radial-gradient(circle at 20% 20%, #ff005d55, transparent 40%),
    radial-gradient(circle at 80% 30%, #00c6ff55, transparent 40%),
    radial-gradient(circle at 50% 80%, #8f00ff55, transparent 40%);
  filter:blur(60px);
  animation:move 15s infinite alternate;
  z-index:-1;
}
@keyframes move{from{transform:scale(1)}to{transform:scale(1.2)}}

header{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:40px;
}
header h1{font-size:3rem;margin-bottom:15px}
header p{max-width:800px;opacity:.9}

.badges img{margin:10px}

section{
  padding:80px 10%;
  animation:fadeUp 1.2s ease;
}
@keyframes fadeUp{
  from{opacity:0;transform:translateY(40px)}
  to{opacity:1;transform:translateY(0)}
}
h2{
  font-size:2.3rem;
  margin-bottom:30px;
  text-align:center;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:25px;
}
.card{
  background:#ffffff10;
  backdrop-filter:blur(15px);
  border-radius:18px;
  padding:30px;
  transition:.4s;
}
.card:hover{
  transform:translateY(-10px) scale(1.04);
  background:#ffffff20;
}

ul{margin-left:20px}
code,pre{
  background:#00000070;
  padding:15px;
  border-radius:12px;
  display:block;
  overflow-x:auto;
  margin-top:15px;
}

footer{
  text-align:center;
  padding:40px;
  opacity:.6;
}
</style>
</head>

<body>
<div class="bg"></div>

<header>
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
