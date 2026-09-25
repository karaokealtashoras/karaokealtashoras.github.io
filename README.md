# Altas Horas Karaokê — site

Site one-page + cardápio online do Altas Horas Karaokê (Tatuapé, SP).
Publicado no GitHub Pages: https://karaokealtashoras.github.io/

## Estrutura

```
index.html            página principal
cardapio/index.html   cardápio online (QR Code das mesas)
data/cardapio.js      itens e preços do cardápio (fonte única — home e cardápio leem daqui)
assets/css/           estilos
assets/js/            main.js (home), cardapio.js, status.js (selo aberto/fechado)
assets/img/           logos, fotos (WebP 800 e 1600 px), favicon
```

## Como atualizar

- **Preço ou item do cardápio:** edite `data/cardapio.js`. `"preco": null` mostra "Consulte".
- **Horário do selo "Aberto agora":** `assets/js/status.js` (constantes `ABRE` e `FECHA`, dias sexta/sábado).
- **Fotos da galeria:** gere `nome-800.webp` e `nome-1600.webp` em `assets/img/clientes/` ou `ambiente/`
  e adicione um `<button class="gallery__item">` na seção `#galeria` do `index.html`.
- **Depoimentos, FAQ e textos:** direto no `index.html`.

## Rodar localmente

```
python3 -m http.server 8000
```
Abra http://localhost:8000
