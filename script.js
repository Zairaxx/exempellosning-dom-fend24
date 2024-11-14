const cities = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];

  //Uppgift 1

  let allCitiesList = document.querySelector("#allCities");

  cities.forEach(city => {
    let li = document.createElement("li");

    if(city.code === "UK"){
        li.style.color = "red"
    } else if (city.code === "FR") {
        li.style.color = "blue";
    }


    li.textContent = city.city;
    allCitiesList.append(li);
  })

  //Uppgift 2

  let foodCitiesList = document.querySelector("#citiesForFoodies");

  let rankedFoodCitiesList = document.createElement("ol");

  foodCitiesList.replaceWith(rankedFoodCitiesList);

  //Filtrera
  let foodCities = cities.filter(city => city.foodRanking >= 8)
  //Sortera 
  foodCities.sort((a,b) => b.foodRanking-a.foodRanking);
  //Skriv ut i DOM:en
  foodCities.forEach( city => {
    let li = document.createElement("li");
    li.innerText = city.city + " - Food ranking: " + city.foodRanking + "/10"
    rankedFoodCitiesList.append(li);
  })

  //Uppgift 3

  let populationList = document.querySelector("#sortedByPopulation");

  //Sortera lista
  //Alternativ 1
  let citiesByPopulation = [...cities];
  citiesByPopulation.sort((a,b) => b.population-a.population)

  //Alternativ 2
  // let citiesByPopulation = cities.toSorted((a,b) => b.population-a.population)


  //Skriva ut i DOM:en

  citiesByPopulation.forEach(city => {
    let li = document.createElement("li");
    li.textContent = city.city + " - Population: " + city.population + " people";
    populationList.append(li);
  }
  )