function calcular() {
    let select = document.getElementById("combustiveis");
    let option = select.options[select.selectedIndex].text;
    let quantLitros = parseInt(document.getElementById("qtdLitros").value);
    let valorTotal = parseInt(document.getElementById("valorTotal").value);
    let valorUnit = (valorTotal / quantLitros).toFixed(2);
    let kmInicial = parseInt(document.getElementById("kmInicial").value);
    let kmFinal = parseInt(document.getElementById("kmFinal").value);
    let kmRodados = kmFinal - kmInicial;
    let mediaKm = kmRodados / quantLitros;
    let custoKm = (kmRodados / valorTotal).toFixed(2);

    
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    //table.appendChild(thead);
    table.appendChild(tbody);

    //let linha1 = document.createElement('tr');
   // let cabecalho1 = document.createElement('th');
    //cabecalho1.innerHTML = "Combustivel";
    //let cabecalho2 = document.createElement('th');
    //cabecalho2.innerHTML = "Km Inicial";
    //let cabecalho3 = document.createElement('th');
    //cabecalho3.innerHTML = "Km Final";
    //let cabecalho4 = document.createElement('th');
   // cabecalho4.innerHTML = "Qt LT";
   //let cabecalho5 = document.createElement('th');
    //cabecalho5.innerHTML = "Valor/Lt";
    //let cabecalho6 = document.createElement('th');
    //cabecalho6.innerHTML = "Valor Total";
    //let cabecalho7 = document.createElement('th');
    //cabecalho7.innerHTML = "Km Rodados";
    //let cabecalho8 = document.createElement('th');
    //cabecalho8.innerHTML = "Media/Km";
    //let cabecalho9 = document.createElement('th');
    //cabecalho9.innerHTML = "Custo/Km";

    //linha1.appendChild(cabecalho1);
    //linha1.appendChild(cabecalho2);
    //linha1.appendChild(cabecalho3);
    //linha1.appendChild(cabecalho4);
    //linha1.appendChild(cabecalho5);
    //linha1.appendChild(cabecalho6);
    //linha1.appendChild(cabecalho7);
    //linha1.appendChild(cabecalho8);
    //linha1.appendChild(cabecalho9);
    //thead.appendChild(linha1);


    let linha2 = document.createElement('tr');
    let combustivel = document.createElement('td');
    combustivel.innerHTML = option;
    let inicialKm = document.createElement('td');
    inicialKm.innerHTML = kmInicial;
    let finalKm = document.createElement('td');
    finalKm.innerHTML = kmFinal
    let litrosQtd = document.createElement('td');
    litrosQtd.innerHTML = quantLitros
    let untValor = document.createElement('td');
    untValor.innerHTML = valorUnit;
    let totalValor = document.createElement('td');
    totalValor.innerHTML = valorTotal;
    let kmTotal = document.createElement('td');
    kmTotal.innerHTML = kmRodados;
    let kmMedia = document.createElement('td');
    kmMedia.innerHTML = mediaKm;
    let kmCusto = document.createElement('td');
    kmCusto.innerHTML = custoKm;

    linha2.appendChild(combustivel);
    linha2.appendChild(inicialKm);
    linha2.appendChild(finalKm);
    linha2.appendChild(litrosQtd);
    linha2.appendChild(untValor);
    linha2.appendChild(totalValor);
    linha2.appendChild(kmTotal);
    linha2.appendChild(kmMedia);
    linha2.appendChild(kmCusto);
    tbody.appendChild(linha2);


    document.getElementById('tabela').appendChild(tbody);
}

