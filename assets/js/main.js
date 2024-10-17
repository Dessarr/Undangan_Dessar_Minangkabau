function closeCover() {
    const cover = document.getElementById('cover');
    const navbar = document.querySelector('nav');
    const music = document.getElementById('musik');
    const body = document.body;
    
    cover.style.transition = 'transform 2s ease-in-out';
    cover.style.transform = 'translateY(-100%)';

    setTimeout(() => {
      cover.style.display = 'none'; 
      navbar.style.display = 'block'; 
      music.play();

      body.style.overflowY = 'auto'; 
      body.style.overflowX = 'hidden'; 
      body.style.height = 'auto';
      body.style.position = 'static';
      body.style.width = 'auto';
    }, 2000); 

  }
  
  
  function putarMusik() {
    const music = document.getElementById('musik');
    const imgmusik = document.getElementById('imgmusik');
  
    if (music.paused) {
      music.play();
      imgmusik.src = 'assets/img/pause.png';
      imgmusik.classList.add('spinning');
    } else {
      music.pause();
      imgmusik.src = 'assets/img/play.png';
      imgmusik.classList.remove('spinning');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav');
    const lihatUndanganBtn = document.querySelector('#cover a');
    const music = document.getElementById('musik');
    const body = document.body;
  
    body.style.overflow = 'hidden';
    body.style.height = '100vh';
    body.style.position = 'fixed';
    body.style.width = '100%';

    navbar.style.display = 'none';
  
    music.pause();
  
    lihatUndanganBtn.addEventListener('click', function (e) {
      e.preventDefault(); 
      closeCover(); 

      body.style.overflow = 'auto' ;
      body.style.height = 'auto';
      body.style.position = 'static';
      body.style.width = 'auto';
    });
  
  });
  


