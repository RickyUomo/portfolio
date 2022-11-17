import p1 from '../img/p_1.gif';
import netflix from '../img/netflix.png';
import movie from '../img/movie_search.png';
import rib from '../img/rib.png';

export const projects = [
    {
        title: 'Infant Predict',
        description:
            "React and Django REST framework application to predict infant's mortality",
        image: p1,
        link: "https://infant-front.herokuapp.com/",
    }, {
        title: 'Netflix Clone',
        description:
            "React, styled components and firebase to rebuild Netflix interface. However, still under construction",
        image: netflix,
        link: "https://mengju-netflix-clone.netlify.app/",
    },
    {
        title: 'Movie Search',
        description:
            "Responsively movie searching application, implemented debounce to restrict the amount of API calls. <React, TMDB>",
        image: movie,
        link: 'https://cord-movie-search.herokuapp.com/discover'
    },
    {
        title: 'Rib Responsive',
        description:
            "A demo of responsive web page. <HTML, CSS>",
        image: rib,
        link: 'https://responsive-rib.netlify.app/'
    }
];