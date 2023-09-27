
export interface PersonalInformation {
    internalUse: boolean;
    show: boolean;
}

export  interface Question {
    id: string;
    type: string;
    question: string;
    choices: string[];
    maxChoice: number;
    disqualify: boolean;
    other: boolean;
}

export interface Profile {
    education: PersonalInformation;
    experience: PersonalInformation;
    resume: PersonalInformation;
    profileQuestions: Question[];
}

export interface Attributes {
    coverImage: string;
    personalInformation: {
        [key: string]: PersonalInformation | Question[];
    };
    profile: Profile;
    customisedQuestions: Question[];
}

export interface data {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    id: string;
    type: string;
    attributes: Attributes;
}


