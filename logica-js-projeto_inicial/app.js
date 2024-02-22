alert("Boas Vindas ao jogo do número secreto");
let numeromax = 100
let numeroSecreto = parseInt(Math.random() * numeromax + 1);
let chute;
let tentativas = 1;


// enquanto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeromax}` );
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break
    
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
   // tentativas = tentativas + 1;
   tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)
