window.onload = () => {
    covidData();
  };
  const covidData = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const countryDetails = data.Countries.find(
          (country) => country.Country === "Kenya"
        );
        const lastUpdate = countryDetails.Date;
        const confirmedCases = countryDetails.TotalConfirmed;
        const deaths = countryDetails.TotalDeaths;
        const recovered = countryDetails.TotalRecovered;
        const confirmedToday =countryDetails.NewConfirmed;
        const recoveredToday = countryDetails.NewRecovered;
        const deathsToday = countryDetails.NewDeaths;
  
        //Kenya Cases
        //document.getElementById("update").innerHTML = update.substr(0, 10);
        document.getElementById(
          "confirmed"
        ).innerHTML = confirmedCases.toLocaleString("en");

        document.getElementById(
            "confirmedToday"
          ).innerHTML = confirmedToday.toLocaleString("en");

        document.getElementById("deaths").innerHTML = deaths.toLocaleString(
          "en"
        );

        document.getElementById(
            "deathsToday"
          ).innerHTML = deathsToday.toLocaleString("en");

        document.getElementById(
          "recovered"
        ).innerHTML = recovered.toLocaleString("en");

        document.getElementById(
            "recoveredToday"
          ).innerHTML = recoveredToday.toLocaleString("en");
  
        // Global Cases
        document.getElementById(
          "lastUpdated"
        ).innerHTML = "last updated" + " " + data.Date.substr(0, 10);
        document.getElementById(
          "globalCases"
        ).innerHTML = data.Global.TotalConfirmed.toLocaleString("en");
        document.getElementById(
          "globalDeaths"
        ).innerHTML = data.Global.TotalDeaths.toLocaleString("en");
        document.getElementById(
          "globalRecovered"
        ).innerHTML = data.Global.TotalRecovered.toLocaleString("en");
        document.getElementById(
          "percent"
        ).innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
      })
      .catch((error) => console.log(error));
    setTimeout(covidData, 3600000); //update every after 1 hour
  };
  







