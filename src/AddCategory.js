var React = require('react');
var uuid = require('uuid');

var AddCategory = React.createClass({
  handleSubmitEvent: function (event) {
    event.preventDefault();

    var category = {
      id: uuid.v4(),
      name: this.refs.name.value.trim()
    };

    this.props.addOne(category);
  },

  render: function () {
    return (
    <div>
      <h4>Add grade category</h4>
      <form onSubmit = { this.handleSubmitEvent }>
        <div>
          <label htmlFor="categoryName">Name</label>
          <input type="text" id="categoryName" required ref="name" />
        </div>

        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );}
});

module.exports = AddCategory
