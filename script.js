// lista de palavras de 5 letras
const USAR_IMAGENS_TERMOS = false;

const PALAVRAS_REDES = [
  {
    palavra: "FIBRA",
    titulo: "Fibra Óptica",
    categoria: "Infraestrutura Física",
    imagem: "./img/fibra.png",
    explicacao: "Meio de transmissão que utiliza pulsos de luz dentro de filamentos de vidro ou plástico para enviar dados em altíssima velocidade e longas distâncias sem interferência eletromagnética."
  },
  {
    palavra: "SMART",
    titulo: "Dispositivos Smart & IoT",
    categoria: "Internet das Coisas (IoT)",
    imagem: "./img/smart.png",
    explicacao: "Objetos físicos equipados com sensores, microcontroladores e conectividade de rede (Wi-Fi, Bluetooth ou NFC) capazes de coletar dados e automatizar tarefas na nuvem."
  },
  {
    palavra: "PROXY",
    titulo: "Servidor Proxy",
    categoria: "Segurança & Arquitetura",
    imagem: "./img/proxy.png",
    explicacao: "Servidor intermediário entre o dispositivo do usuário e a internet. É usado para filtrar conteúdo, aumentar a privacidade, controlar acessos e acelerar requisições via cache."
  },
  {
    palavra: "NUVEM",
    titulo: "Computação em Nuvem (Cloud)",
    categoria: "Serviços & Infraestrutura",
    imagem: "./img/nuvem.png",
    explicacao: "Entrega de recursos de TI sob demanda pela internet — como servidores, armazenamento e bancos de dados — eliminando a necessidade de manter servidores físicos locais."
  },
  {
    palavra: "CABOS",
    titulo: "Cabeamento Estruturado",
    categoria: "Infraestrutura Física",
    imagem: "./img/cabos.png",
    explicacao: "Conjunto padronizado de cabos par trançado (Cat5e/Cat6) e conectores RJ-45 crimpados no padrão T568A/B para interligar computadores, switches e roteadores."
  },
  {
    palavra: "PORTA",
    titulo: "Porta Lógica (TCP/UDP)",
    categoria: "Protocolos de Rede",
    imagem: "./img/porta.png",
    explicacao: "Identificador numérico (0 a 65535) que direciona o tráfego de rede para o serviço correto dentro de um servidor, como a porta 80 (HTTP), 443 (HTTPS) e 22 (SSH)."
  },
  {
    palavra: "LINUX",
    titulo: "Sistema Operacional Linux",
    categoria: "Sistemas & Servidores",
    imagem: "./img/linux.png",
    explicacao: "Sistema operacional de código aberto que alimenta a maior parte dos servidores da internet, roteadores, firewalls e infraestruturas em nuvem por sua estabilidade."
  },
  {
    palavra: "TOKEN",
    titulo: "Token de Autenticação",
    categoria: "Cibersegurança",
    imagem: "./img/token.png",
    explicacao: "Credencial digital temporária ou dispositivo físico usado para validar a identidade de um usuário ou aplicação em APIs e autenticação em dois fatores (2FA)."
  },
  {
    palavra: "SENHA",
    titulo: "Senha e Hash Criptográfico",
    categoria: "Cibersegurança",
    imagem: "./img/senha.png",
    explicacao: "Chave secreta de acesso que, em sistemas seguros, nunca é salva em texto puro, mas convertida em um código matemático irreversível (hash) no banco de dados."
  },
  {
    palavra: "MODEM",
    titulo: "Modem (Modulador-Demodulador)",
    categoria: "Hardware de Rede",
    imagem: "./img/modem.png",
    explicacao: "Equipamento responsável por converter o sinal vindo da operadora (fibra óptica ou cabo coaxial) em dados digitais compreendidos pelo roteador e pelos dispositivos."
  },
  {
    palavra: "DADOS",
    titulo: "Pacotes de Dados",
    categoria: "Protocolos de Rede",
    imagem: "./img/dados.png",
    explicacao: "Na internet, arquivos e mensagens são divididos em pequenos blocos chamados pacotes, que viajam por diferentes rotas e são remontados no destino."
  },
  {
    palavra: "REDES",
    titulo: "Redes de Computadores",
    categoria: "Conceito Fundamental",
    imagem: "./img/redes.png",
    explicacao: "Conjunto de dois ou mais dispositivos interconectados por meios físicos ou sem fio (Wi-Fi) para compartilhar arquivos, internet, impressoras e serviços."
  },
  {
    palavra: "LOGIN",
    titulo: "Autenticação de Acesso (Login)",
    categoria: "Cibersegurança",
    imagem: "./img/login.png",
    explicacao: "Processo em que o sistema valida as credenciais do usuário antes de liberar permissões e recursos dentro de uma rede corporativa ou aplicação web."
  },
  {
    palavra: "HOSTS",
    titulo: "Hosts na Rede",
    categoria: "Protocolos de Rede",
    imagem: "./img/hosts.png",
    explicacao: "Qualquer dispositivo conectado a uma rede IP (computador, celular, servidor ou sensor IoT) capaz de enviar e receber dados usando um endereço lógico."
  },
  {
    palavra: "PATCH",
    titulo: "Patch Panel & Atualizações",
    categoria: "Infraestrutura Física",
    imagem: "./img/patch.png",
    explicacao: "Em redes físicas, é o painel que organiza e interliga os cabos dentro do rack. Em software, é uma correção lançada para fechar falhas de segurança."
  },
  {
    palavra: "BANDA",
    titulo: "Largura de Banda (Bandwidth)",
    categoria: "Conceito Fundamental",
    imagem: "./img/banda.png",
    explicacao: "Capacidade máxima de transferência de dados de uma conexão em um determinado tempo, geralmente medida em Megabits por segundo (Mbps) ou Gigabits (Gbps)."
  },
  {
    palavra: "TRAMA",
    titulo: "Trama / Quadro Ethernet",
    categoria: "Protocolos de Rede",
    imagem: "./img/trama.png",
    explicacao: "Unidade de dados da Camada de Enlace (OSI 2) que carrega os endereços físicos MAC de origem e destino para entrega dentro da mesma rede local."
  },
  {
    palavra: "CHAVE",
    titulo: "Chave Criptográfica",
    categoria: "Cibersegurança",
    imagem: "./img/chave.png",
    explicacao: "Sequência matemática utilizada por algoritmos de criptografia (como TLS/HTTPS) para embaralhar e proteger os dados trafegados contra interceptação."
  },
  {
    palavra: "HTTPS",
    titulo: "Protocolo HTTPS (Web Segura)",
    categoria: "Protocolos de Rede",
    imagem: "./img/https.png",
    explicacao: "Versão segura do protocolo HTTP que utiliza criptografia TLS para proteger a troca de informações entre o navegador e o servidor, evitando que terceiros leiam os dados."
  },
  {
    palavra: "ROTAS",
    titulo: "Roteamento e Tabela de Rotas",
    categoria: "Protocolos de Rede",
    imagem: "./img/rotas.png",
    explicacao: "Caminhos lógicos definidos nos roteadores para encaminhar pacotes de dados de uma rede de origem até o destino final através da internet."
  },
  {
    palavra: "SINAL",
    titulo: "Sinal de Rede e Atenuação",
    categoria: "Conceito Fundamental",
    imagem: "./img/sinal.png",
    explicacao: "Onda eletromagnética ou pulso elétrico/óptico que transporta os bits pela rede. Obstáculos físicos e longas distâncias causam atenuação (perda de intensidade)."
  },
  {
    palavra: "RACKS",
    titulo: "Rack de Telecomunicações",
    categoria: "Infraestrutura Física",
    imagem: "./img/racks.png",
    explicacao: "Estrutura metálica padronizada (geralmente 19 polegadas) usada para alojar, organizar e proteger servidores, switches, roteadores e patch panels."
  },
  {
    palavra: "VLANS",
    titulo: "VLAN (Rede Local Virtual)",
    categoria: "Segurança & Arquitetura",
    imagem: "./img/vlans.png",
    explicacao: "Tecnologia que divide uma mesma rede física em várias redes lógicas isoladas dentro do switch, aumentando a segurança e reduzindo o tráfego desnecessário."
  },
  {
    palavra: "PLACA",
    titulo: "Placa de Rede (NIC)",
    categoria: "Hardware de Rede",
    imagem: "./img/placa.png",
    explicacao: "Componente de hardware que permite ao computador ou servidor se conectar a uma rede via cabo (Ethernet) ou sem fio (Wi-Fi), possuindo um endereço MAC único de fábrica."
  },
  {
    palavra: "CANAL",
    titulo: "Canais de Frequência Wi-Fi",
    categoria: "Redes Sem Fio",
    imagem: "./img/canal.png",
    explicacao: "Subdivisões dentro das faixas de 2,4 GHz e 5 GHz usadas pelos roteadores Wi-Fi para evitar interferência entre redes sem fio vizinhas."
  },
  {
    palavra: "PARES",
    titulo: "Cabo de Par Trançado (UTP)",
    categoria: "Infraestrutura Física",
    imagem: "./img/pares.png",
    explicacao: "Fios de cobre entrelaçados dois a dois dentro do cabo de rede para cancelar interferências eletromagnéticas externas e manter a estabilidade da transmissão."
  },
  {
    palavra: "FAIXA",
    titulo: "Faixa de Endereços IP (Sub-rede)",
    categoria: "Protocolos de Rede",
    imagem: "./img/faixa.png",
    explicacao: "Intervalo definido de endereços IP (como 192.168.0.1 a 192.168.0.254) delimitado por uma máscara de sub-rede para organizar os dispositivos de uma rede."
  },
  {
    palavra: "MALHA",
    titulo: "Topologia em Malha (Rede Mesh)",
    categoria: "Redes Sem Fio",
    imagem: "./img/malha.png",
    explicacao: "Arquitetura em que vários pontos de acesso se comunicam entre si formando uma rede única e redundante, eliminando pontos cegos de sinal Wi-Fi."
  },
  {
    palavra: "ONDAS",
    titulo: "Ondas Eletromagnéticas (RF)",
    categoria: "Redes Sem Fio",
    imagem: "./img/ondas.png",
    explicacao: "Meio invisível pelo qual os dados modulados viajam pelo ar entre as antenas do roteador e os dispositivos conectados via Wi-Fi, Bluetooth ou 5G."
  },
  {
    palavra: "NODOS",
    titulo: "Nós de Rede (Nodes)",
    categoria: "Conceito Fundamental",
    imagem: "./img/nodos.png",
    explicacao: "Qualquer ponto ativo de conexão, redistribuição ou término dentro de uma topologia de rede, como switches, roteadores, servidores e estações de trabalho."
  },
  {
    palavra: "LINKS",
    titulo: "Enlaces e Links de Dados",
    categoria: "Infraestrutura Física",
    imagem: "./img/links.png",
    explicacao: "Conexão física ou lógica estabelecida entre dois pontos da rede para permitir o tráfego contínuo de informações, como um link dedicado de internet."
  },
  {
    palavra: "CACHE",
    titulo: "Cache de DNS e Rede",
    categoria: "Serviços & Infraestrutura",
    imagem: "./img/cache.png",
    explicacao: "Memória temporária que guarda respostas recentes (como traduções de nomes de sites em IPs) para acelerar os próximos acessos e economizar banda."
  },
  {
    palavra: "LOCAL",
    titulo: "Rede Local (LAN) & Localhost",
    categoria: "Conceito Fundamental",
    imagem: "./img/local.png",
    explicacao: "Refere-se tanto à rede privada de um ambiente (casa, escola ou empresa) quanto ao endereço de loopback (127.0.0.1) que aponta para a própria máquina."
  },
  {
    palavra: "CISCO",
    titulo: "Equipamentos e Redes Cisco",
    categoria: "Hardware de Rede",
    imagem: "./img/cisco.png",
    explicacao: "Uma das principais fabricantes mundiais de roteadores, switches e firewalls corporativos, amplamente estudada em laboratórios e simulações de redes."
  },
  {
    palavra: "SPOOF",
    titulo: "Ataque de Spoofing (Falsificação)",
    categoria: "Cibersegurança",
    imagem: "./img/spoof.png",
    explicacao: "Técnica em que um invasor falsifica a identidade de origem (como endereço IP, MAC ou servidor DNS) para enganar sistemas e interceptar comunicações."
  },
  {
    palavra: "SNIFF",
    titulo: "Sniffing (Análise de Pacotes)",
    categoria: "Cibersegurança",
    imagem: "./img/sniff.png",
    explicacao: "Captura e inspeção dos pacotes que trafegam pela rede, usada por administradores para diagnosticar falhas (como no Wireshark) ou por atacantes em redes abertas."
  },
  {
    palavra: "PONTE",
    titulo: "Bridge (Ponte de Rede)",
    categoria: "Hardware de Rede",
    imagem: "./img/ponte.png",
    explicacao: "Dispositivo ou recurso da Camada 2 (Enlace) que interliga dois segmentos de rede, filtrando o tráfego com base nos endereços físicos MAC."
  },
  {
    palavra: "TUNEL",
    titulo: "Tunelamento VPN (Tunneling)",
    categoria: "Cibersegurança",
    imagem: "./img/tunel.png",
    explicacao: "Técnica usada por VPNs para encapsular e criptografar pacotes de dados dentro de outro protocolo, criando um corredor seguro através da internet pública."
  },
  {
    palavra: "TRUNK",
    titulo: "Porta Trunk (IEEE 802.1Q)",
    categoria: "Segurança & Arquitetura",
    imagem: "./img/trunk.png",
    explicacao: "Link configurado entre switches ou roteadores capaz de transportar o tráfego de múltiplas VLANs simultaneamente usando etiquetas (tags) nos quadros."
  },
  {
    palavra: "BORDA",
    titulo: "Roteador de Borda & Edge",
    categoria: "Segurança & Arquitetura",
    imagem: "./img/borda.png",
    explicacao: "Equipamento situado na fronteira entre a rede interna (LAN) e a rede externa (ISP/Internet), onde geralmente atuam o NAT e as primeiras barreiras de firewall."
  },
  {
    palavra: "PILHA",
    titulo: "Pilha de Protocolos (TCP/IP)",
    categoria: "Protocolos de Rede",
    imagem: "./img/pilha.png",
    explicacao: "Conjunto organizado de camadas de protocolos (Aplicação, Transporte, Internet e Acesso à Rede) que trabalham juntas para permitir a comunicação entre dispositivos."
  },
  {
    palavra: "FLUXO",
    titulo: "Controle de Fluxo (TCP)",
    categoria: "Protocolos de Rede",
    imagem: "./img/fluxo.png",
    explicacao: "Mecanismo que regula a velocidade de envio de dados entre transmissor e receptor para evitar que um dispositivo mais rápido sobrecarregue a memória de outro mais lento."
  },
  {
    palavra: "SALTO",
    titulo: "Salto de Rede (Hop & TTL)",
    categoria: "Protocolos de Rede",
    imagem: "./img/salto.png",
    explicacao: "Cada passagem de um pacote de dados por um roteador no caminho até o destino. O campo TTL (Time to Live) limita o número máximo de saltos para evitar loops."
  },
  {
    palavra: "PERDA",
    titulo: "Perda de Pacotes (Packet Loss)",
    categoria: "Conceito Fundamental",
    imagem: "./img/perda.png",
    explicacao: "Ocorre quando um ou mais pacotes enviados pela rede não chegam ao destino devido a congestionamento, falhas em cabos ou interferência no Wi-Fi."
  },
  {
    palavra: "DELAY",
    titulo: "Latência e Delay de Rede",
    categoria: "Conceito Fundamental",
    imagem: "./img/delay.png",
    explicacao: "Tempo que um pacote de dados leva para sair da origem e chegar ao destino. Quanto menor o delay (medido em milissegundos), mais responsiva é a conexão."
  },
  {
    palavra: "PINGS",
    titulo: "Comando Ping (Protocolo ICMP)",
    categoria: "Protocolos de Rede",
    imagem: "./img/pings.png",
    explicacao: "Ferramenta de diagnóstico que envia pacotes ICMP Echo Request para testar se um host está acessível na rede e medir o tempo de resposta (latência)."
  },
  {
    palavra: "TRACE",
    titulo: "Traceroute / Tracert",
    categoria: "Protocolos de Rede",
    imagem: "./img/trace.png",
    explicacao: "Utilitário de diagnóstico que mapeia todo o trajeto de um pacote pela internet, mostrando cada roteador (salto) atravessado e o tempo gasto em cada etapa."
  },
  {
    palavra: "LEASE",
    titulo: "Concessão DHCP (DHCP Lease)",
    categoria: "Protocolos de Rede",
    imagem: "./img/lease.png",
    explicacao: "Tempo determinado durante o qual um servidor DHCP empresta um endereço IP dinâmico para um dispositivo conectado à rede antes de precisar renová-lo."
  },
  {
    palavra: "FUSAO",
    titulo: "Fusão de Fibra Óptica",
    categoria: "Infraestrutura Física",
    imagem: "./img/fusao.png",
    explicacao: "Processo de emenda de alta precisão que utiliza um arco elétrico (máquina de fusão) para unir dois filamentos de fibra óptica com perda mínima de sinal luminoso."
  },
  {
    palavra: "CRIMP",
    titulo: "Crimpagem de Cabos RJ-45",
    categoria: "Infraestrutura Física",
    imagem: "./img/crimp.png",
    explicacao: "Fixação mecânica do conector RJ-45 na ponta do cabo de par trançado utilizando um alicate crimpador para pressionar os contatos metálicos nos fios."
  },
  {
    palavra: "SERIE",
    titulo: "Porta Serial & Console (RS-232)",
    categoria: "Hardware de Rede",
    imagem: "./img/serie.png",
    explicacao: "Interface de comunicação bit a bit muito utilizada por técnicos de redes para acessar o console e configurar switches e roteadores gerenciáveis localmente."
  },
  {
    palavra: "CORES",
    titulo: "Código de Cores (T568A / T568B)",
    categoria: "Infraestrutura Física",
    imagem: "./img/cores.png",
    explicacao: "Sequência padronizada dos 8 fios coloridos dentro do cabo de rede (verde, laranja, azul e marrom) que garante a compatibilidade na montagem de cabos Ethernet."
  },
  {
    palavra: "RADIO",
    titulo: "Enlace de Rádio Frequência",
    categoria: "Redes Sem Fio",
    imagem: "./img/radio.png",
    explicacao: "Transmissão de dados sem fio ponto a ponto ou ponto-multiponto usando antenas direcionais para interligar prédios ou levar internet a áreas remotas."
  },
  {
    palavra: "GUEST",
    titulo: "Rede Wi-Fi Guest (Visitantes)",
    categoria: "Segurança & Arquitetura",
    imagem: "./img/guest.png",
    explicacao: "Rede sem fio isolada criada no roteador ou controlador Wi-Fi para dar acesso à internet a visitantes sem permitir que enxerguem os computadores internos."
  },
  {
    palavra: "REGRA",
    titulo: "Regras de Firewall (ACL)",
    categoria: "Cibersegurança",
    imagem: "./img/regra.png",
    explicacao: "Critérios configurados no firewall ou roteador que decidem quais pacotes devem ser permitidos ou bloqueados com base em IP, porta e protocolo."
  },
  {
    palavra: "FLOOD",
    titulo: "Ataque de Flood (DDoS)",
    categoria: "Cibersegurança",
    imagem: "./img/flood.png",
    explicacao: "Ataque de negação de serviço em que um servidor ou rede é inundado por milhões de requisições simultâneas até esgotar sua banda ou processamento."
  },
  {
    palavra: "VIRUS",
    titulo: "Vírus e Malwares",
    categoria: "Cibersegurança",
    imagem: "./img/virus.png",
    explicacao: "Código malicioso capaz de infectar arquivos, alterar configurações do sistema e comprometer a segurança de estações conectadas à rede."
  },
  {
    palavra: "WORMS",
    titulo: "Worms (Vermes de Rede)",
    categoria: "Cibersegurança",
    imagem: "./img/worms.png",
    explicacao: "Tipo de malware autônomo que explora falhas em serviços de rede para se replicar e se espalhar automaticamente para outros computadores sem ação humana."
  },
  {
    palavra: "SHELL",
    titulo: "Secure Shell (SSH) & Terminal",
    categoria: "Sistemas & Servidores",
    imagem: "./img/shell.png",
    explicacao: "Interface de linha de comando e protocolo criptografado (porta 22) usado por administradores para gerenciar servidores Linux e equipamentos de rede remotamente."
  },
  {
    palavra: "BYTES",
    titulo: "Bytes e Unidades de Dados",
    categoria: "Conceito Fundamental",
    imagem: "./img/bytes.png",
    explicacao: "Conjunto de 8 bits usado como unidade padrão para medir o tamanho de arquivos e pacotes na memória e no armazenamento de servidores."
  }
];

