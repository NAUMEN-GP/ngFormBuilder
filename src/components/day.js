module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('day', {
        icon: 'fa fa-calendar',
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/day/display.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/day/validate.html'
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
        documentation: 'http://help.form.io/userguide/#day'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/day/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="fields.day.placeholder" ng-if="displayOption(\'Display\', \'fields.day.placeholder\')" label="Day Placeholder"></form-builder-option>' +
          '<form-builder-option property="fields.month.placeholder" ng-if="displayOption(\'Display\', \'fields.month.placeholder\')" label="Month Placeholder"></form-builder-option>' +
          '<form-builder-option property="fields.year.placeholder" ng-if="displayOption(\'Display\', \'fields.year.placeholder\')" label="Year Placeholder"></form-builder-option>' +
          '<form-builder-option property="dayFirst" ng-if="displayOption(\'Display\', \'dayFirst\')" type="checkbox" label="Day first" title="Display the Day field before the Month field."></form-builder-option>' +
          '<form-builder-option property="fields.day.hide" ng-if="displayOption(\'Display\', \'fields.day.hide\')" type="checkbox" label="Hide Day" title="Hide the day part of the component."></form-builder-option>' +
          '<form-builder-option property="fields.month.hide" ng-if="displayOption(\'Display\', \'fields.month.hide\')" type="checkbox" label="Hide Month" title="Hide the month part of the component."></form-builder-option>' +
          '<form-builder-option property="fields.year.hide" ng-if="displayOption(\'Display\', \'fields.year.hide\')" type="checkbox" label="Hide Year" title="Hide the year part of the component."></form-builder-option>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
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

      $templateCache.put('formio/components/day/validate.html',
        '<ng-form>' +
          '<form-builder-option property="fields.day.required" ng-if="displayOption(\'Validation\', \'fields.day.required\')" label="Require Day" type="checkbox"></form-builder-option>' +
          '<form-builder-option property="fields.month.required" ng-if="displayOption(\'Validation\', \'fields.month.required\')" label="Require Month" type="checkbox"></form-builder-option>' +
          '<form-builder-option property="fields.year.required" ng-if="displayOption(\'Validation\', \'fields.year.required\')" label="Require Year" type="checkbox"></form-builder-option>' +
          '<form-builder-option-custom-validation ng-if="displayOption(\'Validation\', \'customValidation\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
