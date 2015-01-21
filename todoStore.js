var ActionStores = require('tux/Stores/ActionStores');

var todoStore = ActionStores.createStore({
  _todos: [],

  getAll: function () {
    return this._todos;
  },

  onAdd: function (todo) {
    this._todos.push({
      text: todo.text,
      id: this._todos.length
    });
    this.emitChange();
  },

  onRemove: function (todo) {
    this._todos.splice(todo.id, 1);
    this.emitChange();
  },

  register: function () {
    return {
      todos: {
        add: this.onAdd,
        remove: this.onRemove
      }
    };
  }
});

module.exports = todoStore;
