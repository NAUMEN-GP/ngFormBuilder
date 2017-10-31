module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('datagrid', {
        fbtemplate: 'formio/formbuilder/datagrid.html',
        icon: 'fa fa-th',
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/datagrid/display.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/datagrid/validate.html'
          },
          {
            name: 'API',
            template: 'formio/components/common/api.html'
          },
          {
            name: 'Conditional',
            template: 'formio/components/common/conditional.html'
          }
        ],
        documentation: 'http://help.form.io/userguide/#datagrid',
        noDndOverlay: true,
        confirmRemove: true
      });
    }
  ]);

  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/datagrid/display.html',
        '<ng-form>' +
        '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
        '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
        '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
        '<form-builder-option property="addAnother" ng-if="displayOption(\'Display\', \'addAnother\')"></form-builder-option>' +
        '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
        '<form-builder-option property="striped" ng-if="displayOption(\'Display\', \'striped\')"></form-builder-option>' +
        '<form-builder-option property="bordered" ng-if="displayOption(\'Display\', \'bordered\')"></form-builder-option>' +
        '<form-builder-option property="hover" ng-if="displayOption(\'Display\', \'hover\')"></form-builder-option>' +
        '<form-builder-option property="condensed" ng-if="displayOption(\'Display\', \'condensed\')"></form-builder-option>' +
        '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
        '<form-builder-option property="protected" ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
        '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
        '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
        '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
        '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/datagrid/validate.html',
        '<ng-form>' +
        '<form-builder-option property="validate.minLength" ng-if="displayOption(\'Validation\', \'validate.minLength\')"></form-builder-option>' +
        '<form-builder-option property="validate.maxLength" ng-if="displayOption(\'Validation\', \'validate.maxLength\')"></form-builder-option>' +
        '<form-builder-option-custom-validation  ng-if="displayOption(\'Validation\', \'customValidation\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
