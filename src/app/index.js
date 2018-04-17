import appModule from './app-module';
import commons from './commons-module';

export default angular.module(
    'angularjs-with-http',
    [
        appModule.name,
        commons.module.name
    ]
);