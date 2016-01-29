var MyComponent = React.createClass({
    render: function(){
        return (
            <div className={this.props.name}>
                <h1>Hello, world!</h1>
            </div>
        );
    }
});

ReactDOM.render(
        <MyComponent name='jumbotron'/>,
        document.getElementById('content')
    );