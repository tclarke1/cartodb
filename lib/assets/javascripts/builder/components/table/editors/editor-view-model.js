var Backbone = require('backbone');
var CoreView = require('backbone/core-view');

/**
 * View model of an editor
 */
module.exports = Backbone.Model.extend({

  defaults: {
    show: true,
    createContentView: function () {
      return new CoreView();
    }
  },

  createContentView: function () {
    return this.get('createContentView')(this);
  },

  show: function () {
    this.set('show', true);
  },

  hide: function () {
    this.set('show', false);
  },

  isHidden: function () {
    return !this.get('show');
  },

  confirm: function () {
    var args = Array.prototype.slice.call(arguments);
    this.trigger.apply(this, ['confirm'].concat(args));
  },

  /**
   * @override {Backbone.Model.prototype.destroy}
   */
  destroy: function () {
    var args = Array.prototype.slice.call(arguments);
    this.trigger.apply(this, ['destroy'].concat(args));
  }
});
