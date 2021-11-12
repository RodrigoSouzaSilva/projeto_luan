const menuItems = document.querySelectorAll('a[href^="#"]')
// Pegando somente os item que começe com #, itens internos

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})
// Verificando se o item foi clicado

function scrollToIdOnClick(event) {
    event.preventDefault()
    // Previnindo o evento padrão de enviar a pagina

    const to = getScrollTopByHref(event.target) + 00
    // Pegando o que foi clicado e passando o valor
    // para a função com menos o tamanho da barra de navegação

    scrollToPosition(to)
    // Função que faz o scroll, apartir do valor
    // passado como parametro
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    // Pegando o atributo do elemento que foi passado

    return document.querySelector(id).offsetTop
    // retorna o valor de onde na pagina 
    // o elemento está em realação ao topo
}

function scrollToPosition(to) {
    window.scroll({
        top: to,        
        // O top da página será no tamnho passado
        behavior: "smooth"   
        // O comportamento
    })

    //smoothScrollTo(0, to, 200)
}


// Navbar alterar a cor
const navbar = document.querySelector('.navegacao')
const quemSouEu = document.querySelector('#sobre')




function verificaAltura(){
    if(window.pageYOffset > 100) {
        navbar.classList.add('transparencia')
    } else {
        navbar.classList.remove('transparencia')
    } 
}

window.addEventListener('scroll', verificaAltura)


// evento do click
document.addEventListener('click', abreMenu)
function abreMenu(e){
    const menu = document.querySelector('.menu')
    const btnmenu = document.querySelector('.i-btn')
    const el = e.target

    if(el === btnmenu) {
        menu.classList.add('ativado')
    } else {
        menu.classList.remove('ativado')
    }
}