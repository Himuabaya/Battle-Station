global class BatchApexExampleDes implements Database.Batchable<sObject> 
{
global Database.QueryLocator start(Database.BatchableContext BC)
{
  String query ='SELECT Id, Name, description FROM Account';
  return Database.getQueryLocator(query);
}
 global void execute(Database.BatchableContext BC, List<Account> accList)
 {
     List<account> newList = new List<account>();
     for(Account acc : accList)  
     {
       acc.description ='New Batch Description';
       newList.add(acc);
     }
try 
{ 
    update newList;
    }
    catch (Exception e)
    {
        System.debug(e);
    }
 }
    global void finish(Database.BatchableContext BC)
    { 

}
}