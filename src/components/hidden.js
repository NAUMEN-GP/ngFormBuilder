module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('hidden', {
        fbtemplate: 'formio/formbuilder/hidden.html',
        icon: 'fa fa-user-secret',
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/hidden/display.html'
          },
          {
            name: 'Data',
            template: 'formio/components/common/data.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/hidden/validation.html'
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
        documentation: 'http://help.form.io/userguide/#hidden'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/formbuilder/hidden.html', '<span class="hidden-element-text">{{ component.label }}</span>');

      // Create the settings markup.
      $templateCache.put('formio/components/hidden/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')" label="Name" placeholder="Enter the name for this hidden field" title="The name for this field. It is only used for administrative purposes such as generating the automatic property name in the API tab (which may be changed manually)."></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="protected" ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/hidden/validation.html',
        '<ng-form>' +
          '<form-builder-option property="unique" ng-if="displayOption(\'Validation\', \'unique\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
