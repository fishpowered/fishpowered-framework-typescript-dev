1) Dynamic forms e.g. activity editing, form can change based on type. Would the service have params for every single field type or separate service per type? probably every single field and the repository validation logic would have to error/ignore unintentional fields. Or a form object is passed to service as argument
2) Dynamic db content e.g. wrm where customers can assign data dynamically. Field definitions would then need to be passed add(...CustomField $foo)
3) Dynamic tables/lists/reports/graphs e.g. project report, single service that prompts user input 

USE CASES NEED TO WRITE PSEUDOCODE FOR
- Activity editing page with dynamic form
- Todo list style app, e.g. accepting hierarchical data
- Editing dynamic db fields
- flexible permissions
- report output
- data import

TODO
- How can extra service info be passed? e.g. a service prompts for more information but the service method doesn't have a param for it? 
  Should more complex services use form style validation? Maybe all should use an expected request/request validation specification? 
  Pros: request can be fully validated before execution, Cons: not native php/code hintable
  Alternatively the service just has extra optional fields that are only required when the service says so... 
  Pre-invoke request validation can only be done by type sniffing OR by having "validateOnly" service params OR having an isValid(...)
- Field logic (a field should NOT know about where it is stored, the repository it is passed to decides that based on the field ID
  given), every field should be identifiable as a particular field from a particular table (namespace?)
    - setting values on objects automatically when values passed in
    - work through real use case form example.. how will ORM code work?
    - how can fields work through composition instead of inheritance? Chained list of validators and filters?
- how to only accept posts? default? interface?
- maybe all services should have option to abstract as interface
- Service help/descriptions
- Code gen

FRAMEWORK STRUCTURE (INCLUDES CODE GEN BUT ALSO META DATA)

Database\Table\<List|Add|Edit|Remove|Import|Help>
Database\Table\Field\<List|Add|Edit|Remove|Import|Help>
DataEntity\<List|Add|Edit|Remove|Import|Help|AbstractInterface>
DataEntity\Field\<List|Add|Edit|Remove|Import|Help|AbstractInterface>
Service\<List|Add|Edit|Remove|Import|Help|AbstractInterface>
Type\<List|Add|Edit|Remove|Import|Help>

PERMISSIONS COULD BE SOMETHING LIKE

user.hasPermission('ActivityEditing/Activity/beginDateTime', 'write')
^ if there is no permission set for this, it will recurse up the tree until it finds a permission
^ second param defines behaviour