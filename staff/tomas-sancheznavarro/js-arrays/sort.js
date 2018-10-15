// Solución de Sergio

function sort(arr) {

    var arr2 = [];
    var temp = [];

    // loop para guardar los elementos de arr en arr2.
    for (var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
    }

    // loop para convertir los elementos de arr en strings y guardarlos en temp y luego, de temp en arr.
    for (var i = 0; i < arr.length; i++) {
        temp[i] = arr[i].toString();
        arr[i] = temp[i];
    }


    for (var j = 1; j < arr.length; j++) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                var temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// Un bubble sort que encontré en StackOverflow.
// Este ordena los números de menor a mayor correctamente porque no los convierte en string.

// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }

//     return array;
//   }

//   var numbers = [12, 10, 15, 11, 14, 13, 16];
//   bubbleSort(numbers);
//   console.log(numbers);