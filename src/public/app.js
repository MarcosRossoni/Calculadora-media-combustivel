const custoPorKm = [];
console.log(custoPorKm)

function criarTabela(...params) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    table.appendChild(tbody);

    const trElement = document.createElement("tr");

    params.forEach((item) => {
        const tdElement = document.createElement("td");
        tdElement.innerHTML = item;
        trElement.appendChild(tdElement);
        tbody.appendChild(trElement);
        document.getElementById("tabela").appendChild(tbody);
    });
}

function calcular() {
    let select = document.getElementById("combustiveis");
    let option = select.options[select.selectedIndex].text;
    let quantLitros = parseInt(document.getElementById("qtdLitros").value);
    let valorTotal = parseInt(document.getElementById("valorTotal").value);
    let valorUnit = (valorTotal / quantLitros).toFixed(2);
    let kmInicial = parseInt(document.getElementById("kmInicial").value);
    console.log(kmInicial)
    let kmFinal = parseInt(document.getElementById("kmFinal").value);
    let kmRodados = kmFinal - kmInicial;
    let mediaKm = (kmRodados / quantLitros).toFixed(2);
    let custoKm = (valorTotal / kmRodados).toFixed(2);

    criarTabela(
        option,
        kmInicial,
        kmFinal,
        quantLitros,
        valorUnit,
        valorTotal,
        kmRodados,
        mediaKm,
        custoKm
    );
    
    custoPorKm.push(Number(custoKm));

    document.getElementById("kmInicial").value = "";
    document.getElementById("kmFinal").value = "";
    document.getElementById("qtdLitros").value = "";
    document.getElementById("valorTotal").value = "";
}


document.querySelector("#btnMedia").addEventListener("click", (ev) => {
    const divMedia = document.querySelector("#mediaCustoPorKm");
    const total = custoPorKm.reduce((atual, acumulado) => atual + acumulado, 0);
    const resultado = total / custoPorKm.length;
  
    return (divMedia.innerHTML = resultado).toFixed(2).replace(".", ",");
  });

  
