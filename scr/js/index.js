console.log('mostrar document',document);

console.log(document.querySelector(".botao_trailer"));/*busca um unico elemento do html que tem um determinado seletor*/

const botaoTrailer /*Criação da variavel*/ = document.querySelector (".botao_trailer");/*Atribuição de valor*/
const linkDoVideo = "video.scr";
const video = document.getElementById ("video");
const modal = document.querySelector (".modal");

function alternarModal (){
    modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener ("click", () => {/*Usei para adicionar um evento de quando o usario clicar no botao*/
alternarModal()
video.setAttribute ("scr", linkDoVideo)
});

const botaoFecharModal = document.querySelector (".fechar_modal");

botaoFecharModal.addEventListener ("click", () => {/*usei para fechar a aba do trailer quando for aberto*/

alternarModal()
    video.setAttribute ("src", "")

});



