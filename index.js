define(function (require, module, exports) {

  /*
  
    Instructions. Delete this before shipping

    All Zeus plugins should use the namespace style zeus-name. 
      You can replace all instances of _name with this name
      You can replace all instance of _Name with the human friendly version of the name
    Require all plugin wide dependencies at the top
    If plugin app has only one tab, define its controller here. 
      Otherwise define the sub-tab controllers in "sections/_sectionName"
    The tab can show an icon, a name, or both
      If an icon add the font-awesome icon name as icon: '_iconName' to the app.register function below
      Simply leave _Name blank to show no title
    The tab can show a notifications bubble if relevant. Simply add notifications: _number to app.register below.
    



   */

  require('css!plugins/_name/style.css');

  var apps = require('registry/apps');
  apps.register(function RevealAppModule() {
    return {
      id: '_name',
      name: '_Name',
      order: 9999999
    };
  });
});
