let currentOffset = 0; // 今週からのオフセット（週単位）

function updateWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  const diffToMonday = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek);
  monday.setDate(today.getDate() + diffToMonday + currentOffset * 7);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  for (let i = 0; i < 7; i++) {
    const targetDate = new Date(monday);
    targetDate.setDate(monday.getDate() + i);

    const day = targetDate.getDate();
    const div = document.getElementById(String(i + 1));
    if (div) {
      const dateAnchor = div.querySelector('.dayOfMonthFont');
      if (dateAnchor) {
        dateAnchor.textContent = day;
      }
    }
  }

  // 表示期間を更新
  const output = document.getElementById('outputDate');
  if (output) {
    output.textContent = formatDisplayPeriod(monday, sunday);
  }
}

function goToNextWeek() {
  currentOffset++;
  updateWeekDates();
}

function goToPreviousWeek() {
  currentOffset--;
  updateWeekDates();
}

function formatDisplayPeriod(startDate, endDate) {
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const startWeekday = weekdays[startDate.getDay()];

  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();
  const endWeekday = weekdays[endDate.getDay()];

  return `${startYear}年${startMonth}月${startDay}日（${startWeekday}）〜${endMonth}月${endDay}日（${endWeekday}）`;
}

// 初期表示
window.addEventListener('DOMContentLoaded', updateWeekDates);
