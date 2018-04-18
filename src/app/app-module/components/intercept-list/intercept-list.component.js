import css from './intercept-list.component.css';

class Controller {
    constructor($scope){
        this.$scope = $scope;
        this.searchResults = [];
    }

    $onInit(){
        this.searchHandlerSetter({handler: (searchResult) => {
            this.searchResults.push(searchResult);
            this.$scope.$apply();
        }})
    }
    
}

Controller.$inject = ['$scope'];

export default {
    templateUrl: 'src/app/app-module/components/intercept-list/intercept-list.component.html',
    controller: Controller,
    bindings: {
        searchHandlerSetter: '&'    
    }
}