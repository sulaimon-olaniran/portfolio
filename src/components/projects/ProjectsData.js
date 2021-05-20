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
import pepsi_one from './assets/pepsi_one.png'
import pepsi_two from './assets/pepsi_two.png'
import pepsi_three from './assets/pepsi_three.png'
import pepsi_four from './assets/pepsi_four.png'
import javascript_quiz_one from './assets/javascript_quiz_one.png'
//import tic_tac_toe_one from './assets/tic_tac_toe_one.png'
import os_photos_one from './assets/os_photos_one.png'
import os_photos_two from './assets/os_photos_two.png'
import os_photos_three from './assets/os_photos_three.png'
import os_photos_four from './assets/os_photos_four.png'
import res_finder_one from './assets/res_finder_one.png'
import res_finder_two from './assets/res_finder_two.png'
import res_finder_three from './assets/res_finder_three.png'
import res_finder_four from './assets/res_finder_four.png'
import res_finder_five from './assets/res_finder_five.png'
import res_finder_six from './assets/res_finder_six.png'
//import react_calc_one from './assets/react_calc_one.png'
import chat_one from './assets/chat_one.jpg'
import chat_two from './assets/chat_two.png'
import chat_three from './assets/chat_three.png'
import chat_four from './assets/chat_four.png'
import chat_five from './assets/chat_five.png'
import chat_six from './assets/chat_six.png'
import instagram_text_logo from './assets/instagram_text_logo.png'
import exp_logo from './assets/exp_logo.png'

