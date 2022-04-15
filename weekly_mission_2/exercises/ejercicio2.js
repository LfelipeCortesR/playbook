const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


   console.log("ejercicio 1")
   explorers.forEach(nam=>console.log(nam.name))
   console.log("")

   console.log("ejercicio 2")
   explorers.forEach(sta=>console.log(sta.stack))
   console.log("")

   console.log("ejercicio 3")
   const exstack= explorers.map(explorers_stack => explorers_stack.stack)
   console.log(exstack)
   console.log("")

   console.log("ejercicio 4")
   const exwhitjs= explorers.filter(explorers_js =>explorers_js.stack.includes("js"))
   console.log(exwhitjs)
   console.log("")

   console.log("ejercicio 5")
   const fexcdmx = explorers.find(explorers_cdmx => explorers_cdmx.city==="CDMX")
   console.log(fexcdmx)
   console.log("")

   console.log("ejercicio 6")
   const exercises = explorers.reduce((acc, explorers_excerses) => acc+ explorers_excerses.exercises_completed,0)
   console.log(exercises)
   console.log("")

   console.log("ejercicio 7")
   const exexfin = explorers.some((explorers_finished) => explorers_finished.missions.frontend.exercisesFinished ===true)
   console.log(exexfin)
   console.log("")

   console.log("ejercicio 8")
   const exexisfin = explorers.every((explorers_isfinished) => explorers_isfinished.missions.frontend.isFinished===true)
   console.log(exexisfin)
   console.log("")


   

