var React = require('react');
var Category = require('./Category')

class CategoryList extends React.Component {
  getIdList(categories) {
    return Object.keys(categories)
  }

  createCategoryListElements(categories) {
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
  }

  render() {
    var categories = this.props.categories;
    var categoryListElements = this.createCategoryListElements(categories);
    return (
      <div className="categories">
          {categoryListElements.length > 0 ? categoryListElements : null}
      </div>
    );
  }
}

module.exports = CategoryList
