(function () {
    aingular.module('app')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('authInterceptorFactory');
        })
});