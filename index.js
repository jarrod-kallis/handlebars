(function() {
  $.get(
    'http://localhost:8080/templates/title.handlebars',
    function(htmlData) {
      const data = {
        title: 'Jarrod was here',
        author: 'Jarrod Kallis',
        reviewer: 'Tess Kallis'
      };
      console.log('htmlData', htmlData);
      console.log('data', data);

      var template = Handlebars.compile(htmlData);
      console.log('template', template(data));

      $('#root').html(template(data));
    },
    'html' // not really required it would seem
  );
})();
