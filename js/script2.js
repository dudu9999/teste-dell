
function pegaArquivo(files){
	var arquivo = document.getElementById("arquivo").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		var texto = textFromFileLoaded;
		converteGalaticos(texto);
	};
	fileReader.readAsText(arquivo, "UTF-8");
}

      // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
      function converteGalaticos(frase) {
        palavraRomano = ""
        palavrasGalaticaFrase = ""
        arrPalavras = ""
        fraseFinal = ""
        var arrFrases = frase.split('?');
        // console.log("Digitou frase:\n"+frase+"\n\nTamanho frase: "+frase.length+"\nTamanho arrFrases: "+arrFrases.length+"\n\nSeparando palavra o array fica:\n\nPosição 0: "+arrFrases[0]+"\n\nPosição 1: "+arrFrases[1]+"\n\nPosição 2: "+arrFrases[2]+"\n\nPosição 3: "+arrFrases[3]+"\n\nPosição 4: "+arrFrases[4]+"\n\nPosição 5: "+arrFrases[5]+"\n\nPosição 6: "+arrFrases[6]+" ");
        for (var i = 0; i < arrFrases.length; i++) {
          if (arrFrases[i] == undefined) {
            arrFrases[i] = "undefined"
          }else{
            arrPalavras = arrFrases[i].split(" ");
          }

          for (var x = 0; x < arrPalavras.length; x++) {
            console.log("\nx: "+x+" i: "+i+" arrPalavras[x]: "+ arrPalavras[x]);
            if (arrPalavras[x] == undefined ) {
                arrPalavras[x] = "undefined"
            }
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

          }
          if (palavraRomano.length == 0) {
              console.log("Não digitou nada")
              document.getElementById("resposta-"+i).innerHTML = "Nem ideia do que isto significa!";
              // document.getElementById("romanoConvertido0").innerHTML = "Nem ideia do que isto significa!";
          }

          console.log("\npalavrasGalaticaFrase: "+palavrasGalaticaFrase+"\npalavraRomano: "+palavraRomano)

          numerofinal = converteRomanoParaNumeros(palavraRomano)

          fraseFinal = palavrasGalaticaFrase+" custa "+numerofinal+ " créditos\n";
          // document.getElementById("romanoConvertido0").innerHTML = palavraRomano.toString();
          if (i == 0) {
            console.log("\nif 0-------------------------------")
            document.getElementById("resposta-1").innerHTML += fraseFinal+"\n";
            ;palavrasGalaticaFrase = "";
            fraseFinal = "";
            numerofinal = "";
            palavraRomano = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
          if (i == 1) {
            console.log("\nif 1-------------------------------")
            document.getElementById("resposta-2").innerHTML += fraseFinal+"\n";
            ;palavrasGalaticaFrase = "";
            fraseFinal = "";
            numerofinal = "";
            palavraRomano = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
          if (i == 2) {
            console.log("\nif 2-------------------------------")
            document.getElementById("resposta-3").innerHTML += fraseFinal+"\n";
            ;palavrasGalaticaFrase = "";
            fraseFinal = "";
            numerofinal = "";
            palavraRomano = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
          if (i == 3) {
            console.log("\nif 3-------------------------------")
            document.getElementById("resposta-4").innerHTML += fraseFinal+"\n";
            ;palavrasGalaticaFrase = "";
            fraseFinal = "";
            numerofinal = "";
            palavraRomano = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
          if (i == 4) {
            console.log("\nif 4-------------------------------")
            document.getElementById("resposta-5").innerHTML += fraseFinal+"\n";
            ;palavrasGalaticaFrase = "";
            fraseFinal = "";
            numerofinal = "";
            palavraRomano = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
          if (i == 5) {
            document.getElementById("resposta-6").innerHTML += fraseFinal+"\n";
            console.log("\nif 5-------------------------------");palavrasGalaticaFrase = "";
            fraseFinal = "";
            numerofinal = "";
            palavraRomano = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
          if (i == 6) {
            document.getElementById("resposta-7").innerHTML += fraseFinal+"\n";
            console.log("\nif 6-------------------------------");palavrasGalaticaFrase = "";
            fraseFinal = "";
            palavraRomano = "";
            numerofinal = "";
            arrPalavras[x] = ""
            arrFrases[x] = ""
            x = 0
          }
        }

      }
      // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


      function converteRomanoParaNumeros(s){
          rom_val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
          int_val = 0
          for (j in s){
              if (j > 0 && rom_val[s[j]] > rom_val[s[j - 1]]){
                int_val += rom_val[s[j]] - 2 * rom_val[s[j - 1]]
              } else {
                int_val += rom_val[s[j]]
              }
          }
          return int_val
      }
      // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
