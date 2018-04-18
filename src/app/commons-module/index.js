import css from './commons.module.css';
import angular from 'angular';
import {NumberDirective} from './directives/min-number/min-number.directive';

const module = angular.module('commons-module',[]);
module.directive('isNumber', () => new NumberDirective());

export default {
    module: module,
    css: css
}    