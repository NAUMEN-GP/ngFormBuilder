var _map = require('lodash/map');
module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(
      formioComponentsProvider
    ) {
      formioComponentsProvider.register('file', {
        onEdit: [
          '$scope',
          'Formio',
          function($scope, Formio) {
            // Pull out title and name from the list of storage plugins.
            $scope.storage = _map(Formio.providers.storage, function(storage, key) {
              return {
                title: storage.title,
                name: key
              };
            });
            $scope.filterViews();
          }
        ],
        icon: 'fa fa-file',
        views: [
          {
            name: 'Display',
            template: 'formio/components/file/display.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/file/validate.html'
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
        documentation: 'http://help.form.io/userguide/#file'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/file/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'storage\')">' +
            '<label for="storage" form-builder-tooltip="Which storage to save the files in.">{{\'Storage\' | formioTranslate}}</label>' +
            '<select class="form-control" id="storage" name="storage" ng-options="store.name as store.title | formioTranslate for store in storage" ng-model="component.storage"></select>' +
          '</div>' +
          '<form-builder-option property="url" ng-show="component.storage === \'url\'"></form-builder-option>' +
          '<form-builder-option property="dir" ng-if="displayOption(\'Display\', \'dir\')"></form-builder-option>' +
          '<form-builder-option property="image" ng-if="displayOption(\'Display\', \'image\')"></form-builder-option>' +
          '<form-builder-option property="imageSize" ng-if="component.image"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple" ng-if="displayOption(\'Display\', \'multiple\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected" ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="hidden" ng-if="displayOption(\'Display\', \'hidden\')"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/file/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
