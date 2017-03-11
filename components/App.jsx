import React from 'react';
import axios from 'axios';
import Tweet from '../components/Tweet.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            searchString: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.searchTweets = this.searchTweets.bind(this);
    }

    handleChange(event) {
        this.setState({searchString: event.target.value});
    }

    searchTweets(event) {
        console.log('Initial state:', this.state);
        let _this = this;
        axios.get('twitter/search/' + encodeURIComponent(this.state.searchString)).then(function(response) {
            console.log('state:', _this.state);
            _this.setState({
                tweets: response.data.statuses
            });
            console.log(_this.state.tweets);
        }).catch(function(error) {
            //Some error occurred
        });
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Twitter Live Feeds</h1>
                <input type="text" value={this.state.searchString} onChange={this.handleChange}/>
                <button onClick={this.searchTweets}>Search</button>
                <div style={tweetContainerStyles.tweetContainer}>
                    {this.state.tweets.map(t => {
                        return (<Tweet tweet={t} key={t.id}/>)
                    })}
                </div>
            </div>);
    }

    componentDidMount(prevProps, prevState) {
    }
}

const tweetContainerStyles = {
    tweetContainer: {
        justifyContent: 'center',
        display: 'grid'
    }
};

export default App;