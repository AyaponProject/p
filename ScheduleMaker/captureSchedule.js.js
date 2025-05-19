const { createApp, ref } = Vue;

createApp({
  setup() {
    const count = ref('');
    const captureArea = ref(null);

    function makePng() {
      if (!captureArea.value) return;

      // 日付を YYYY-MM-DD 形式で取得
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const fileName = `スケジュール${formattedDate}.png`;

      html2canvas(captureArea.value, {
        width: 1280,
        height: 720,
        useCORS: true,
        backgroundColor: null // 背景透明にしたくないなら消してOK
      }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = fileName;
        link.click();
      });
    }

    return {
      count,
      captureArea,
      makePng
    };
  }
}).mount('#app');
