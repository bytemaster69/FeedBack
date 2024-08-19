function updateRatingValue(value) {
    document.getElementById("ratingValue").innerHTML = value + " ★★★☆☆".slice(0, value + 2);
}

function copyToClipboard() {
    const reviewText = document.getElementById('reviewText').value;
    navigator.clipboard.writeText(reviewText).then(() => {
        alert('Review copied to clipboard! Please Past it in Review');
    }).catch(err => {
        alert('Failed to copy review: ', err);
    });
}

function redirectToGoogleReview() {
    var reviewText = document.getElementById("reviewText").value;
    var ratingValue = document.getElementById("ratingSlider").value;
    // Replace with your Google Reviews URL
    var googleReviewsUrl = "https://maps.app.goo.gl/DtSapzESxqFui9Na7";
    window.location.href = googleReviewsUrl + "?review=" + encodeURIComponent(reviewText) + "&rating=" + ratingValue;
}

function submitReview() {
    copyToClipboard();
    redirectToGoogleReview();
}