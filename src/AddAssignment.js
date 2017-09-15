var React = require('react');
var uuid = require('uuid');

class AddAssignment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {name: '', grade: 0}

    this.handleSubmitEvent = this.handleSubmitEvent.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onGradeChange = this.onGradeChange.bind(this)
  }

  handleSubmitEvent(event) {
    event.preventDefault();

    var assignment = {
      id: uuid.v4(),
      name: this.state.name.trim(),
      grade: this.state.grade
    };

    this.props.addOne(assignment);

    this.setState({name: '', grade: 0})
  }

  onNameChange(event) {
    var currentState = this.state

    this.setState({name: event.target.value, grade: currentState.grade})
  }

  onGradeChange(event) {
    var currentState = this.state

    this.setState({name: currentState.name, grade: parseInt(10,event.target.value)})
  }

  render() {
    return (
    <div>
      <form onSubmit = { this.handleSubmitEvent }>
        <div className="add-assignment">
          <label htmlFor="assignmentName">Name</label>
          <input type="text" value={this.state.name} id="assignmentName" required onChange={ this.onNameChange } />
        </div>

        <div className="add-assignment">
          <label htmlFor="assignmentGrade">Grade</label>
          <input type="number" value={this.state.grade} min="0" max="100" step="1" defaultValue="0" id="assignmentGrade" required onChange={this.onGradeChange}/>
        </div>

        <button className="add-assignment" type="submit">Add</button>
        <button className="add-assignment" type="reset">Cancel</button>
      </form>
    </div>
  );}
}

module.exports = AddAssignment
