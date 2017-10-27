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
      var view = 'display';
        $templateCache.put('formio/components/textfield/display.html',
        '<ng-form>' +
          '<form-builder-option property="label"       view="display"></form-builder-option>' +
          '<form-builder-option property="placeholder" view="display"></form-builder-option>' +
          '<form-builder-option property="description" view="display"></form-builder-option>' +
          '<form-builder-option property="tooltip"     view="display"></form-builder-option>' +
          '<form-builder-option property="errorLabel"  view="display"></form-builder-option>' +
          '<form-builder-option property="inputMask"   view="display"></form-builder-option>' +
          '<form-builder-option property="prefix"      view="display"></form-builder-option>' +
          '<form-builder-option property="suffix"      view="display"></form-builder-option>' +
          '<form-builder-option property="customClass" view="display"></form-builder-option>' +
          '<form-builder-option property="tabindex"    view="display"></form-builder-option>' +
          '<form-builder-option property="multiple"    view="display"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" view="display"></form-builder-option>' +
          '<form-builder-option property="protected"   view="display"></form-builder-option>' +
          '<form-builder-option property="persistent"  view="display"></form-builder-option>' +
          '<form-builder-option property="hidden"      view="display"></form-builder-option>' +
          '<form-builder-option property="mask"        view="display"></form-builder-option>' +
          '<form-builder-option property="disabled"    view="display"></form-builder-option>' +
          '<form-builder-option property="tableView"   view="display"></form-builder-option>' +
        '</ng-form>'
      );
      view = 'validate';
      $templateCache.put('formio/components/textfield/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" view="validate"></form-builder-option>' +
          '<form-builder-option property="unique" view="validate"></form-builder-option>' +
          '<form-builder-option property="validate.minLength" view="validate"></form-builder-option>' +
          '<form-builder-option property="validate.maxLength" view="validate"></form-builder-option>' +
          '<form-builder-option property="validate.pattern" view="validate"></form-builder-option>' +
          '<form-builder-option-custom-validation></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
