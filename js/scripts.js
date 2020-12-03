//Inicializa a página
window.addEventListener("load", start);
	console.log("Todos os recursos terminaram o carregamento!");

  //variaveis
var resultadoTempoReal = null;
var Extenso = null;
var nomePorExtenso = null;
var adicionaE = false;

//vetor
var numCent = ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos",
  "seiscentos", "setecentos", "oitocentos", "novecentos"];
var numDez = ["vinte", "trinta", "quarenta", "ciquenta",
  "sessenta", "setenta", "oitenta", "noventa"];
var numDezenasMenorQueVinte = ["dez", "onze", "doze", "treze",
  "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
var numUnidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];


function start() {
  RangeChange();
  InitializeInputs();
}

function InitializeInputs() {
  let range = document.querySelector('input[type="range"]');
  let numero = range.value;
  if (numero != undefined) {
    FillInputs(numero);
  }
  resultadoTempoReal = document.querySelector("#resultadoTempoReal");
  resultadoTempoReal.disabled = true;
  Extenso = document.querySelector("#Extenso");
  Extenso.disabled = true;
}

function RangeChange() {
  function changeNumbers(event) {
    let number = event.target.value;
    if (number => 0 && number <= 999) {
      FillInputs(number);
    }
  }

  let range = document.querySelector('input[type="range"]');

  range.addEventListener("change", changeNumbers);
}

function FillInputs(numero) {
  function VerifyHundredNumber(numero) {
    let Centena;
    let restoDeCem = Math.floor(numero / 100);
    if (restoDeCem > 0) {
      if (numero == 100) {
        Centena = numCent[0]
      } else {
        Centena = numCent[restoDeCem];
      }
    } else {
      Centena = '';
    }
    return Centena;
  }
  function VerifyDozensNumber(numero) {
    let nomeDezena;
    adicionaE = numero > 100;
    let ModuloDeCem = numero % 100;
    let restoDeDez = Math.floor(ModuloDeCem / 10);

    if (ModuloDeCem !== 0 && restoDeDez > 0) {
      if (restoDeDez === 1) {
        let moduloDeDez = ModuloDeCem % 10;
        nomeDezena = numDezenasMenorQueVinte[moduloDeDez];
      } else {
        nomeDezena = numDez[restoDeDez - 2];
      }

    } else {
      nomeDezena = '';
      adicionaE = false
    }

    if (adicionaE) {
      nomeDezena = " e " + nomeDezena;
    }

    return nomeDezena;
  }
  function VerifyUnityNumber(numero) {
    let nomeUnidade;
    adicionaE = numero > 20;
    let ModuloDeCem = numero % 100;
    let moduloDeDez = ModuloDeCem % 10;

    let DezenaDiferentedaPrimeira = ModuloDeCem >= 20 || ModuloDeCem < 10;

    let dezenaSemUnidadeZero = moduloDeDez === 0 && DezenaDiferentedaPrimeira;

    if ((DezenaDiferentedaPrimeira) && (!dezenaSemUnidadeZero || numero == 0)) {
      nomeUnidade = numUnidades[moduloDeDez];
    } else {
      nomeUnidade = '';
      adicionaE = false
    }

    if (adicionaE) {
      nomeUnidade = " e " + nomeUnidade;
    }

    return nomeUnidade;
  }

  nomePorExtenso = VerifyHundredNumber(numero);
  nomePorExtenso += VerifyDozensNumber(numero);
  nomePorExtenso += VerifyUnityNumber(numero);
  resultadoTempoReal = document.querySelector("#resultadoTempoReal");
  resultadoTempoReal.value = numero;
  Extenso = document.querySelector("#Extenso");
  Extenso.value = nomePorExtenso;
}

/*Rascunho

// Resultado em tempo Real
let $range2 = document.querySelector('#input'),
    $value2 = document.querySelector('#resultadoTempoReal');

$range2.addEventListener('input', function() {
    $value2.textContent = this.value;
});

	function Extenso(numero){
			var retorno = "";
 			var auxiliar1 =   ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
			var auxiliar2 = ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"];
			var auxiliar3 = ["cem", "duzentos", "trezentos", "quatrozentos", "quinhentos", "seissentos", "setessentos", "oitocentos", "novecentos"];
			
			console.log(numero);
			 if  (numero > 99){
				var temp = numero.toString().split('');
				var primeiro_numero = temp[0];
				var segundo_numero = temp[1];
				var terceiro = temp[3];
				retorno = auxiliar3[segundo_numero-1] 
				if (segundo_numero > 0){
					retorno += " e " + auxiliar2[segundo_numero];
					}
			 } else {
			 if (numero < 20){
			 retorno = auxiliar1[numero];
			 } else {
			 var temp = numero.toString().split('');
			 var primeiro_numero = temp[0];
			 var segundo_numero = temp[1];
			 retorno = auxiliar2[primeiro_numero-1] 
			 if (segundo_numero > 0){
			 retorno += " e " + auxiliar1[primeiro_numero];
			 }
			 }
			 }
			 return retorno;
			 }
      console.log(numero);
      
      if (numCentena == 1 && numDezena == 0 && numUnidade == 0){
  extenso = "cem"; 
}else{
  if(numCentena==0&&numDezena==0&&numUnidade==0){
    extenso = "zero"; 
  }else{
    if(numCentena>1&&numDezena==0&&numUnidade==0){
      switch (numCentena){
       //case 1 : extenso="Cento ";break;
       case 2 : extenso="Duzentos ";break;
       case 3 : extenso="Trezentos ";break;
       case 4 : extenso="Quatrocentos ";break;
       case 5 : extenso="Quinhentos ";break;
       case 6 : extenso="Seiscentos ";break;
       case 7 : extenso="Setecentos ";break;
       case 8 : extenso="Oitocentos ";break;
       case 9 : extenso="Novecentos ";break;
      }
    }else{
        switch(numCentena){
        case 1 : extenso="Cento e ";break;
        case 2 : extenso="Duzentos e ";break;
        case 3 : extenso="Trezentos e ";break;
        case 4 : extenso="Quatrocentos e ";break;
        case 5 : extenso="Quinhentos e ";break;
        case 6 : extenso="Seiscentos e ";break;
        case 7 : extenso="Setecentos e ";break;
        case 8 : extenso="Oitocentos e ";break;
        case 9 : extenso="Novecentos e ";break;
      }
      } 
      if (numCentena == 0 && numDezena >= 1 && numUnidade == 0){
        switch(numCentena){
        case 1 : extenso=" Dez ";break;
        case 2 : extenso="Vinte";break;
        case 3 : extenso="Trinta ";break;
        case 4 : extenso="Quarenta";break;
        case 5 : extenso="Cinquenta";break;
        case 6 : extenso="Sessenta";break;
        case 7 : extenso="Setenta";break;
        case 8 : extenso="Oitocenta";break;
        case 9 : extenso="Noventa";break;
             }}
            
      
      }
      {
    }
  }
  */
