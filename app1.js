
// JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function () {

    // Create more floating hearts

    function createHearts() {

        const container = document.querySelector('.container');

        for (let i = 0; i < 10; i++) {

            const heart = document.createElement('div');

            heart.className = 'heart';

            heart.style.left = Math.random() * 100 + '%';

            heart.style.top = Math.random() * 100 + '%';

            heart.style.width = (Math.random() * 20 + 10) + 'px';

            heart.style.height = heart.style.width;

            heart.style.animationDelay = (Math.random() * 3) + 's';

            heart.style.opacity = Math.random() * 0.5 + 0.3;

            container.appendChild(heart);

        }

    }



    createHearts();



    // Button click event - Special Surprise

    const loveButton = document.getElementById('loveButton');

    const hiddenMessage = document.getElementById('hiddenMessage');



    loveButton.addEventListener('click', function () {

        // Show the hidden message

        hiddenMessage.style.display = 'block';



        // Change button text

        loveButton.textContent = 'Never Leave me yaar';

        loveButton.style.backgroundColor = '#ff6b81';



        // Create a burst of hearts animation

        createHeartBurst(30);



        // Add confetti effect

        createConfetti();

    });



    // Photo gallery click event

    const photoItems = document.querySelectorAll('.photo-item');

    photoItems.forEach(item => {

        item.addEventListener('click', function () {

            this.querySelector('img').style.transform = 'scale(1.2) rotate(' + (Math.random() * 10 - 5) + 'deg)';

            setTimeout(() => {

                this.querySelector('img').style.transform = 'scale(1.1)';

            }, 500);

        });

    });



    // Music player functionality

    const bgMusic = document.getElementById('bgMusic');

    const playPauseBtn = document.getElementById('playPauseBtn');

    let isPlaying = false;



    // Try to play music automatically (may not work on all browsers without user interaction)

    window.addEventListener('click', function initAudio() {

        if (!isPlaying) {

            bgMusic.play()

                .then(() => {

                    isPlaying = true;

                    playPauseBtn.textContent = '⏸️';

                })

                .catch(error => {

                    console.log("Auto-play was prevented:", error);

                });

        }

        window.removeEventListener('click', initAudio);

    });



    // Play/pause button control

    playPauseBtn.addEventListener('click', function () {

        if (isPlaying) {

            bgMusic.pause();

            playPauseBtn.textContent = '▶️';

        } else {

            bgMusic.play();

            playPauseBtn.textContent = '⏸️';

        }

        isPlaying = !isPlaying;

    });



    // Update button when music ends

    bgMusic.addEventListener('ended', function () {

        isPlaying = false;

        playPauseBtn.textContent = '▶️';

    });



    // Function to create heart burst animation

    function createHeartBurst(count) {

        const container = document.querySelector('.container');



        for (let i = 0; i < count; i++) {

            const heart = document.createElement('div');

            heart.className = 'heart';

            heart.style.position = 'fixed';

            heart.style.left = Math.random() * 100 + '%';

            heart.style.top = Math.random() * 100 + '%';

            heart.style.width = (Math.random() * 30 + 20) + 'px';

            heart.style.height = heart.style.width;

            heart.style.animation = 'heartBurst 1s ease-out forwards';

            heart.style.zIndex = '1000';



            document.body.appendChild(heart);



            // Remove hearts after animation

            setTimeout(() => {

                heart.remove();

            }, 1000);

        }

    }



    // Function to create confetti effect

    function createConfetti() {

        const colors = ['#ff6b81', '#d23669', '#ff9a9e', '#fad0c4', '#ff8fab'];

        const confettiCount = 100;



        for (let i = 0; i < confettiCount; i++) {

            const confetti = document.createElement('div');

            confetti.style.position = 'fixed';

            confetti.style.width = (Math.random() * 10 + 5) + 'px';

            confetti.style.height = (Math.random() * 10 + 5) + 'px';

            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            confetti.style.left = Math.random() * 100 + '%';

            confetti.style.top = '-10px';

            confetti.style.borderRadius = '50%';

            confetti.style.zIndex = '1000';



            // Random rotation and animation

            const animationDuration = Math.random() * 3 + 2;

            confetti.style.animation = `fall ${animationDuration}s linear forwards`;



            document.body.appendChild(confetti);



            // Remove confetti after animation

            setTimeout(() => {

                confetti.remove();

            }, animationDuration * 1000);

        }



        // Add fall animation

        const style = document.createElement('style');

        style.innerHTML = `

                    @keyframes fall {

                        to {

                            transform: translateY(100vh) rotate(360deg);

                            opacity: 0;

                        }

                    }

                `;

        document.head.appendChild(style);

    }

});
