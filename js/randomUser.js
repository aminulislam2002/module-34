const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  const nameTag = document.getElementById("name");
  nameTag.innerHTML = user.results[0].name.title + " " + user.results[0].name.first + " " + user.results[0].name.last;

  const genderTag = document.getElementById("gender");
  genderTag.innerHTML = user.results[0].gender;

  const loactionTag = document.getElementById("location");
  loactionTag.innerHTML =
    user.results[0].location.street.number +
    " , " +
    user.results[0].location.street.name +
    "  " +
    user.results[0].location.city +
    " </br> " +
    user.results[0].location.state +
    " , " +
    user.results[0].location.country +
    ` </br> Post conde: ` +
    user.results[0].location.postcode;

  const emailTag = document.getElementById("email");
  emailTag.innerHTML = user.results[0].email;

  const imgTag = document.getElementById("img");
  imgTag.innerHTML = user.results[0].picture.medium;

  console.log(user.results[0].picture.medium);
};
loadUser();
