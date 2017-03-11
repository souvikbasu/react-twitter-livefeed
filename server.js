import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './routes';
import twitterConfig from './twitter-api.config';
import twitterClient from './lib/twitter-client';


const app = new Express();
const server = new Server(app);
const twitter = new twitterClient.Twitter(twitterConfig);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));


app.get('/twitter/search/:query*?', function(req, res) {
    const query = req.params.query;
    twitter.getSearch({'q': query, 'count': 10}, function(error, response, body) {
        res.status(404).send({
            "error": error
        });
    }, function(data) {
        res.send(JSON.parse(data));
    });
});


app.get('*', (req, res) => {
    match(
        {routes, location: req.url},
        (err, redirectLocation, renderProps) => {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // render React component on server side
            let markup;
            if (renderProps) {
                markup = renderToString(<RouterContext {...renderProps}/>);
            }

            return res.render('index', {markup});
        }
    );
});


// start the server
const port = process.env.PORT || 3000;
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port}`);
});
