
function converteRomano() {
  const valor = document.getElementById('numero').value;

  console.log("Digitou Numero  "+valor+'\nTamannho: '+valor.length);
  unidadesRomanos = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  decimaisRomanos = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  centenaRomanos  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  milharRomanos   = ["", "M", "MM", "MMM", "IV", "V", "VI", "VII", "VIII", "IX"];

  if (valor[0] == 0) {
    document.getElementById("romanoConvertido").innerHTML = "Desculpe mas nao existe zero em romano. Digite um numero que nao inicie em zero!";

  }else if(valor.length == 1 && valor > 0){
    document.getElementById("romanoConvertido").innerHTML = unidadesRomanos[valor];

  }else if(valor.length == 2 && valor > 00){
    if(valor[1] == 0){
      numeroFinalRomano = centenaRomanos[valor[0]];
      document.getElementById("romanoConvertido").innerHTML = numeroFinalRomano.toString();
    } else {
      numeroFinalRomano = centenaRomanos[valor[0]] + decimaisRomanos[valor[1]] + unidadesRomanos[valor[1]];
      document.getElementById("romanoConvertido").innerHTML = numeroFinalRomano.toString();
    }

  }else if(valor.length == 3 && valor > 000){
    if(valor[1] == 0 && valor[2] == 0){
      numeroFinalRomano = centenaRomanos[valor[0]];
      document.getElementById("romanoConvertido").innerHTML = numeroFinalRomano.toString();
    } else {
      numeroFinalRomano = centenaRomanos[valor[0]] + decimaisRomanos[valor[1]] + unidadesRomanos[valor[2]];
      document.getElementById("romanoConvertido").innerHTML = numeroFinalRomano.toString();
    }

  }else if(valor.length == 4 && valor > 0000){
    if(valor[1] == 0 && valor[2] == 0 && valor[3] == 0){
      numeroFinalRomano = milharRomanos[valor[0]];
      document.getElementById("romanoConvertido").innerHTML = numeroFinalRomano.toString();
    } else {
      numeroFinalRomano = milharRomanos[valor[0]] + centenaRomanos[valor[1]] + decimaisRomanos[valor[2]] + unidadesRomanos[valor[3]];
      document.getElementById("romanoConvertido").innerHTML = numeroFinalRomano.toString();
    }

  }else{
    document.getElementById("romanoConvertido").innerHTML = "Algo deu errado, você deve digitar numeros positivos ou até 4(quatro) digitos";
  }
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function converteRomanoParaNumero(s){
    rom_val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    int_val = 0
    for (i in s){
        if (i > 0 && rom_val[s[i]] > rom_val[s[i - 1]]){
          int_val += rom_val[s[i]] - 2 * rom_val[s[i - 1]]
        } else {
          int_val += rom_val[s[i]]
        }
    }
    return int_val
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


function converteGalatico() {
  const frase = document.getElementById('frase').value;
  palavraRomano = ""
  palavrasGalaticaFrase = ""
  arrPalavras = frase.split(" ");
  console.log("Digitou frase: "+frase+"\nTamanho: "+frase.length+"\nSeparando palavra o array fica: "+arrPalavras[0]+" "+arrPalavras[1]+"\nPosição 0: "+arrPalavras[0]+"\nPosição 1: "+arrPalavras[1]+"\nPosição 2: "+arrPalavras[2]+"\nPosição 3: "+arrPalavras[3]+"\nPosição 4: "+arrPalavras[4]+"\nPosição 5: "+arrPalavras[5]+"\nPosição 6: "+arrPalavras[6]+"\nPosição 7: "+arrPalavras[7]+"\n");

  for(x in arrPalavras){
    if (arrPalavras[x].toUpperCase() == "SNOB") {
        palavraRomano = palavraRomano + "I"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras[x].toUpperCase() == "KROK") {
        palavraRomano = palavraRomano + "V"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras[x].toUpperCase() == "SQUID") {
        palavraRomano = palavraRomano + "X"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras[x].toUpperCase() == "LEIJ") {
        palavraRomano = palavraRomano + "L"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras[x].toUpperCase() == "IRON" || arrPalavras[x].toUpperCase() == "FERRO") {
        palavraRomano = palavraRomano + "C"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras[x].toUpperCase() == "SILVER" || arrPalavras[x].toUpperCase() == "PRATA") {
        palavraRomano = palavraRomano + "D"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras[x].toUpperCase() == "GOLD" || arrPalavras[x].toUpperCase() == "OURO") {
        palavraRomano = palavraRomano + "M"
        palavrasGalaticaFrase = palavrasGalaticaFrase + arrPalavras[x] + " "
    }
    if (arrPalavras.length == 0) {
        console.log("Não digitou nada")
        document.getElementById("romanoConvertido0").innerHTML = "digite algo!";
    }

    if (arrPalavras.length == 0) {
        console.log("Não digitou nada")
        document.getElementById("romanoConvertido0").innerHTML = "digite algo!";
    }

    if (palavrasGalaticaFrase == null) {
      palavrasGalaticaFrase = " "
    }
  }

  numerofinal = converteRomanoParaNumero(palavraRomano)
  document.getElementById("romanoConvertido0").innerHTML = "Em romanos o resultado é:  " +palavraRomano.toString();
  document.getElementById("romanoConvertido1").innerHTML = palavrasGalaticaFrase+" custa "+numerofinal+ " créditos";
}
