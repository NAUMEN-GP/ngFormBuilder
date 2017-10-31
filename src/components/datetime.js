module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('datetime', {
        onEdit: ['$scope', function($scope) {
          // FOR-34 - Update 12hr time display in the field, not only time picker.
          $scope.$watch('component.timePicker.showMeridian', function(value) {
            var _old = value ? 'HH' : 'hh';
            var _new = !value ? 'HH' : 'hh';

            if ($scope.component.enableTime) {
              $scope.component.format = $scope.component.format.toString().replace(_old, _new);
            }
          });

          $scope.setFormat = function() {
            var stdFormatDateTime = 'yyyy-MM-dd HH:mm';
            var stdFormatDate     = 'yyyy-MM-dd';
            var stdFormatTime     = 'HH:mm';
            if ($scope.component.timePicker.showMeridian) {
                stdFormatDateTime = 'yyyy-MM-dd hh:mm';
                stdFormatTime     = 'hh:mm';
            }
            var stdFormats        = [stdFormatDateTime, stdFormatDate, stdFormatTime];

            if ($scope.component.enableDate && $scope.component.enableTime && stdFormats.indexOf($scope.component.format) !== -1) {
              $scope.component.format = stdFormatDateTime;
            }
            else if ($scope.component.enableDate && !$scope.component.enableTime && stdFormats.indexOf($scope.component.format) !== -1) {
              $scope.component.format = stdFormatDate;
            }
            else if (!$scope.component.enableDate && $scope.component.enableTime && stdFormats.indexOf($scope.component.format) !== -1) {
              $scope.component.format = stdFormatTime;
            }
          };
          $scope.startingDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          $scope.modes = [
            {
              name: 'day',
              label: 'Day'
            },
            {
              name: 'month',
              label: 'Month'
            },
            {
              name: 'year',
              label: 'Year'
            }
          ];
          $scope.filterViews();
        }],
        icon: 'fa fa-calendar-plus-o',
        views: [
          {
            name: 'Display',
            template: 'formio/components/datetime/display.html'
          },
          {
            name: 'Date',
            template: 'formio/components/datetime/date.html'
          },
          {
            name: 'Time',
            template: 'formio/components/datetime/time.html'
          },
          {
            name: 'Validation',
            template: 'formio/components/datetime/validate.html'
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
        documentation: 'http://help.form.io/userguide/#datetime'
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      // Create the settings markup.
      $templateCache.put('formio/components/datetime/display.html',
        '<ng-form>' +
          '<form-builder-option property="label" ng-if="displayOption(\'Display\', \'label\')"></form-builder-option>' +
          '<form-builder-option property="defaultDate" ng-if="displayOption(\'Display\', \'defaultDate\')"></form-builder-option>' +
          '<form-builder-option property="placeholder" ng-if="displayOption(\'Display\', \'placeholder\')"></form-builder-option>' +
          '<form-builder-option property="description" ng-if="displayOption(\'Display\', \'description\')"></form-builder-option>' +
          '<form-builder-option property="tooltip" ng-if="displayOption(\'Display\', \'tooltip\')"></form-builder-option>' +
          '<form-builder-option property="errorLabel" ng-if="displayOption(\'Display\', \'errorLabel\')"></form-builder-option>' +
          '<form-builder-option property="format" ng-if="displayOption(\'Display\', \'format\')" label="Date Format" placeholder="Enter the Date format" title="The format for displaying this field\'s date. The format must be specified like the <a href=\'https://docs.angularjs.org/api/ng/filter/date\' target=\'_blank\'>AngularJS date filter</a>."></form-builder-option>' +
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

      $templateCache.put('formio/components/datetime/date.html',
        '<ng-form>' +
          '<div class="checkbox" ng-if="displayOption(\'Date\', \'enableDate\')">' +
            '<label form-builder-tooltip="Enables date input for this field.">' +
              '<input type="checkbox" id="enableDate" name="enableDate" ng-model="component.enableDate" ng-checked="component.enableDate" ng-change="setFormat()"> {{\'Enable Date Input\' | formioTranslate}}' +
            '</label>' +
          '</div>' +
          '<form-builder-option ng-if="displayOption(\'Date\', \'datePicker.minDate\')" property="datePicker.minDate"></form-builder-option>' +
          '<form-builder-option ng-if="displayOption(\'Date\', \'datePicker.maxDate\')" property="datePicker.maxDate"></form-builder-option>' +
          '<div class="form-group" ng-if="displayOption(\'Date\', \'startingDay\')">' +
            '<label for="startingDay" form-builder-tooltip="The first day of the week.">{{\'Starting Day\' | formioTranslate}}</label>' +
            '<select class="form-control" id="startingDay" name="startingDay" ng-model="component.datePicker.startingDay" ng-options="idx as day | formioTranslate for (idx, day) in startingDays"></select>' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Date\', \'minMode\')">' +
            '<label for="minMode" form-builder-tooltip="The smallest unit of time view to display in the date picker.">{{\'Minimum Mode\' | formioTranslate}}</label>' +
            '<select class="form-control" id="minMode" name="minMode" ng-model="component.datePicker.minMode" ng-options="mode.name as mode.label | formioTranslate for mode in modes"></select>' +
          '</div>' +
          '<div class="form-group" ng-if="displayOption(\'Date\', \'maxMode\')">' +
            '<label for="maxMode" form-builder-tooltip="The largest unit of time view to display in the date picker.">{{\'Maximum Mode\' | formioTranslate}}</label>' +
            '<select class="form-control" id="maxMode" name="maxMode" ng-model="component.datePicker.maxMode" ng-options="mode.name as mode.label | formioTranslate for mode in modes"></select>' +
          '</div>' +
          '<form-builder-option ng-if="displayOption(\'Date\', \'datePicker.yearRows\')" property="datePicker.yearRows" label="Number of Years Displayed (Rows)" placeholder="Year Range (Rows)" title="The number of years to display in the years view (Rows)."></form-builder-option>' +
          '<form-builder-option ng-if="displayOption(\'Date\', \'datePicker.yearColumns\')" property="datePicker.yearColumns" label="Number of Years Displayed (Columns)" placeholder="Year Range (Columns)" title="The number of years to display in the years view (Columns)."></form-builder-option>' +
          '<form-builder-option ng-if="displayOption(\'Date\', \'datePicker.showWeeks\')" property="datePicker.showWeeks" type="checkbox" label="Show Week Numbers" title="Displays the week numbers on the date picker."></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/datetime/time.html',
        '<ng-form>' +
          '<div class="checkbox" ng-if="displayOption(\'Time\', \'enableTime\')">' +
            '<label form-builder-tooltip="Enables time input for this field.">' +
              '<input type="checkbox" id="enableTime" name="enableTime" ng-model="component.enableTime" ng-checked="component.enableTime" ng-change="setFormat()"> {{\'Enable Time Input\' | formioTranslate}}' +
            '</label>' +
          '</div>' +
          '<form-builder-option ng-if="displayOption(\'Time\', \'timePicker.hourStep\')" property="timePicker.hourStep" type="number" label="Hour Step Size" title="The number of hours to increment/decrement in the time picker."></form-builder-option>' +
          '<form-builder-option ng-if="displayOption(\'Time\', \'timePicker.minuteStep\')" property="timePicker.minuteStep" type="number" label="Minute Step Size" title="The number of minutes to increment/decrement in the time picker."></form-builder-option>' +
          '<form-builder-option ng-if="displayOption(\'Time\', \'timePicker.showMeridian\')" property="timePicker.showMeridian" type="checkbox" label="12 Hour Time (AM/PM)" title="Display time in 12 hour time with AM/PM."></form-builder-option>' +
          '<form-builder-option ng-if="displayOption(\'Time\', \'timePicker.readonlyInput\')" property="timePicker.readonlyInput" type="checkbox" label="Read-Only Input" title="Makes the time picker input boxes read-only. The time can only be changed by the increment/decrement buttons."></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/datetime/validate.html',
        '<ng-form>' +
          '<form-builder-option property="validate.required" ng-if="displayOption(\'Validation\', \'validate.required\')"></form-builder-option>' +
          '<form-builder-option-custom-validation ng-if="displayOption(\'Validation\', \'customValidation\')"></form-builder-option-custom-validation>' +
        '</ng-form>'
      );
    }
  ]);
};
