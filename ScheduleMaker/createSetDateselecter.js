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
      // 1. selectのID（例：select-3）から数字だけ抽出
      const idNum = this.id.match(/\d+/)?.[0];

      // 2. 対応するchildDivArea-{数字}を取得
      const targetDiv = document.getElementById(`childDivArea-${idNum}`);
    });

    container.appendChild(clone);
    container.appendChild(document.createElement('br')); // 改行用
}