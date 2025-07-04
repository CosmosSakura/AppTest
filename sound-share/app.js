document.getElementById("startButton").addEventListener("click", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2>ヘッドホンを借りる</h2>
        <p>QRコードをスキャン</p>
        <div style="font-size: 2em;">🎧📱</div>
      </div>
      <div class="grid">
        <div class="box">🎧</div>
        <div class="box">🎧</div>
        <div class="box">🎧</div>
        <div class="box">🎧</div>
      </div>
    </div>
  `;
});

