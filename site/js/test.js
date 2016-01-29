var MyComponent = React.createClass({
    displayName: 'MyComponent',

    render: function () {
        return React.createElement(
            'div',
            { className: this.props.name },
            React.createElement(
                'h1',
                null,
                'Hello, world!'
            )
        );
    }
});

ReactDOM.render(React.createElement(MyComponent, { name: 'jumbotron' }), document.getElementById('content'));