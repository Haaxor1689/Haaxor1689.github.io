export default interface IPortfolio {
    readonly biography: IBiography;
    readonly contacts: IContacts;
    readonly experience: IExperience[];
    readonly education: IEducation[];
    readonly skills: ISkill[];
    readonly projects: IProject[];
}

interface IBiography {
    readonly name: string;
    readonly email: string;
    readonly headline: string;
    readonly summary: string;
}

interface IContacts {
    readonly linkedin: string;
    readonly twitter: string;
    readonly stackoverflow: string;
    readonly github: string;
    readonly pinterest: string;
    readonly links: ILink[];
}

interface ILink {
    readonly title: string;
    readonly url: string;
}

interface IPotfolioItem {
    readonly location?: string;
    readonly start: string;
    readonly end?: string;
    readonly description?: string;
}

interface IExperience extends IPotfolioItem {
    readonly title: string;
    readonly company: ICompany;
}

interface IEducation extends IPotfolioItem {
    readonly degree: string;
    readonly field: string;
}

interface IProject extends IPotfolioItem {
    readonly name: string;
    readonly role: string;
    readonly links: ILink[];
}

interface ICompany {
    readonly name: string;
    readonly url: string;
    readonly logo?: string;
}

interface ISkill {
    field: string;
    description: string;
}