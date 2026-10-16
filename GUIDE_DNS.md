# Guia DNS

## O que é DNS?

DNS significa Domain Name System, ou Sistema de Nomes de Domínio.

A função do DNS é relacionar um endereço fácil de lembrar, como `meusite.com`, ao endereço técnico usado pelos computadores para localizar o servidor responsável pelo site.

É possível comparar o DNS a uma agenda de contatos. Uma pessoa procura um nome conhecido, e a agenda informa o número correspondente. Na internet, o navegador procura um domínio e recebe as informações necessárias para alcançar o servidor correto.

## O que acontece quando alguém digita um endereço?

Quando uma pessoa digita um endereço no navegador, o computador precisa descobrir onde aquele site está hospedado.

O processo ocorre, de forma simplificada, assim:

1. O navegador verifica se já conhece o endereço por meio do cache.
2. Se não encontrar, a consulta é enviada a um resolvedor DNS.
3. O resolvedor procura quais servidores de nomes são responsáveis pelo domínio.
4. O servidor autoritativo consulta os registros DNS configurados para esse domínio.
5. O resolvedor devolve a resposta ao navegador.
6. O navegador se conecta ao serviço de hospedagem indicado.
7. O servidor responde enviando os arquivos necessários para exibir o site.

Esse processo normalmente acontece de forma muito rápida e permite que as pessoas utilizem nomes em vez de memorizar endereços numéricos.

## O que é um resolvedor DNS?

O resolvedor DNS recebe a pergunta inicial do dispositivo e procura a resposta.

O resolvedor pode consultar outros servidores e também armazenar respostas temporariamente em cache. Isso evita repetir toda a busca sempre que o mesmo domínio for acessado novamente.

## O que é um servidor de nomes?

O servidor de nomes informa quais servidores são responsáveis pelos registros do domínio.

Esses servidores ajudam a direcionar a consulta até a fonte autoritativa, onde estão as configurações oficiais daquele domínio.

## O que é um registro DNS?

Um registro DNS é uma instrução configurada para um domínio.

Existem diferentes tipos de registro. Um registro pode indicar um endereço IP, apontar um subdomínio para outro nome, direcionar e-mails ou fornecer informações de verificação para serviços externos.

## O que é um registro CNAME?

CNAME significa Canonical Name.

Esse registro faz um nome apontar para outro nome de domínio. Em vez de informar diretamente um endereço IP, o CNAME informa que determinado subdomínio deve seguir o destino configurado em outro domínio.

Por exemplo, um endereço como `www.meusite.com` pode usar um CNAME para apontar para o endereço fornecido pelo serviço de hospedagem.

Isso é útil porque o provedor pode modificar sua infraestrutura sem exigir que o proprietário do site atualize manualmente um endereço IP.

## DNS, hospedagem e HTTPS

O DNS indica onde o site deve ser encontrado. A hospedagem armazena e entrega os arquivos do projeto, como HTML, CSS, JavaScript, imagens e documentos.

HTTPS protege a comunicação entre o navegador e o servidor. O certificado digital permite confirmar o domínio acessado e criptografar as informações transmitidas.

Neste projeto, o Netlify fornece a hospedagem e o HTTPS automaticamente para a URL pública. Se um domínio personalizado for conectado futuramente, os registros DNS serão usados para direcionar esse domínio ao site hospedado.

## Resumo

Quando alguém digita um endereço, o DNS ajuda o navegador a descobrir qual serviço deve responder. O resolvedor realiza a busca, os servidores de nomes indicam a autoridade correta, os registros fornecem o destino e a hospedagem entrega o conteúdo protegido por HTTPS.

Compreender esse fluxo permite configurar um domínio personalizado conscientemente, em vez de apenas copiar instruções sem entender o que acontece.