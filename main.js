const panel = document.getElementById("panel");

const arrNum = [];
let i = arrNum.length;
while (i < 8) {
  let n = Math.floor(Math.random() * 13) + 1;
  if (arrNum.includes(n) === false) {
    arrNum.push(n);
    arrNum.push(n);
  }
  i = arrNum.length;
}

for (let l = arrNum.length; l > 1; l--) {
  let k = Math.floor(Math.random() * l);
  [arrNum[k], arrNum[l - 1]] = [arrNum[l - 1], arrNum[k]];
}
console.log(arrNum); // 視覚化する

let judgeNum = [];
for (let n = 0; n < arrNum.length; n++) {
  const div = document.createElement("div");
  div.setAttribute("class", "card back");
  //div.value = arrNum[n];
  div.addEventListener("click", () => {
    // removeAttributeではすべてのclassがremoveされる
    // className=''であらためて指定する
    div.className = "card";
    div.textContent = arrNum[n];
    judgeNum.push(div);
    let timer = 0;
    setInterval(() => {
      clearInterval(timer);
      if (judgeNum.length === 2) {
        console.log(judgeNum);
        if (judgeNum[0].textContent === judgeNum[1].textContent) {
          //console.log("いっしょ");  挙動の確認
          judgeNum[0].className = "card finish";
          judgeNum[1].className = "card finish";
        } else {
          //console.log("違う");  挙動の確認
          judgeNum[0].className = "card back";
          judgeNum[1].className = "card back";
          judgeNum[0].textContent = "";
          judgeNum[1].textContent = "";
        }
        judgeNum = [];
      }
    }, 2000);
  });
  panel.appendChild(div);
}
