const botaoIniciarCamara = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaoIniciarCamara.addEventListener("click", async function () {
const iniciarVideo = await navigator.mediaDevices
.getUserMedia({video: true, audio: false})
botaoIniciarCamara.style.display = "none";
campoCamera.style.display = "block";
video.srcObject = iniciarVideo;
})