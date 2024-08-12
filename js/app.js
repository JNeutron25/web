var open_menu_button = document.querySelector('.open-menu');
var menu = document.querySelector('header nav ul');
  
open_menu_button.addEventListener('click', function() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

function moveProgressBar() {
    const executeButton = document.getElementById('executeButton');
    executeButton.disabled = true;
    const progressBar = document.getElementById('myBar');
    const progresBarText = progressBar.querySelector('.progress-bar-text');
    let percent = 0;
    progressBar.style.width = percent + '%';
    progresBarText.textContent = percent + '%';
    
    let progress = setInterval(function() {
        if (percent >= 100) {
            clearInterval(progress);
            executeButton.disabled = false;
         
		 
          <!-- location.href ="http:google.com"; -->
		 
        } else {
            percent = percent + 1; 
            progressBar.style.width = percent + '%';
            progresBarText.textContent = percent + '%';
        }
    }, 90);  
}

