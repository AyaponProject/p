document.addEventListener('DOMContentLoaded', function () {
    const optionsList = ['マイクラ', 'APEX', 'R.E.P.O'];
    const oneTimeSelect = document.getElementById('oneTimeSelect');

    // 念のため null チェック
    if (!oneTimeSelect) {
      console.error('oneTimeSelect が見つかりません');
      return;
    }

    // オプション追加（必要なら初期化）
    oneTimeSelect.innerHTML = '';
    optionsList.forEach((text, index) => {
      const option = document.createElement('option');
      option.value = index + 1;
      option.textContent = text;
      if (index === 0) option.selected = true;
      oneTimeSelect.appendChild(option);
    });
  });