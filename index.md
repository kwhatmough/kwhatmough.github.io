```html
<html>
<head>
</head>
<body>
<div id='output'>
</div>
</body>
</html>
```
```javascript
function line(name, value) {
  return name + ': ' + value + '<br />';
}

function printMessages(n) {
	fetch('https://jsonplaceholder.typicode.com/posts')
	  .then(response => response.json()
    	.then(json => {
        var output = '';

        for (var i = 0; i < n; i++) {
          var message = json[i];
          output += line('Title', message.title);
          output += line('User ID', message.userId);
          console.log(message.id);
          output += line('Message ID', message.id
            .toString()
            .split('')
            .reduce(
              (accumulator, currentValue, index) => accumulator + currentValue + (index % 3 == 2 ? ' ' : ''),
              ''
            )
            .trim());
          output += line('Body', message.body);
          output += '<br />';
        }
        document.getElementById("output").innerHTML = output;
    }));
}
```
