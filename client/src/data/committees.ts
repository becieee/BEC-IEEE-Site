import Sambhav from "../assets/Sambhav Oswal.jpg"
import Shravani from "../assets/shravani.jpg"
import suhas from "../assets/Suhas.jpeg"
import bharatesh from "../assets/Bharatesh.jpg"
import vikas from "../assets/Vikas.jpg"
import panchu from "../assets/Panchu.jpg"
import praveen from "../assets/Alur.jpg"
import apporva from "../assets/Apoorva.jpg"
import AishwaryaH  from "../assets/Aishwarya.jpg"
import varun from "../assets/Varun.jpeg"
import harshitha from "../assets/Harishtha.jpg"
import sangamesh from "../assets/Sangamesh.jpg"
import prerana from "../assets/prerana.jpg"
import prajwal from "../assets/Prajwal.png"
import anirudh from "../assets/Anirudh.jpg"
import poorvi from "../assets/Poorvi.jpg"

export interface Member {
  name: string;
  designation: string;
  image: string;
  linkedin:string;
  portfolio:string;
  email:string;
}


export interface Committee {
  name: string;
  members: Member[];
}

export const committees: Committee[] = [
  {
    name: "",
    members: [
      {
        name: "Sambhav Oswal",
        designation: "Chairperson",
        image:`${Sambhav}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://sambhavoswal23.wixsite.com/sambhav",
        email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "shravani uppar",
        designation: "Vice Chairperson",
        image: `${Shravani}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Suhas kulkarni",
        designation: "Treasurer",
        image: `${suhas}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Bharatesh B",
        designation: "Secretary",
        image: `${bharatesh}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
        
      },
      {
        name: "Vikas Menasagi",
        designation: "Joint Secretary",
        image: `${vikas}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
        
      },
      {
        name: "Panchakshari jogi",
        designation: "Joint Treasurer",
        image: `${panchu}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
        
      }
    ]
  },
  {
    name: "Operating commitee",
    members: [
      {
        name: "Alur Praveen",
        designation: "Operating commitee Chair",
        image: `${praveen}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"https://anirudhkulkarni733@gmail.com"
      },
      {
        name: "Varun Naik",
        designation: "MDC Chair",
        image: `${varun}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Aishwarya H ",
        designation: "SAC Chair",
        image: `${AishwaryaH}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Apoorva Joshi",
        designation: "Operating commitee secretary",
        image: `${apporva}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Harshita Soudi",
        designation: "Joint SAC",
        image: `${harshitha}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Sangamesh K ",
        designation: "Membership Coordinator",
        image: `${sangamesh}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Prerana Bali",
        designation: "Meeting Coordinator",
        image: `${prerana}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      }
    ]
  },
  {
    name: "Web Team",
    members: [
      {
        name: "Prajwal Shettar",
        designation: "Webmaster",
        image: `${prajwal}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"https://anirudhkulkarni733@gmail.com"
      },
      {
        name: "Anirudh kulkarni ",
        designation: "Webmaster",
        image: `${anirudh}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Poorvi M  ",
        designation: "Joint Webmaster",
        image: `${poorvi}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      
    ]
  },
  {
    name: "Content Team",
    members: [
      {
        name: "Channabasava B",
        designation: "Design Head",
        image: `${praveen}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"https://anirudhkulkarni733@gmail.com"
      },
      {
        name: "Sahitya P",
        designation: "Editorial Head",
        image: `${varun}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Omkar Sanjeev ",
        designation: "Design Lead",
        image: `${AishwaryaH}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Siddharudha M B",
        designation: "Social Media Head",
        image: `${apporva}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
    ]
  },
  {
    name: "WIE Team",
    members: [
      {
        name: "Spoorti Deshpande",
        designation: "WIE Chair",
        image: `${praveen}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"https://anirudhkulkarni733@gmail.com"
      },
      {
        name: "Aishwarya Billad",
        designation: "WIE Secretary",
        image: `${varun}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
     
    ]
  },
  {
    name: "SIGHT Team",
    members: [
      {
        name: "Sahana Hiremath",
        designation: "Operating commitee Chair",
        image: `${praveen}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"https://anirudhkulkarni733@gmail.com"
      },
      {
        name: "Sinchan D",
        designation: "MDC Chair",
        image: `${varun}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
      {
        name: "Anusha N",
        designation: "SAC Chair",
        image: `${AishwaryaH}`,
        linkedin:"https://www.linkedin.com/in/anirudh-kulkarni-208096276/",
        portfolio:"https://ports-delta.vercel.app/",
           email:"anirudhkulkarni733@gmail.com"
      },
    ]
  }
];