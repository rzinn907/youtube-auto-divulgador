# youtube-auto-divulgador
Divulgação automática de vídeos do YouTube
Esse projeto nasceu de uma necessidade simples:
divulgar automaticamente vídeos novos do YouTube sem ter que ficar copiando link toda hora.
Ele foi feito em Node.js e resolve isso de forma prática:
quando um vídeo novo é publicado no canal, o sistema detecta e avisa automaticamente no WhatsApp, Discord e Telegram.
É ideal para criadores de conteúdo, páginas de promoções e pequenos negócios que querem economizar tempo.
 O que ele faz
 Detecta automaticamente vídeos novos de um canal do YouTube
 Envia aviso automático no WhatsApp
 Envia aviso no Discord
 Envia aviso no Telegram
 Evita mensagens repetidas
 Configuração simples e direta
 Funciona em segundo plano
Sem spam, sem repetir link, sem complicação.
 Como funciona na prática
O sistema fica rodando em segundo plano verificando o canal do YouTube em intervalos regulares.
Quando ele percebe que um vídeo novo foi publicado:
Confere se esse vídeo já foi divulgado
Se for novo, envia a mensagem automaticamente
Salva o vídeo como “já enviado”
Depois disso, ele só volta a enviar quando outro vídeo novo aparecer.
 Estrutura do projeto
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
 Configuração (bem simples)
Você só precisa editar o arquivo config.json:
{
  "youtube": {
    "apiKey": "SUA_API_KEY",
    "channelId": "ID_DO_CANAL"
  },
  "mensagem": {
    "texto": " NOVO VÍDEO!\n Confira o vídeo\n {link}"
  }
}
O {link} é substituído automaticamente pelo link do vídeo novo.
 Como rodar o projeto
Instale o Node.js (versão LTS)
Dentro da pasta do projeto, instale as dependências:
npm install
Inicie o sistema:
npm start
Na primeira execução, vai aparecer um QR Code do WhatsApp.
É só escanear uma vez e pronto.
 Intervalo de verificação
Por padrão, o sistema verifica o canal a cada 1 minuto.
Se quiser, você pode mudar isso facilmente no arquivo app.js.
 Observações importantes
A API do YouTube exige uma API Key
Tokens de Discord e Telegram devem ser mantidos em segredo
Use sempre para divulgação legítima (seu próprio conteúdo)
