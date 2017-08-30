var React = require('react');
var Assignment = require('./Assignment')

class AssignmentList extends React.Component {
  getIdList(assignments) {
    return Object.keys(assignments)
  }

  createAssignmentListElements(assignments) {
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
  }

  render() {
    var assignments = this.props.assignments;
    var assignmentListElements = this.createAssignmentListElements(assignments);
    return (
      <div>
      <table>
        <thead>
        <tr>
          <th className="assignment-name">Assignment Name</th>
          <th className="assignment-grade">Grade</th>
        </tr>
        </thead>
        <tbody>
        {assignmentListElements.length > 0 ? assignmentListElements : null}
        </tbody>
      </table>
      </div>
    );
  }
}

module.exports = AssignmentList
