(function() {
  $.get(
    'http://localhost:8080/templates/title.handlebars',
    function(data) {
      console.log(data);
      var template = Handlebars.compile(data);
      $('#root').html(
        template({
          title: 'Jarrod was here',
          author: 'Jarrod Kallis',
          reviewer: 'Tess Kallis'
        })
      );
    },
    'html' // not really required it would seem
  );
})();
