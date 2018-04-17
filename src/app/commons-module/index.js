import css from './commons.module.css';
import angular from 'angular';
import {MinNumberDirective} from './directives/min-number/min-number.directive';

const module = angular.module('commons-module',[]);
module.directive('minNumber', () => new MinNumberDirective());

export default {
    module: module,
    css: css
}    