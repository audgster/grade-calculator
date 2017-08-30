var React = require('react');

class Assignment extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    var assignmentId = this.props.assignment.id;
    this.props.remove(assignmentId);
  }

  render() {
    var assignment = this.props.assignment;
    return (
      <tr>
        <td className="assignment-name">{assignment.name}</td>
        <td className="assignment-grade">{assignment.grade}</td>
      </tr>
    );
  }
}

module.exports = Assignment

/*
<form onSubmit = {this.handleSubmit}>
  <button type="submit">Remove</button>
</form>
*/
