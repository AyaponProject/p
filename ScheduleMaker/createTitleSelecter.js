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

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('select[id^="select-"]').forEach(select => {

    select.addEventListener('change', function () {

      const idNum = this.id.match(/\d+/)?.[0];

      if (!idNum) {
        return;
      }

      const targetDiv = document.getElementById(`chilldDivArea-${idNum}`);

      if (!targetDiv) {
        return;
      }

      targetDiv.innerHTML = '';

      let sourceDivId;
      switch (this.value) {
        case '1':
          sourceDivId = 'oneTimeSelect';
          break;
        case '2':
          sourceDivId = 'twoTimes';
          break;
        case '3':
          sourceDivId = 'threeTimes';
          break;
        default:
          return;
      }

      const sourceDiv = document.getElementById(sourceDivId);
      if (!sourceDiv) {
        return;
      }

      const clone = sourceDiv.cloneNode(true);
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

      targetDiv.appendChild(clone);
    });
  });
});

