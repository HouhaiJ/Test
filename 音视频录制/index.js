const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true
  });

  const mime = MediaRecorder.isTypeSupported("video/webm;codecs=h264") ? "video/webm;codecs=h264" : "video/webm";

  const mediaRecorder = new MediaRecorder(stream, { mimeType: mime });

  const chunks = [];
  mediaRecorder.addEventListener("dataavailable", function (e) {
    chunks.push(e.data);
  });

  mediaRecorder.addEventListener("stop", () => {
    const blob = new Blob(chunks, { type: chunks[0].type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "video.mp4";
    a.click();
  });
  mediaRecorder.start();
});
