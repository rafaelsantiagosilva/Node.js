var fileSystem = require('fs');

fileSystem.appendFile('06.1_criarArquivos.txt', 'Olá Mundo!', (err) => {
     if (err) throw err;
     console.log('Saved!');
}); // Criando arquivos

fileSystem.open('06.1_criandoArquivosComOpen.txt', 'w', (err, file) => {
     if (err) throw err;
     console.log('Saved!');
}); // Cria um arquivo vazio

fileSystem.writeFile('06.1_criarArquivos.txt', 'Hello World!', (err) => {
     if (err) throw err;
     console.log('Saved!');
}); // Substituindo o conteúdo do arquivo. Se este não existir, é criado

fileSystem.appendFile('06.1_criarArquivos.txt', '  Atualizado!', (err) => {
     if (err) throw err;
     console.log('Updated!');
}); // Atualizando arquivos

fileSystem.unlink('06.1_criandoArquivosComOpen.txt', (err) => {
     if (err) throw err;
     console.log("Arquivo deletado!");
}); // Deletando arquivos

fileSystem.rename('06.1_criarArquivos.txt', '06.1_criarArquivos.html', (err) => {
     if (err) throw err;
     console.log('Renomeado!');
});

// Na maior parte destes comandos, caso o arquivo não exista ele é criado