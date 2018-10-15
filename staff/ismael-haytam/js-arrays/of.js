function of(elems) {

    // validation

    if (!arguments.length) throw Error('elements is empty')
    if (!elems) throw Error('element undefined');


    // logic

    console.log([].slice.call(arguments));
}

// Another possible solution... (ES6)

/*

function of(elems) {
    console.log([...arguments]);
}

*/