var React = require('react');
var CategoryList = require('./CategoryList')
var AddCategory = require('./AddCategory')

class CategoryGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: {},
      grade: 0
    }

    this.addCategory = this.addCategory.bind(this)
    this.removeCategory = this.removeCategory.bind(this)
    this.clearCategories = this.clearCategories.bind(this)
  }

  updateCategories(newCategoryList) {
    this.setState({
      categories: newCategoryList,
      grade: this.computeGrade(newCategoryList)
    });
  }

  addCategory(newCategory) {
    var categoryList = this.state.categories;
    categoryList[newCategory.id] = newCategory;
    this.updateCategories(categoryList);
  }

  removeCategory(deletedCategory) {
    var categoryList = this.state.categories;
    delete categoryList[deletedCategory.id];
    this.updateCategories(categoryList);
  }

  clearCategories() {
    this.updateCategories({});
  }

  computeGrade(categoryList) {
    var gradeTotal = 0
    var numberOfCategories = Object.keys(categoryList).length

    Object.keys(categoryList).forEach(function(key,index) {
      gradeTotal = gradeTotal + categoryList[key].average
    });

    return gradeTotal/(numberOfCategories > 0 ? numberOfCategories : 1)
  }

  render() {
    var categories = this.state.categories
    var grade = this.state.grade
    return (
      <div>
        <div className="course-header">
          <h3>Course Grade: { grade }</h3>
          <AddCategory addOne = { this.addCategory }/>
        </div>
        <CategoryList
          categories = { categories }
          removeOne = { this.removeCategory }
          removeAll = { this.clearCategories } />
      </div>
    )
  }
}

module.exports = CategoryGroup
