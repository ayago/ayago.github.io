export class MinNumberDirective {
    constructor() {
        this.restrict = 'A'
        this.require = 'ngModel';
    }

    link(scope, element, attrs, ctrl) {
        debugger;
        ctrl.$parsers.push((value) => {
            if (value.indexOf("e") > -1) {
                ctrl.$setValidity('charE', true);
            } else {
                ctrl.$setValidity('charE', false);
            }
            return value;
        });
    }

}