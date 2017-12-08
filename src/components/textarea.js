module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('textarea', {
        icon: 'fa fa-font',
        onEdit: ['$scope', function($scope) {
            $scope.filterViews();
        }],
        views: [
          {
            name: 'Display',
            template: 'formio/components/textarea/display.html'
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
          }
        ],
        documentation: 'http://help.form.io/userguide/#textarea'
      });
    }
  ]);
  app.controller('wysiwygSettings', ['$scope', function($scope) {
    $scope.wysiwygEnabled = !!$scope.component.wysiwyg || !!$scope.component.wysiwygEnabled;

    var defaultWysiwygSettings = $scope.component.wysiwygSettings || {
        toolbarGroups:  [
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
            {name: 'links', groups: ['links']},
            {name: 'insert', groups: ['insert']},
            '/',
            {name: 'styles', groups: ['Styles', 'Format', 'Font', 'FontSize']},
            {name: 'colors', groups: ['colors']},
            {name: 'clipboard', groups: ['clipboard', 'undo']},
            {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
            {name: 'document', groups: ['mode', 'document', 'doctools']},
            {name: 'others', groups: ['others']},
            {name: 'tools', groups: ['tools']}
        ],
        extraPlugins: 'justify,font',
        removeButtons: 'Cut,Copy,Paste,Underline,Subscript,Superscript,Scayt,About',
        uiColor: '#eeeeee',
        height: '400px',
        width: '100%'
    };

    $scope.wysiwygSettings =
        $scope.wysiwygEnabled && typeof($scope.component.wysiwyg) === "object" ? $scope.component.wysiwyg: defaultWysiwygSettings;

    $scope.component.wysiwyg = $scope.wysiwygEnabled ? $scope.wysiwygSettings : false;

    $scope.$watch('wysiwygEnabled', function(value) {
      $scope.component.wysiwyg = value ? $scope.wysiwygSettings : false;
    });
    $scope.$watch('wysiwygSettings', function(value) {
      if ($scope.wysiwygEnabled) {
        $scope.component.wysiwyg = value;
      }
    });
  }]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/textarea/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'Display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="description" ng-if="displayOption(\'Display\', \'description\')"></form-builder-option>' +
          '<form-builder-option property="rows" ng-if="displayOption(\'Display\', \'rows\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="inputMask" ng-if="displayOption(\'Display\', \'inputMask\')"></form-builder-option>' +
          '<div ng-controller="wysiwygSettings" ng-if="displayOption(\'Display\', \'wysiwygEnabled\')">' +
            '<div class="checkbox">' +
              '<label><input type="checkbox" ng-model="wysiwygEnabled"> {{\'Enable WYSIWYG\' | formioTranslate}}</label>' +
            '</div>' +
            '<div class="form-group">' +
              '<label for="wysiwyg">{{\'WYSIWYG Settings\' | formioTranslate}}</label>' +
              '<textarea class="form-control" rows="5" id="wysiwyg" ng-model="wysiwygSettings" json-input placeholder="Enter the CKEditor JSON configuration to turn this TextArea into a WYSIWYG."></textarea>' +
            '</div>' +
          '</div>' +
          '<form-builder-option property="prefix" ng-if="displayOption(\'Display\', \'prefix\')"></form-builder-option>' +
          '<form-builder-option property="suffix" ng-if="displayOption(\'Display\', \'suffix\')"></form-builder-option>' +
          '<form-builder-option property="customClass" ng-if="displayOption(\'Display\', \'customClass\')"></form-builder-option>' +
          '<form-builder-option property="tabindex" ng-if="displayOption(\'Display\', \'tabindex\')"></form-builder-option>' +
          '<form-builder-option property="multiple" ng-if="displayOption(\'Display\', \'multiple\')"></form-builder-option>' +
          '<form-builder-option property="clearOnHide" ng-if="displayOption(\'Display\', \'clearOnHide\')"></form-builder-option>' +
          '<form-builder-option property="protected" ng-if="displayOption(\'Display\', \'protected\')"></form-builder-option>' +
          '<form-builder-option property="persistent" ng-if="displayOption(\'Display\', \'persistent\')"></form-builder-option>' +
          '<form-builder-option property="disabled" ng-if="displayOption(\'Display\', \'disabled\')"></form-builder-option>' +
          '<form-builder-option property="tableView" ng-if="displayOption(\'Display\', \'tableView\')"></form-builder-option>' +
        '</ng-form>'
      );
    }
  ]);
};
