// Saves options to chrome.storage
function save_options() {
    var identifiant = document.getElementById('identifiant').value;
    var password = document.getElementById('password').value;
    chrome.storage.sync.set({
      identifiant: identifiant,
      password: password
    });
}
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        identifiant: '',
        password: ''
    }, function(items) {
        document.getElementById('identifiant').value = items.identifiant;
        document.getElementById('password').value = items.password;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);