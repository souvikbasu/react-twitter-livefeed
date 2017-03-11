import React from 'react';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={tweetStyles.tweetBox}>
                <div style={tweetStyles.tweetUser}>{this.props.tweet.user.name}</div>
                <div style={tweetStyles.tweetText}>{this.props.tweet.text}</div>
            </div>)
    }

    componentDidMount(prevProps, prevState) {
    }


}

const tweetStyles = {
    tweetBox: {
        minHeight: 90,
        width: 400,
        margin: 10,
        border: 'solid 1px lightgray',
        textAlign: 'left',
        padding: 20,
        backgroundColor: 'white'
    },

    tweetUser: {
        fontSize: 16,
        fontWeight: 'bold',
        display: 'block',
        width: '100%'
    },

    tweetText: {
        fontSize: 16,
        display: 'block',
        width: '100%'
    }
};

export default Tweet;