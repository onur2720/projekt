const submit = document.querySelector('.review-submit');
const reviewList = document.querySelector('.reviews');
const reviewInput = document.querySelector('.review-input');

// Leila: Oprettes template for den fremviste data.
function template(data) {
    reviewList.insertAdjacentHTML("beforeend", `
  <div class="review flex items-start justify-start">
      
      <div class="flex-1">
        <h3 class="review-author">${data.author}</h3>
        <p class="review-body">${data.review}</p>
      </div>
    </div>
  </div>`);
}
// Leila: Opretter en appendReview ved tilfælde vores event: at der bliver skrevet en kommentar / 'review'.
function appendReview (event) {

    const data = {
        review: reviewInput.value,
        author: JSON.parse(localStorage.getItem("currentUser")).Username
    };

    event.preventDefault();
    // Leila: Hvis ikke der er nogen værdi fremskrives return
    if (reviewInput.value.length < 1) return;

    // Indsæt ny template i DOM
    template(data);

    // Leila: Vi nulstiller værdien i textarea
    reviewInput.value = "";

    // Leila: Gem listen i localStorage
    localStorage.setItem('reviewListing', reviewList.innerHTML);
}

submit.addEventListener('click', appendReview, false);

// Leila: Check for gemte 'items'
const saved = localStorage.getItem('reviewListing');

// Leila: I tilfælde af nyt gemt indhold / 'item', opdateres listen.
if (saved) {
    reviewList.innerHTML = saved;
}

document.getElementById("cancel").addEventListener("click", function(){
    //Leila: newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Leila: Funktionen signUp i objektet newUser vil bliver kaldt på
    window.location.href = "userPage.html"
});
