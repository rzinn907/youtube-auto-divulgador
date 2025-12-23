📢 YouTube Divulgador Automático (Node.js)

Este projeto nasceu de uma necessidade simples:
divulgar automaticamente vídeos novos do YouTube sem precisar copiar link toda hora.

Ele foi desenvolvido em Node.js e funciona de forma totalmente automática:
quando um novo vídeo é publicado no canal, o sistema detecta e envia avisos automaticamente no WhatsApp, Discord e Telegram.

Ideal para:

Criadores de conteúdo

Páginas de promoções

Pequenos negócios

Quem quer economizar tempo e evitar trabalho manual

🚀 Funcionalidades

🔍 Detecta automaticamente novos vídeos de um canal do YouTube

📲 Envia aviso automático no WhatsApp

💬 Envia aviso automático no Discord

📢 Envia aviso automático no Telegram

🔁 Evita mensagens repetidas

⚙️ Configuração simples e direta

🖥️ Funciona em segundo plano

❌ Sem spam

❌ Sem repetir links

⚙️ Como funciona na prática

O sistema roda em segundo plano

Verifica o canal do YouTube em intervalos regulares

Quando detecta um vídeo novo:

Confere se o vídeo já foi divulgado

Se for novo, envia a mensagem automaticamente

Salva o vídeo como “já enviado”

Só volta a enviar quando outro vídeo novo for publicado

Simples, automático e eficiente.

📁 Estrutura do Projeto
youtube-divulgador-pro/
│
├── app.js
├── config.json
├── lastVideo.json
├── package.json
│
└── services/
    ├── youtube.js
    ├── whatsapp.js
    ├── discord.js
    └── telegram.js

🔧 Configuração

Basta editar o arquivo config.json:

{
  "youtube": {
    "apiKey": "SUA_API_KEY",
    "channelId": "ID_DO_CANAL"
  },
  "mensagem": {
    "texto": "📢 NOVO VÍDEO!\nConfira agora:\n{link}"
  }
}


🔁 O {link} será substituído automaticamente pelo link do vídeo novo.

▶️ Como rodar o projeto

Instale o Node.js (versão LTS)

Abra o terminal na pasta do projeto

Instale as dependências:

npm install


Inicie o sistema:

npm start


📱 Na primeira execução, aparecerá um QR Code do WhatsApp.
Escaneie apenas uma vez e pronto.

⏱️ Intervalo de verificação

Por padrão: 1 minuto

Pode ser alterado facilmente no arquivo app.js

⚠️ Observações importantes

A API do YouTube exige uma API Key

Tokens do Discord e Telegram devem ser mantidos em segredo

Use apenas para divulgação legítima (seu próprio conteúdo)
