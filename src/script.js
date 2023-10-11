const produtos= [];
const anexos =[];

document.addEventListener("DOMContentLoaded", () => {
    const cepValue = document.getElementById("cep")
    const logradouro = document.getElementById("logradouro")
    const bairro = document.getElementById("bairro")
    const cidade = document.getElementById("cidade")
    const estado = document.getElementById("estado")

    const buscarCepbtn = document.getElementById("buscar-cep")

    buscarCepbtn.addEventListener("click", () =>{
        const cep = cepValue.value.replace(/\D/g, "");

        if(cep.length !== 8){
            alert("Coloque um CEP válido!")
            return
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp) => resp.json())
        .then(res => {

            if(res.erro){

                alert("CEP não encontrado!")

            }else{

                logradouro.value = res.logradouro
                cidade.value = res.localidade
                bairro.value= res.bairro
                estado.value = res.uf
            }
        })
        .catch(err => console.error(err))

    })
})

document.getElementById('salvar-fornecedor').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    setTimeout(function() {
        modal.style.display = 'none';
    }, 2000); 

    const razaoSocialInput = document.getElementById("razao-social")
    const nomeFantasiaInput = document.getElementById("nome-fantasia")
    const cnpjInput = document.getElementById("cnpj")
    const inscricaoEstadualInput = document.getElementById("inscricao-estadual")
    const inscricaoMunicipalInput = document.getElementById("inscricao-municipal")
    const nomeContatoInput = document.getElementById("nome-contato")
    const telefoneInput = document.getElementById("telefone")
    const emailInput = document.getElementById("email")

    const fornecedor = {
        razaoSocial: razaoSocialInput.value,
        nomeFantasia: nomeFantasiaInput.value,
        cnpj: cnpjInput.value,
        inscricaoEstadual: inscricaoEstadualInput.value,
        inscricaoMunicipal: inscricaoMunicipalInput.value,
        nomeContato: nomeContatoInput.value,
        telefoneContato: telefoneInput.value,
        emailContato: emailInput.value,
        produtos: produtos,
        anexos: anexos 

    };

    console.log(fornecedor)
});

const adicionarProduto = () =>{
    const nomeProduto = document.getElementById("nome-produto")
    const unidadeDeMedida = document.getElementById("unidade-medida")
    const quantidadeProdutoEstoque = document.getElementById("quantidade-estoque")
    const valorProdutoUnitario = document.getElementById("valor-unitario")
    const valorTotal = document.getElementById("valor-total")

    let produto = {
            indice: produtos.length + 1,
			descricaoProduto: nomeProduto.value,
			unidadeMedida: unidadeDeMedida.value,
			qtdeEstoque: quantidadeProdutoEstoque.value,
			valorUnitario: valorProdutoUnitario.value,
			valorTotal: valorTotal.value
    }

    produtos.push(produto)
}

const atualizarValorTotalProduto = () =>{

    const quantidadeProdutoEstoque = document.getElementById("quantidade-estoque")

    const valorProdutoUnitario = document.getElementById("valor-unitario")

    const valorTotalInput = document.getElementById("valor-total")

    const valorTotal = (quantidadeProdutoEstoque.value) * (valorProdutoUnitario.value)

    valorTotalInput.value = `R$${valorTotal.toFixed(2)}`
}

const gerarId = () =>{
    return '_' + Math.random().toString(10).substring(2, 8)
}

const deletarArquivo = (id) =>{
    sessionStorage.removeItem(id)
    anexarArquivo()
}

const vizualizarArquivo = (nomeArquivo, url) =>{
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download= nomeArquivo
    document.body.appendChild(anchor)
    anchor.click()
    window.URL.revokeObjectURL(url)
}

const anexarArquivo = () =>{
    const listaAnexos = document.getElementById("lista-anexos");
    listaAnexos.innerHTML = "";

    for(let i = 0; i < sessionStorage.length; i++){
        const nomeArquivo = sessionStorage.key(i)

        const arquivo = document.createElement('li');
        arquivo.textContent = nomeArquivo;

        if(arquivo.textContent !== "IsThisFirstTime_Log_From_LiveServer"){

            const documentData = sessionStorage.getItem(nomeArquivo)
            const blob = new Blob([documentData], { type: documentData.type });
            const urlBlob = URL.createObjectURL(blob)

            const url = urlBlob.slice(5,)

            const anexo={
                indice: anexos.length + 1,
                nomeArquivo: nomeArquivo,
                blobArquivo: url,
            }

            anexos.push(anexo)

            const documentContainer = document.createElement("div")
            documentContainer.className = 'document-item'

            const deleteButton = document.createElement('button')
            deleteButton.className = "interaction-btn-delete"
            deleteButton.onclick = () => deletarArquivo(nomeArquivo)
            const deleteImg = document.createElement('img')
            deleteImg.src = "../assets/imgs/lixo.png"
            deleteImg.className="to-use-image"
            deleteButton.appendChild(deleteImg)

            const seeFileButton = document.createElement('button')
            seeFileButton.className = "interaction-btn-see"
            seeFileButton.onclick = () => vizualizarArquivo(nomeArquivo, urlBlob)
            const seeImg = document.createElement('img')
            seeImg.src = "../assets/imgs/olho.png"
            seeImg.className="to-use-image"
            seeFileButton.appendChild(seeImg)

            documentContainer.innerText = `Documento ${nomeArquivo}`
            documentContainer.appendChild(deleteButton)
            documentContainer.appendChild(seeFileButton)

            listaAnexos.appendChild(documentContainer)
        }
    }
}

const updateArquivo = () =>{
    const fileIput = document.getElementById("incluir-anexo")
    const file = fileIput.files[0]

    const reader = new FileReader()

    reader.onload = (e) =>{
        const documentData = e.target.result
        const blob = new Blob([documentData], { type: file.type });
        const nomeArquivo = file.name;
        sessionStorage.setItem(nomeArquivo, blob);

        anexarArquivo()
    }

    reader.readAsText(file)
    
}

anexarArquivo()
