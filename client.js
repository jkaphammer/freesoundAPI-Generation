const button = document.getElementById('sound-test')

button.addEventListener('click', function () {
    fetch('http://localhost:3000/api')
        .then(function (response) {
            // Check if the response status is OK (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON content
            return response.json();
        })
        .then(function (data) {
            // Handle the JSON data
            console.log(data);
        })
        .catch(function (err) {
            console.error(err);
        });
});