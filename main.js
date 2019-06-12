$(() => {

  const tex = ['竜王', 'おはよう', 'こんにちは', 'こんばんは', 'どうも'];
  let n = -1;

  setInterval(() => {
    if (n >= tex.length - 1) {
      const num = Math.floor(Math.random() * tex.length);
      $(".ryuou").text(tex[num]);
      console.log("num = " + num);
    } else {
      n++;
      $(".ryuou").text(tex[n]);
      console.log("n = " + n);
    }

  }, 4000);


});
