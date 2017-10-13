import angular from 'angular';
const moduleName = 'fe.header';


class HeaderController {
    constructor($rootScope, $location) {
        debugger;        
        this.auth = $rootScope;
        this.isUserLogin();
    }
    isUserLogin() {
        if (document.location.pathname != "/auth/login") {
            this.showHeader = localStorage.getItem("isUserLogIn") ? true : false;
        }
        else {
            this.showHeader = true;
        }
    }
}

angular
    .module(moduleName, [])
    .controller('HeaderController', [HeaderController])

export default moduleName;
