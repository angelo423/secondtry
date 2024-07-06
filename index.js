let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
let homeStatusEl = document.getElementById("home-status")
let guestStatusEl = document.getElementById("guest-status")

function highlightLeader() {
    if(guestScore == homeScore) {
        guestScoreEl.style.border = "3px solid black"
        homeStoreEl.style.border = "3px solid black"
        homeStatusEl.textContent = ""
        guestStatusEl.textContent = ""
        
    }
    else if(guestScore > homeScore) {
        guestScoreEl.style.border = "3px solid #FFC300"
        homeStoreEl.style.border = "3px solid black"
        homeStatusEl.textContent = ""
        guestStatusEl.textContent = "L E A D I N G"
    }
    else if(guestScore < homeScore) {
        homeStoreEl.style.border = "3px solid #FFC300"
        guestScoreEl.style.border = "3px solid black"
        homeStatusEl.textContent = "L E A D I N G"
        guestStatusEl.textContent = ""
    }
}

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
    highlightLeader()
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
    highlightLeader()
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
    highlightLeader()
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightLeader()
}


function restartGame() {
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    highlightLeader()
}