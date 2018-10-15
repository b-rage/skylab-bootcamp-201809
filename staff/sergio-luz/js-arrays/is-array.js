function isArray(element) {
    switch (typeof element) {
        case "object":
            if (typeof element.length === "number") {
                return true;
            } else {
                return false;
                break;
            }
        default:
            return false;
            break;

    }
}