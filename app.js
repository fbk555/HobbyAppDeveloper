var page = new tabris.Page({
  title: 'Example App',
  topLevel: true
});

var button = new tabris.Button({
  centerX: 0, top: 100,
  text: 'Click this'
}).appendTo(page);

var textView = new tabris.TextView({
  centerX: 0, top: [button, 100],
  font: '36px'
}).appendTo(page);

button.on('select', function() {
  textView.set('text', 'This is old!');
});

page.open();
