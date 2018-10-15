function isArray(arr) {
    
    if(typeof arr==="object" && typeof arr.length === "number") {
        return true;
    }
    else {
        return false;
    }
}