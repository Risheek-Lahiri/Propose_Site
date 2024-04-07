document.getElementById('showVideoBtn').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var acceptBtn = document.getElementById('acceptBtn');
    var rejectBtn = document.getElementById('rejectBtn');

    if (videoContainer) {
        videoContainer.style.display = 'block';

        // Show the response buttons after the video has been played
        acceptBtn.style.display = 'block';
        rejectBtn.style.display = 'block';
    }
});

document.getElementById('acceptBtn').addEventListener('click', function() {
    alert("I LOVE YOU TOO \u2764\ufe0f \u2764\ufe0f \u2764\ufe0f");

});

document.getElementById('rejectBtn').addEventListener('click', function() {
    alert("We're sorry to hear that you've rejected the proposal.");
});

function moveButton() {
    var button = document.getElementById('rejectBtn');
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
