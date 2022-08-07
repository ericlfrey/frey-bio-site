// 1. Create an array of image links for places you've been. (A great source of images is Google Destinations).
// 2. Create an array of the names of those places that you created in the step above.
// 3. Create an event listener on the seePlaces button.
// 4. The event listener should call a function named populatePlaces. 
// 5. This function should loop through the arrays and 
// 6.create "cards" with the image and the title. 
// 7.You should give each of these cards a class so you can style them.
// 8. The function should output all of these cards to the outputPlaces div.
// 9. Bonus: The function hide the seePlaces button.


const imgLinks = [
  "https://images.unsplash.com/photo-1600088883034-dafef46b62ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVubWFyayUyMGZsYWd8ZW58MHx8MHx8&w=1000&q=80",
  "https://483g6s2jm1sg6ww9g1jf28j1-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/entertainment-australia-day-hero-img-wyza-com-au-768x492.jpg",
  "https://media.istockphoto.com/illustrations/united-kingdom-illustration-id165629418?k=20&m=165629418&s=612x612&w=0&h=71eEN7uuCG4BYgHPbVr0upbvvg4FhlgMAs5JHaTJgyQ="];
var placesNames = [ "denmark", "australia", "uk" ];

function populatePlaces () {
  let cards = ''
  for (i = 0; i < placesNames.length; i++) {
    cards += `<div class="card" style="width: 18rem;"><img class="card-img-top" src="${imgLinks[i]}" alt="${placesNames[i]}"><div class="card-body"><p class="card-text">${placesNames[i]}</p></div></div>`
    console.log(cards);
    $("#outputPlaces").html(cards);
  }
}

$("#seePlaces").click(function () {
  populatePlaces();
  $("#seePlaces").hide();
});