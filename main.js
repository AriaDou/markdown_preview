$(document).ready(() => {
  const placeholder = $('#editor').text();

  const changeText = (preText) => {
    const finText = marked(preText);
    console.log(finText);
    $('#preview').html(finText.replace(/([^<>])\n([^<>])/g, "$1<br/>$2"));
    $('a').prop('target', '_blank');
    $('table').prop('cellspacing', 0);
  }

  changeText(placeholder);
  $('#editor').on('keyup', function(event){
    changeText(event.target.value);
  });

})
