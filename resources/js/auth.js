const links = document.getElementsByClassName('link')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.href

        const formData = new FormData()
        formData.append('url', '')
        formData.append('timezone', '1')

        chrome.storage.sync.get({
            identifiant: '',
            password: ''
        }, function(items) {
            formData.append('user', items.identifiant)
            formData.append('password', items.password)

            fetch('https://auth.iut-tlse3.fr/', {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            }).then(function (response) {
                return response.status
            }).then(function (status) {
                if (status == 200) {
                    window.open(href, '_blank')
                }
            })
        });

    })
}