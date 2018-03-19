const vm = new Vue({
  el : "#app",

  data : {
    welcomeMessage : "welcome to your first vue app",

    hasVue : false,

    vuemessage : "You can haz vue",

    targetUrl : "http:vuejs.org",

    anchorOff : true,

    deliciousFruit : [
      {name : "apples", flavor : "tangy!"},
      {name : "peaches", flavor : "sweet"},
      {name : "grapes", flavor : "squishy"}
    ]
  },

  methods : {
    logFruit(e) {
      console.log(e.currentTarget);
    }
  }
});
