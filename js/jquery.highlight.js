$('p:contains(laktosefri)').each(function(){
  $(this).html(
    $(this).html().replace(/laktosefri/g,'<span class="bg-info">laktosefri</span>')
  );
});
$('p:contains(glutenfri)').each(function(){
  $(this).html(
    $(this).html().replace(/glutenfri/g,'<span class="bg-warning">glutenfri</span>')
  );
});
$('p:contains(sukkerfri)').each(function(){
  $(this).html(
    $(this).html().replace(/sukkerfri/g,'<span class="bg-danger">sukkerfri</span>')
  );
});
