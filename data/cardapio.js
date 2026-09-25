// Cardápio do Altas Horas Karaokê.
// Para atualizar: edite nomes/preços abaixo e salve. "preco": null = "Consulte".
// "foto" usa as imagens de assets/img/cardapio/ ; "destaque": true aparece na home.
window.CARDAPIO = {
  "atualizado": "2026-09-25",
  "observacoes": [
    "Algo mais? Favor consultar nossa equipe!",
    "Obrigado pela preferência! Volte sempre!"
  ],
  "categorias": [
    {
      "id": "porcoes",
      "nome": "Porções",
      "itens": [
        { "nome": "Provolone à milanesa", "preco": 75 },
        { "nome": "Filé de peixe à milanesa", "preco": 75 },
        { "nome": "Carne seca com mandioca", "preco": 75 },
        { "nome": "Filé aperitivo", "preco": 75 },
        { "nome": "Costelinha de porco (frita)", "preco": 65 },
        { "nome": "Frango a passarinho", "preco": 65, "foto": "frango-passarinho", "destaque": true },
        { "nome": "Calabresa acebolada", "preco": 75, "foto": "calabresa", "destaque": true },
        { "nome": "Frios", "descricao": "Salame, queijo e azeitona", "preco": 65 },
        { "nome": "Azeitona", "preco": 25 },
        { "nome": "Salame", "preco": 43 },
        { "nome": "Queijo", "preco": 43, "foto": "queijo", "destaque": true },
        { "nome": "Mandioca frita", "preco": 35 },
        { "nome": "Amendoim", "preco": 15 },
        { "nome": "Polenta", "preco": 45 },
        { "nome": "Batata frita", "preco": 45 }
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
        { "nome": "Refrigerante lata", "preco": 10 },
        { "nome": "Schweppes, água tônica, H2O", "preco": 12 },
        { "nome": "Suco de fruta", "descricao": "Verificar disponibilidade das frutas", "preco": 16 },
        { "nome": "Red Bull", "preco": 20 },
        { "nome": "Coquetel de frutas", "preco": 35 }
      ]
    },
    {
      "id": "cerveja-garrafa",
      "nome": "Cerveja garrafa",
      "itens": [
        { "nome": "Original / Brahma Duplo Malte / Império", "descricao": "600 ml", "preco": 20 },
        { "nome": "Heineken", "descricao": "600 ml", "preco": 25 },
        { "nome": "Skol / Brahma Chopp", "descricao": "600 ml", "preco": 18 }
      ]
    },
    {
      "id": "cerveja-lata",
      "nome": "Cerveja lata",
      "itens": [
        { "nome": "Skol / Brahma", "preco": 15 },
        { "nome": "Malzbier / Brahma Zero", "preco": 15 },
        { "nome": "Long neck Heineken Zero", "preco": 18 },
        { "nome": "Chopp de vinho", "preco": 23 }
      ]
    },
    {
      "id": "caipirinhas",
      "nome": "Caipirinhas",
      "nota": "Verificar disponibilidade das frutas",
      "itens": [
        { "nome": "Vodka Smirnoff", "preco": 25 },
        { "nome": "Saquê", "preco": 25 },
        { "nome": "Pinga", "preco": 20 }
      ]
    },
    {
      "id": "batidas",
      "nome": "Batidas",
      "nota": "Verificar disponibilidade das frutas",
      "itens": [
        { "nome": "Karaokê Altas Horas", "descricao": "A batida da casa", "preco": 20, "destaque": true },
        { "nome": "Vodka Smirnoff / Saquê", "preco": 28 },
        { "nome": "Pinga", "preco": 25 },
        { "nome": "Espanhola", "preco": 28 },
        { "nome": "Amarula", "preco": 28 }
      ]
    },
    {
      "id": "conhaque",
      "nome": "Conhaque",
      "itens": [
        { "nome": "Domecq", "preco": 25 },
        { "nome": "Dreher", "preco": 20 },
        { "nome": "Dreher com limão e mel", "preco": 25 },
        { "nome": "Dreher com menta", "preco": 25 }
      ]
    },
    {
      "id": "doses",
      "nome": "Bebidas quentes",
      "itens": [
        { "nome": "Johnnie Walker Black Label", "preco": 35 },
        { "nome": "Johnnie Walker Red Label", "preco": 30 },
        { "nome": "Passport", "preco": 25 },
        { "nome": "Rum, Gin", "preco": 25 },
        { "nome": "Campari, Vodka Smirnoff", "preco": 25 },
        { "nome": "Underberg", "preco": 25 },
        { "nome": "Tequila", "preco": 30 },
        { "nome": "Smirnoff Ice / Skol Beats", "preco": 25 },
        { "nome": "Kariri com mel, Martini", "preco": 20 },
        { "nome": "São Francisco, Jurupinga", "preco": 15 },
        { "nome": "Rabo de galo", "descricao": "Cynar com pinga", "preco": 20 },
        { "nome": "Maria Mole", "preco": 20 },
        { "nome": "Cynar", "preco": 20 },
        { "nome": "Ypióca / Seleta / Boazinha", "preco": 20 }
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
