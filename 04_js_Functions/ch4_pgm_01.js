var movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
  };
  
  var movie2 = {
    title: "Inception",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    directors: "Christopher Nolan"
  };
  
  function displayMovieInfo(movie) {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
  }
  
  displayMovieInfo(movie1);
  displayMovieInfo(movie2);
  
  var blogPost = {
    title: "Exploring JavaScript Objects",
    author: "John Doe",
    content: "In this blog post, we will explore how to create and manipulate JavaScript objects...",
    date: "2024-07-05"
  };
  
  function displayBlogPostInfo(post) {
    console.log("Blog Post Title: " + post.title);
    console.log("Author: " + post.author);
    console.log("Date: " + post.date);
    console.log("Content: " + post.content);
    console.log("------------------------------");
  }
  
  displayBlogPostInfo(blogPost);