define(function(require) {
	var Hub = require('streamhub-sdk');
	var View = require('streamhub-template');

	return function(sdk, opts) {
		tOpts = $.extend({articleId: opts.articleId1}, opts);
		var view = new View({
			streams: Hub.Streams.forCollection(tOpts).start(),
			el: opts.element,
			onClick: function(event) {
				alert($(event.currentTarget).text());
			}
		});
        
	    return view;
    };
});
