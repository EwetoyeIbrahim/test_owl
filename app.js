function app() {
    class Nav extends owl.Component { }
    class Header extends owl.Component { }
    class EntryCard extends owl.Component {
        constructor() {
            super(...arguments);
            this.items = [
                {
                    id: 3,
                    title: "fsfgshsj",
                    date: "buy milk",
                    about: "yuu",
                },
                {
                    id: 4,
                    title: "ertyujbhjkl",
                    date: "buy cake",
                    about: "fjkjjjjj",
                },
            ];
        }
    }

    class App extends owl.Component { }
    App.components = { Nav, EntryCard, Header };


    //------------------------------------------------------------------------------
    // Application Startup
    //------------------------------------------------------------------------------

    owl.mount(App, { target: document.body });

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
    let templates;
    try {
        templates = await owl.utils.loadFile('app.xml');
    } catch (e) {
        console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
        return;
    }
    const env = { qweb: new owl.QWeb({ templates }) };
    owl.Component.env = env;
    await owl.utils.whenReady();
    app();
}

start();
