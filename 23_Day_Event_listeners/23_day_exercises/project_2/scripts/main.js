// Exercises: Level 2
console.log('===================Exercises Level 2===================');

// Color
const green = '#57cc99';
const black = '#2b2d42';

// Centering Content
const body = document.body;
body.style.position = 'absolute';
body.style.top = '50%';
body.style.left = '50%';
body.style.transform = 'translate(-50%, -50%)';
body.style.fontFamily = 'Roboto';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.textAlign = 'center';
body.style.textShadow = '2px 2px 0px lightgray';

// Add H1 For Key Press
const h1 = document.createElement('h1');
h1.textContent = 'Press any keyboard key';
h1.style.boxShadow = '1px 1px 10px lightgray';
h1.style.outline = 'black';
h1.style.width = '100%';
h1.style.padding = '15px 30px 15px 30px';
h1.style.color = black;
body.append(h1);

// Add H2 For Key Code
const h2 = document.createElement('h2');
h2.style.fontSize = '72px';
h2.style.boxShadow = '1px 1px 10px lightgray';
h2.style.color = green;
h2.style.width = '50%';
h2.style.padding = '15px 30px 15px 30px';
h2.style.display = 'none';
body.append(h2);

// Add Event Listener: keypress
body.addEventListener('keypress', (e) => {
  const key = e.key;
  const keyCode = e.keyCode;

  h1.innerHTML = `You pressed 
    <span style="color: ${green}; font-size: 36px;">
      ${key}
    </span>
  `;

  h2.textContent = keyCode;
  h2.style.display = 'block';
});