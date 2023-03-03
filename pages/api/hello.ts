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
        "name": "REST Countries API",
        "image": ["/images/country-ss-1.jpg", "/images/country-ss-2.jpg"],
        "description": "A simple api work",
        "link": "https://kuralayusha.github.io/countries/#/",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "https://api.countapi.xyz/get/kurleys-web/dataViews1",
          "increaseViews": "https://api.countapi.xyz/update/kurleys-web/dataViews1/?amount=1",
          "liked": false,
          "likes": "https://api.countapi.xyz/get/kurleys-web/dataLikes1",
          "increaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes1/?amount=1",
          "decreaseLikes": "https://api.countapi.xyz/update/kurleys-web/dataLikes1/?amount=-1"
        }
      },
      {
        "id": 2,
        "name": "IP Address Tracker",
        "image": ["/images/ip-ss-1.jpg"],
        "description": "A simple tracker",
        "link": "https://kuralayusha.github.io/ip-tracker/",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "here comes the get link",
          "increaseViews": "here comes the inc link",
          "liked": false,
          "likes": "here comes the get link",
          "increaseLikes": "here comes the inc update link",
          "decreaseLikes": "here comes the dec update link"
        }
      },
      {
        "id": 3,
        "name": "Kanban Task Manager",
        "image": [
          "/images/kanban-ss-1.jpg",
          "/images/kanban-ss-2.jpg",
          "/images/kanban-ss-3.jpg",
          "/images/kanban-ss-4.jpg"
        ],
        "description": "A simple taskmanager",
        "link": "https://mellifluous-caramel-c4234f.netlify.app",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "here comes the get link",
          "increaseViews": "here comes the inc link",
          "liked": false,
          "likes": "here comes the get link",
          "increaseLikes": "here comes the inc update link",
          "decreaseLikes": "here comes the dec update link"
        }
      },
      {
        "id": 4,
        "name": "News Home Page",
        "image": ["/images/newsHomePage-web-ss.PNG"],
        "description": "A simple taskmanager",
        "link": "https://mellifluous-caramel-c4234f.netlify.app",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "here comes the get link",
          "increaseViews": "here comes the inc link",
          "liked": false,
          "likes": "here comes the get link",
          "increaseLikes": "here comes the inc update link",
          "decreaseLikes": "here comes the dec update link"
        }
      },
      {
        "id": 5,
        "name": "Test web app",
        "image": [
          "/images/question-web-ss.jpg",
          "/images/question-web-ss-2.jpg"
        ],
        "description": "A simple test app",
        "link": "https://mellifluous-caramel-c4234f.netlify.app",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "here comes the get link",
          "increaseViews": "here comes the inc link",
          "liked": false,
          "likes": "here comes the get link",
          "increaseLikes": "here comes the inc update link",
          "decreaseLikes": "here comes the dec update link"
        }
      },
      {
        "id": 6,
        "name": "rps & rpsls game",
        "image": [
          "/images/rps-ss-1.jpg",
          "/images/rps-ss-2.jpg",
          "/images/rps-ss-3.jpg"
        ],
    
        "description": "A simple rps game",
        "link": "https://mellifluous-caramel-c4234f.netlify.app",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "here comes the get link",
          "increaseViews": "here comes the inc link",
          "liked": false,
          "likes": "here comes the get link",
          "increaseLikes": "here comes the inc update link",
          "decreaseLikes": "here comes the dec update link"
        }
      },
      {
        "id": 7,
        "name": "xox game",
        "image": ["/images/xox-ss-1.jpg", "/images/xox-ss-2.jpg"],
    
        "description": "A simple xox game",
        "link": "https://mellifluous-caramel-c4234f.netlify.app",
        "technologies": ["React", "TypeScript", "API"],
        "status": {
          "views": "here comes the get link",
          "increaseViews": "here comes the inc link",
          "liked": false,
          "likes": "here comes the get link",
          "increaseLikes": "here comes the inc update link",
          "decreaseLikes": "here comes the dec update link"
        }
      }
    ]
    
    
  
  })
}
