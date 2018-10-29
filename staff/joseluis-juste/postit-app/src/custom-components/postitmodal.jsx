import React from 'react';
import $ from 'jquery';

class PostitModalComponent extends React.Component {

   
    onSubmitText = (value) => {

        this.props.onSubmittedText(value);
        $('#' + this.props.id).modal('hide'); //not use Jquery
       

    }

    render() {
        return <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Body */}
                    <div className="modal-body">
                        <form className="form-horizontal" onSubmit={(ev) => {
                            ev.preventDefault();
                            this.onSubmitText($(ev.target).find("#inputEmail3").val());

                        }}>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control"  placeholder={"OldValue: " + this.props.oldmessage}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder="Text..."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Modal Footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick = {(ev) => $('#' + this.props.id).modal('hide')}>
                            Close
        </button>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default PostitModalComponent