document.addEventListener("DOMContentLoaded", function() {
    const favButton = document.getElementById("favorite-btn");

    favButton.addEventListener("click", function() {
        favButton.classList.toggle("active"); // يبدل اللون بين الرمادي والأحمر
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const reviewContainer = document.getElementById("review-container");

    function createReview(username, text, rating) {
        const review = document.createElement("div");
        review.classList.add("review");

        review.innerHTML = `
            <img  src="comment-pic.png" alt="User">
            <p>${username}</p>
            <p>${text}</p>
            <div class="stars">${"⭐".repeat(rating)}</div>
            <button class="remove-review-btn" onclick="removeReview(this)">Remove</button>
        `;

        reviewContainer.appendChild(review);
    }

    window.redirectToReviewPage = function () {
        window.location.href = "review.html";
    };

    window.removeReview = function (button) {
        button.parentElement.remove();
    };

    // **مثال لإضافة مراجعة تلقائيًا عند التحميل (يمكن استبداله بنظام قاعدة بيانات لاحقًا)**
    createReview("User1", "Great experience!", 5);
    createReview("User2", "Loved it!", 4);
    createReview("User3", "Would visit again!", 5);
});
