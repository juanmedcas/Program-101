import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  palabra = 'AGUACATE';     //Guardar en una variable la letra que se va a JUGAR
  palabraOculta = '';       //Se crea otra variable para mostrar las lineas de la palabra
  intentos = 0;             //Contador para los intentos
  gana = false;             //Se crean dos variables para albergar si gana o pierde, tipos de dato buleano
  pierde = false;

  letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']    //Arreglo con abecedario para mostrar los botones

  constructor() {
    console.log(`Se acabe de crear el App Component`);    //Impresión en consola al iniciar el APP

    this.palabraOculta = '_ '.repeat(this.palabra.length);  //ciclo utilizando las lineas segun el tamaño de la palabra

  }

  comprobar(letra: any) {               //Función que recibe como parametro la letra
    this.existeLetra(letra);
    console.log('Letra: ' + letra)         //Impresión en consola de letra presionada
    const palabraOcultaArr = this.palabraOculta.split(' ');     //Utilizamos una constante para guardar el arreglo de la palabra de juego y reemplazamos con split que basicamente particiona
    console.log(palabraOcultaArr);         //Impresión en consola del arreglo
    for (let i = 0; i < this.palabra.length; i++){    //Mediante ciclo for barremos el arreglo con el tamaño de la palabra en juego
      if (this.palabra[i] === letra) {      //Si la letra presionada es igual a alguna letra dentro de la palabra
        palabraOcultaArr[i] = letra;        //Procedemos a reemplazar esta en la misma posición encontrada, para ello se crea el arreglo
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');    //Ahora sobreescribimos el arreglo completo juntandolos con la propiedad join y un espacio
    this.verificaGane();                    //Finalmente verificar si gana o pierde
  }

  existeLetra(letra: any) {                 //Nueva función para validar si existe la letra dentro de la palabra en juego
    if (this.palabra.indexOf(letra) >= 0){  //por medio de la propiedad indexOf que nos retorna la posición de la letra, por lo cual si es mayor o igual a 0 quiere decir que si esta la letra
      //console.log(`Se encontro la letra ${letra} dentro de la palabra`);  //En dicho caso imprimir en consola se encontro dicha letra
    } else {
      //console.log(`No se encontro la letra ${letra} dentro de la palabra`);   //En caso contrario imprimir que no se encontro la letra
      if (this.intentos < 9) {        //Si el contador de intentos es menor a 9, aumentar en 1
        this.intentos += 1;           //En caso de no existir la letra, aumentar el contador de intentos en 1
      } else {                        //De lo contario mostar GAME OVER!         
        
      }
    }
  }

  verificaGane() {                   //Función para evaluar si se gana o pierde
    //console.log(this.palabraOculta);  //impresion sencilla del estado actual de la palabra en consola
    const palabraArr = this.palabraOculta.split(' ');       //Se crea constante para guardar la palabra oculta agredandole espacios para de esat forma poder comparar sin necesidad de utilizar expresiones regulares
    const palabraEvaluar = palabraArr.join('');         //Ahora se une la palabra con join y de esta forma de eliminan los espacios para poderla comparar y determinar si esat completa
    if (palabraEvaluar === this.palabra) {
      this.gana = true;
      console.log('El Jugador ha GANADO!');
    }

    if (this.intentos >= 9) {
      this.pierde = true;
      console.log('El Jugador ha PERDIDO!')
    }
  }
}
