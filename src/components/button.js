module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    'FORM_OPTIONS',
    function(
      formioComponentsProvider,
      FORM_OPTIONS
    ) {
      formioComponentsProvider.register('button', {
        onEdit: ['$scope', function($scope) {
          $scope.actions = FORM_OPTIONS.actions;
          $scope.sizes = FORM_OPTIONS.sizes;
          $scope.themes = FORM_OPTIONS.themes;
          $scope.filterViews();
        }],
        icon: 'fa fa-stop',
        views: [
          {
            name: 'Display',
            template: 'formio/components/button/display.html'
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
        documentation: 'http://help.form.io/userguide/#button'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/button/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'action\')">' +
            '<label for="action" form-builder-tooltip="This is the action to be performed by this button.">{{\'Action\' | formioTranslate}}</label>' +
            '<select class="form-control" id="action" name="action" ng-options="action.name as action.title | formioTranslate for action in actions" ng-model="component.action"></select>' +
          '</div>' +
          '<div class="form-group" ng-if="component.action === \'event\'">' +
          '  <label for="event" form-builder-tooltip="The event to fire when the button is clicked.">{{\'Button Event\' | formioTranslate}}</label>' +
          '  <input type="text" class="form-control" id="event" name="event" ng-model="component.event" placeholder="event" />' +
          '</div>' +
          '<div class="form-group" ng-if="component.action === \'custom\'">' +
          '  <label for="custom" form-builder-tooltip="The custom logic to evaluate when the button is clicked.">{{\'Button Custom Logic\' | formioTranslate}}</label>' +
          '  <formio-script-editor rows="10" id="custom" name="custom" ng-model="component.custom" placeholder="/*** Example Code ***/\ndata[\'mykey\'] = data[\'anotherKey\'];"></formio-script-editor>' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'theme\')">' +
            '<label for="theme" form-builder-tooltip="The color theme of this panel.">{{\'Theme\' | formioTranslate}}</label>' +
            '<select class="form-control" id="theme" name="theme" ng-options="theme.name as theme.title | formioTranslate for theme in themes" ng-model="component.theme"></select>' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Display\', \'size\')">' +
            '<label for="size" form-builder-tooltip="The size of this button.">{{\'Size\' | formioTranslate}}</label>' +
            '<select class="form-control" id="size" name="size" ng-options="size.name as size.title | formioTranslate for size in sizes" ng-model="component.size"></select>' +
          '</div>' +
          '<form-builder-option property="leftIcon" ng-if="displayOption(\'Display\', \'leftIcon\')"></form-builder-option>' +
          '<form-builder-option property="rightIcon" ng-if="displayOption(\'Display\', \'rightIcon\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="block" ng-if="displayOption(\'Display\', \'block\')"></form-builder-option>' +
          '<form-builder-option property="disableOnInvalid" ng-if="displayOption(\'Display\', \'disableOnInvalid\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
