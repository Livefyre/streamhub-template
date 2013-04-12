/** @module TemplateView */
define(function(require) {
	var View = require('streamhub-sdk/view');
	
	/**
	 * TemplateView is an empty view for use as a plugin template.
	 * @alias module:TemplateView
	 * @constructor
	 * @param {Object.<string, *>} opts No options.
	 */
	var TemplateView = function (opts) {
    	opts = opts || {};
    	
    	View.call(this, opts);
    	this.$el = $(this.el);
        this.$el.addClass(opts.className || "hub-TemplateView");
        this.$el.hide();
        this.$el.fadeIn();
        
        var self = this;
        self.on('add', function(content, stream) {
	        self.add(content, stream);
	    });
    };
    $.extend(TemplateView.prototype, View.prototype);
	
	/**
	 * Inserts a new piece of content into the dom. Used as a callback handler
	 * for this.add events.
	 * @param {Object} content A piece of content that was streamed to this view from Streamhub.
	 * @param {Stream} stream A reference to the stream that this item was added from.
	 * @return {ContentView} The contentView that was inserted.
	 * @protected
	 */
	TemplateView.prototype.add = function (content, stream) {
	    var contentView = this.createContentView(content);
	    contentView.render();
	    this.$el.append(contentView.el);
	    
	    return contentView;
	};
	
	return TemplateView;
});
