const data = [
    {
      id: crypto.randomUUID(),
      title: "html", 
      cover: "Html.png",
      
    },
    {
      id: crypto.randomUUID(),
      title: "Javascript ", 
      cover: "JS.png",
       
    },
    {
      id: crypto.randomUUID(),
      title: "TailwindCss", 
      cover: "TailwindCss.png",
       
    },
    {
      id: crypto.randomUUID(),
      title: "React", 
      cover: "React.png",
      
    },
    {
      id: crypto.randomUUID(),
      title: "Express", 
      cover: "express.png",
       
    }
  ];
  
  const getSkills = () => {
    return data;
  }
  
  export {getSkills};