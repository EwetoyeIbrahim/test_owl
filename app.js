
/**
 * This is the javascript code defined in the playground.
 * In a larger application, this code should probably be moved in different
 * sub files.
 */
function app() {
  // In this example, we show how components can be defined and created.
  const { Component, useState, mount } = owl;

  class Greeter extends Component {
      constructor() {
          super(...arguments);
          this.state = useState({ word: 'Hello' });
      }

      toggle() {
          this.state.word = this.state.word === 'Hi' ? 'Hello' : 'Hi';
      }
  }

  // Main root component
  class App extends Component {
      constructor() {
          super(...arguments);
          this.state = useState({ name: 'World'});
      }
  }
  App.components = { Greeter };

  // Application setup
  mount(App, { target: document.body });

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('app.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env = { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();
