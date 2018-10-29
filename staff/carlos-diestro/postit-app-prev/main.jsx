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

  handleRemoveItem = (id) => {
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

class PostItText extends React.Component {
  state = { 
    id: this.props.id,
    text: this.props.text,
    edit: false
  }

  handleEditClick = event => {
    this.setState({ edit: true })
  }

  handleSaveClick = event => {
    if (!this.state.text.length) {
      return
    }

    this.setState({ edit: false })

    logic.editPostIt(this.state.id, this.state.text)
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleRemoveItem = () => {
    this.props.onRemoveItem(this.state.id)
  }

  render() {
    let element
    let button

    if (this.state.edit) {
      element = <textarea value={this.state.text} onChange={this.handleChange}></textarea>
      button = <button type="button" onClick={this.handleSaveClick}><i className="far fa-save"></i></button>
    } else {
      element = <p>{this.state.text}</p>
      button = <button type="button" onClick={this.handleEditClick}><i className="far fa-edit"></i></button>
    }

    return (
      <div className="col-sm-12 col-md-6">
        <div className="alert alert-warning">
          <div className="text-right">
            {button}
            <button type="button" onClick={this.handleRemoveItem}><i className="far fa-trash-alt"></i></button>
          </div>
          {element}
        </div>
      </div>
    )
  }
}

const PostItList = props => {
  const handleRemoveItem = (id) => {
    props.onRemoveItem(id)
  }

  return (
    <div className="post-it my-3">
      <div className="row">
        {props.items.map((item) => (
          <PostItText id={item.id} text={item.text} key={item.id} onRemoveItem={handleRemoveItem} />
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<PostItApp />, document.getElementById('root'));