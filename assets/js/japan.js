var d = new jpmap.japanMap(document.getElementById("my-map"), {
  areas: [
    { "code":1, "color":"#AA0000" }, 
    { "code":2, "color":"#00AA00" }
  ],
  borderLineColor: "#000000", 
  onSelect: function(data){
    alert(data.name);
  }
});
