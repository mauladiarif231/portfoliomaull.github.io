import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    // typescript,
    // html,
    // css,
    reactjs,
    // redux,
    tailwind,
    // nodejs,
    // mongodb,
    git,
    figma,
    docker,
    meta,
    intelsyslogo,
    ppulogo,
    starbucks,
    tesla,
    shopify,
    m,
    mlogo,
    carrent,
    jobit,
    tripguide,
    threejs,
    talend,
    nifi,
    python,
    sql,
    hadoop,
    hue,
    shell,
    kai,
    pgd,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Engineer",
      icon: web,
    },
    {
      title: "ETL Develover",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Gaming",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   id: 1,
    //   name: "HTML 5",
    //   icon: html,
    // },
    {
      id: 2,
      name: "JavaScript",
      icon: javascript,
    },
    {
      id: 3,
      name: "Talend",
      icon: talend,
    },
    {
      id: 4,
      name: "React JS",
      icon: reactjs,
    },
    {
      id: 5,
      name: "Python",
      icon: python,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      id: 7,
      name: "sql",
      icon: sql,
    },
    {
      id: 8,
      name: "Nifi",
      icon: nifi,
    },
    {
      id: 9,
      name: "Three JS",
      icon: threejs,
    },
    {
      id: 10,
      name: "git",
      icon: git,
    },
    {
      id: 11,
      name: "figma",
      icon: figma,
    },
    {
      id: 12,
      name: "Hadoop",
      icon: hadoop,
    },
    {
      id: 13,
      name: "Hue",
      icon: hue,
    },
    {
      id: 14,
      name: "Shell Script",
      icon: shell,
    },
  ];
  
  const experiences = [
    {
      title: "ETL Developer",
      company_name: "PT Madani Intelsysdata",
      icon: intelsyslogo,
      iconBg: "#383E56",
      date: "Jan 2019 - Jan 2021",
      points: [
        "Building, implementation and Maintain a banking Reporting application.",
        "Discussion with client for reporting Data sources.",
        "Data Integration from client to internal application using SSIS tools.",
        "Assist the reporting process every month.",
      ],
    },
    {
      title: "Web Developer(Genexus)",
      company_name: "PT PPU",
      icon: ppulogo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js or Genexus and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Engineer",
      company_name: "PT Metranet",
      icon: m,
      iconBg: "#383E56",
      date: "Jul 2022 - Present",
      points: [
        "Developing and maintaining datalake and datamart.",
        "Scheduling an automation query to provide data from server.",
        "Build the infrastructure required for optimal extration, transformation, and loading of data from a wide variety.",
      ],
    },
  ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//       name: "Sara Lee",
//       designation: "CFO",
//       company: "Acme Co",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       testimonial:
//         "I've never met a web developer who truly cares about their clients' success like Rick does.",
//       name: "Chris Brown",
//       designation: "COO",
//       company: "DEF Corp",
//       image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//       testimonial:
//         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//       name: "Lisa Wang",
//       designation: "CTO",
//       company: "456 Enterprises",
//       image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
//   ];
  
  const projects = [
    {
      name: "KAI",
      description:
      [
        "Acquire datasets that align with business needs. ",
        "Build, and maintain database pipeline architectures.",
        "nifi daily job monitoring based on job automation or telegram. ",
        "Problem solving and providing solutions."
      ],
      tags: [
        {
          name: "nifi",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "postgree",
          color: "green-text-gradient",
        },
        {
          name: "SAP Hana",
          color: "green-text-gradient",
        },
        {
          name: "oracle",
          color: "green-text-gradient",
        },
        {
          name: "hue",
          color: "pink-text-gradient",
        },
        {
          name: "hadoop",
          color: "pink-text-gradient",
        },
        {
          name: "shell script",
          color: "pink-text-gradient",
        },
      ],
      image: kai,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pegadaian",
      description:
      [
        "The Pegadaian Project uses Talend for two main purposes, namely to migrate data and also to upgrade from Cloudera CDH to CDP.",
        "Data migration is done to move data from the old system to the new system quickly and efficiently. Meanwhile,",
        "the upgrade from Cloudera CDH to CDP is done to improve system performance and take advantage of the latest features offered by Cloudera CDP. ",
      ],
      tags: [
        {
          name: "Talend",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Hue",
          color: "pink-text-gradient",
        },
        {
          name: "Hadoop",
          color: "pink-text-gradient",
        },
        {
          name: "Big Query",
          color: "pink-text-gradient",
        },
      ],
      image: pgd,
      source_code_link: "https://github.com/",
    },
    {
      name: "PMU Telkom",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "ApacheNifi",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Postgree",
          color: "pink-text-gradient",
        },
        {
          name: "Single Store",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,  projects };



