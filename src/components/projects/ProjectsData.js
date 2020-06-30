import weather_one from './assets/weather_one.png'
import weather_two from './assets/weather_two.png'
import movie_one from './assets/movie_one.png'
import movie_two from './assets/movie_two.png'
import movie_three from './assets/movie_three.png'
import movie_four from './assets/movie_four.png'
import movie_five from './assets/movie_five.png'

export const projects = [
    {
        name : "Weather Call",
        techs : ["HTML", "CSS", "React.JS", "GitHub", "Netlify", "OpenWeatherDB API"],
        images : [weather_one, weather_two],
        summary : "This app enables users check the weather conditions of any available location around the world.",
        codeUrl : "https://github.com/sulaimon-olaniran/weather-call",
        liveUrl : "https://weather-call.netlify.app/"
    },

    {
        name : "OS Movies",
        techs : ["HTML", "CSS", "React.JS", "GitHub", "Netlify", "TheMovieDB API"],
        images : [ movie_one, movie_two, movie_three, movie_four, movie_five ],
        summary : "This app provides details for movies based on user search's options and also most popular movies or upcoming movies.",
        codeUrl : "https://github.com/sulaimon-olaniran/react-movieDB-app",
        liveUrl : "https://os-movie.netlify.app/"

    }

]