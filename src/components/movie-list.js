//todo this will be a container for all the movie components and their data

import React, { Component } from 'react';
import Movie from './movie';

export default class MovieList extends Component {
    render() {
        let movieOne = {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXCgO-_ldjGtk6qCFGKry6bu2DPlgsrMWN6WZORhpt-xHsjZs",
            title: "Transformers",
            about:
                "The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power. Only a human youth, Sam Witwicky (Shia LaBeouf) can save the world from total destruction.",
            year: "2007",
            rating: "PG-13",
            length: "2hr 24m",
        };

        let movieTwo = {
            image:
                "https://m.media-amazon.com/images/I/81mwDd1XxaL._AC_UF894,1000_QL80_.jpg",
            title: "Transformers: Revenge of the Fallen",
            about:
                "Two years after he and his Autobot friends saved the Earth from the Decepticons, Sam Witwicky (Shia LaBeouf) faces a new battle: college. Meanwhile, Optimus Prime and the Autobots are working with a secret military organization and trying to make a home for themselves on Earth. When an ancient Decepticon known as The Fallen rises up to wreak vengeance, Sam and his girlfriend, Mikaela, must figure out the history of the Transformers on Earth and find a way to defeat The Fallen once and for all.",
            year: "2009",
            rating: "PG-13",
            length: "2h 30min",
        };
        let movieThree = {
            image:
                "https://flxt.tmsimg.com/assets/p8176375_p_v8_aw.jpg",
            title: "Transformers:Dark of the Moon",
            about:
                "Sam Witwicky (Shia LaBeouf) and his new girlfriend, Carly (Rosie Huntington-Whiteley), join the fray when the evil Decepticons renew their longstanding war against the Autobots. Optimus Prime (Peter Cullen) believes that resurrecting ancient Transformer Sentinel Prime (Leonard Nimoy), once the leader of the Autobots, may lead to victory. That decision, however, has devastating consequences; the war appears to tip in favor of the Decepticons, leading to a climactic battle in Chicago.",
            year: "2011",
            rating: "PG-13",
            length: "2h 34min",
        };
        return (
            <>
                <div className='row'>
                    <div className='col-lg-12'>
                        {/* passing object props of movieOne to instance of components class Movie */}
                        <Movie {...movieOne} />
                        {/* {console.log(movieOne)}; */}
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12'>
                        {/* passing object props of movieTwo to instance of components class Movie */}
                        <Movie {...movieTwo} />
                        {/* {console.log(movieTwo)}; */}
                    </div>
                </div>  

                <div className='row'>
                    <div className='col-lg-12'>
                        {/* passing object props of movieThree to instance of components class Movie */}
                        <Movie {...movieThree} />
                        {/* {console.log(movieThree)}; */}
                    </div>
                </div>
            </>
        );
    }
}