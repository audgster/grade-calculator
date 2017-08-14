var React = require('react');
var Assignment = require('./Assignment')

var AssignmentList = React.createClass({
  getIdList: function(assignments) {
    return Object.keys(assignments)
  },

  createAssignmentListElements: function(assignments) {
    var assignment;

    return this
      .getIdList(assignments)
      .map(function createAssignmentListElement(assignmentId){
        assignment = assignments[assignmentId]
        return (<Assignment
            assignment = { assignment }
            remove = { this.props.removeOne}
            key = { assignment.id } />);
      }.bind(this));
  },

  render: function() {
    var assignments = this.props.assignments;
    var assignmentListElements = this.createAssignmentListElements(assignments);
    return (
      <div>
        <ul>
          {assignmentListElements.length > 0 ? assignmentListElements : null}
        </ul>
      </div>
    );
  }
});

module.exports = AssignmentList
