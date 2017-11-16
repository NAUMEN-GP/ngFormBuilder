module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('resource', {
        onEdit: ['$scope', function($scope) {
          $scope.resources = [];
          $scope.component.project = $scope.formio.projectId;
          $scope.formio.loadForms({params: {type: 'resource', limit: 100}}).then(function(resources) {
            $scope.resources = resources;
            if (!$scope.component.resource) {
              $scope.component.resource = resources[0]._id;
            }
          });
          $scope.filterViews();
        }],
        icon: 'fa fa-files-o',
        views: [
          {
            name: 'Display',
            template: 'formio/components/resource/display.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/resource/validate.html'
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
        documentation: 'http://help.form.io/userguide/#resource'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/resource/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'Display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'resource\')">' +
            '<label for="resource" form-builder-tooltip="The resource to be used with this field.">{{\'Resource\' | formioTranslate}}</label>' +
            '<select class="form-control" id="resource" name="resource" ng-options="value._id as value.title for value in resources" ng-model="component.resource"></select>' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'selectFields\')">' +
            '<label for="selectFields" form-builder-tooltip="The properties on the resource to return as part of the options. Separate property names by commas. If left blank, all properties will be returned.">{{\'Select Fields\' | formioTranslate}}</label>' +
            '<input type="text" class="form-control" id="selectFields" name="selectFields" ng-model="component.selectFields" placeholder="Comma separated list of fields to select." value="{{ component.selectFields }}">' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'searchFields\')">' +
            '<label for="searchFields" form-builder-tooltip="A list of search filters based on the fields of the resource. See the <a target=\'_blank\' href=\'https://github.com/travist/resourcejs#filtering-the-results\'>Resource.js documentation</a> for the format of these filters.">{{\'Search Fields\' | formioTranslate}}</label>' +
            '<input type="text" class="form-control" id="searchFields" name="searchFields" ng-model="component.searchFields" ng-list placeholder="The fields to query on the server" value="{{ component.searchFields }}">' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'template\')">' +
            '<label for="template" form-builder-tooltip="The HTML template for the result data items.">{{\'Item Template\' | formioTranslate}}</label>' +
            '<textarea class="form-control" id="template" name="template" ng-model="component.template" rows="3">{{ component.template }}</textarea>' +
          '</div>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple" ng-if="displayOption(\'Display\', \'multiple\')" label="Allow Multiple Resources"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="reference" ng-if="displayOption(\'Display\', \'reference\')"></form-builder-option>' +
          '<form-builder-option property="addResource" ng-if="displayOption(\'Display\', \'addResource\')"></form-builder-option>' +
          '<form-builder-option property="addResourceLabel" ng-if="displayOption(\'Display\', \'addResourceLabel\') && component.addResource"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      // Create the API markup.
      $templateCache.put('formio/components/resource/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
