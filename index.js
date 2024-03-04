#!/usr/bin/env node

function logDetails() {
    const message = "Hey there! Nimit here, I'm a Backend Developer who loves to work with communities and build things from scratch. I'm also a tech speaker and love to share my knowledge with others. I'm currently working with Node.js, Express.js, MongoDB, and AWS. I'm also a huge fan of open-source and love to contribute to open-source projects. I'm also a mentor at various platforms and love to help others. Feel free to connect with me on social media or visit my portfolio. I'm always open to new opportunities and collaborations. Let's connect and build something amazing together!";
    const twitter = "https://twitter.com/SavantNimit";
    const linkedin = "https://www.linkedin.com/in/nimitsavant/";
    const portfolio = "https://nimitsavant.me";
    const github = "https://github.com/nimit2801"
  
    // Create a colorful box using ANSI escape codes
    const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitter}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedin}                 \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${portfolio}                      \x1b[38;5;51m|
    | \x1b[38;5;93mGithub:\x1b[0m  \x1b[38;5;39m${github}                      \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;
  
    // Log the colorful box in the terminal
    console.log(colorfulBox);
  }
  // Call the function to log your details
  logDetails();