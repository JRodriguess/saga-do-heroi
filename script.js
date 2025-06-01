/* uso  */
    class Heroi {
      constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
      }

      atacar() {
        let ataque, emoji;
        switch (this.tipo) {
          case "mago":
            ataque = "magia";
            emoji = "🧙‍♂️✨";
            break;
          case "guerreiro":
            ataque = "espada";
            emoji = "🛡️";
            break;
          case "monge":
            ataque = "artes marciais";
            emoji = "🧘";
            break;
          case "ninja":
            ataque = "shuriken";
            emoji = "🐱‍👤";
            break;
          default:
            ataque = "algo misterioso";
            emoji = "❓";
        }
        return `${emoji} O ${this.tipo} atacou usando ${ataque}`;
      }
    }

    function criarHeroi() {
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const tipo = document.getElementById("tipo").value;

      const heroi = new Heroi(nome, idade, tipo);
      document.getElementById("resultado").innerText = heroi.atacar();
    }
