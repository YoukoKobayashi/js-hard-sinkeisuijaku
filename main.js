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

const nextPlayer = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");
let judgeNum = [];
let cnt1 = 0;
let cnt2 = 0;
const tgt1 = "次はPlayer1の番です";
const tgt2 = "次はPlayer2の番です";
nextPlayer.textContent = "次はPlayer1の番です";
player1Point.textContent = `player1:${cnt1}`;
player2Point.textContent = `player2:${cnt2}`;
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
          //challenge
          if (nextPlayer.textContent === tgt1) {
            nextPlayer.textContent = tgt1;
            cnt1 += 1;
          } else if (nextPlayer.textContent === tgt2) {
            nextPlayer.textContent = tgt2;
            cnt2 += 1;
          }
        } else {
          //console.log("違う");  挙動の確認
          judgeNum[0].className = "card back";
          judgeNum[1].className = "card back";
          judgeNum[0].textContent = "";
          judgeNum[1].textContent = "";
          //challenge
          if (nextPlayer.textContent === tgt1) {
            nextPlayer.textContent = tgt2;
          } else if (nextPlayer.textContent === tgt2) {
            nextPlayer.textContent = tgt1;
          }
        }
        judgeNum = [];
        player1Point.textContent = `Player1:${cnt1}`;
        player2Point.textContent = `Player2:${cnt2}`;
        if (cnt1 + cnt2 === 4) {
          alert("終了です");
        }
      }
    }, 4000);
  });
  panel.appendChild(div);
}
