# Orientações sobre o Git
## Clonando globalmente o repositório do GitHub na máquina:
    1. Criar um repositório no github;
    2. Copiar o HTTPS;
    3. `git config --global user.name ""`;
    4. `git config --global user.email ""`;
    5. `git config --list`;
    6. `git clone https`
    7. Com comando "cd" e "ls" entrar na pasta do repositório clonado;
    8. code . (Abrir no vscode);

## Conceitos básicos
    - `git status`: mostrar arquivos modificados que ainda não foram comitados, que o repositório ainda não conhece;
	- `git commit`: colocar as modificações realizadas no projeto em um encapsulado, e enviar para o *repositório*, 
    criando um marco no projeto, com o que foi mudado, quando foi mudado, e por quem foi mudado, isso cria um 
    histórico de versões;
	- *ANTES* de fazer o `git commit`:
		- `git add .` prepara todas as modificações para serem adicionada, serve para mapear as modificações, usasse 
        "." para colocar todas, e caso queira só determinado arquivo basta colocar o nome do arquivo;
		- `git commit -m "Clonagem do repositório GitHub estudosJavascript para a máquina`, pronto agora as modificações 
        realizadas já consta no repositório da máquina;
		- `git push` agora essas modificações ficam presentes também no repositório do GitHub, a partir deste momento 
        os marcos históricos do projeto, estão presentes no GitHub e na máquina (repositório local);
