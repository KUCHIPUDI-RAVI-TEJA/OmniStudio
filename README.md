Here’s a clean, readable version you can paste directly into your README.
Formatting is consistent, spaced, and easy to scan.

---

# OmniStudio

## DataRaptor Turbo Extract Exercises

---

## **Exercise 1 — Retrieve Fields From Case Record**

**Goal:** Use a DataRaptor Turbo Extract to fetch Case records with the following fields:

* Id
* Case Number
* Description
* Priority
* Reason
* Status
* Subject

**File:**
`[RetrieveFieldsFromCaseRecordDRTE](force-app/main/default/omniDataTransforms/RetrieveFieldsFromCaseRecordDRTE_1.rpt-meta.xml)`

**Result:** <img src="image-1.png" width="300" />

---

## **Exercise 2 — Use Operators to Fetch and Sort Case Records**

**Goal:** Fetch **3 Case records**, return the fields below, and sort by **Case Number DESC**:

* Id
* Case Number
* Description
* Priority
* Reason
* Status
* Subject

**File:**
`[UpdateOperatorsToFetchAndSortRecordsDRTE](force-app/main/default/omniDataTransforms/UpdateOperatorsToFetchAndSortRecordsDRTE_1.rpt-meta.xml)`

**Result:** <img src="image-2.png" width="300" />

---

## **Exercise 3 — Use Variable and Relationship Notation for Filtering**

**Goal:** Fetch Case records where the related **Account.Industry** matches a variable `accountindustry`.
Return fields:

* Id
* Case Number
* Industry

**File:**
`[Exercise3DRTE](force-app/main/default/omniDataTransforms/Exercise3DRTE_1.rpt-meta.xml)`

**Result:** <img src="image-3.png" width="300" /> <img src="image-4.png" width="300" />

---

## **Exercise 4 — Use Relationship Filters on Account and Contact**

**Goal:** Fetch Case records where **Account.Industry = 'Manufacturing'**.
Return fields:

* Id
* Case Number
* AccountNumber (Account)
* Industry (Account)
* Name (Contact)

**File:**
`[Exercise4DRTE](force-app/main/default/omniDataTransforms/Exercise4DRTE_1.rpt-meta.xml)`

**Result:** <img src="image-5.png" width="300" /> <img src="image-6.png" width="300" />

---

## **Exercise 5 — Work With Complex Input JSON**

**Goal:** Modify the DataRaptor from Exercise 4 to accept nested JSON input:

```json
{
  "accounts": {
    "sections": {
      "industry": "Banking"
    }
  }
}
```

**File:**
`[Exercise4DRTE](force-app/main/default/omniDataTransforms/Exercise4DRTE_1.rpt-meta.xml)`

**Result:** <img src="image-5.png" width="300" /> <img src="image-6.png" width="300" />
