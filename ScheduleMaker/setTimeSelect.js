const timeSelects = document.querySelectorAll('.timeSelect');

timeSelects.forEach(select => {
for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
    const hour = h.toString();
    const minute = m.toString().padStart(2, '0');
    const timeStr = `${hour}:${minute}`;
    const option = document.createElement('option');
    option.value = timeStr;
    option.textContent = timeStr;
    select.appendChild(option);
    }
}
});

document.querySelectorAll('.timeSelect').forEach(select => {
  // フォーカスされたときにクラス追加（黒文字に）
  select.addEventListener('focus', () => {
    select.classList.add('clicked');
  });

  // フォーカスが外れたらクラス削除（白文字に戻す）
  select.addEventListener('blur', () => {
    select.classList.remove('clicked');
  });
});
