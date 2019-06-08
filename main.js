$(() => {

  const tex = ['竜王', '中村カンパニー', '竜王財団', 'NOIR', 'ヨウヨウファイナンス'];
  let n = 0;

  setInterval(() => {

    // const num = Math.floor(Math.random() * tex.length);
    $(".ryuou").text(tex[n]);
    n++;
  }, 4000);


});