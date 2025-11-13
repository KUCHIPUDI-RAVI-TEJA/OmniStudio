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

[RetrieveFieldsFromCaseRecordDRTE](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-1.png" alt="Result - RetrieveFieldsFromCaseRecordDRTE" width="300"> <hr>

### Exercise 2 - Using Operators to fetch and sort Case Records

Use DataRaptor Turbo Extract to fetch 3 Case records and the following fields and order the records by Case Number in descending order
•Id
•Case Number
•Description
•Priority
•Reason
•Status
•Subject

[UpdateOperatorsToFetchAndSortRecordsDRTE](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-2.png" alt="Result - RetrieveFieldsFromCaseRecordDRTE" width="300"> <hr>

### Exercise 3 - Using Variable to fetch Case Records and Relationship Notation as a Filter on associated Account Record

Use DataRaptor Turbo Extract to fetch Case records and the following fields where the Industry field on Account Object is determined by a variable named accountindustry. Add key/value pair as the input parameter to test the DataRaptor.
•Id
•Case Number
•Industry

[UpdateOperatorsToFetchAndSortRecordsDRTE](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml) <br>
<img src="image-2.png" alt="Result - RetrieveFieldsFromCaseRecordDRTE" width="300"> <hr>