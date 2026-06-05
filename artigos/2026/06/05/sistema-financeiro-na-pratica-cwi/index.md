Depois do **Crescer Level 2**, participei na CWI de uma iniciação sobre o **Sistema Financeiro Nacional**. Foi um treinamento para nós, Cresceres que tinham passado pelo nível 2, enquanto ainda esperávamos a definição de qual time seguiria com cada pessoa. Meio aquele tempo de transição: já tinha acabado uma etapa, mas a próxima ainda não tinha começado de verdade.

As aulas foram conduzidas por Rafael Johann, Rômulo Thomé Mendes, João Rafael Colombo, Jonas Siqueira Ayres e João Antonio de Oliveira. O mais interessante não foi decorar nomes de órgãos, siglas ou produtos. Foi perceber que, por trás de uma tela simples de banco, existe uma cadeia enorme de regras, controles, integrações e decisões.

Este artigo não reproduz conteúdo das aulas nem resoluções. É uma síntese pessoal, escrita com minhas palavras, a partir de conceitos públicos do mercado financeiro brasileiro. Mais do que resumir matéria, a ideia aqui é mostrar o que mudou no meu jeito de olhar software depois de estudar SFN, crédito, investimentos, tesouraria, cobrança e antifraude no mesmo contexto.

---

## O mapa vem antes do fluxo

Antes de pensar em API, banco de dados ou front-end, tem uma pergunta maior: **quem pode fazer o que dentro do sistema financeiro?**

