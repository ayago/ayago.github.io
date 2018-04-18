import css from './number-field.component.css';

class Controller {

    constructor($scope){
        this.myInput;
        this.change = function(){
            this.onUpdate({isValid: $scope.numberField.$valid, value: this.myInput})
        }
    }

}

Controller.$inject = ['$scope']

export default {
    templateUrl: 'src/app/app-module/components/number-field/number-field.component.html',
    bindings: {
        onUpdate: '&'
    },
    controller: Controller
}