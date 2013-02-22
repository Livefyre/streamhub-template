/** @module TemplateView */
define(function(require) {
var Backbone = require('backbone'),
    ContentView = require('streamhub-backbone/views/ContentView');

/**
 * TemplateView is an empty view for use as a plugin template.
 * @alias module:TemplateView
 * @constructor
 * @param {Object.<string, *>} opts No options.
 */
var TemplateView = Backbone.View.extend(
{
    initialize: function (opts) {
    	opts = opts || {};
        this.$el.addClass(this.className);
        this.$el.hide();
        
        var self = this;
        if (this.collection) {
            this.collection.each(function(item) {
	            self._insertItem(item, self.collection);
	        });
	    
	        this.collection.on('add', this._insertItem, this);
	    }
    },
    /**
     * @property {string} className The css class name that this object will apply to
     * it's holding element
     * @default hub-TemplateView
     */    
    className: "hub-TemplateView",
    /**
	 * Renders a TemplateView. This is where you should create any
	 * DOM elements needed and then show or animate the parent element.
	 */
    render: function () {
        this.$el.fadeIn();
    }
});

/**
 * Inserts a new piece of content into the dom. Used as a callback handler
 * for collection.add events.
 * @param {Object} item A piece of content that was streamed to this view from Streamhub.
 * @param {Backbone.Collection} col A reference to the collection that this item was added to.
 * @return {Object} The $html element that was inserted.
 * @protected
 */
TemplateView.prototype._insertItem = function (item, col) {
    var itemEl = $(document.createElement('div'));
    itemEl.html(item.get('bodyHtml'));
    
    return itemEl;
};

return TemplateView;
});
