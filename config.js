// config.js
// URL ini akan diisi nanti setelah Anda deploy Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

// Fungsi untuk memanggil backend
function fetchData(endpoint, callback) {
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Penting untuk Google Apps Script
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: endpoint,
            data: {}
        })
    })
    .then(response => {
        // Karena no-cors, kita harus parse response manual jika perlu
        // Tapi Google Script biasanya mengembalikan text/plain atau JSON string
        return response.text();
    })
    .then(data => {
        try {
            const result = JSON.parse(data);
            if (result.success) {
                callback(null, result.data);
            } else {
                callback(new Error(result.message || "Gagal mengambil data"), null);
            }
        } catch (e) {
            callback(new Error("Error parsing response: " + e.message), null);
        }
    })
    .catch(error => {
        callback(error, null);
    });
}

function postData(endpoint, data, callback) {
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: endpoint,
            data: data
        })
    })
    .then(response => response.text())
    .then(data => {
        try {
            const result = JSON.parse(data);
            if (result.success) {
                callback(null, result.data);
            } else {
                callback(new Error(result.message || "Gagal menyimpan data"), null);
            }
        } catch (e) {
            callback(new Error("Error parsing response: " + e.message), null);
        }
    })
    .catch(error => {
        callback(error, null);
    });
}