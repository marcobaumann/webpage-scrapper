$ var noodle = require('noodlejs');

var query = {
    url: 'http://w16.com.br/',
    type: 'html',
    selector: '.main-container p',
    extract: 'text'
  },
  uriQuery = encodeURIComponent(JSON.stringify(query)),
  request  = 'http://example.noodlejs.com/?q=' +
             uriQuery + '&callback=?';
  console.log("hello");           
/*// Make Ajax request to Noodle server
noodle.query(queries).then(function (results) {
  console.log(results);
});

noodle.stopCache();
*/
