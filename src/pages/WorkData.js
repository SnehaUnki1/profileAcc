import React from 'react'

import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import ProntoShare from '../assets/images/prontoshare.JPG'
import Weather from '../assets/images/weather.JPG'
import Inventory from '../assets/images/inventory.jpg'
import Music from '../assets/images/Music.JPG'
import ReduxCRud     from '../assets/images/CrudRedux.png'
import Chat     from '../assets/images/chat.jpg'
import Course     from '../assets/images/course.jpg'

const WorkData = [
    {
        title:"ProntoShare",
        Technologies: "Golang, MongoDB, AngularJS",
        description : "ProntoShare is simple and quickest application to share large files.",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"https://www.prontoshare.com/",
        gitLink:"",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image: ProntoShare
    },
    {
        title:"Weather",
        Technologies: "NodeJs, Express JS, HTML, CSS",
        description : "Get weather information of given location",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"https://parisara-application.herokuapp.com/",
        gitLink:"https://github.com/SnehaUnki1/New-Weather-App",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image:Weather
    },

    {
        title:"CoursePin",
        Technologies: "HTML5, CSS, React JS",
        description : "Details of the Course Like Fees, Duration",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"https://dashboard.heroku.com/apps/coursepin",
        gitLink:"https://github.com/SnehaUnki1/course",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image:Course
    },
    
    {
        title:"Inventory Management",
        Technologies: "NodeJs, Express JS, AngularJS, MongoDB",
        description : "Manage the invenry of the office.",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"",
        gitLink:"",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image:Inventory
    },
    
    {
        title:"MusicLove",
        Technologies: "ReactJs, JavaScript, CSS",
        description : "Listen to the music of your beloved Singer. used Spootify api for the songs.",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"https://music-fans.herokuapp.com/",
        gitLink:"https://github.com/SnehaUnki1/musicPlayer",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image:Music
    },

    {
        title:"Redux",
        Technologies: "ReactJs (redux), JavaScript, CSS",
        description : "Redux state CRUD management ",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"https://redux-crud-demo.herokuapp.com/",
        gitLink:"https://github.com/SnehaUnki1/redux-crud",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image:ReduxCRud
    },
    
    {
        title:"ChatApp",
        Technologies: "HTML5, CSS, Nodejs",
        description : "Chat Application, create room kind of group to chat or one to one chat.",
        gitIcon:<AiIcons.AiFillGithub/>,
        siteLink:"",
        gitLink:"https://github.com/SnehaUnki1/Chatt-App",
        siteIcon:<GoIcons.GoLinkExternal/>,
        image:Chat
    }


];

export default WorkData;