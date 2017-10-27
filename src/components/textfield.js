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
          '<form-builder-option property="label"       ngIf="displayOption(\'display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ngIf="displayOption(\'display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="description" ngIf="displayOption(\'display\', \'description\')"></form-builder-option>' +
          '<form-builder-option property="tooltip"     ngIf="displayOption(\'display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel"  ngIf="displayOption(\'display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="inputMask"   ngIf="displayOption(\'display\', \'inputMask\')"></form-builder-option>' +
          '<form-builder-option property="prefix"      ngIf="displayOption(\'display\', \'prefix\')"></form-builder-option>' +
          '<form-builder-option property="suffix"      ngIf="displayOption(\'display\', \'suffix\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ngIf="displayOption(\'display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex"    ngIf="displayOption(\'display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple"    ngIf="displayOption(\'display\', \'multiple\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ngIf="displayOption(\'display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected"   ngIf="displayOption(\'display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent"  ngIf="displayOption(\'display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden"      ngIf="displayOption(\'display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="mask"        ngIf="displayOption(\'display\', \'mask\')"></form-builder-option>' +
          '<form-builder-option property="disabled"    ngIf="displayOption(\'display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView"   ngIf="displayOption(\'display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );
      $templateCache.put('formio/components/textfield/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ngIf="displayOption(\'validate\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option property="unique" ngIf="displayOption(\'validate\', \'unique\')"></form-builder-option>' +
          '<form-builder-option property="validate.minLength" ngIf="displayOption(\'validate\', \'validate.minLength\')"></form-builder-option>' +
          '<form-builder-option property="validate.maxLength" ngIf="displayOption(\'validate\', \'validate.maxLength\')"></form-builder-option>' +
          '<form-builder-option property="validate.pattern" ngIf="displayOption(\'validate\', \'validate.pattern\')"></form-builder-option>' +
          '<form-builder-option-custom-validation ngIf="displayOption(\'validate\', \'custom\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
