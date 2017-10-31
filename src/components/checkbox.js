module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('checkbox', {
        icon: 'fa fa-check-square',
        onEdit: ['$scope', function($scope) {
          $scope.inputTypes = [
            {
              name: 'checkbox',
              title: 'Checkbox'
            },
            {
              name: 'radio',
              title: 'Radio'
            }
          ];
          $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/checkbox/display.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/checkbox/validate.html'
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
        documentation: 'http://help.form.io/userguide/#checkbox'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/checkbox/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'inputType\')">' +
            '<label for="inputType" form-builder-tooltip="This is the input type used for this checkbox.">{{\'Input Type\' | formioTranslate}}</label>' +
            '<select class="form-control" id="inputType" name="inputType" ng-options="inputType.name as inputType.title | formioTranslate for inputType in inputTypes" ng-model="component.inputType"></select>' +
          '</div>' +
          '<div class="form-group" ng-if="component.inputType === \'radio\'">' +
          '  <label for="name" form-builder-tooltip="The key used to trigger the radio button toggle.">{{\'Radio Key\' | formioTranslate}}</label>' +
          '  <input type="text" class="form-control" id="name" name="name" ng-model="component.name" placeholder="{{ component.key }}" />' +
          '</div>' +
          '<div class="form-group" ng-if="component.inputType === \'radio\'">' +
          '  <label for="value" form-builder-tooltip="The value used with this radio button.">{{\'Radio Value\' | formioTranslate}}</label>' +
          '  <input type="text" class="form-control" id="value" name="value" ng-model="component.value" placeholder="{{ component.value }}" />' +
          '</div>' +
          '<form-builder-option property="datagridLabel" ng-if="displayOption(\'Display\', \'datagridLabel\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected" ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/checkbox/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option-custom-validation ng-if="displayOption(\'Validation\', \'customValidation\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
