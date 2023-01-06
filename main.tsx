/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Simon Zhou",
  description: "👋 I'm Simon, an associate @ Unusual. Welcome to my repository of written musings on the art of 1s and 0s across developer tools.",
  avatar: "/assets/avatar.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:simon@unsusual.vc" },
    { title: "GitHub", url: "https://github.com/simonzhow" },
    { title: "Twitter", url: "https://twitter.com/simonjzhou" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/zhousimon" },
  ],
  author: "Simon Zhou",
  // favicon: "",
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
