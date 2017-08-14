var React = require('react');

var Assignment = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var assignmentId = this.props.assignment.id;
    this.props.remove(assignmentId);
  },

  render: function () {
    var assignment = this.props.assignment;
    return (
      <div>
        {assignment.name}: {assignment.grade}
      </div>
    );
  }
});

module.exports = Assignment

/*
<!form onSubmit = {this.handleSubmit}>
  <button type="submit">Remove</button>
</form>
*/
