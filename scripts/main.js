import {htmlLoader} from "./htmlLoader.js";

const loader = new htmlLoader();

loader.loadHtml('./components/footer.html', document.getElementById('footer'));