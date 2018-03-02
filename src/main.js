$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
    render: function() {
        var Child;  //which child we want to render (ex: Home or About)

        switch(this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home;
        }

        return (
                <div>
                    <Child />
                </div>
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('haschange', render);
render();
