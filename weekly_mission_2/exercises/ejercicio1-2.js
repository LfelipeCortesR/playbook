const PullRequest = {
    title: "ejercicio1",
    barnchName: "",
    dateCreated: "14 de abril de 2021",
    status: "En pruebas",
    repositoryNameAssociated: "weekly_mission_2",
    getStatus: function(){
      return `El Status en el que se encuentra es ${this.status}`
    },
    getTitleAndAuthor: function(){
      return `El autor es  ${this.title} y el titulo es  ${this.author}`
    }

   }

   console.log(PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAuthor())
