function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSOoM0JzmjQSKtXw822IM1AR5FCW5BLm90Wl2eyloPtmsaCUdlACHw4ned6oa4WxT-wg/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')


    form.addEventListener('submit', e => {
        e.preventDefault()
        btn.disabled = true
        btn.innerHTML = "Sending..."

        let fd = getData(false)
        for (const [key, value] of fd) {
            console.log(`${key}: ${value}\n`);
        }
        var r = ''
        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
            .then(response => {
                // console.log('Success!', response)
                r = response
                alert('Success!', response)
                console.log(r, "\n------\n")
            })
            .catch(error => {
                console.log('Error!', error)
                alert('Error!', error.message)
            })

        btn.disabled = false
        btn.innerHTML = "Send to Google Sheets"
    })
}
