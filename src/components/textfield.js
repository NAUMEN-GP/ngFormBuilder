module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('textfield', {
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/textfield/display.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/textfield/validate.html'
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
          },
          {
            name: 'Специальные настройки',
            template: 'formio/components/common/customSettings.html'
          }
        ],
        documentation: 'http://help.form.io/userguide/#textfield'
      });
    }
  ]);

  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
        $templateCache.put('formio/components/textfield/display.html',
        '<ng-form>' +
          '<form-builder-option property="label"       ></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'Display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="description" ng-if="displayOption(\'Display\', \'description\')"></form-builder-option>' +
          '<form-builder-option property="tooltip"     ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel"  ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="inputMask"   ng-if="displayOption(\'Display\', \'inputMask\')"></form-builder-option>' +
          '<form-builder-option property="prefix"      ng-if="displayOption(\'Display\', \'prefix\')"></form-builder-option>' +
          '<form-builder-option property="suffix"      ng-if="displayOption(\'Display\', \'suffix\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex"    ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple"    ng-if="displayOption(\'Display\', \'multiple\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected"   ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent"  ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden"      ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="mask"        ng-if="displayOption(\'Display\', \'mask\')"></form-builder-option>' +
          '<form-builder-option property="disabled"    ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView"   ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );
      $templateCache.put('formio/components/textfield/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option property="unique" ng-if="displayOption(\'Validation\', \'unique\')"></form-builder-option>' +
          '<form-builder-option property="validate.minLength" ng-if="displayOption(\'Validation\', \'validate.minLength\')"></form-builder-option>' +
          '<form-builder-option property="validate.maxLength" ng-if="displayOption(\'Validation\', \'validate.maxLength\')"></form-builder-option>' +
          '<form-builder-option property="validate.pattern" ng-if="displayOption(\'Validation\', \'validate.pattern\')"></form-builder-option>' +
          '<form-builder-option-custom-validation ng-if="displayOption(\'Validation\', \'customValidation\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
