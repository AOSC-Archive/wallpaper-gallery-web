const fs = require('fs');

const imgJson = fs.readFileSync('img.json').toString().trim();
const quotesJson = fs.readFileSync('quotes.json').toString().trim();

const rawHtmlTmpl = fs.readFileSync('index.tmpl.html').toString();

let outputHtml = rawHtmlTmpl.replace('{{ imgJson }}', imgJson).replace('{{ quotesJson }}', quotesJson);

fs.writeFileSync('index.html', outputHtml);

console.log(`Build completed.`);
