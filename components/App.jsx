import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};


    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Twitter Live Feeds</h1>
            </div>);
    }

    componentDidMount(prevProps, prevState) {
    }
}

export default App;