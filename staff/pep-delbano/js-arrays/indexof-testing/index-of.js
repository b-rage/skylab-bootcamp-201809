//especificamos los posibles errores que nuestra función creemos que podría tener:


function indexOf(arr, elem) {

    var elem = elem.toString();  //otherwise if input is a number it doesn't have length property and it throws Error of empty parameter! like this, this function accepts both strings and numbers as second parameter!!



    //define the possible errors and their customized error messages:
    
    if (!(Array.isArray(arr)))  throw Error(arr + " is not an array!")
    
    if (!arr.length)  throw Error("first parameter is an empty array");

    if (!elem.length) throw Error("second parameter is empty");

    /*this one never throws error as it stops before checking the 2nd parameter!:
     if (!arr.length && !elem.length) throw Error(arr + " and " + elem + " are empty") */


    //and what it should actually do:
    
	var index = 0;
    var coincidenceAtIndex;
    for (var i=0; i<arr.length; i++) {
        arr[i];
        if (arr[i] == elem) {
            coincidenceAtIndex = index;
            return coincidenceAtIndex;
        }
        if (index === arr.length-1 && coincidenceAtIndex !== undefined) {
            return coincidenceAtIndex
        } else if (index === arr.length-1 && coincidenceAtIndex === undefined){
            return -1;
        }
        index++;
        
        
    } //for

} // indexOf()


indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison');


//ahora en el 'indexOf.demo.js' explicaremos mejor cada caso: ejecutando la función de esa manera, nos tendría que mostrar este tipo de error en pantalla, de lo contrario, avisaremos que no hemos avisado del error correctamente!!! Pushearemos todos los casos a un array.

//con el tercer file llamado 'testsuite' creamos y ejecutamos la función que hará que se ejecute indexOf, e iterarará también el array que contiene los casos de error, para que se muestre el aviso definido segun el tipo de error que ocurra al testear!!
