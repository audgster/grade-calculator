var React = require('react');
var CategoryList = require('./CategoryList')
var AddCategory = require('./AddCategory')

var CategoryGroup = React.createClass({
  // Initial state is an empty list of assignments
  getInitialState: function() {
    return {
      categories: {},
      grade: 0
    };
  },

  updateCategories: function(newCategoryList) {
    this.setState({
      categories: newCategoryList,
      grade: this.computeGrade(newCategoryList)
    });
  },

  addCategory: function(newCategory) {
    var categoryList = this.state.categories;
    categoryList[newCategory.id] = newCategory;
    this.updateCategories(categoryList);
  },

  removeCategory: function(deletedCategory) {
    var categoryList = this.state.categories;
    delete categoryList[deletedCategory.id];
    this.updateCategories(categoryList);
  },

  clearCategories: function() {
    this.updateCategories({});
  },

  computeGrade: function(categoryList) {
    var gradeTotal = 0
    for (var i = 0; i < categoryList.length; i++){
      gradeTotal = gradeTotal + categoryList[i].average
    }
    return gradeTotal/(categoryList.length > 0 ? categoryList.length : 1)
  },

  render: function() {
    var categories = this.state.categories
    var grade = this.state.grade
    return (
      <div>
        <h3>Grade: { grade }</h3>
        <CategoryList
          categories = { categories }
          removeOne = { this.removeCategory }
          removeAll = { this.clearCategories } />
        <AddCategory addOne = { this.addCategory }/>
      </div>
    )
  }
});

module.exports = CategoryGroup
