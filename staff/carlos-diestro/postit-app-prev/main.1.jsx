class PostItApp extends React.Component {
  state = {
    items: logic.listPostIts()
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Post-it App</h1>
          <Form onSubmit={this.handleSubmit} />
          <PostItList items={this.state.items} onRemoveItem={this.handleRemoveItem} />
        </div>
      </div>
    )
  }

  handleSubmit = text => {
    logic.createPostIt(text)

    this.setState({ items: logic.listPostIts() })
  }

  handleRemoveItem = id => {
    logic.deletePostIt(id)

    this.setState({ items: logic.listPostIts() })
  }
  
  // Capture event
  // handleRemoveItem = event => {
  //   console.log(event.nativeEvent)
  // }
}

class Form extends React.Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.text.length) {
      return
    }

    this.props.onSubmit(this.state.text)

    this.setState({ text: '' })

    event.currentTarget[0].focus()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea className="form-control" rows="3" autoFocus placeholder="Write something..." onChange={this.handleChange} value={this.state.text}></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Create a Post-it</button>
      </form>
    )
  }
}

const PostItList = props => {
  return (
    <div className="post-it my-3">
      <div className="row">
        {props.items.map((item) => (
          <div className="col-sm-12 col-md-6" key={item.id}>
            <div className="alert alert-warning alert-dismissible fade show">
              {item.text}
              {/* Send event 
              <button data-id={index} type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.onRemoveItem}></button> */}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => props.onRemoveItem(item.id)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<PostItApp />, document.getElementById('root'));