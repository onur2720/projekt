const submit = document.querySelector('.review-submit');
const reviewList = document.querySelector('.reviews');
const reviewInput = document.querySelector('.review-input');

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

function appendReview (event) {

    const data = {
        review: reviewInput.value,
        author: JSON.parse(localStorage.getItem("currentUser")).Username
    };

    event.preventDefault();
    // If the value is nothing just return
    if (reviewInput.value.length < 1) return;

    // Insert new template into DOM
    template(data);

    // Reset textrea value
    reviewInput.value = "";

    // Save the list to localStorage
    localStorage.setItem('reviewListing', reviewList.innerHTML);
}

submit.addEventListener('click', appendReview, false)

// Check for saved wishlist items
const saved = localStorage.getItem('reviewListing');

// If there are any saved items, update our list
if (saved) {
    reviewList.innerHTML = saved;
}

document.getElementById("cancel").addEventListener("click", function(){
    //newUsers brugernanvn og Password bliver ændret til de værdier, brugeren har skrevet i felterne
    //Funktionen signUp i objektet newUser vil bliver kaldt på
    window.location.href = "userPage.html"
});
