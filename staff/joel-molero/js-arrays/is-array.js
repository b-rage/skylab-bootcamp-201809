function isArray(arr) {
    if (!(arr instanceof Array)) throw Error("array is not an array");

    if (arr.length !== 0) throw Error("array is not empty");

    if (arr !== null) throw Error("array input is not null");

    if (arr !== undefined) throw Error("array input is not undefined");

    if (typeof arr !== "number") throw Error("array input is not a number");

    if (typeof arr !== "string") throw Error("array input is not a string");

    if(typeof arr !== "boolean") throw Error("array input is not a boolean");

}