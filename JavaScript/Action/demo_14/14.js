let date = new Date();
add();
function add() {
  let cYear = date.getFullYear();
  let cMonth = date.getMonth();
  let cDay = date.getDate();
  const week = new Date(cYear, cMonth, 1).getDay();
  const days = new Date(cYear, cMonth + 1, -1).getDate() + 1;
  let arr = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];
  document.getElementById("nian").innerHTML = cYear;
  document.getElementById("yue").innerHTML = arr[cMonth];
  let html = "";
  for (var i = 0; i < week; i++) {
    html += "<li></li>";
  }
  for (var i = 1; i <= days; i++) {
    if (i == cDay) {
      html += '<li class="active">' + i + "</li>";
    }
    html += '<li class="hover">' + i + "</li>";
  }
  document.getElementById("date").innerHTML = html;
}
document.getElementById("prev").onclick = function () {
  date.setMonth(date.getMonth() - 1);
  add();
};
document.getElementById("next").onclick = function () {
  date.setMonth(date.getMonth() + 1);
  add();
};
