import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= moduleName %>'<%= modu=''%><%= noModu = "" %><%= name == moduleName ? ", [\n" +
  "  uiRouter\n"+
  "]" :''%>)

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
