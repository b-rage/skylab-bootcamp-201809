function Component(tag, parentElement, viewEngine){

    this.element = $("<" + tag + "/>");
    this.viewEngine = viewEngine;
    this.parentElement = $(parentElement);
}

