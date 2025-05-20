const n = 7; // 必要なセレクト数
const container = document.getElementById('container');
const template = document.getElementById('select-template');

for (let i = 1; i <= n; i++) {
    // テンプレートを複製
    const clone = template.cloneNode(true);
    clone.id = `select-${i}`;
    clone.style.display = 'inline'; // 表示する

    // --- 変更を察知するイベントを追加 ---
    clone.addEventListener('change', function () {
      //後で実装
    });

    container.appendChild(clone);
    container.appendChild(document.createElement('br')); // 改行用
}