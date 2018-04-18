import css from './container.component.css';

class Controller {

    constructor(searchService) {
        this.searchService = searchService;
        this.isValidTextField = false;
        this.isValidNumberField = false;
    }

    onTextFieldChange(isValid, value) {
        this.isValidTextField = isValid;
        this.textVal = value;
    }

    onNumberFieldChange(isValid, value) {
        this.isValidNumberField = isValid;
        this.numberVal = value;
    }

    onSearch(){
        if(!this.isValidTextField || !this.isValidNumberField)
            alert('text field or number field is invalid');
        else{
            this.searchService.searchTheNet(this.textVal, this.numberVal)
                .then(
                    (searchResult) => {
                        alert("Search successful");
                        this.searchHandler(searchResult);
                    },
                    (err) => {alert(err)}
                );
        }    
    }

    setSearchHandler(handler){
        this.searchHandler = handler;
    }
}

Controller.$inject = ['SearchService'];

export default {
    templateUrl: 'src/app/app-module/components/container/container.component.html',
    controller: Controller
}    