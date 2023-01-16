import React from "react";

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = (props.title && props.content) ? {
      editing: true,
      title: props.title,
      content: props.content,
    } : {
      title: "",
      content: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.submitMethod(this.state);
  }

  onTitleChange(e) {
    this.setState({title: e.target.value});
  }

  onContentChange(e) {
    this.setState({content: e.target.value});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="title">Titel</label>
            <input id="title" name="title" required type="text"
                   value={this.state.title}
                   onChange={this.onTitleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Inhalt</label>
            <textarea cols="30" id="content" name="content" required rows="10"
                      value={this.state.content}
                      onChange={this.onContentChange.bind(this)}
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">{this.state.editing ? 'Änderungen' : 'Notiz'} speichern</button>
        </form>
    )
  }
}