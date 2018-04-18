let countDecimals = value => { 
    if ((value % 1) != 0) 
        return value.toString().split(".")[1].length;  
    return 0;
};

export class NumberDirective {
    constructor() {
        this.restrict = 'A'
        this.require = 'ngModel';
    }

    link(scope, element, attrs, ctrl) {
        let minValue = attrs.minVal ? attrs.minVal : 0;
        let maxValue = attrs.maxVal ? attrs.maxVal : 10000;
        ctrl.$parsers.push((value) => {
            if (value < minValue || value > maxValue) {
                ctrl.$setValidity('numberVal', false);
            } else {
                if (2 < countDecimals(parseFloat(value))) {
                    ctrl.$setValidity('numberVal', false);
                } else {
                    ctrl.$setValidity('numberVal', true);
                }
            }

            return value;
        });
    }

}