export const projects = [ 
    // {
    //     name : 'Simple JavaScript Tic-Tac-Toe',
    //     techs : ['HTML', 'CSS', 'JavaScript'],
    //     images : [tic_tac_toe_one],
    //     summary : "not the cutest but one of My first projects writing JavaScript, the famous tic-tac-toe game, hosted on Codepen.",
    //     codeUrl : "https://codepen.io/Sulaimon-Olaniran/pen/NWxzmVg",
    //     liveUrl : "https://codepen.io/Sulaimon-Olaniran/pen/NWxzmVg"
    // },

    {
        name : "Pepsi Landing Page",
        techs : ['HTML', 'CSS', 'JavaScript', 'JQuery'],
        images : [pepsi_one, pepsi_two, pepsi_three, pepsi_four],
        summary : "A single landing page example for pepsi using HTML/CSS and little bit of JavaScript and JQuery for navbar and animation, hosted on Netlify.",
        codeUrl : "https://github.com/sulaimon-olaniran/html-pepsi-landing-page",
        liveUrl : "https://sulaimon-pepsi.netlify.app/"
    },

    // {
    //     name : 'React Calculator',
    //     techs : ['HTML', 'CSS', 'React'],
    //     images : [react_calc_one],
    //     summary : "This react calculator was my first app built ever using React",
    //     codeUrl : 'https://github.com/sulaimon-olaniran/react-calculator',
    //     liveUrl : 'https://sulaimon-olaniran.github.io/react-calculator/'
    // },

    {
        name : "Simple JavaScript Quiz",
        techs : ['HTML', 'CSS', 'JavaScript', 'ES6'],
        images : [javascript_quiz_one],
        summary : "A simple JavaScript question and answer quiz, hosted on Netlify.",
        codeUrl : "https://github.com/sulaimon-olaniran/javascript-quiz",
        liveUrl : "https://os-javascript-quiz.netlify.app/"
    },

    {
        name : "Photographer Landing Page",
        techs : ['HTML', 'CSS', 'JavaScript', 'JQuery'],
        images : [os_photos_one, os_photos_two, os_photos_three, os_photos_four],
        summary : "A single landing page sample for a photographer using HTML/CSS and little bit of JavaScript and JQuery, hosted on Netlify.",
        codeUrl : "https://github.com/sulaimon-olaniran/html-photographer-page",
        liveUrl : "https://os-photos.netlify.app/"
    },

    {
        name: "Weather Call",
        techs: ["HTML", "CSS", "React", "GitHub", "Netlify", "OpenWeatherDB API"],
        images: [weather_one, weather_two],
        summary: "This app enables users check the weather conditions of any available location around the world, hosted on Netlify.",
        codeUrl: "https://github.com/sulaimon-olaniran/weather-call",
        liveUrl: "https://weather-call.netlify.app/"
    },

    {
        name: "OS Movies",
        techs: ["HTML", "CSS", "React", "GitHub", "Netlify", "TheMovieDB API"],
        images: [ movie_one, movie_two, movie_three, movie_four, movie_five ],
        summary: "This app provides details for movies based on user search's options and also most popular movies or upcoming movies, hosted on Netlify.",
        codeUrl: "https://github.com/sulaimon-olaniran/react-movieDB-app",
        liveUrl: "https://os-movie.netlify.app/"

    },

    {
        name : "OS Restaurant-Finder",
        techs : ['HTML', 'SCSS', 'React', 'Netlify', 'Github', 'Zomato API'],
        images : [res_finder_one, res_finder_two, res_finder_three, res_finder_four, res_finder_five, res_finder_six],
        summary : "this app provides details for availble restaurant arround you in areas supported by the api, hosted on Netlify",
        codeUrl : "https://github.com/sulaimon-olaniran/react-restaurant-finder",
        liveUrl : "https://os-restaurant-finder.netlify.app/"
    },

    {
        name: "Cakes Treats",
        techs : ["HTML", "CSS", "SCSS", "React", "Firebase", "Formik", "Netlify", "Material UI CSS", "Paystack"],
        images : [ cake_one, cake_two, cake_three, cake_four, cake_five ],
        summary : "This app is a cake app for placing custom orders for cake and also in app purchasing of ready made availble cakes, hosted on Netlify.",
        codeUrl : "https://github.com/sulaimon-olaniran/cakes-ordering-app",
        liveUrl : "https://leemahstreats.netlify.app/"
    },

    {
        name : "OS Web Quiz",
        techs : ["HTML", "SCSS", "CSS", "React", "Firebase", "Formik", "Email JS", "Material UI CSS", "Netlify"],
        images : [ quiz_one, quiz_two, quiz_three, quiz_four, quiz_five ],
        summary : "A quiz app using firebase as the backend help users create an account, take quizes, have their points recorded and go head to head with other users on the ranking table, hosted on Netlify.",
        codeUrl : "https://github.com/sulaimon-olaniran/react-quiz-webapp",
        liveUrl : "https://os-quiz.netlify.app/"
    },

    {
        name : "OS Web Messenger",
        techs : ['HTML', 'SCSS', 'React', 'Firebase', 'Formik', 'Material UI', 'Netlify'],
        images : [chat_one, chat_three, chat_two, chat_four, chat_five, chat_six],
        summary : "A web chat app for chatting, adding users and getting real time notifications which was integrated with firebase functions",
        codeUrl : "https://github.com/sulaimon-olaniran/react-web-chat",
        liveUrl : "https://os-messenger.netlify.app/"
    },

    {
        name : "Instagram Clone",
        techs : ['HTML', 'SCSS', 'React', 'Firebase', 'Formik', 'Material UI', 'Redux', 'Netlify'],
        images : [instagram_text_logo],
        summary : "An Instagram web clone application, front-end built with React.js, styled with SCSS and Material-ui, state was managed with Redux, backend was handled with Firebase (firestore, functions, storage, authentication)",
        codeUrl : "https://github.com/sulaimon-olaniran/instagram-web-clone",
        liveUrl : "https://os-instagram-clone.netlify.app/"
    },

    {
        name : "OS Experience",
        techs : ['HTML', 'SCSS', 'React.Js', 'Node.Js', 'Express.js', 'MonogoDb', 'Mongoose', 'JWT', 'Formik', 'Material UI', 'Redux', 'Netlify',],
        images : [exp_logo],
        summary : "This app enables users to sign-up, create and share their basic life experiences, and each user has the ability to like, save, delete and comment on an experience as long as they are authenticated and their email verified.",
        codeUrl : "https://github.com/sulaimon-olaniran/MERN-Experience-App",
        liveUrl : "https://os-experience.netlify.app/"
    }

]