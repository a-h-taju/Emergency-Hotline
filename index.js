// ************Heart Count************

const hearts = document.getElementsByClassName('heart-btn')

for (const heart of hearts) {
    heart.addEventListener('click', function (e) {
        e.preventDefault()
        const heartCountElement = document.getElementById('heart-count')

        const heartCount = parseInt(heartCountElement.innerText)

        const totalHeartCount = heartCount + 1

        heartCountElement.innerText = totalHeartCount;
    })
}

// ****************Call button***************

const callBtns = document.getElementsByClassName('call-btn');

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // coin check
        const totalCointElement = document.getElementById('coint')
        const totalCoint = parseInt(totalCointElement.innerText);
        if (totalCoint < 20) {
            alert("❌ You don't have enough coin! You need at least 20 coins to make a call");
            return;
        }

        const decreaseCoin = totalCoint - 20

        totalCointElement.innerText = decreaseCoin;

        const card = callBtn.closest('.card');
        const callAlert = card.querySelector('.call-alert')?.innerText;
        const callAlertNumber = card.querySelector('.call-alert-nmbr')?.innerText;

        const callAlertArray = [];
        const data = { callAlert, callAlertNumber };
        callAlertArray.push(data);

        alert(`📞 Calling ${data.callAlert} - ${data.callAlertNumber}.....`);
        // ********************************************
        const time = new Date().toLocaleTimeString()

        const historyCard = document.createElement('div');
        historyCard.classList.add('history-item');
        historyCard.innerHTML = `
       <div class="flex justify-between items-center gap-5 w-full shadow-md rounded-xl p-4">
        <div>
            <p class="text-gray-800 font-semibold">${callAlert}</p>

            <p class="text-gray-800 font-medium">${callAlertNumber}</p>
        </div>
        <div>
            <p class="text-gray-700 font-semibold text-sm">${time}</p>
        </div>
  </div>
    `;

        // add to history section
        historyContainer.prepend(historyCard);

    });
}

const clearBtn = document.getElementById('clearHistory');
const historyContainer = document.getElementById('historyContainer');
clearBtn.addEventListener('click', function () {
    historyContainer.innerHTML = '';
});

// ***************Copy Button******************

const copyBtns = document.getElementsByClassName('copy-btn');

for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const card = copyBtn.closest('.card');
        const callAlertNumber = card.querySelector('.call-alert-nmbr')?.innerText;

        // Copy to clipboard

        navigator.clipboard.writeText(callAlertNumber)
            .then(() => {
                alert(`Number ${callAlertNumber} copied to clipboard!`);
            })
            .catch(() => {
                alert('❌ Failed to copy number');
            });

        // Update copy count
        const copyCountElement = document.getElementById('copy-count');
        const currentCount = parseInt(copyCountElement.innerText);
        const totalCopy = currentCount + 1;
        copyCountElement.innerText = totalCopy;
    });
}

