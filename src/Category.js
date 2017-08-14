var React = require('react');
var AssignmentList = require('./AssignmentList');
var AddAssignment = require('./AddAssignment');

var Category = React.createClass({
  // Initial state is an empty list of assignments
  getInitialState: function() {
    return {
      assignments: {},
      average: 0
    };
  },

  updateAssignemnts: function(newAssignmentList) {
    this.setState({
      assignments: newAssignmentList,
      average: this.computeCategoryAverage(newAssignmentList)
    });
  },

  addAssignment: function(newAssignment) {
    var assignmentList = this.state.assignments;
    assignmentList[newAssignment.id] = newAssignment;
    this.updateAssignemnts(assignmentList);
  },

  removeAssignment: function(deletedAssignment) {
    var assignmentList = this.state.assignments;
    delete assignmentList[deletedAssignment.id];
    this.updateAssignemnts(assignmentList);
  },

  clearAssignments: function() {
    this.updateAssignemnts({});
  },

  computeCategoryAverage: function(assignments) {
    var assignmentTotal = 0
    for (var i = 0; i < assignments.length; i++){
      assignmentTotal = assignmentTotal + assignments[i].grade
    }

    return assignmentTotal/(assignments.length > 0 ? assignments.length : 1)
  },

  render: function() {
    var assignments = this.state.assignments
    var average = this.state.average
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <h4>Average: { average }</h4>
        <AssignmentList
          assignments = { assignments }
          removeOne = { this.removeAssignment }
          removeAll = { this.clearAssignments } />
        <AddAssignment addOne = { this.addAssignment }/>
      </div>
    )
  }
});

module.exports = Category
