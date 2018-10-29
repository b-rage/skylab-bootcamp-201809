function viewFront(_component){

    var self = this;

    this.component = _component;

    this.render = () => {

         this.component.parentElement.append(this.component.element);
         this.component.element.addClass("front");
         /*<form class="front__search-form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Artist</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Artis Name">

                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>*/
    }
}