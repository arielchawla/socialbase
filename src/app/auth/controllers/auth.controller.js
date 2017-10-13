import { UserInfo as loginUserInfo } from '../dummyDataUser/loginUserInfo.UserInfo.json';

class AuthController {
  constructor(User, $location, $rootScope) {
    'ngInject';
    $rootScope.isUserLogin = true;
    this.auth = $rootScope;
    this.location = $location;
    this._dataService = User;
    this.UserInfo = loginUserInfo;
    this.loginFuntion = this.loginFuntion.bind(this);
    this.formData = { email: '', password: '' };
    let userId = localStorage.getItem("uesrId");

  }

  $onInit() {
    this.userId = localStorage.getItem("userId");
    this.userName = localStorage.getItem("userName");
    this.userPhoto = localStorage.getItem("userPhoto");
    this.userRole = localStorage.getItem("userRole");
    this.userEmail = localStorage.getItem("userEmail");
    this.userPresentation = localStorage.getItem("presentation");
    this.userAbout = localStorage.getItem("about");
    this.userPhone = localStorage.getItem("phone");
  }

  loginFuntion(data) {
    debugger;
    let userData = this.UserInfo;
    let url = "http://localhost:84/loginUserInfo.UserInfo.json";
    let cradentials = {
      username: data.email,
      password: data.password
    }
    this._dataService.post(url, cradentials).then(
      // Callback for success
      (res) => {

        let data = res;
      },
      // Callback for failure
      (err) => {
        console.log(userData[0]);
        localStorage.setItem("userName", userData[0].name);
        localStorage.setItem("userPhoto", userData[0].photo);
        localStorage.setItem("userRole", userData[0].role);
        localStorage.setItem("userEmail", userData[0].email);
        localStorage.setItem("userId", userData[0].id);
        localStorage.setItem("phone", userData[0].phone);
        localStorage.setItem("presentation", userData[0].presentation);
        localStorage.setItem("about", userData[0].about);
        localStorage.setItem("isUserLogIn", true);
        this.location.path('/criar-pitch');
      }
    );
  }
}

export default AuthController;

