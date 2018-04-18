
import angular from 'angular';
import ContainerComponent from './components/container/container.component';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import SearchButtonComponent from './components/search-button/search-button.component';
import TextFieldComponent from './components/text-field/text-field.component';
import NumberFieldComponent from './components/number-field/number-field.component';
import InterceptListComponent from './components/intercept-list/intercept-list.component';

import {SearchService} from './services/search.service';

export default angular.module('app-module',[])
    .component('appContainer', ContainerComponent)
    .component('appHeader', HeaderComponent)
    .component('appFooter', FooterComponent)
    .component('appSearchButton', SearchButtonComponent)
    .component('textField', TextFieldComponent)
    .component('numberField', NumberFieldComponent)
    .component('interceptList', InterceptListComponent)
    .service('SearchService', SearchService);