// troca de abas pelos botoes
function mudarAba(targetId) {
  const destino = document.getElementById(targetId);
  if (!destino) return;

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === targetId);
  });

  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === targetId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.mudarAba = mudarAba;

document.addEventListener("click", (e) => {
  const navBtn = e.target.closest(".nav-btn[data-target]");
  if (!navBtn) return;
  navBtn.blur();
  mudarAba(navBtn.dataset.target);
});

// confere nas listas locais e depois nas APIs de PT/EN com timeout curto
async function validarPalavraReal(palpite) {
  if (PALAVRAS_REDES.some((item) => item.palavra === palpite)) {
    return true;
  }

  if (typeof DICIONARIO_PT !== "undefined" && DICIONARIO_PT.has(palpite)) {
    return true;
  }

  const temVogal = /[AEIOUY]/.test(palpite);
  const repeticaoExcessiva = /(.)\1{2,}/.test(palpite);
  const letrasUnicas = new Set(palpite.split("")).size;

  if (!temVogal || repeticaoExcessiva || letrasUnicas < 2) {
    return false;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);

  const checarPortugues = fetch(
    `https://api.dicionario-aberto.net/word/${palpite.toLowerCase()}`,
    { signal: controller.signal }
  ).then(async (res) => {
    if (!res.ok) throw new Error("Erro HTTP PT");
    const data = await res.json();
    return Array.isArray(data) && data.length > 0;
  });

  const checarIngles = fetch("https://words.dev-apis.com/validate-word", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word: palpite }),
    signal: controller.signal
  }).then(async (res) => {
    if (!res.ok) throw new Error("Erro HTTP EN");
    const data = await res.json();
    return Boolean(data.validWord);
  });

  try {
    const [resPt, resEn] = await Promise.allSettled([checarPortugues, checarIngles]);
    clearTimeout(timeoutId);

    if (
      (resPt.status === "fulfilled" && resPt.value === true) ||
      (resEn.status === "fulfilled" && resEn.value === true)
    ) {
      return true;
    }

    // so recusa com certeza se ambas as APIs responderam sem erro
    if (resPt.status === "fulfilled" && resEn.status === "fulfilled") {
      return false;
    }

    return temVogal && /[BCDFGHJKLMNPQRSTVWXZ]/.test(palpite);
  } catch {
    clearTimeout(timeoutId);
    return temVogal && /[BCDFGHJKLMNPQRSTVWXZ]/.test(palpite);
  }
}

