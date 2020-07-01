import weather_one from './assets/weather_one.png'
import weather_two from './assets/weather_two.png'
import movie_one from './assets/movie_one.png'
import movie_two from './assets/movie_two.png'
import movie_three from './assets/movie_three.png'
import movie_four from './assets/movie_four.png'
import movie_five from './assets/movie_five.png'
import cake_one from './assets/cake_one.png'
import cake_two from './assets/cake_two.png'
import cake_three from './assets/cake_three.png'
import cake_four from './assets/cake_four.png'
import cake_five from './assets/cake_five.png'
import quiz_one from './assets/quiz_one.png'
import quiz_two from './assets/quiz_two.png'
import quiz_three from './assets/quiz_three.png'
import quiz_four from './assets/quiz_four.png'
import quiz_five from './assets/quiz_five.png'

export const projects = [
    {
        name: "Weather Call",
        techs: ["HTML", "CSS", "React.JS", "GitHub", "Netlify", "OpenWeatherDB API"],
        images: [weather_one, weather_two],
        summary: "This app enables users check the weather conditions of any available location around the world.",
        codeUrl: "https://github.com/sulaimon-olaniran/weather-call",
        liveUrl: "https://weather-call.netlify.app/"
    },

    {
        name: "OS Movies",
        techs: ["HTML", "CSS", "React.JS", "GitHub", "Netlify", "TheMovieDB API"],
        images: [ movie_one, movie_two, movie_three, movie_four, movie_five ],
        summary: "This app provides details for movies based on user search's options and also most popular movies or upcoming movies.",
        codeUrl: "https://github.com/sulaimon-olaniran/react-movieDB-app",
        liveUrl: "https://os-movie.netlify.app/"

    },

    {
        name: "Cakes Treats",
        techs : ["HTML", "CSS", "SCSS", "React.JS", "Firebase", "Formik", "Netlify", "Material UI CSS", "Paystack"],
        images : [ cake_one, cake_two, cake_three, cake_four, cake_five ],
        summary : "This app is a cake app for placing custom orders for cake and also in app purchasing of ready made availble cakes.",
        codeUrl : "https://github.com/sulaimon-olaniran/cakes-ordering-app",
        liveUrl : "https://leemahstreats.netlify.app/"
    },

    {
        name : "OS Quiz",
        techs : ["HTML", "SCSS", "CSS", "React JS", "Firebase", "Formik", "Email JS", "Material UI CSS", "Netlify"],
        images : [ quiz_one, quiz_two, quiz_three, quiz_four, quiz_five ],
        summary : "A quiz app using firebase as the backend help users create an account, take quizes, have their points recorded and go head to head with other users on the ranking table.",
        codeUrl : "https://github.com/sulaimon-olaniran/react-quiz-webapp",
        liveUrl : "https://os-quiz.netlify.app/"
    }

]