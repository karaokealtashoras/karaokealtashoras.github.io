// Cardápio do Altas Horas Karaokê.
// Para atualizar: edite nomes/preços abaixo e salve. "preco": null = "Consulte".
// "tags" (opcional) = sinônimos extras para a busca.
// "foto" usa as imagens de assets/img/cardapio/ ; "destaque": true aparece na home.
window.CARDAPIO = {
  "atualizado": "2026-10-16",
  "observacoes": [
    "Algo mais? Favor consultar nossa equipe!",
    "Obrigado pela preferência! Volte sempre!"
  ],
  "categorias": [
    {
      "id": "porcoes",
      "nome": "Porções",
      "itens": [
        { "nome": "Provolone à milanesa", "foto": "provolone", "preco": 75 },
        { "nome": "Filé de peixe à milanesa", "foto": "file-peixe", "preco": 75 },
        { "nome": "Carne seca com mandioca", "foto": "carne-seca", "preco": 75 },
        { "nome": "Filé aperitivo", "foto": "file-aperitivo", "preco": 75 },
        { "nome": "Costelinha de porco (frita)", "foto": "costelinha", "preco": 65 },
        { "nome": "Frango a passarinho", "preco": 65, "foto": "frango-passarinho", "destaque": true },
        { "nome": "Calabresa acebolada", "preco": 75, "foto": "calabresa", "destaque": true },
        { "nome": "Frios", "foto": "frios", "descricao": "Salame, queijo e azeitona", "preco": 65 },
        { "nome": "Azeitona", "foto": "azeitona", "preco": 25 },
        { "nome": "Salame", "foto": "salame", "preco": 43 },
        { "nome": "Queijo", "preco": 43, "foto": "queijo", "destaque": true },
        { "nome": "Mandioca frita", "foto": "mandioca", "preco": 35 },
        { "nome": "Amendoim", "foto": "amendoim", "preco": 15 },
        { "nome": "Polenta", "foto": "polenta", "preco": 45 },
        { "nome": "Batata frita", "foto": "batata-frita", "preco": 45 }
      ],
      "adicionais": [
        { "nome": "Batata frita com bacon", "preco": 10, "tipo": "acréscimo" },
        { "nome": "Batata frita com cheddar", "preco": 5, "tipo": "acréscimo" }
      ]
    },
    {
      "id": "sem-alcool",
      "nome": "Não alcoólicos",
      "itens": [
        { "nome": "Água com ou sem gás", "preco": 8 },
        { "nome": "Refrigerante lata", "tags": "refri", "preco": 10 },
        { "nome": "Schweppes", "tags": "refri", "preco": 12 },
        { "nome": "Água tônica", "preco": 12 },
        { "nome": "H2O", "tags": "refri", "preco": 12 },
        { "nome": "Suco de fruta", "descricao": "Verificar disponibilidade das frutas", "preco": 16 },
        { "nome": "Energético Red Bull", "preco": 20 }
      ]
    },
    {
      "id": "cerveja-garrafa",
      "nome": "Cervejas 600 ml",
      "itens": [
        { "nome": "Cerveja Original 600 ml", "preco": 20 },
        { "nome": "Cerveja Brahma Duplo Malte 600 ml", "preco": 20 },
        { "nome": "Cerveja Império 600 ml", "preco": 20 },
        { "nome": "Cerveja Heineken 600 ml", "foto": "heineken", "preco": 25 },
        { "nome": "Cerveja Skol 600 ml", "preco": 18 },
        { "nome": "Cerveja Brahma Chopp 600 ml", "preco": 18 }
      ]
    },
    {
      "id": "cerveja-lata",
      "nome": "Cervejas lata",
      "itens": [
        { "nome": "Cerveja Lata Skol", "preco": 15 },
        { "nome": "Cerveja Lata Brahma", "preco": 15 },
        { "nome": "Cerveja Lata Malzbier", "preco": 15 },
        { "nome": "Cerveja Lata Brahma Zero", "tags": "sem alcool", "preco": 15 }
      ]
    },
    {
      "id": "long-neck",
      "nome": "Long neck",
      "itens": [
        { "nome": "Cerveja Long Neck Heineken Zero", "tags": "sem alcool", "preco": 18 },
        { "nome": "Smirnoff Ice", "tags": "ice vodka", "preco": 25 },
        { "nome": "Skol Beats", "preco": 25 }
      ]
    },
    {
      "id": "caipirinhas",
      "nome": "Caipirinhas",
      "nota": "Verificar disponibilidade das frutas",
      "itens": [
        { "nome": "Caipirinha de vodka Smirnoff", "tags": "caipiroska caipirosca", "preco": 29 },
        { "nome": "Caipirinha de saquê", "tags": "caipisaque", "preco": 29 },
        { "nome": "Caipirinha de pinga", "tags": "cachaca", "preco": 24 }
      ]
    },
    {
      "id": "batidas",
      "nome": "Batidas",
      "nota": "Verificar disponibilidade das frutas",
      "itens": [
        { "nome": "Batida Karaokê Altas Horas", "descricao": "A batida da casa", "destaque": true, "preco": 20 },
        { "nome": "Batida de vodka Smirnoff", "preco": 28 },
        { "nome": "Batida de saquê", "preco": 28 },
        { "nome": "Batida de pinga", "tags": "cachaca", "preco": 25 },
        { "nome": "Batida espanhola", "preco": 28 },
        { "nome": "Batida de amarula", "preco": 28 }
      ]
    },
    {
      "id": "whisky",
      "nome": "Whisky",
      "itens": [
        { "nome": "Whisky Johnnie Walker Black Label", "tags": "uisque dose", "preco": 35 },
        { "nome": "Whisky Johnnie Walker Red Label", "tags": "uisque dose", "preco": 30 },
        { "nome": "Whisky Passport", "tags": "uisque dose", "preco": 25 }
      ]
    },
    {
      "id": "doses",
      "nome": "Destilados e cachaças",
      "itens": [
        { "nome": "Vodka Smirnoff", "tags": "dose", "preco": 25 },
        { "nome": "Rum", "tags": "dose", "preco": 25 },
        { "nome": "Gin", "tags": "dose", "preco": 25 },
        { "nome": "Tequila", "tags": "dose", "preco": 30 },
        { "nome": "Cachaça Ypióca", "tags": "pinga dose", "preco": 20 },
        { "nome": "Cachaça Seleta", "tags": "pinga dose", "preco": 20 },
        { "nome": "Cachaça Boazinha", "tags": "pinga dose", "preco": 20 },
        { "nome": "Cachaça São Francisco", "tags": "pinga dose", "preco": 15 },
        { "nome": "Cachaça Kariri com mel", "tags": "pinga dose", "preco": 20 }
      ]
    },
    {
      "id": "aperitivos",
      "nome": "Aperitivos e licores",
      "itens": [
        { "nome": "Campari", "tags": "dose", "preco": 25 },
        { "nome": "Martini", "tags": "dose vermute", "preco": 20 },
        { "nome": "Cynar", "tags": "dose", "preco": 20 },
        { "nome": "Underberg", "tags": "dose", "preco": 25 },
        { "nome": "Jurupinga", "tags": "dose", "preco": 15 },
        { "nome": "Rabo de galo", "descricao": "Cynar com pinga", "tags": "dose", "preco": 20 },
        { "nome": "Maria Mole", "tags": "dose", "preco": 20 }
      ]
    },
    {
      "id": "conhaque",
      "nome": "Conhaque",
      "itens": [
        { "nome": "Conhaque Domecq", "tags": "dose", "preco": 25 },
        { "nome": "Conhaque Dreher", "tags": "dose", "preco": 20 },
        { "nome": "Conhaque Dreher com limão e mel", "tags": "dose", "preco": 25 },
        { "nome": "Conhaque Dreher com menta", "tags": "dose", "preco": 25 }
      ]
    },
    {
      "id": "drinks",
      "nome": "Outros drinks",
      "itens": [
        { "nome": "Chopp de vinho", "preco": 23 },
        { "nome": "Coquetel de frutas", "preco": 35 }
      ]
    },
    {
      "id": "garrafas",
      "nome": "Garrafas",
      "itens": [
        { "nome": "Whisky, vodka e vinho", "descricao": "Consulte opções e preços com nossa equipe", "preco": null }
      ]
    }
  ]
}
;
