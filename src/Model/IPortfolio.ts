export interface IPortfolio {
    readonly biography: IBiography;
    readonly contacts: IContacts;
    readonly experience: IExperience[];
    readonly education: IEducation[];
    readonly skills: ISkill[];
    readonly projects: IProject[];
}

export interface IBiography {
    readonly name: string;
    readonly email: string;
    readonly headline: string;
    readonly summary: string;
}

export interface IContacts {
    readonly linkedin: string;
    readonly twitter: string;
    readonly stackoverflow: string;
    readonly github: string;
    readonly pinterest: string;
    readonly links: ILink[];
}

export interface IPotfolioItem {
    readonly location?: string;
    readonly start: string;
    readonly end?: string;
    readonly description?: string;
}

export interface IExperience extends IPotfolioItem {
    readonly title: string;
    readonly company: ICompany;
}

export interface IEducation extends IPotfolioItem {
    readonly school: ICompany;
    readonly degree?: string;
    readonly field: string;
}

export interface IProject extends IPotfolioItem {
    readonly name: string;
    readonly role: string;
    readonly links: ILink[];
}

export interface ISkill {
    field: string;
    description: string;
}

interface ILink {
    readonly title: string;
    readonly url: string;
}

export interface ICompany {
    readonly name: string;
    readonly url: string;
    readonly logo?: string;
}