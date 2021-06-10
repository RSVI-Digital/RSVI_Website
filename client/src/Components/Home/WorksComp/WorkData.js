import Red from "../Images/Backgrounds/red.png";
import yellow from "../Images/Backgrounds/yellow.png";
import green from "../Images/Backgrounds/green.png";
import blue from "../Images/Backgrounds/blue.png";
import { WorkImg1, WorkImg2, WorkImg3, WorkImg4 } from "../../../Assets/Links";

const WorkData = [
  {
    id: "1",
    imgsrc: `${WorkImg1}`,
    imgbg: `${Red}`,
    title: "Activity1",
    linkto: "/WhatWeDo#first",
  },
  {
    id: "2",
    imgsrc: `${WorkImg2}`,
    imgbg: `${yellow}`,
    title: "Activity2",
    linkto: "/WhatWeDo#second",
  },
  {
    id: "3",
    imgsrc: `${WorkImg3}`,
    imgbg: `${green}`,
    title: "Activity3",
    linkto: "/WhatWeDo#third",
  },
  {
    id: "4",
    imgsrc: `${WorkImg4}`,
    imgbg: `${blue}`,
    title: "Activity4",
    linkto: "/WhatWeDo#fourth",
  },
];

export default WorkData;
