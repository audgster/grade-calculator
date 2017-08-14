import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Assignment extends React.Component {
  render() {
    return (
      <div>
        <input type = "text" value = { this.props.name }/>
        <input type="text" value = { this.props.value }/>
      </div>
  );
  }
}

class AssignmentCategory extends React.Component {
  renderAssignment(name, grade) {
    return <Assignment name = { name } value = { grade } />;
  }

  render() {
    return (
      <div>
        <h3> { this.props.category } </h3>
        <div> { this.renderAssignment("Assignment 1", 50) } </div>
        <div> { this.renderAssignment("Assignment 2", 100) } </div>
        <div> { this.renderAssignment("Assignment 3", 50) } </div>
      </div >
    );
  }
}

class Game extends React.Component {
  renderCategory(name) {
    return <AssignmentCategory category = { name } />;
  }

  render() {
    return (
      <div className = "game" >
        <div className = "game-board">
        { this.renderCategory("Category 1") }
        { this.renderCategory("Category 2") }
        { this.renderCategory("Category 3") }
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game /> ,
  document.getElementById('root')
);