// monta um svg quando nao ha imagem ou falha o load
function escaparXML(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function gerarBannerSenacSVG(palavra, categoria) {
  const palavraSegura = escaparXML(palavra);
  const categoriaSegura = escaparXML(categoria);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="480" height="270" viewBox="0 0 480 270">
      <rect width="480" height="270" fill="#004A8D"/>
      <rect x="0" y="254" width="480" height="16" fill="#F7941D"/>
      <circle cx="430" cy="45" r="75" fill="#F7941D" fill-opacity="0.18"/>
      <text x="240" y="130" font-family="monospace" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="6">${palavraSegura}</text>
      <text x="240" y="168" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FDC180" text-anchor="middle">${categoriaSegura}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// monta os cards do glossario
const glossaryGridEl = document.getElementById("glossary-grid");

function inicializarGlossario() {
  if (!glossaryGridEl) return;
  renderizarGlossario();
}

function renderizarGlossario() {
  glossaryGridEl.innerHTML = "";

  PALAVRAS_REDES.forEach((item) => {
    const card = document.createElement("article");
    card.className = "glossary-item";

    const img = document.createElement("img");
    img.alt = item.titulo;
    img.draggable = false;

    if (USAR_IMAGENS_TERMOS) {
      img.onerror = () => {
        img.onerror = null;
        img.src = gerarBannerSenacSVG(item.palavra, item.categoria);
      };
      img.src = item.imagem;
    } else {
      img.src = gerarBannerSenacSVG(item.palavra, item.categoria);
    }

    const body = document.createElement("div");
    body.className = "glossary-body";
    body.innerHTML = `
      <div class="glossary-top">
        <span class="word-chip">${item.palavra}</span>
        <span class="cat-chip">${item.categoria}</span>
      </div>
      <h4>${item.titulo}</h4>
      <p>${item.explicacao}</p>
    `;

    card.appendChild(img);
    card.appendChild(body);
    glossaryGridEl.appendChild(card);
  });
}

// controles do jogo wordle
const MAX_TENTATIVAS = 6;
const TAMANHO_PALAVRA = 5;

let itemAtual = null;
let tentativaAtual = 0;
let letraAtual = 0;
let grade = [];
let jogoEncerrado = false;
let validandoPalavra = false;
let palavrasJogadas = [];
let historicoCores = [];

const boardEl = document.getElementById("board");
const keyboardEl = document.getElementById("virtual-keyboard");
const eduCardEl = document.getElementById("edu-card");
const toastContainerEl = document.getElementById("toast-container");

const btnTeclado = document.getElementById("btn-teclado");
const btnDica = document.getElementById("btn-dica");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnPlayAgain = document.getElementById("btn-play-again");
const btnFotoRecordacao = document.getElementById("btn-share");

if (btnFotoRecordacao) {
  btnFotoRecordacao.textContent = "Tirar Foto de Recordação";
  btnFotoRecordacao.title = "Abrir câmera, aplicar moldura e gerar QR Code para baixar";
}

const LINHAS_TECLADO = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
];

function alternarCarregamentoAPI(ativo) {
  validandoPalavra = ativo;

  const loaderEl = document.getElementById("api-loading");
  if (loaderEl) {
    loaderEl.classList.toggle("hidden", !ativo);
  }

  const rowEl = document.getElementById(`row-${tentativaAtual}`);
  if (rowEl) {
    rowEl.classList.toggle("checking", ativo);
  }

  const enterBtn = keyboardEl
    ? keyboardEl.querySelector('.key[data-key="ENTER"]')
    : null;
  if (enterBtn) {
    enterBtn.textContent = ativo ? "..." : "ENTER";
  }
}

function iniciarJogo() {
  if (!boardEl || !keyboardEl || !eduCardEl) return;

  tentativaAtual = 0;
  letraAtual = 0;
  jogoEncerrado = false;
  alternarCarregamentoAPI(false);
  historicoCores = [];
  grade = Array.from({ length: MAX_TENTATIVAS }, () => Array(TAMANHO_PALAVRA).fill(""));

  // evita repetir palavras
  if (palavrasJogadas.length >= PALAVRAS_REDES.length) {
    palavrasJogadas = [];
  }
  const disponiveis = PALAVRAS_REDES.filter((item) => !palavrasJogadas.includes(item.palavra));
  itemAtual = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  palavrasJogadas.push(itemAtual.palavra);

  eduCardEl.classList.add("hidden");
  construirTabuleiro();
  construirTeclado();
}

function construirTabuleiro() {
  boardEl.innerHTML = "";
  for (let r = 0; r < MAX_TENTATIVAS; r++) {
    const rowEl = document.createElement("div");
    rowEl.className = "row";
    rowEl.id = `row-${r}`;

    for (let c = 0; c < TAMANHO_PALAVRA; c++) {
      const tileEl = document.createElement("div");
      tileEl.className = "tile";
      tileEl.id = `tile-${r}-${c}`;
      rowEl.appendChild(tileEl);
    }
    boardEl.appendChild(rowEl);
  }
}

function construirTeclado() {
  keyboardEl.innerHTML = "";
  LINHAS_TECLADO.forEach((linha) => {
    const rowEl = document.createElement("div");
    rowEl.className = "keyboard-row";

    linha.forEach((tecla) => {
      const keyBtn = document.createElement("button");
      keyBtn.type = "button";
      keyBtn.textContent = tecla;
      keyBtn.className = "key";
      keyBtn.dataset.key = tecla;

      if (tecla === "ENTER" || tecla === "⌫") {
        keyBtn.classList.add("wide");
      }

      keyBtn.addEventListener("click", (e) => {
        e.currentTarget.blur();
        processarEntrada(tecla);
      });

      rowEl.appendChild(keyBtn);
    });

    keyboardEl.appendChild(rowEl);
  });
}

function processarEntrada(tecla) {
  if (!document.getElementById("view-jogo").classList.contains("active")) return;
  if (jogoEncerrado || validandoPalavra) return;

  if (tecla === "⌫" || tecla === "BACKSPACE") {
    if (letraAtual > 0) {
      letraAtual--;
      grade[tentativaAtual][letraAtual] = "";
      const tileEl = document.getElementById(`tile-${tentativaAtual}-${letraAtual}`);
      tileEl.textContent = "";
      tileEl.classList.remove("filled");
    }
    return;
  }

  if (tecla === "ENTER") {
    verificarTentativa();
    return;
  }

  if (/^[A-Z]$/.test(tecla) && letraAtual < TAMANHO_PALAVRA) {
    grade[tentativaAtual][letraAtual] = tecla;
    const tileEl = document.getElementById(`tile-${tentativaAtual}-${letraAtual}`);
    tileEl.textContent = tecla;
    tileEl.classList.add("filled");
    letraAtual++;
  }
}

function tremerLinhaAtual(mensagem) {
  mostrarToast(mensagem);
  const rowEl = document.getElementById(`row-${tentativaAtual}`);
  if (!rowEl) return;
  rowEl.classList.remove("shake");
  void rowEl.offsetWidth;
  rowEl.classList.add("shake");
}

async function verificarTentativa() {
  if (validandoPalavra) return;

  if (letraAtual < TAMANHO_PALAVRA) {
    tremerLinhaAtual("Digite uma palavra de 5 letras!");
    return;
  }

  const palpite = grade[tentativaAtual].join("");

  const jaTentou = grade.slice(0, tentativaAtual).some((linha) => linha.join("") === palpite);
  if (jaTentou) {
    tremerLinhaAtual("Você já tentou essa palavra!");
    return;
  }

  let palavraValida = false;

  alternarCarregamentoAPI(true);
  try {
    palavraValida = await validarPalavraReal(palpite);
  } finally {
    alternarCarregamentoAPI(false);
  }

  if (!palavraValida) {
    tremerLinhaAtual("Palavra inválida! Use português ou inglês.");
    return;
  }

  // avalia letras exatas depois as fora de posicao
  const secreta = itemAtual.palavra;
  const resultado = Array(TAMANHO_PALAVRA).fill("absent");
  const letrasRestantes = secreta.split("");

  for (let i = 0; i < TAMANHO_PALAVRA; i++) {
    if (palpite[i] === secreta[i]) {
      resultado[i] = "correct";
      letrasRestantes[i] = null;
    }
  }

  for (let i = 0; i < TAMANHO_PALAVRA; i++) {
    if (resultado[i] === "correct") continue;
    const idx = letrasRestantes.indexOf(palpite[i]);
    if (idx !== -1) {
      resultado[i] = "present";
      letrasRestantes[idx] = null;
    }
  }

  const linhaEmojis = [];
  for (let i = 0; i < TAMANHO_PALAVRA; i++) {
    const tileEl = document.getElementById(`tile-${tentativaAtual}-${i}`);
    tileEl.classList.add(resultado[i]);
    atualizarCorTecla(palpite[i], resultado[i]);

    if (resultado[i] === "correct") linhaEmojis.push("🟩");
    else if (resultado[i] === "present") linhaEmojis.push("🟧");
    else linhaEmojis.push("⬜");
  }
  historicoCores.push(linhaEmojis.join(""));

  if (palpite === secreta) {
    jogoEncerrado = true;
    mostrarToast("Parabéns! Termo descoberto!");
    exibirCardEducativo(true);
    return;
  }

  tentativaAtual++;
  letraAtual = 0;

  if (tentativaAtual >= MAX_TENTATIVAS) {
    jogoEncerrado = true;
    mostrarToast(`A palavra era: ${secreta}`);
    exibirCardEducativo(false);
  }
}

function atualizarCorTecla(letra, novoStatus) {
  const keyBtn = keyboardEl.querySelector(`.key[data-key="${letra}"]`);
  if (!keyBtn) return;

  if (keyBtn.classList.contains("correct")) return;
  if (keyBtn.classList.contains("present") && novoStatus === "absent") return;

  keyBtn.classList.remove("present", "absent");
  keyBtn.classList.add(novoStatus);
}

function exibirCardEducativo(venceu) {
  const statusEl = document.getElementById("edu-status");
  const titleEl = document.getElementById("edu-word-title");
  const catEl = document.getElementById("edu-category");
  const imgEl = document.getElementById("edu-image");
  const expEl = document.getElementById("edu-explanation");

  statusEl.textContent = venceu ? "🎉 Você acertou!" : "📘 Aprenda este termo";
  statusEl.className = `edu-badge ${venceu ? "win" : "lose"}`;

  titleEl.textContent = `${itemAtual.palavra} — ${itemAtual.titulo}`;
  catEl.textContent = itemAtual.categoria;
  expEl.textContent = itemAtual.explicacao;

  imgEl.draggable = false;
  if (USAR_IMAGENS_TERMOS) {
    imgEl.onerror = () => {
      imgEl.onerror = null;
      imgEl.src = gerarBannerSenacSVG(itemAtual.palavra, itemAtual.categoria);
    };
    imgEl.src = itemAtual.imagem;
  } else {
    imgEl.src = gerarBannerSenacSVG(itemAtual.palavra, itemAtual.categoria);
  }

  eduCardEl.classList.remove("hidden");

  soltarConfetesSenac(venceu);

  setTimeout(() => {
    eduCardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 180);
}

// configuracao do Appwrite Storage (cabine de fotos)
const APPWRITE_ENDPOINT = "https://nyc.cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "conexao-wordle";
const APPWRITE_BUCKET_ID = "6affc36a001c119bbff0"; // Bucket: cabine-fotos
let appwriteStorage = null;

function garantirSDKAppwrite() {
  return new Promise((resolve) => {
    if (typeof window.Appwrite !== "undefined") {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/appwrite@16.0.2";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

async function obterAppwriteStorage() {
  if (appwriteStorage) return appwriteStorage;

  const carregado = await garantirSDKAppwrite();
  if (!carregado || typeof window.Appwrite === "undefined") {
    return null;
  }

  const { Client, Storage } = window.Appwrite;
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

  appwriteStorage = new Storage(client);
  return appwriteStorage;
}

// camera com moldura, contagem e qr code
let cameraStream = null;
let animacaoPreviewId = null;
let facingModeAtual = "user";
let fotoCapturadaDataUrl = null;
let fotoCapturadaBlob = null;
let molduraPersonalizadaImg = null;
let molduraPersonalizadaCarregada = false;

(function carregarMolduraPersonalizada() {
  const caminhos = ["./img/moldura-foto.jpg", "./img/moldura-foto.jpeg"];
  let indice = 0;

  function tentarCarregar() {
    if (indice >= caminhos.length) {
      molduraPersonalizadaCarregada = false;
      console.warn("Moldura não encontrada em ./img/moldura-foto.jpg");
      return;
    }

    const img = new Image();
    img.onload = () => {
      try {
        const offCanvas = document.createElement("canvas");
        offCanvas.width = 720;
        offCanvas.height = 720;
        const offCtx = offCanvas.getContext("2d");
        offCtx.drawImage(img, 0, 0, 720, 720);

        const imgData = offCtx.getImageData(0, 0, 720, 720);
        const data = imgData.data;
        const visitado = new Uint8Array(720 * 720);
        const pilha = [[360, 360]];

        // recorta so o miolo branco atras do senac
        while (pilha.length > 0) {
          const [x, y] = pilha.pop();
          if (x < 45 || x >= 675 || y < 126 || y >= 625) continue;

          const idx = y * 720 + x;
          if (visitado[idx]) continue;
          visitado[idx] = 1;

          const p = idx * 4;
          const brilhoMinimo = Math.min(data[p], data[p + 1], data[p + 2]);

          if (brilhoMinimo > 215) {
            data[p + 3] = brilhoMinimo > 235 ? 0 : Math.round((235 - brilhoMinimo) * 12);
            pilha.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
          }
        }

        offCtx.putImageData(imgData, 0, 0);
        molduraPersonalizadaImg = offCanvas;
        molduraPersonalizadaCarregada = true;
      } catch (erro) {
        molduraPersonalizadaCarregada = false;
        console.warn("Abra o site pelo Live Server ou servidor local (http://localhost) para recortar o fundo da moldura JPG:", erro);
      }
    };

    img.onerror = () => {
      indice++;
      tentarCarregar();
    };

    img.src = caminhos[indice];
  }

  tentarCarregar();
})();

function desenharMolduraSobreCanvas(ctx, w, h) {
  if (molduraPersonalizadaCarregada && molduraPersonalizadaImg) {
    ctx.drawImage(molduraPersonalizadaImg, 0, 0, w, h);
  } else {
    ctx.strokeStyle = "#004A8D";
    ctx.lineWidth = 24;
    ctx.strokeRect(12, 12, w - 24, h - 24);

    ctx.strokeStyle = "#F7941D";
    ctx.lineWidth = 6;
    ctx.strokeRect(24, 24, w - 48, h - 48);

    ctx.fillStyle = "rgba(0, 74, 141, 0.94)";
    ctx.fillRect(24, h - 94, w - 48, 70);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 22px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("WORDLE SENATEC • SENAC REGISTRO", 42, h - 52);

    ctx.fillStyle = "#FDC180";
    ctx.font = "bold 18px monospace";
    ctx.textAlign = "right";
    ctx.fillText("19/11/2026", w - 42, h - 52);
  }

  if (!itemAtual) return;

  const palavra = itemAtual.palavra.toUpperCase();
  const tileSize = 38;
  const gap = 8;
  const totalTilesW = palavra.length * tileSize + (palavra.length - 1) * gap;
  const startX = (w - totalTilesW) / 2;
  const tilesY = h - 155;

  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;

  for (let i = 0; i < palavra.length; i++) {
    const tx = startX + i * (tileSize + gap);

    ctx.fillStyle = "#16A34A";
    ctx.beginPath();
    ctx.roundRect(tx, tilesY, tileSize, tileSize, 8);
    ctx.fill();

    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 22px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(palavra[i], tx + tileSize / 2, tilesY + tileSize / 2 + 1);
  }

  const tentativasUsadas = Math.min(tentativaAtual + 1, MAX_TENTATIVAS);
  const textoBadge = `${itemAtual.titulo} • ${tentativasUsadas}/${MAX_TENTATIVAS}`;
  ctx.font = "bold 15px sans-serif";
  const badgeW = Math.min(w - 160, ctx.measureText(textoBadge).width + 32);
  const badgeH = 28;
  const badgeX = (w - badgeW) / 2;
  const badgeY = tilesY + tileSize + 8;

  ctx.fillStyle = "#004A8D";
  ctx.beginPath();
  ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 999);
  ctx.fill();

  ctx.strokeStyle = "#F7941D";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(textoBadge, w / 2, badgeY + badgeH / 2 + 1);
  ctx.restore();
}

function garantirBibliotecaQRCode() {
  return new Promise((resolve) => {
    if (typeof window.QRCode === "function") {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

function criarModalFotoSeNecessario() {
  if (document.getElementById("photo-booth-modal")) return;

  const modal = document.createElement("div");
  modal.id = "photo-booth-modal";
  modal.className = "pb-modal";

  modal.innerHTML = `
    <div class="pb-dialog">
      <div class="pb-header">
        <h3>📸 Recordação Senatec</h3>
        <button id="btn-fechar-foto" type="button" class="pb-close-btn">✕ Fechar</button>
      </div>

      <div id="photo-stage-camera" class="pb-stage">
        <div class="pb-camera-frame">
          <video id="pb-video" autoplay playsinline muted class="hidden"></video>
          <canvas id="pb-canvas" width="720" height="720"></canvas>
          <div id="pb-countdown" class="pb-countdown">3</div>
        </div>

        <div class="pb-actions">
          <button id="btn-inverter-cam" type="button" class="btn-senac-blue">
            🔄 Virar Câmera
          </button>
          <button id="btn-capturar-foto" type="button" class="btn-senac-orange">
            📸 Tirar Foto (3s)
          </button>
        </div>
      </div>

      <div id="photo-stage-result" class="pb-stage" style="display:none;">
        <img id="pb-preview-img" class="pb-preview-img" alt="Sua foto de recordação" />

        <div class="pb-qr-box">
          <p id="pb-qr-status" class="pb-qr-status">
            ⏳ Gerando QR Code para baixar no celular...
          </p>
          <div id="pb-qrcode" class="pb-qrcode"></div>
          <small class="pb-qr-hint">
            Aponte a câmera do celular para baixar sua foto direto no aparelho.
          </small>
        </div>

        <div class="pb-actions">
          <button id="btn-refazer-foto" type="button" class="btn-senac-blue">
            🔄 Tirar Outra
          </button>
          <button id="btn-baixar-direto" type="button" class="btn-senac-orange">
            ⬇️ Baixar Aqui
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("btn-fechar-foto").addEventListener("click", fecharModalFoto);
  document.getElementById("btn-inverter-cam").addEventListener("click", async () => {
    facingModeAtual = facingModeAtual === "user" ? "environment" : "user";
    await iniciarCameraPreview();
  });
  document.getElementById("btn-capturar-foto").addEventListener("click", iniciarContagemECapturar);
  document.getElementById("btn-refazer-foto").addEventListener("click", async () => {
    document.getElementById("photo-stage-result").style.display = "none";
    document.getElementById("photo-stage-camera").style.display = "flex";
    await iniciarCameraPreview();
  });
  document.getElementById("btn-baixar-direto").addEventListener("click", () => {
    if (!fotoCapturadaDataUrl) return;
    const link = document.createElement("a");
    link.href = fotoCapturadaDataUrl;
    link.download = `wordle-senatec-${itemAtual ? itemAtual.palavra.toLowerCase() : "foto"}.png`;
    link.click();
  });
}

async function abrirModalFoto() {
  criarModalFotoSeNecessario();
  document.getElementById("photo-booth-modal").classList.add("open");
  document.getElementById("photo-stage-result").style.display = "none";
  document.getElementById("photo-stage-camera").style.display = "flex";

  await iniciarCameraPreview();
}

function pararCamera() {
  if (animacaoPreviewId) {
    cancelAnimationFrame(animacaoPreviewId);
    animacaoPreviewId = null;
  }
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }
}

function fecharModalFoto() {
  pararCamera();
  fotoCapturadaDataUrl = null;
  fotoCapturadaBlob = null;
  const modal = document.getElementById("photo-booth-modal");
  if (modal) modal.classList.remove("open");
}

async function iniciarCameraPreview() {
  pararCamera();
  const video = document.getElementById("pb-video");
  const canvas = document.getElementById("pb-canvas");
  const ctx = canvas.getContext("2d");

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingModeAtual, width: { ideal: 720 }, height: { ideal: 720 } },
      audio: false
    });
    video.srcObject = cameraStream;
    await video.play();

    function desenharFrame() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const vw = video.videoWidth || w;
      const vh = video.videoHeight || h;
      const lado = Math.min(vw, vh);
      const sx = (vw - lado) / 2;
      const sy = (vh - lado) / 2;

      ctx.save();
      if (facingModeAtual === "user") {
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(video, sx, sy, lado, lado, 0, 0, w, h);
      ctx.restore();

      desenharMolduraSobreCanvas(ctx, w, h);

      animacaoPreviewId = requestAnimationFrame(desenharFrame);
    }

    desenharFrame();
  } catch {
    mostrarToast("Não foi possível acessar a câmera. Verifique a permissão.");
    fecharModalFoto();
  }
}

function iniciarContagemECapturar() {
  const countdownEl = document.getElementById("pb-countdown");
  const btnCapturar = document.getElementById("btn-capturar-foto");
  if (!countdownEl || !btnCapturar) return;

  btnCapturar.disabled = true;
  let segundos = 3;
  countdownEl.textContent = segundos;
  countdownEl.style.display = "flex";

  const intervalo = setInterval(() => {
    segundos--;
    if (segundos > 0) {
      countdownEl.textContent = segundos;
    } else {
      clearInterval(intervalo);
      countdownEl.style.display = "none";
      btnCapturar.disabled = false;
      finalizarCapturaFoto();
    }
  }, 1000);
}

async function finalizarCapturaFoto() {
  const canvas = document.getElementById("pb-canvas");
  fotoCapturadaDataUrl = canvas.toDataURL("image/png");
  fotoCapturadaBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

  pararCamera();
  document.getElementById("photo-stage-camera").style.display = "none";
  document.getElementById("photo-stage-result").style.display = "flex";
  document.getElementById("pb-preview-img").src = fotoCapturadaDataUrl;

  gerarQRCodeParaFoto(fotoCapturadaBlob);
}

async function gerarQRCodeParaFoto(blob) {
  const statusEl = document.getElementById("pb-qr-status");
  const qrContainer = document.getElementById("pb-qrcode");

  statusEl.textContent = "⏳ Enviando foto e gerando QR Code...";
  qrContainer.style.display = "none";
  qrContainer.innerHTML = "";

  try {
    if (!blob) throw new Error("Imagem inválida");

    const storage = await obterAppwriteStorage();
    if (!storage) throw new Error("SDK do Appwrite indisponível");

    const { ID } = window.Appwrite;
    const nomeArquivo = `senatec-${itemAtual ? itemAtual.palavra.toLowerCase() : "foto"}-${Date.now()}.png`;
    const arquivoFoto = new File([blob], nomeArquivo, { type: "image/png" });

    // 1. Envia a foto para o bucket 'cabine-fotos' no Appwrite
    const resposta = await storage.createFile(
      APPWRITE_BUCKET_ID,
      ID.unique(),
      arquivoFoto
    );

    // 2. Gera a URL direta de download (baixa o .png direto no celular, sem anúncios)
    const urlDownloadDireto = String(
      storage.getFileDownload(APPWRITE_BUCKET_ID, resposta.$id)
    );

    // 3. Desenha o QR Code apontando para o download direto
    const qrCarregado = await garantirBibliotecaQRCode();
    if (qrCarregado && typeof window.QRCode === "function") {
      new window.QRCode(qrContainer, {
        text: urlDownloadDireto,
        width: 200,
        height: 200,
        colorDark: "#004A8D",
        colorLight: "#FFFFFF"
      });
    } else {
      const imgQr = document.createElement("img");
      imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=004A8D&data=${encodeURIComponent(urlDownloadDireto)}`;
      imgQr.alt = "QR Code para baixar foto";
      qrContainer.appendChild(imgQr);
    }

    qrContainer.style.display = "block";
    statusEl.textContent = "✅ Escaneie o QR Code para baixar sua foto!";
  } catch (erro) {
    console.error("Erro ao enviar foto para o Appwrite:", erro);
    statusEl.textContent = "⚠️ Não foi possível enviar para a nuvem. Use o botão 'Baixar Aqui' abaixo.";
  }
}

if (btnFotoRecordacao) {
  btnFotoRecordacao.addEventListener("click", abrirModalFoto);
}

// confetes e avisos rapidos
function soltarConfetesSenac(venceu) {
  const coresSenac = ["#F7941D", "#004A8D", "#FDC180", "#16A34A", "#FFFFFF"];
  const quantidade = venceu ? 90 : 30;
  const espalhamento = venceu ? 70 : 45;

  if (typeof window.confetti === "function") {
    window.confetti({
      particleCount: quantidade,
      angle: 60,
      spread: espalhamento,
      origin: { x: 0, y: 0.65 },
      colors: coresSenac,
      zIndex: 9999
    });
    window.confetti({
      particleCount: quantidade,
      angle: 120,
      spread: espalhamento,
      origin: { x: 1, y: 0.65 },
      colors: coresSenac,
      zIndex: 9999
    });
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const total = venceu ? 140 : 50;
  const particulas = Array.from({ length: total }, (_, i) => {
    const esquerda = i % 2 === 0;
    const angulo = esquerda
      ? (-Math.PI / 4) + (Math.random() - 0.5) * 0.7
      : (-3 * Math.PI / 4) + (Math.random() - 0.5) * 0.7;
    const velocidade = Math.random() * (venceu ? 18 : 12) + 8;

    return {
      x: esquerda ? 0 : canvas.width,
      y: canvas.height * 0.65,
      vx: Math.cos(angulo) * velocidade,
      vy: Math.sin(angulo) * velocidade,
      w: Math.random() * 9 + 5,
      h: Math.random() * 5 + 4,
      cor: coresSenac[Math.floor(Math.random() * coresSenac.length)],
      rot: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 14,
      alpha: 1
    };
  });

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let vivas = 0;

    particulas.forEach((p) => {
      if (p.alpha <= 0) return;
      vivas++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38;
      p.vx *= 0.98;
      p.rot += p.vRot;
      p.alpha -= 0.011;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.cor;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (vivas > 0) requestAnimationFrame(animar);
    else canvas.remove();
  }

  requestAnimationFrame(animar);
}

function mostrarToast(mensagem) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = mensagem;
  toastContainerEl.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

// atalhos dos botoes e teclado fisico
if (btnTeclado) {
  btnTeclado.addEventListener("click", (e) => {
    e.currentTarget.blur();
    const estaOculto = keyboardEl.classList.toggle("hidden");
    btnTeclado.classList.toggle("active", !estaOculto);
    btnTeclado.setAttribute("aria-expanded", String(!estaOculto));
  });
}

if (btnDica) {
  btnDica.addEventListener("click", (e) => {
    e.currentTarget.blur();
    mostrarToast(`Dica: ${itemAtual.categoria}`);
  });
}

if (btnReiniciar) {
  btnReiniciar.addEventListener("click", (e) => {
    e.currentTarget.blur();
    iniciarJogo();
    mostrarToast("Nova palavra sorteada!");
  });
}

if (btnPlayAgain) {
  btnPlayAgain.addEventListener("click", () => iniciarJogo());
}

document.addEventListener("keydown", (e) => {
  if (validandoPalavra) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const modalFoto = document.getElementById("photo-booth-modal");
  if (modalFoto && modalFoto.classList.contains("open")) return;

  if (e.key === "Backspace") {
    processarEntrada("BACKSPACE");
    return;
  }
  if (e.key === "Enter") {
    processarEntrada("ENTER");
    return;
  }

  const letra = e.key
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  if (/^[A-Z]$/.test(letra)) {
    processarEntrada(letra);
  }
});

// controle de reproducao de videos
document.querySelectorAll(".video-wrapper video").forEach((video) => {
  const esconderPlaceholder = () => {
    const placeholder = video.parentElement.querySelector(".video-placeholder");
    if (placeholder) placeholder.style.display = "none";
  };

  if (video.readyState >= 2) {
    esconderPlaceholder();
  } else {
    video.addEventListener("loadeddata", esconderPlaceholder);
  }

  video.addEventListener("play", () => {
    document.querySelectorAll(".video-wrapper video").forEach((other) => {
      if (other !== video && !other.paused) other.pause();
    });
  });
});

document.addEventListener("contextmenu", (e) => {
  if (window.matchMedia("(min-width: 750px) and (min-height: 1250px) and (orientation: portrait)").matches) {
    e.preventDefault();
  }
});

inicializarGlossario();
iniciarJogo();