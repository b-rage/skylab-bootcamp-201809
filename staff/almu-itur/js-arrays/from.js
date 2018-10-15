//PRIMER CASO
/*function from(element) {
    var index=0;
    var result = [];

    for (index=0; index <element.length; index++) {

        result[index]=element[index];
    }
    return result;
}


//SEGUNDO CASO
function from(element, funct) {
    var index=0;
    var result=[];

    for (index=0; index<element.length; index++) {
        result[index]=funct(element[index]);
    }
    return result;
}
*/

//TERCER CASO

function from(element) {
    var index = 0;
    var result = [];

    for (index=0; index<element.length; index++) {
        result[index] = element[index];
    }
    return result;
}