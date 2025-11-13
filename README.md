# OmniStudio
## DataRaptor (Mapper) Turbo Extract
### Exercise 1 - Retrieve Fields From Case Record

Use DataRaptor Turbo Extract to fetch Case records and the following fields
•Id
•Case Number
•Description
•Priority
•Reason
•Status
•Subject
HINT: If you’re using an environment variable as a Filter value, you must double-quote it. These variables are case-sensitive.

[Exercise1DRTE](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-1.png" alt="Result - RetrieveFieldsFromCaseRecordDRTE" width="200"> <hr>

### Exercise 2 - Using Operators to fetch and sort Case Records

Use DataRaptor Turbo Extract to fetch 3 Case records and the following fields and order the records by Case Number in descending order
•Id
•Case Number
•Description
•Priority
•Reason
•Status
•Subject

[Exercise2DRTE](force-app/main/default/omniDataTransforms/UpdateOperatorsToFetchAndSortRecordsDRTE_1.rpt-meta.xml) <br>
<img src="image-2.png" alt="Result - RetrieveFieldsFromCaseRecordDRTE" width="200"> <hr>

### Exercise 3 - Using Variable to fetch Case Records and Relationship Notation as a Filter on associated Account Record

Use DataRaptor Turbo Extract to fetch Case records and the following fields where the Industry field on Account Object is determined by a variable named accountindustry. Add key/value pair as the input parameter to test the DataRaptor.
•Id
•Case Number
•Industry

[Exercise3DRTE](force-app/main/default/omniDataTransforms/Exercise3DRTE_1.rpt-meta.xml) <br>
<img src="image-3.png" alt="Exercise3DRTE" width="200">
<img src="image-4.png" alt="Exercise3DRTE" width="200"> <hr>

### Exercise 4 - Fetch Case Records and Relationship Notation as a Filter on associated Account and Contact Record

Use DataRaptor Turbo Extract to fetch Case records and the following fields where the Industry field on Account Object is 'Manufacturing'
•Id
•Case Number
•AccountNumber from Account Object
•Industry from Account Object
•Name from Contact Object

[Exercise4DRTE](force-app/main/default/omniDataTransforms/Exercise4DRTE_1.rpt-meta.xml) <br>
<img src="image-5.png" alt="Exercise4DRTE" width="200">
<img src="image-6.png" alt="Exercise4DRTE" width="200"> <hr>

### Exercise 5 - Working with Complex Input JSON

Modify the DataRaptor from Exercise #4 to take the following
Hint: To Access JSOM Nodes We need to use : semi-colon
Input JSON:
<pre>
{
  "accounts": {
    "sections": {
      "industry": "Media"
    }
  }
}
</pre>
[Exercise5DRTE](force-app/main/default/omniDataTransforms/Exercise5DRTE_1.rpt-meta.xml) <br>
<img src="image-7.png" alt="Exercise5DRTE" width="200">
<img src="image-8.png" alt="Exercise5DRTE" width="200"> <hr>


## DataRaptor (Mapper) Extract
## Exercise 1 - Using Operators to fetch and sort Case Records

Use DataRapror Extract to fetch all Case records and the following fields and order the records by Case Number in descending order
•Id
•Case Number
•Description
•Priority
•Reason
•Status
•Subject

[Exercise1DRE](force-app/main/default/omniDataTransforms/Exercise1DRE_1.rpt-meta.xml) <br>
<img src="image-9.png" alt="Result - Exercise1DRE" width="200"> 
<img src="image-10.png" alt="Result - Exercise1DRE" width="200"> 
<img src="image-11.png" alt="Result - Exercise1DRE" width="200"> <hr>

## Exercise 2 - Use Formula to manipulate data

Use DataRaptor Extract to fetch all Case records and the following fields and order the records by Case Number in descending order. Use the formula function to append Case Number with Priority. 
For example: 004424 - High
•Id
•Case Number
•Description
•Priority

[Exercise2DRE](force-app/main/default/omniDataTransforms/Exercise2DRE_1.rpt-meta.xml) <br>
<img src="image-12.png" alt="Result - Exercise2DRE" width="200"> 
<img src="image-13.png" alt="Result - Exercise2DRE" width="200"> 
<img src="image-14.png" alt="Result - Exercise2DRE" width="200"> <hr>

## Exercise 3 - Use Relationship Notation and Single Extract Step

Use DataRaptor Extract to fetch all Case records and the following fields where the Industry field on the associated Account = Electronics. 
Use Relationship Notation and single Extract Step.
•Id
•Case Number
•Industry from Account Object
•Name from Contact Object

1. Multi Extract Step (Extract Case, Account, Contact Separately)
Disadvantage: 3 Separate Queries will run

[Exercise3DRE](force-app/main/default/omniDataTransforms/Exercise3DRE_1.rpt-meta.xml) <br>
<img src="image-16.png" alt="Result - Exercise3DRE" width="200"> 
<img src="image-17.png" alt="Result - Exercise3DRE" width="200"> 
<img src="image-18.png" alt="Result - Exercise3DRE" width="200"> <hr>

2. Single Extract Step (Extract Case, Account, Contact At Onece)
Advantage: Single Query

[Exercise3InSingleExtractStepDRE](force-app/main/default/omniDataTransforms/Exercise3InSingleExtractStepDRE_1.rpt-meta.xml) <br>
<img src="image-19.png" alt="Result - Exercise3DRE" width="200"> 
<img src="image-20.png" alt="Result - Exercise3DRE" width="200"> 
<img src="image-21.png" alt="Result - Exercise3DRE" width="200"> <hr>

With Filter <br>
<img src="image-22.png" alt="Result - Exercise3DRE" width="200"> 
<img src="image-23.png" alt="Result - Exercise3DRE" width="200"> 
<img src="image-24.png" alt="Result - Exercise3DRE" width="200"> <hr>


## Exercise 4 - Working with complex JSON

Modify the DataRaptor from Exercise #3 to take the following
Hint: To Access JSOM Nodes We need to use : semi-colon
Input JSON:
<pre>
{
  "accounts": {
    "sections": {
      "industry": "Media"
    }
  }
}
</pre>

[Exercise4DRE](force-app/main/default/omniDataTransforms/Exercise2DRE_1.rpt-meta.xml) <br>
<img src="image-25.png" alt="Result - Exercise4DRE" width="200"> 
<img src="image-26.png" alt="Result - Exercise4DRE" width="200"> 
<img src="image-27.png" alt="Result - Exercise4DRE" width="200"> <hr>


## DataRaptor (Mapper) Load
### Exercise 1 - Insert Multiple Records for a Single Object

Design a DataRaptor Load that can create the items shown in the below JSON
<pre>
{
  "accounts": [
    {
      "name": "Test Account 1"
    },
    {
      "name": "Test Account 2"
    },
    {
      "name": "Test Account 3"
    }
  ]
}
</pre>

[Exercise1DRL](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-28.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-29.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-30.png" alt="Result - Exercise1DRL" width="200"> <hr>

### Exercise 2 - Insert Multiple Parent Records with Multiple Child Records

Design a DataRaptor Load that can create the items shown in the below JSON and ensure the case is associated with the contact.
NOTE: Everytime link parents from Childs
<pre>
{
  "cases": [
    {
      "subject": "Broken Engine",
      "contact": {
        "lastName": "Bryant"
      }
    },
    {
      "subject": "Broken Seatbelt",
      "contact": {
        "lastName": "Kobe"
      }
    }
  ]
}

</pre>

[Exercise1DRL](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-31.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-32.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-33.png" alt="Result - Exercise1DRL" width="200"> <hr>

### Exercise 3 - Insert a single Object record linked in Multiple Object Hierarchies

Design a DataRaptor Load that can insert a case record. This case record should be linked to a contact record, which in turn is connected to an Account record. Come up with your own test Input JSON.
<pre>
{
  "cases": [
    {
      "subject": "Broken Engine",
      "contact": {
        "lastName": "Bryant",
        "account": {
          "name": "Bryant Account"
        }
      }
    }
  ]
}
</pre>

[Exercise1DRL](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-35.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-36.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-34.png" alt="Result - Exercise1DRL" width="200"> <hr>

### Exercise 3 - Insert a single Object record linked in Multiple Object Hierarchies

Design a DataRaptor Load that can insert a case record. This case record should be linked to a contact record, which in turn is connected to an Account record. Come up with your own test Input JSON.
<pre>
{
  "cases": [
    {
      "subject": "Broken Engine",
      "contact": {
        "lastName": "Bryant"
      }
    },
    {
      "subject": "Broken Seatbelt",
      "contact": {
        "lastName": "Kobe"
      }
    }
  ]
}

</pre>

[Exercise1DRL](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-35.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-36.png" alt="Result - Exercise1DRL" width="200"> 
<img src="image-34.png" alt="Result - Exercise1DRL" width="200"> <hr>