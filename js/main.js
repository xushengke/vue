const vm = new Vue({
  el : "#app",

  data : {
    welcomeMessage : "welcome to your first vue app",

    hasVue : false,

    vuemessage : "You can haz vue",

    targetUrl : "http:vuejs.org",

    anchorOff : true,

    moviedata : [
      {name : "star wars the force", thumb : "forceawakens.jpg", vidsource : "forceawakens.mp4", description : "dedeaedad"},
      {name : "stranger things", thumb : "strangerthings.jpg", vidsource : "stranerthings.mp4", description : "sssss"},
      {name : "avenger", thumb : "avengers.jpg", vidsource : "avengers.mp4", description : "dedeaedad"},
    ],

    moviename : "movie name goes here",
    moviedescription : "movie description goes here",
    moviesource : "null"
  },

  methods : {
    logvideo(e) {
      e.preventDefault();
      //console.log(e.currentTarget);

      //find the fref name of the video and use it to filter the collection
      datakey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/')
    + 1);

      currentData = this.moviedata.filter(video => video.vidsource === datakey);
      this.moviename = currentData[0].name;
      this.moviedescription = currentData[0].description;
      this.moviesource = datakey;
    }
  }
});
