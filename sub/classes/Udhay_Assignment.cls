public class Udhay_Assignment {
    public static void m1()
    {
    List<Customer__c> crList = new  List<Customer__c>();
    for(integer i=0;i<2;i++)
    {
        Customer__c cr = new Customer__c();
        cr.Name = 'Ajit'+i;
        crList.add(cr);
    }
    insert crList;
    
    List<Invice__c> invList = new  List<Invice__c>();
    for(Customer__c crm :crList)
    {
        for(integer i=0;i<2;i++)
        {
            Invice__c invr = new Invice__c();
            invr.Customer__c = crm.id;
            invList.add(invr); 
        }
    }
    insert invList;
        
    }

}