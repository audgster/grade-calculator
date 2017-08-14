var React = require('react');
var uuid = require('uuid');

var AddAssignment = React.createClass({
  handleSubmitEvent: function (event) {
    event.preventDefault();

    var assignment = {
      id: uuid.v4(),
      name: this.refs.name.value.trim(),
      grade: parseInt(this.refs.grade.value.trim())
    };

    this.props.addOne(assignment);
  },

  render: function () {
    return (
    <div>
      <h4>Add assignment</h4>
      <form onSubmit = { this.handleSubmitEvent }>
        <div>
          <label htmlFor="assignmentName">Name</label>
          <input type="text" id="assignmentName" required ref="name" />
        </div>

        <div>
          <label htmlFor="assignmentGrade">Description</label>
          <input type="number" min="0" max="100" step="1" defaultValue="0" id="assignmentGrade" required ref="grade" />
        </div>

        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );}
});

module.exports = AddAssignment
