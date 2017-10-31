module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('currency', {
        icon: 'fa fa-usd',
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/currency/display.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/currency/validate.html'
          },
          {
            name: 'API',
            template: 'formio/components/common/api.html'
          },
          {
            name: 'Layout',
            template: 'formio/components/common/layout.html'
          },
          {
            name: 'Conditional',
            template: 'formio/components/common/conditional.html'
          }
        ],
        documentation: 'http://help.form.io/userguide/#currency'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/currency/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'Display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="description" ng-if="displayOption(\'Display\', \'description\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="prefix" ng-if="displayOption(\'Display\', \'prefix\')"></form-builder-option>' +
          '<form-builder-option property="suffix" ng-if="displayOption(\'Display\', \'suffix\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple" ng-if="displayOption(\'Display\', \'multiple\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      // Create the API markup.
      $templateCache.put('formio/components/currency/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option-custom-validation ng-if="displayOption(\'Validation\', \'customValidation\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
