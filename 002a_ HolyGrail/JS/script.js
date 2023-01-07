
alert('JavaScriptを試してみましょう！'

/* アコーディオン ここから */
dl {
  width: 350px;
  margin: 0 auto 10px auto;
  color: #fff;
  font-size: 10px;
}
dl:first-child {
  margin-top:10px;
}
dt {
  position:relative;
  display: block;
  padding: 20px 0 20px 20px;
  background-color: #333333;
}
dt:after {
  content: "＞";
  position: absolute;
  top: 35%;
  left: 85%;
  transform: rotate(90deg);
}
dt.close:after {
  content: "＜";
  position: absolute;
  top: 35%;
  left: 85%;
  transform: rotate(-270deg);
}
dd {
  display: none;
  padding: 20px 0 20px 40px;
  color: #000;
}
/* ここまで */