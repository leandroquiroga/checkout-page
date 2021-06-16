const price = 1000; // Precio inicial

// Devuelve el valor el valor incrementado o decrementado
function boton() {
    const max = document.getElementById("plus");
    const min = document.getElementById("minus");
    const max2 = document.getElementById("add");
    const min2 = document.getElementById("neg");

    /* Sube valor */
    max.addEventListener('click', function () {
        let up = this.parentNode.querySelector('input[type=number]')
        up.stepUp()
    })

    /* Baja valor */
    min.addEventListener('click', function () {
        let down = this.parentNode.querySelector('input[type=number]')
        down.stepDown()
    })

    /* Sube valor */
    max2.addEventListener('click', function () {
        let up = this.parentNode.querySelector('input[type=number]')
        up.stepUp()
    })

    /* Baja valor */
    min2.addEventListener('click', function () {
        let down = this.parentNode.querySelector('input[type=number]')
        down.stepDown()
    })

}


// Modifica los valores del precio
function modValores() {

    const suma = document.getElementById('plus');
    const resta = document.getElementById('minus');
    const value = document.querySelector('.disconint');
    const valorTotal = document.querySelector('.finalPrice');
    const show = document.getElementById('total');

    /* Devuelve el precio total segun la cantidad de productos seleccionados */
    function sumarValores(cant, price) {
        return (price * cant);
    }

    /* Devuelve el precio total segun la cantidad de productos no seleccionados */
    function restaValores(cant, price) {
        const totalSumado = sumarValores(cant, price);
        return totalSumado;
    }


    /* Modifica los valores al sumar un producto */
    suma.addEventListener('click', (e) => {
        e.preventDefault();
        const cant = document.getElementById('value').value;
        let sumaTotal = sumarValores(cant, price);

        switch (cant) {
            case '1':
                //sumaTotal;
                value.innerHTML = '$' + sumaTotal + ".00";
                valorTotal.innerHTML = '$' + sumaTotal + ".00"
                show.innerHTML = '$' + sumaTotal + '.00'
                break;
            case '2':
                sumaTotal;
                value.innerHTML = '$' + sumaTotal  + ".00";
                valorTotal.innerHTML = '$' + (sumaTotal - 50) + ".00"
                show.innerHTML = '$' + (sumaTotal - 50) + '.00'
                break; 
            case '3':
                sumaTotal;
                value.innerHTML = '$' + sumaTotal  + ".00";
                valorTotal.innerHTML = '$'+ (sumaTotal - 75) + ".00"
                show.innerHTML = '$' + (sumaTotal - 75) + '.00'
                break;
            case '4':
                sumaTotal;
                value.innerHTML = '$' + sumaTotal + ".00";
                valorTotal.innerHTML = '$'+ (sumaTotal - 100)  + ".00"
                show.innerHTML = '$' + (sumaTotal - 100) + '.00'
                break;
        }

        /* Muestra el valor total */


        
    
    });


    /* Modifica los valores al restar un producto */
    resta.addEventListener('click', (e) => {
        e.preventDefault();
        const cant = document.getElementById('value').value;

        let total = restaValores(cant, price);

        switch (cant) {
            case '3':
                total;
                value.innerHTML = '$' + total + ".00";
                valorTotal.innerHTML = '$' + (total - 75) + ".00"
                show.innerHTML = '$' + (total - 75) + '.00'
                break;
            case '2':
                total;
                value.innerHTML = '$' + total + ".00";
                valorTotal.innerHTML = '$' + (total - 100) + ".00"
                show.innerHTML = '$' + (total - 100) + '.00'
                break;
            case '1':
                total;
                value.innerHTML = '$' + total + ".00";
                valorTotal.innerHTML = '$' + total  + ".00"
                show.innerHTML = '$' + total + '.00'
                break;
            case '0':
                total;
                value.innerHTML = '$' + total + ".00";
                valorTotal.innerHTML = '$' + (total - total) + ".00"
                show.innerHTML = '$' + (total - total) + '.00'
                break;
        }
    });

}

// Devuelve el costo de envio
function shipping() {
    const select = document.getElementById('fcountry');
    const envio = document.getElementById('envio');
    
    select.addEventListener('change', function(){
        var selectedOption = this.options[select.selectedIndex];
        var pais = selectedOption.text
        
        switch(pais){
            case 'Italy': envio.innerHTML = '$ 50'; break; 
            case 'France' : envio.innerHTML = '$ 150'; break;
            case 'EEUU' : envio.innerHTML = '$ 300'; break;
            case 'Germany' : envio.innerHTML = '$ 400'; break;
            case 'Argentina' : envio.innerHTML = 'Gratis'; break;
        }
      });
    
}

boton();
modValores();
shipping();
