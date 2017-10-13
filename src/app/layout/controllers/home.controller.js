import { map as productMap } from '../mock/product.map.json';

class HomeController {
  constructor() {
    debugger;
    this.products = productMap;
    this.isSearching = false;
    
    this.currentRoute = false;
    this.createMaterialFormData = {title:'' };

    this.userName = localStorage.getItem("userName");
    this.userPhoto = localStorage.getItem("userPhoto");
    this.showHeader = true;
    this.toggleSearching = this.toggleSearching.bind(this);
    this.creatematerial = this.creatematerial.bind(this);
  }

  toggleSearching() {
    this.isSearching = !this.isSearching;
    this.searchTerm = '';
  }
  creatematerial() {
    alert(111)
  }
}

export default HomeController;
