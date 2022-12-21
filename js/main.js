
const encriptar = () => {
    let texto = document.getElementById('texto').value.toLowerCase()
    document.getElementById('sin-mensaje').style.display = 'none'  
    document.getElementById('con-mensaje').style.display = 'flex'


    let textoEncriptado = texto.replace(/e/g,'enter')
    textoEncriptado = textoEncriptado.replace(/i/g,'imes')
    textoEncriptado = textoEncriptado.replace(/a/g,'ai')
    textoEncriptado = textoEncriptado.replace(/o/g,'ober')
    textoEncriptado = textoEncriptado.replace(/u/g,'ufat')

    document.querySelector('#texto-mostrar').value = textoEncriptado
    document.getElementById('texto').value = ''

    function myFunction(x) {
        if (x.matches) {
            document.querySelector('section').style.height = '400px'
        }
    }
    
    var x = window.matchMedia("(max-width: 1180px)")
    myFunction(x)
    x.addListener(myFunction)
}

const desencriptar = () => {
    let texto = document.getElementById('texto').value.toLowerCase()
    document.getElementById('sin-mensaje').style.display = 'none'  
    document.getElementById('con-mensaje').style.display = 'flex'

    let textoDesencriptado = texto.replace(/enter/g,'e')
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i')
    textoDesencriptado = textoDesencriptado.replace(/ai/g,'a')
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o')
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u')

    document.querySelector('#texto-mostrar').value = textoDesencriptado
    document.getElementById('texto').value = ''

    function myFunction(x) {
        if (x.matches) {
            document.querySelector('section').style.height = '400px'
        }
    }
    
    var x = window.matchMedia("(max-width: 1180px)")
    myFunction(x)
    x.addListener(myFunction)
    
}


function copiar() {
    let copiarTexto = document.getElementById('texto-mostrar')
    copiarTexto.select()
    document.execCommand('copy')
}