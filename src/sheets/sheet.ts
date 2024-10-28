import { Flatfile } from "@flatfile/api";

export const sheet: Flatfile.SheetConfig = {
  name: "Beep Beep, I'm a Sheet",
  slug: "sheet",
  fields: [
      // Example
    { 
        key: "userName",
        type: "string",
        label: "User",
    },
    {
        key: "firstName",
        type: "string",
        label: "First Name",
    },
    {
        key: "lastName",
        type: "string",
        label: "Last Name",
    },
    {
        key: "Phone",
        type: "number",
        label: "Phone",
    },
    {
        key: "email",
        type: "string",
        label: "Email",
    },
    {
        key: "Subscribed",
        type: "boolean",
        label: "Subscribed",
    },
    {
        key: "Country",
        type: "enum",
        label: "Country",
        config: {
            options: [
                { value: 'default', label: 'default' },
                { value: 'USA', label: 'USA' },
                { value: 'England', label: 'England' },                 
            ]
        }
    },
    {
        key: "Postal Code",
        type: "number",
        label: "Postal Code",
    },
    {
        key: "Date of Birth",
        type: "number",
        label: "Date of Birth",
    },
    {
        key: "Credit Card",
        type: "number",
        label: "Credit Card",
    },
    {
        key: "sexOfApplicant",
        type: "enum",
        label: "Applicant Sex",
        config: {
            options: [ 
                {
                    value: "Male",
                    label: "Male",
                },
                {
                    value: "Female",
                    label: "Female",
                },
            ],
        }, 
        alternativeNames: ["sex of applicant", "applicantSex"],
    },
    {
        key: "sexOfCoApplicant",
        type: "enum",
        label: "Co-Applicant Sex",
        config: {
            options: [ 
                {
                    value: "Male",
                    label: "Male",
                },
                {
                    value: "Female",
                    label: "Female",
                },
            ],
        }, 
        alternativeNames: ["sex of coApplicant", "coApplicantSex", "coApplicant Sex"],
      }, 
      {
          key: "applicantAge",
          type: "string",
          label: "Applicant Age",
          alternativeNames: ["applicant age", "APPLICANT AGE"],
      },
      {
          key: "coApplicantAge",
          type: "string",
          label: "Co-Applicant Age",        
          alternativeNames: ["coapplicant age"],
      },       
  ],
    actions: [
    {
      operation: 'count-sub-records',
      mode: "foreground",
      label: 'Count Subscribers',
      description: 'Are you sure you want to run this action?',
      tooltip: 'Click to run action'      
    }
  ]
}