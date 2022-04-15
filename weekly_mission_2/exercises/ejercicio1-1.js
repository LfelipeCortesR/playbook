const issue = {
    title: "ejercicio1",
    repositoryNameAssociated: "weekly_mission_2",
    status: "En pruebas",
    numberOfComments: 2,
    labels: 22,
    author: "Felipe",
    dateCreated: "14 de abril de 2021",
    lastUpdated: "",
    getTitleAndAuthor: function(){
      return `El autor es  ${this.title} y el titulo es  ${this.author}`
    },
    getGeneralInfo: function(){
      return `El repositorio ${this.repositoryNameAssociated} fue creado por ${this.author}`
    }
   }

   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())
   