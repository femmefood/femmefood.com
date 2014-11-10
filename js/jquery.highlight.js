$('p:contains(mælkefri)').each(function(){
  $(this).html(
    $(this).html().replace(/mælkefri/g,'<span class="bg-info">mælkefri</span>')
  );
});
$('p:contains(glutenfri)').each(function(){
  $(this).html(
    $(this).html().replace(/glutenfri/g,'<span class="bg-warning">glutenfri</span>')
  );
});
$('p:contains(hvidt, raffineret sukkerfri)').each(function(){
  $(this).html(
    $(this).html().replace(/hvidt, raffineret sukkerfri/g,'<span class="bg-danger">hvidt, raffineret sukkerfri</span>')
  );
});
