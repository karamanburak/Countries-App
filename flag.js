let showList = [];

const getCountry = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();
    console.log(data);
    showList = data;

    printScreen(showList)

}

getCountry()

//! EKRANA BASTIRMA METODU
const printScreen = (countries) => {
  document.querySelector(".countries").innerHTML = "";
    countries.forEach((country) => {

        document.querySelector(".countries").innerHTML += `
<div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${country.flags.svg}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>

<ul class="list-group list-group-flush">
  <li class="list-group-item">
  <i class="fas fa-lg fa-landmark"></i>
   ${country.capital} </li>
  <li class="list-group-item">
  <i class="fas fa-lg fa-comments"></i> 
  ${Object.values(country.languages)} </li>
  <li class="list-group-item">
  <i class="fas fa-lg fa-money-bill-wave"></i>
  ${Object.values(country.currencies)[0].name} 
  ${Object.values(country.currencies)[0].symbol}
  </li>

</ul>


  </div>
</div>

`

    })

}


document.getElementById("search").oninput = (e) => {
    console.log(e.target.value);

    let data = showList.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    printScreen(data)
    console.log(data);
}