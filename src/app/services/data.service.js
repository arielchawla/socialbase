export default class User {
  constructor( $http) {
    'ngInject';
    this._$http = $http;
  }

// Try to authenticate by registering or logging in
get(url){
  return this._$http({
      url: url,
      
      method: 'get',
      crossDomain:true
    }).then(
      // On success...
      (res) => {
        // Store the user's info for easy lookup
        
        return res;
      }
    );
}

post(url, data){
return this._$http({
      url: url,
      method: 'PUT',
      data:data
    }).then(
      // On success...
      (res) => {
        // Store the user's info for easy lookup
        
        return res;
      }
    );
  }

}