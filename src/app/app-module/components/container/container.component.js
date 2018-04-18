import css from './container.component.css';

class ContainerController {

    constructor() {
        this.isValidTextField = false;
        this.isValidNumberField = false;
    }

    onTextFieldChange(isValid) {
        this.isValidTextField = isValid;
    }

    onNumberFieldChange(isValid) {
        this.isValidNumberField = isValid;
    }

    onSearch(){
        if(!this.isValidTextField || !this.isValidNumberField)
            alert('text field or number field is invalid');
        else{

        }    
    }
}

export default {
    templateUrl: 'src/app/app-module/components/container/container.component.html',
    controller: ContainerController
}    