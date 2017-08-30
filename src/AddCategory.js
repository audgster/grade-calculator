var React = require('react');
var uuid = require('uuid');

class AddCategory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {name: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleSubmitEvent(event) {
    event.preventDefault();

    var category = {
      id: uuid.v4(),
      name: this.state.name.trim(),
      average: 0
    };

    this.props.addOne(category);

    this.setState({name: ''})
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
    <div>
      <form onSubmit = { this.handleSubmitEvent }>
        <div className="add-category">
          <label htmlFor="categoryName">New Assignment Category</label>
          <input type="text" id="categoryName" required value={this.state.name} onChange={ this.handleChange } />
        </div>

        <button className="add-category" type="submit">Add</button>
        <button className="add-category" type="reset">Cancel</button>
      </form>
    </div>
  );}
}

module.exports = AddCategory
