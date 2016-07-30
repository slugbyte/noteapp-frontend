'use strict';

require('./note-li.scss');
const angular = require('angular')
angular.module('noteApp').directive('appNoteLi', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./note-li.html'),
    controller: ['listService', NoteLiController],
    controllerAs: 'noteLiCtrl',
    bindToController: true,
    scope: {
      note: '=',
      deleteNote: '&',
    },
  }
});

function NoteLiController(listService){
}