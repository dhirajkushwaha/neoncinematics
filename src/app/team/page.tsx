
type CardProps = {
  img: string
  name: string
  role: string
  size?: "small" | "big" | "big-xl"
}


function Card({ img, name, role, size = "small" }:CardProps) {
  const isBig = size === "big";
  var imgSizeClass = isBig ? "sm:size-80 lg:size-80" : "sm:size-48 lg:size-60";

  if(size === "big-xl"){
    imgSizeClass = "sm:size-48 lg:size-70"
  }

  return (
    <div className="text-center">
      <img className={`rounded-xl ${imgSizeClass} mx-auto`} src={img} alt="Avatar" />
      <div className="mt-2 sm:mt-4">
        <h3 className={`${isBig ? "text-xl" : "text-sm"} font-medium sm:text-base lg:text-lg`}>
          {name}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  const leaders = [
    {
      name: "Tanveer Singh",
      role: "Coordinator",
      img: "./assets/images/team/coordinator.jpg",
    },
    {
      name: "Shubham Repswal",
      role: "Co-Coordinator",
      img: "./assets/images/team/cocoordinator.jpg",
    },
  ];

  const leads = [
    {
      name: "Ayush Vijay",
      role: "Video Editing Lead",
      img: "./assets/images/team/lead/videoEditingLead.jpg",
    },
    {
      name: "Bhoomika Bhatia",
      role: "Social Media Lead",
      img: "./assets/images/team/lead/socialMediaLead.jpg",
    },
    {
      name: "Happy Lakhotia",
      role: "Photography Lead",
      img: "./assets/images/team/lead/photographyLead.jpg",
    },
    {
      name: "Uday Teja",
      role: "Photo Editing Lead",
      img: "./assets/images/team/lead/photoEditingLead.jpg",
    },
    {
      name: "Sajni Kumari",
      role: "Camera Lead",
      img: "./assets/images/team/lead/cameraLead.jpg",

    },

    {
      name: "Himanshu",
      role: "Management Lead",
      img: "./assets/images/team/lead/managementLead.webp",

    },
     
  ];


    const members = [

      {
      name: "Divyanshi",
      role: " ",
      img: "./assets/images/team/Divyanshi.jpg",
    },

    {
      name: "Ayush",
      role: " ",
      img: "./assets/images/team/ayutism.jpg",
    },
    {
      name: "Gopal",
      role: " ",
      img: "./assets/images/team/Gopal.png",
    },
{
      name: "Megh",
      role: " ",
      img: "./assets/images/team/megh.jpg",
    }, 
    {
      name: "Nikita",
      role: " ",
      img: "./assets/images/team/nikita.jpg",
    },
      {
      name: "Raghvendra",
      role: " ",
      img: "./assets/images/team/raghvendra.jpg",
    }, 
    
    {
      name: "Astha",
      role: " ",
      img: "./assets/images/team/aastha.jpg",
    },
    {
      name: "Arpit",
      role: " ",
      img: "./assets/images/team/arpit.jpg",
    },{
      name: "Avinash",
      role: " ",
      img: "./assets/images/team/Avinash.jpg",
    },
    

     
    {
      name: "Vishesh",
      role: " ",
      img: "./assets/images/team/vishesh.jpg",
    },

    
  ];

  return (
    <div>
      {/* Team */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto DMSans">
        {/* Leader Section */}
        <div className="grid grid-cols-1 lg:w-[800px] mx-auto lg:grid-cols-2 gap-8 md:gap-8">
          {leaders.map((person, idx) => (
            <Card key={idx} {...person}  size="big" />
          ))}
        </div>

        <div className="max-w-2xl mt-20 mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white polysans">
            Team Leads
          </h2>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 lg:">
          {leads.map((person, idx) => (
            <Card key={idx} {...person} size="big"/>
          ))}
        </div>


        <div className="max-w-2xl mt-20 mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white polysans">
            Team Members 
          </h2>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 lg:">
          {members.map((person, idx) => (
            <Card key={idx} {...person} size="big"/>
          ))}
        </div>
      </div>
    </div>
  );
}
