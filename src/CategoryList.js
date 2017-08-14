var React = require('react');
var Category = require('./Category')

var CategoryList = React.createClass({
  getIdList: function(categories) {
    return Object.keys(categories)
  },

  createCategoryListElements: function(categories) {
    var category;

    return this
      .getIdList(categories)
      .map(function createAssignmentListElement(categoryId){
        category = categories[categoryId]
        return (<Category
            name = { category.name }
            categories = { categories }
            remove = { this.props.removeOne}
            key = { category.id } />);
      }.bind(this));
  },

  render: function() {
    var categories = this.props.categories;
    var categoryListElements = this.createCategoryListElements(categories);
    return (
      <div>
        <ul>
          {categoryListElements.length > 0 ? categoryListElements : null}
        </ul>
      </div>
    );
  }
});

module.exports = CategoryList
