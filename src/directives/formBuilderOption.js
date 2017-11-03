/**
* This directive creates a field for tweaking component options.
* This needs at least a property attribute specifying what property
* of the component to bind to.
*
* If the property is defined in COMMON_OPTIONS above, it will automatically
* populate its label, placeholder, input type, and tooltip. If not, you may specify
* those via attributes (except for tooltip, which you can specify with the title attribute).
* The generated input will also carry over any other properties you specify on this directive.
*/
module.exports = ['COMMON_OPTIONS', '$filter', function(COMMON_OPTIONS, $filter) {
  return {
    restrict: 'E',
    require: 'property',
    priority: 2,
    replace: true,
    template: function(el, attrs) {
      var formioTranslate = $filter('formioTranslate');

      var property = attrs.property;
      var label = attrs.label || (COMMON_OPTIONS[property] && COMMON_OPTIONS[property].label) || '';
      var placeholder = attrs.placeholder || (COMMON_OPTIONS[property] && COMMON_OPTIONS[property].placeholder) || null;
      var type = attrs.type || (COMMON_OPTIONS[property] && COMMON_OPTIONS[property].type) || 'text';
      var tooltip = attrs.tooltip || (COMMON_OPTIONS[property] && COMMON_OPTIONS[property].tooltip) || '';

      var input = type === 'textarea' ? angular.element('<textarea></textarea>') : angular.element('<input>');

      var displayableProperty = property === "customViewProperties[p.property]" ? "{{component."+property+"}}" : property;
      var displayableLabel = label.startsWith("{{") ? label : formioTranslate(label);
      var displayableTooltip = tooltip.startsWith("{{") ? tooltip : formioTranslate(tooltip);
      var displayablePlaceholder = placeholder.startsWith("{{") ? placeholder : formioTranslate(placeholder);

      var isCalculatedType = type === "p.type";
      var displayableType = isCalculatedType ? "{{" + type + "}}" : type;
      var conditionType = isCalculatedType ? type : "'"+type.toLowerCase()+"'";

      var inputAttrs = {
        id: displayableProperty,
        name: displayableProperty,
        type: displayableType,
        placeholder: displayablePlaceholder,
        'ng-model': "component."+property,
        'ng-class': "{'form-control': 'checkbox' != " + conditionType + "}"
      };

      // Pass through attributes from the directive to the input element
      angular.forEach(attrs.$attr, function(key) {
        var attrValue = attrs[attrs.$normalize(key)];
        if(!key.startsWith("ng")){
            inputAttrs[key] = attrValue;
        }
        // Allow specifying tooltip via title attr
        if (key.toLowerCase() === 'title') {
          tooltip = attrs[key];
        }
      });

      // Add min/max value floor values for validation.
      if (property === 'validate.minLength' || property === 'validate.maxLength') {
        inputAttrs.min = 0;
      }

      input.attr(inputAttrs);

      // Checkboxes have a slightly different layout
      var tpl = '<div>' +
                    '<div class="checkbox" ng-if="\'checkbox\' == '+ conditionType + '">' +
                        '<label for="' + displayableProperty + '" form-builder-tooltip="' + displayableTooltip + '">' +
                            input.prop('outerHTML') + ' ' +
                            displayableLabel +
                        '</label>' +
                    '</div>' +
                    '<div class="form-group" ng-if="\'checkbox\' != ' + conditionType + '">' +
                        '<label for="' + displayableProperty + '" form-builder-tooltip="' + displayableTooltip + '">' +
                            displayableLabel +
                        '</label>' +
                        input.prop('outerHTML') +
                    '</div>' +
                '</div>';

      return tpl;

    /*  if (inputAttrs.type && (inputAttrs.type.toLowerCase() === 'checkbox')) {
        return '<div class="checkbox">' +
                '<label for="' + displayableProperty + '" form-builder-tooltip="' + displayableTooltip + '">' +
                input.prop('outerHTML') +
                ' ' + displayableLabel + '</label>' +
              '</div>';
      }

      input.addClass('form-control');
      return '<div class="form-group">' +
                '<label for="' + displayableProperty + '" form-builder-tooltip="' + displayableTooltip + '">' + displayableLabel + '</label>' +
                input.prop('outerHTML') +
              '</div>';*/
    }
  };
}];
