var React = require('react');
var AssignmentList = require('./AssignmentList');
var AddAssignment = require('./AddAssignment');

class Category extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      assignments: {},
      average: 0
    }

    this.addAssignment = this.addAssignment.bind(this)
    this.removeAssignment = this.removeAssignment.bind(this)
    this.clearAssignments = this.clearAssignments.bind(this)

  }

  updateAssignments(newAssignmentList) {
    this.setState({
      assignments: newAssignmentList,
      average: this.computeCategoryAverage(newAssignmentList)
    });
  }

  addAssignment(newAssignment) {
    var assignmentList = this.state.assignments;
    assignmentList[newAssignment.id] = newAssignment;
    this.updateAssignments(assignmentList);
  }

  removeAssignment(deletedAssignment) {
    var assignmentList = this.state.assignments;
    delete assignmentList[deletedAssignment.id];
    this.updateAssignments(assignmentList);
  }

  clearAssignments() {
    this.updateAssignments({});
  }

  computeCategoryAverage(assignments) {
    var assignmentTotal = 0
    var numberOfAssignments = Object.keys(assignments).length

    Object.keys(assignments).forEach(function(key,index) {
      assignmentTotal = assignmentTotal + assignments[key].grade
    });

    return assignmentTotal/(numberOfAssignments > 0 ? numberOfAssignments : 1)
  }

  render() {
    var assignments = this.state.assignments
    var average = this.state.average
    return (
      <div className="category">
        <div className="category-header">
          <h3 className="category-name">{ this.props.name }</h3>
          <h4 className="category-average">Average: { average }</h4>
        </div>
        <div>
        <AssignmentList
          assignments = { assignments }
          removeOne = { this.removeAssignment }
          removeAll = { this.clearAssignments } />
        <AddAssignment addOne = { this.addAssignment }/>
        </div>
      </div>
    )
  }
}

module.exports = Category
