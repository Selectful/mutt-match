angular.module('mutt-match')
.service('messageService', ['$http', 'store', function($http, store) {
  const vm = this;
  vm.id;
  vm.getMessages = getMessages;
  vm.sendMessage = sendMessage;

  function getMessages() {
    vm.id = store.get('profile').userInfo.data[0].id;
    return $http.get(`message/${vm.id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return console.log('messageService error', error);
      });
  };
  function sendMessage(text, to) {
    vm.id = store.get('profile').userInfo.data[0].id;
    return $http.post(`message/${vm.id}/${to}`, {message: text})
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return console.log('messageService error', error);
      });
  }
}])