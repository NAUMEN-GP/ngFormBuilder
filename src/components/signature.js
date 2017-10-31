module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('signature', {
        icon: 'fa fa-pencil',
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/signature/display.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/signature/validate.html'
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
        documentation: 'http://help.form.io/userguide/#signature'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/signature/display.html',
        '<ng-form>' +
          '<form-builder-option property="footer" ng-if="displayOption(\'Display\', \'footer\')" label="Footer Label" placeholder="Footer Label" title="The footer text that appears below the signature area."></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="width" ng-if="displayOption(\'Display\', \'width\')" label="Width" placeholder="Width" title="The width of the signature area."></form-builder-option>' +
          '<form-builder-option property="height" ng-if="displayOption(\'Display\', \'height\')" label="Height" placeholder="Height" title="The height of the signature area."></form-builder-option>' +
          '<form-builder-option property="backgroundColor" ng-if="displayOption(\'Display\', \'backgroundColor\')" label="Background Color" placeholder="Background Color" title="The background color of the signature area."></form-builder-option>' +
          '<form-builder-option property="penColor" ng-if="displayOption(\'Display\', \'penColor\')" label="Pen Color" placeholder="Pen Color" title="The ink color for the signature area."></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      // Create the Validation markup.
      $templateCache.put('formio/components/signature/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
