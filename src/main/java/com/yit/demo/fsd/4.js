
        const button = document.getElementById('myButton');
        button.addEventListener('click', function () {
            console.log('Button clicked!');
        });

        const image = document.getElementById('myImage');
        image.addEventListener('mouseover', function () {
            image.style.borderColor = 'red';
        });

        document.addEventListener('keydown', function (event) {
            console.log('Key pressed: ' + event.key);
        });
    