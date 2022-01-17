var d = new jpmap.japanMap(document.getElementById("my-map"), {
  areas: [
    { "code":4, "color":"#0000FF" },
    { "code":5, "color":"#0000FF" },
    { "code":8, "color":"#0000FF" },    
    { "code":9, "color":"#0000FF" },
    { "code":10, "color":"#0000FF" }, 
    { "code":11, "color":"#0000FF" },
    { "code":12, "color":"#0000FF" },    
    { "code":13, "color":"#0000FF" },
    { "code":17, "color":"#0000FF" }, 
    { "code":23, "color":"#0000FF" },
    { "code":26, "color":"#0000FF" }, 
    { "code":27, "color":"#0000FF" },
    { "code":28, "color":"#0000FF" }, 
    { "code":29, "color":"#0000FF" },
    { "code":30, "color":"#0000FF" }, 
    { "code":33, "color":"#0000FF" },
    { "code":34, "color":"#0000FF" },
    { "code":35, "color":"#0000FF" },
    { "code":40, "color":"#0000FF" },
    { "code":45, "color":"#0000FF" }
  ],
  showsPrefectureName: true,
  movesIslands: true,
  lang: 'en',
  borderLineColor: "#000000", 
  onSelect: function(data){
    alert(data.name);
  }
});
