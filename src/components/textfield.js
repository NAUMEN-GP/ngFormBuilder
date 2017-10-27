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
          '<form-builder-option property="label"       ng-if="displayOption(\'display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="description" ng-if="displayOption(\'display\', \'description\')"></form-builder-option>' +
          '<form-builder-option property="tooltip"     ng-if="displayOption(\'display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel"  ng-if="displayOption(\'display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="inputMask"   ng-if="displayOption(\'display\', \'inputMask\')"></form-builder-option>' +
          '<form-builder-option property="prefix"      ng-if="displayOption(\'display\', \'prefix\')"></form-builder-option>' +
          '<form-builder-option property="suffix"      ng-if="displayOption(\'display\', \'suffix\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex"    ng-if="displayOption(\'display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple"    ng-if="displayOption(\'display\', \'multiple\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected"   ng-if="displayOption(\'display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent"  ng-if="displayOption(\'display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden"      ng-if="displayOption(\'display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="mask"        ng-if="displayOption(\'display\', \'mask\')"></form-builder-option>' +
          '<form-builder-option property="disabled"    ng-if="displayOption(\'display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView"   ng-if="displayOption(\'display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );
      $templateCache.put('formio/components/textfield/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'validate\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option property="unique" ng-if="displayOption(\'validate\', \'unique\')"></form-builder-option>' +
          '<form-builder-option property="validate.minLength" ng-if="displayOption(\'validate\', \'validate.minLength\')"></form-builder-option>' +
          '<form-builder-option property="validate.maxLength" ng-if="displayOption(\'validate\', \'validate.maxLength\')"></form-builder-option>' +
          '<form-builder-option property="validate.pattern" ng-if="displayOption(\'validate\', \'validate.pattern\')"></form-builder-option>' +
          '<form-builder-option-custom-validation ng-if="displayOption(\'validate\', \'custom\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
