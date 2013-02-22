define([
    'jasmine-jquery',
    'streamhub-template',
    'streamhub-backbone'],
function (jasmine, TemplateView, Hub) {
describe('A TemplateView', function () {
    it ("can have tests run", function () {
        expect(true).toBe(true);
    });
    it("can do HTML tests",function(){  
        setFixtures('<div id="hub"></div>');  
        $('#hub')
            .append('<li>So</li>')
            .append('<li>So</li>');
        expect($('#hub li').length).toBe(2);  
    });
	
	// construction behavior
    describe('can be constructed', function() {
    	it ("with no options", function () {
	        var view = new TemplateView();
        	expect(view).toBeDefined();
    	});
    	it ("with empty options", function () {
        	var view = new TemplateView({});
        	expect(view).toBeDefined();
    	});
	});
	
	// post construction behavior    
    describe ("after correct construction", function () {
	    var view;
	    
	    beforeEach(function() {
	        setFixtures(
		        '<div id="hub-TemplateView"></div>'
		    );
	        view = new TemplateView({
	            el: $('#hub-TemplateView'),
	        });
	        window.view =view;
		});
        it ("should do something", function () {
            expect(true).toBe(true);
        });
    });
}); 
});