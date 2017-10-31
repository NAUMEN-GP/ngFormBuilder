module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('address', {
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        icon: 'fa fa-home',
        views: [
          {
            name: 'Display',
            template: 'formio/components/address/display.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/address/validate.html'
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
        documentation: 'http://help.form.io/userguide/#address'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/address/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'Display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'mapRegion\')">' +
            '<label for="mapRegion" form-builder-tooltip="The region bias to use for this search. See <a href=\'https://developers.google.com/maps/documentation/geocoding/intro#RegionCodes\' target=\'_blank\'>Region Biasing</a> for more information.">{{\'Region Bias\' | formioTranslate}}</label>' +
            '<input type="text" class="form-control" id="mapRegion" name="mapRegion" ng-model="component.map.region" placeholder="Dallas" />' +
          '</div>' +
          '<div class="form-group"  ng-if="displayOption(\'Display\', \'mapKey\')">' +
            '<label for="mapKey" form-builder-tooltip="The API key for Google Maps. See <a href=\'https://developers.google.com/maps/documentation/geocoding/get-api-key\' target=\'_blank\'>Get an API Key</a> for more information.">{{\'Google Maps API Key\' | formioTranslate}}</label>' +
            '<input type="text" class="form-control" id="mapKey" name="mapKey" ng-model="component.map.key" placeholder="xxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxx"/>' +
          '</div>' +
          '<form-builder-option property="multiple" ng-if="displayOption(\'Display\', \'multiple\')" label="Allow Multiple Addresses"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected" ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/address/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option property="unique" ng-if="displayOption(\'Validation\', \'unique\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
