const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("all-countries");

  //   console.log(countries);
  countries.forEach((country) => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Conuntry Name: ${country.name.common}</h3>
    <p>Capital Name: ${country.capital ? country.capital[0] : "No Capital"}</p> 
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;

    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetail(data[0]));
};

const showCountryDetail = (country) => {
  console.log(country);
  const countryDetailContainer = document.getElementById("country-detail");
  countryDetailContainer.innerHTML = `
    <h2>Country Details</h2>
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital}</p>
    <img src="${country.flags.png}" alt="" />
  `;
};
loadCountries();
