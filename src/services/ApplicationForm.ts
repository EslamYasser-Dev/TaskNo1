export class ApplicationForm {
    id: string;
    type: string;
    attributes: {
      coverImage: string;
      personalInformation: {
        "First Name": string;
        "Last Name": string;
        Email: string;
        Phone: {
          internalUse: boolean;
          show: boolean;
        };
        Nationality: {
          internalUse: boolean;
          show: boolean;
        };
        "Current Residence": {
          internalUse: boolean;
          show: boolean;
        };
        "ID Number": {
          internalUse: boolean;
          show: boolean;
        };
        "Date of Birth": {
          internalUse: boolean;
          show: boolean;
        };
        Gender: {
          internalUse: boolean;
          show: boolean;
        };
        "Personal Questions": {
          id: string;
          type: string;
          question: string;
          choices: string[];
          maxChoice: number;
          disqualify: boolean;
          other: boolean;
        }[];
      };
      profile: {
        Education: {
          mandatory: boolean;
          show: boolean;
        };
        Experience: {
          mandatory: boolean;
          show: boolean;
        };
        Resume: {
          mandatory: boolean;
          show: boolean;
        };
        "Profile Questions": {
          id: string;
          type: string;
          question: string;
          choices: string[];
          maxChoice: number;
          disqualify: boolean;
          other: boolean;
        }[];
      };
      customisedQuestions: {
        id: string;
        type: string;
        question: string;
        choices: string[];
        maxChoice: number;
        disqualify: boolean;
        other: boolean;
      }[];
    };
  
    constructor(
      id: string,
      type: string,
      attributes: {
        coverImage: string;
        personalInformation: {
          "First Name": string;
          "Last Name": string;
          Email: string;
          Phone: {
            internalUse: boolean;
            show: boolean;
          };
          Nationality: {
            internalUse: boolean;
            show: boolean;
          };
          "Current Residence": {
            internalUse: boolean;
            show: boolean;
          };
          "ID Number": {
            internalUse: boolean;
            show: boolean;
          };
          "Date of Birth": {
            internalUse: boolean;
            show: boolean;
          };
          Gender: {
            internalUse: boolean;
            show: boolean;
          };
          "Personal Questions": {
            id: string;
            type: string;
            question: string;
            choices: string[];
            maxChoice: number;
            disqualify: boolean;
            other: boolean;
          }[];
        };
        profile: {
          Education: {
            mandatory: boolean;
            show: boolean;
          };
          Experience: {
            mandatory: boolean;
            show: boolean;
          };
          Resume: {
            mandatory: boolean;
            show: boolean;
          };
          "Profile Questions": {
            id: string;
            type: string;
            question: string;
            choices: string[];
            maxChoice: number;
            disqualify: boolean;
            other: boolean;
          }[];
        };
        customisedQuestions: {
          id: string;
          type: string;
          question: string;
          choices: string[];
          maxChoice: number;
          disqualify: boolean;
          other: boolean;
        }[];
      }
    ) {
      this.id = id;
      this.type = type;
      this.attributes = attributes;
    }
  }