O Sistema Financeiro Nacional pode ser entendido em camadas. De forma bem resumida, existem agentes que definem diretrizes, entidades que supervisionam e instituições que operam no dia a dia. Essa separação aparece em várias fontes públicas, como a página do [Banco Central sobre o SFN](https://www.bcb.gov.br/estabilidadefinanceira/sfn) e o material do [Portal do Investidor sobre o Sistema Financeiro Nacional](https://www.gov.br/investidor/pt-br/investir/como-investir/conheca-o-mercado-de-capitais/sistema-financeiro-nacional).

Na minha cabeça, o desenho ficou mais ou menos assim: em cima quem define a regra do jogo, no meio quem fiscaliza, e na base quem faz a operação acontecer de verdade.

<figure class="text-center my-4">
    <figcaption class="mb-2 text-muted small fw-bold">
        Camadas principais do Sistema Financeiro Nacional
    </figcaption>
    <img src="2026/06/05/sistema-financeiro-na-pratica-cwi/assets/camadas-sfn.svg"
         alt="Diagrama em camadas do Sistema Financeiro Nacional, com órgãos normativos, supervisores e operadores"
         class="img-fluid rounded shadow-sm">
</figure>

Não é um mapa completo de tudo que existe no mercado, claro. Mas já ajuda a não misturar as coisas. Uma coisa é definir diretriz, outra é supervisionar, outra é operar produto financeiro na ponta.

Para quem desenvolve software, isso muda a leitura do problema. Uma regra de negócio pode existir por decisão comercial, mas também pode existir por regulação, por controle operacional, por prestação de contas, por rastreabilidade ou por segurança do próprio sistema.

Essa foi uma das primeiras viradas de chave. Em sistemas financeiros, muitas vezes o requisito não nasce na tela. Ele nasce em uma obrigação, em um risco ou em uma responsabilidade institucional.

---

## Crédito é uma máquina de estados

Crédito parece simples quando visto de fora: alguém pede dinheiro, o banco analisa e decide se empresta. Só que, quando a gente olha como sistema, o fluxo fica bem mais cheio de etapas.

Existe uma diferença importante entre simular, propor, aprovar, liberar e acompanhar uma operação. Cada etapa muda o compromisso da instituição, o risco assumido e o tipo de dado que precisa ser guardado.

Uma forma simples de pensar nisso é como uma máquina de estados:

```text
SIMULADA -> PROPOSTA -> APROVADA -> LIBERADA -> EM_ACOMPANHAMENTO -> LIQUIDADA
```

A simulação é uma estimativa. A proposta já carrega informações do cliente e parâmetros mais concretos. A aprovação depende de política de crédito, renda, score, restrições, limites e outras análises. A liberação é o momento em que a promessa vira movimento financeiro. Depois disso, ainda existe o acompanhamento: parcelas, atrasos, renegociação, provisão, baixa e histórico.

Esse tipo de fluxo ensina uma coisa muito boa para backend: **estado importa**. Não basta ter um CRUD de proposta e achar que está tudo resolvido. É preciso saber quais transições são permitidas, quem pode executá-las, quais evidências ficam registradas e o que acontece se uma etapa falhar no meio do caminho.

---

## Investimentos: saldo não é só um número

Em investimentos, outra ideia que ficou forte foi a de que "saldo" e "posição" não são só campos na tabela.

Uma posição de investimento pode depender de eventos anteriores: aplicação, resgate, rentabilidade, marcação, custódia, liquidação e regras específicas do produto. A tela mostra um número, mas aquele número é resultado de uma história.

Isso muda o cuidado com sistemas. Quando um usuário olha para a carteira, ele não quer apenas ver uma soma. Ele quer confiar que o sistema entende:

- qual produto foi contratado;
- quando a operação foi feita;
- como a rentabilidade é calculada;
- onde o ativo está custodiado;
- qual valor está disponível agora;
- qual valor ainda depende de liquidação.

Esse ponto conversa muito com modelagem de dados. A tentação de salvar "o saldo final" em qualquer lugar é grande, mas sistemas financeiros costumam precisar de trilha. Eventos, movimentos e posições calculadas precisam conversar de forma consistente. Parece detalhe de modelagem, mas no fim vira confiança no número que aparece na tela.

---

## Tesouraria e cobrança: a parte silenciosa

Tesouraria e cobrança são temas menos vistosos do que uma tela bonita de investimentos. Mas talvez estejam entre os melhores assuntos para entender software financeiro de verdade.

Um boleto pago, por exemplo, não é apenas um botão que muda para "quitado". Existem arquivos, retornos bancários, conciliação, datas, valores, ocorrências, identificadores e regras de baixa. Em muitos cenários, padrões como CNAB entram como linguagem de integração entre empresas e bancos.

No exercício que fizemos, eu analisei um arquivo **CNAB400 de cobrança do Itaú**. Não vou publicar o arquivo nem os dados dele aqui, mas dá para descrever a ideia geral: era um arquivo de texto posicional, com linhas de 400 caracteres, header, registros de detalhe e trailer. O validador identificou o banco como Itaú (`341`) e o conteúdo como remessa. Curioso é que o nome do arquivo sugeria retorno, por causa da extensão `.ret`.

Essa pequena confusão já é um aprendizado bom. Em sistemas financeiros, nome de arquivo ajuda, mas não é fonte da verdade sozinho. O sistema precisa ler o conteúdo, validar o layout, conferir sequencial, tipo de registro, datas, valores e depois comparar tudo com a base interna da empresa. Sem essa comparação, o arquivo só diz "o que veio no CNAB"; ele ainda não prova que a cobrança está conciliada.

No Pix, a experiência para o usuário é quase instantânea, mas por baixo existe uma infraestrutura de liquidação e participantes. O Banco Central resume o Pix como o pagamento instantâneo brasileiro, com transferência de recursos em poucos segundos, a qualquer hora ou dia, na página pública sobre [Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix).

Como desenvolvedor, isso ensina a respeitar três palavras: **idempotência, conciliação e rastreabilidade**.

- Idempotência, porque a mesma confirmação pode chegar mais de uma vez.
- Conciliação, porque o sistema interno precisa bater com o mundo externo.
- Rastreabilidade, porque alguém vai precisar entender o caminho daquela transação depois.

---

## Antifraude e o equilíbrio entre segurança e experiência

Antifraude foi uma das partes que eu mais gostei, porque obriga a pensar em produto, tecnologia e risco ao mesmo tempo.

Validar um documento, autenticar uma pessoa, analisar comportamento, calcular risco e decidir se uma operação pode seguir não são etapas isoladas. Elas formam uma camada de proteção que precisa ser forte sem transformar a vida do usuário em um labirinto.

Um sistema antifraude ruim em uma direção aprova o que deveria barrar. Ruim na outra direção, bloqueia usuário legítimo e cria atrito desnecessário. O desafio está no meio: usar sinais, regras, score, biometria, documentoscopia, histórico e contexto da transação para tomar decisões proporcionais. Não é só "bloqueia ou deixa passar".

Essa ideia se parece muito com testes automatizados. Não existe apenas "passou" ou "falhou"; existe confiança, evidências, falsos positivos, falsos negativos e custo de manutenção da decisão.

---

## Uma arquitetura mental para sistemas financeiros

Juntando os temas, comecei a enxergar sistemas financeiros como fluxos de confiança. O usuário inicia uma ação, o sistema valida identidade e permissão, avalia risco, registra a operação, integra com estruturas externas, concilia o resultado e deixa evidências para auditoria.

O diagrama das camadas lá de cima também me ajuda nessa parte. Antes eu olharia primeiro para a feature. Agora eu tento pensar um pouco antes: essa regra vem do produto, de uma política interna, de uma exigência regulatória, de uma integração externa, ou de um controle operacional?

A pergunta que ficou martelando, no bom sentido, foi essa aqui:

> O que precisa ser validado, decidido, registrado, integrado e reconciliado para essa ação ser confiável?

Essa pergunta é simples, mas evita muita arquitetura ingênua.

---

## O que muda no meu código

Depois dessa iniciação, algumas preocupações ficaram mais naturais pra mim:

| Antes eu olhava mais para... | Agora eu também tento olhar para... |
|---|---|
| A tela e o endpoint | O ciclo completo da operação |
| O dado atual | A origem e a trilha do dado |
| O sucesso do fluxo feliz | Falhas parciais, duplicidade e retentativas |
| A regra de negócio isolada | Regulação, auditoria e controles |
| O teste do resultado final | Testes de transição, permissão e consistência |

Isso conversa diretamente com qualidade de software. Em sistema financeiro, um bug raramente é só um "detalhe visual". Pode virar saldo errado, cobrança duplicada, proposta inconsistente, bloqueio indevido, fraude aprovada ou ausência de evidência.

Também passei a valorizar mais nomes bem escolhidos. Quando o domínio tem palavras parecidas, como simulação, proposta, contrato, liberação, liquidação, baixa, saldo, posição e custódia, um nome ruim no código pode esconder uma regra importante.

---

## Referências públicas que ajudam a estudar

Para quem quiser estudar por fora, sem depender de material interno de empresa, estes pontos são bons começos:

- [Sistema Financeiro Nacional no Banco Central](https://www.bcb.gov.br/estabilidadefinanceira/sfn)
- [Supervisão do Sistema Financeiro pelo Banco Central](https://www.bcb.gov.br/estabilidadefinanceira/supervisao)
- [Papel da CVM no mercado de valores mobiliários](https://www.gov.br/cvm/pt-br/acesso-a-informacao-cvm/perguntas-frequentes-da-cvm/teste-assunto/teste-combo-assunto)
- [Pix no Banco Central](https://www.bcb.gov.br/estabilidadefinanceira/pix)
- [Sistema de Informações de Crédito do Banco Central](https://www.bcb.gov.br/estabilidadefinanceira/scr/)
- [Layout Itaú CNAB400 de cobrança](https://download.itau.com.br/bankline/layout_cobranca_400bytes_cnab_itau.pdf)

---

## Fechando

O que eu mais gostei nessa iniciação foi sair um pouco do "como eu implemento essa feature?" para "qual responsabilidade essa feature carrega dentro de uma operação financeira?".

Essa diferença muda bastante coisa. O código continua sendo JavaScript, Java, SQL, endpoint, tabela e teste. Mas o peso do que está sendo representado ali muda, e muda bastante.

No fim, software financeiro é software com memória, responsabilidade e consequências. Quanto mais cedo a gente entende isso, melhor a gente desenha sistemas que não apenas funcionam, mas também conseguem explicar o que fizeram.
