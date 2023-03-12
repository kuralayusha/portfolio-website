// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ data: 
    [
      {
        "id": 1,
        "name": "Countries Website",
        "image": ["/images/country-ss-2.jpg", "/images/country-ss-1.jpg"],
        "description": "While in the unfiltered state, you can preview all the country names, flags, population, region, and capital. Additionally you can filter the countries by region or search for them directly by name. When you click on any country, you are redirected to a unique link for that country, so if you know the country's abbreviation code, you can directly reach the page of that country by typing it into the URL. On that page, in addition to the information you obtained in the preview, you can learn the country's time zone, currency, or neighboring countries if available.",
        "link": "https://kuralayusha.github.io/countries/#/",
        "codeLink": "https://github.com/kuralayusha/countries",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews1",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews1/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes1",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes1/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes1/?amount=-1"
        }
      },
      {
        "id": 2,
        "name": "IP Address Tracker",
        "image": ["/images/ip-ss-1.jpg"],
        "description": "I learned how to use a map extension on my site while creating this project. If you don't enter any IP or a domain, you will see directly on the map where your device's IP is connected to. Depending on your preference, for example, if you type `google.com`, the map will show you where this domain is connected to.",
        "link": "https://kuralayusha.github.io/ip-tracker/",
        "codeLink": "https://github.com/kuralayusha/ip-tracker",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews2",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews2/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes2",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes2/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes2/?amount=-1"
        }
      },
      {
        "id": 3,
        "name": "Kanban Task Manager",
        "image": [
          "/images/kanban-ss-4.jpg",
          "/images/kanban-ss-1.jpg",
          "/images/kanban-ss-3.jpg"
        ],
        "description": "This project greatly improved many of my skills. In frontend, I developed my functions and improved adding, editing, and removing data from the localStorage. On the site, you can personalize many things and prepare your to-do boards. You can create as many task lists as you want and place your tasks in these boards. If there are any subtasks for each task, you can write them down, mark them as done, and drag and drop them to any column.",
        "link": "https://mellifluous-caramel-c4234f.netlify.app",
        "codeLink": "https://github.com/kuralayusha/task-manager",
        "technologies": ["React", "TypeScript", "Next.js", "Tailwind"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews3",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews3/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes3",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes3/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes3/?amount=-1"
        }
      },
      {
        "id": 4,
        "name": "News Home Page",
        "image": ["/images/newsHomePage-web-ss.PNG"],
        "description": "This project was one of my first projects. Like the ones I did in the `50 Projects in 50 Days` course, it was a project that laid the foundation for my CSS and JS skills. It was also my first project that was compatible with both mobile and desktop.",
        "link": "https://gleaming-sorbet-e6b83c.netlify.app",
        "codeLink": "https://github.com/kuralayusha/News-Home-Page",
        "technologies": ["HTML", "CSS", "JS"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews4",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews4/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes4",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes4/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes4/?amount=-1"
        }
      },
      {
        "id": 5,
        "name": "Question App",
        "image": [
          "/images/question-web-ss.jpg",
          "/images/question-web-ss-2.jpg"
        ],
        "description": "The original version of this site was the first project I did after learning React. In this version 2 project, after laying the foundations of Next.js, I developed it using new technologies I learned, such as server-side rendering. This site, which is quite (sometimes) fun, allows you to get 10 questions with complex difficulty and subject matter if you want. Alternatively, you can use filters to select the topic, adjust the number of questions and difficulty to your liking. Good luck!",
        "link": "https://celadon-sprinkles-e3ae88.netlify.app",
        "codeLink": "https://github.com/kuralayusha/test-web-app-2",
        "technologies": ["React", "TypeScript", "API", "Next.js"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews5",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews5/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes5",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes5/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes5/?amount=-1"
        }
      },
      {
        "id": 6,
        "name": "Rock Paper Scissors Game",
        "image": [
          "/images/rps-ss-3.jpg",
          "/images/rps-ss-1.jpg",
          "/images/rps-ss-2.jpg"
        ],
        "description": "You can have a fun time playing against the CPU. Although RPSLS (Rock-Paper-Scissors-Lizard-Spock) is included, I haven't been able to reach 10 points in RPS yet. The rules are shown on the in-game screen. If anyone manages to score more than 10 points, I'd love to know about it. Don't hesitate to contact me :)",
        "link": "https://kuralayusha.github.io/rock-paper-scissors/",
        "codeLink": "https://github.com/kuralayusha/rock-paper-scissors",
        "technologies": ["React", "TypeScript"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews6",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews6/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes6",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes6/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes6/?amount=-1"
        }
      },
      {
        "id": 7,
        "name": "Tic-Tac-Toe Game",
        "image": [
          "/images/xox-ss-1.jpg",
          "/images/xox-ss-2.jpg",
          "/images/xox-ss-3.jpg"
        ],
        "description": "This was one of the first games I developed, and it may be one of the most enjoyable projects I've worked on so far. You can play against the CPU or compete with a friend sitting next to you.",
        "link": "https://kuralayusha.github.io/tic-tac-toe/",
        "codeLink": "https://github.com/kuralayusha/tic-tac-toe",
        "technologies": ["React"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews7",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews7/?amount=1",
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes7",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes7/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes7/?amount=-1"
        }
      },
      {
        "id": 8,
        "name": "Portfolio Site",
        "image": [
          "/images/portfolio-ss-2.jpg",
          "/images/portfolio-ss-1.jpg",
          "/images/portfolio-ss-3.jpg",
          "/images/portfolio-ss-4.jpg"
        ],
        "description": "I designed this website to showcase my projects and provide brief information about them. As you may guess, it is similar to an Instagram profile. On this site, you can download my CV, send me an email, and I also implemented a simple system to count the number of visits to the site, as well as a like function for each post. I hope you like it :)",
        "link": "https://whimsical-tapioca-a1ab20.netlify.app",
        "codeLink": "https://github.com/kuralayusha/portfolio-website",
        "technologies": ["React", "TypeScript", "Next.js"],
        "status": {
          "views": "https://api.countapi.xyz/get/dataViews/33cf72b7-76a8-409e-ae14-14f921507a0f",
          "increaseViews": "https://api.countapi.xyz/update/dataViews/33cf72b7-76a8-409e-ae14-14f921507a0f/?amount=1",
          "likes": "https://api.countapi.xyz/get/dataLikes/89127e6f-96cc-4cce-be5a-2d6281483861",
          "increaseLikes": "https://api.countapi.xyz/update/dataLikes/89127e6f-96cc-4cce-be5a-2d6281483861/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/dataLikes/89127e6f-96cc-4cce-be5a-2d6281483861/?amount=-1"
        }
      }
    ]
    
    
    
  
  })
}
