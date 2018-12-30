import Main from './main.js';
import Menu from './menu.js';
import Search from './search.js';
import Plus from './add.js';

class Index {
    
    constructor() {
        //this.Main = new Main();
        //this.Menu = new Menu();
        this.Search = new Search();
        this.Plus = new Plus();
    }

}

const index = new Index();