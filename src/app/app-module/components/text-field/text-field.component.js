import css from './text-field.component.css';

class Controller {

    constructor($scope){
        this.myInput;
        this.change = function(){
            this.onUpdate({isValid: $scope.textField.$valid})
        }
    }

}

Controller.$inject = ['$scope']

export default {
    templateUrl: 'src/app/app-module/components/text-field/text-field.component.html',
    bindings: {
        onUpdate: '&'
    },
    controller: Controller
}