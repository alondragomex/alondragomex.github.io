let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #541734;">Estoy iniciando en el mundo de la programacion.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
