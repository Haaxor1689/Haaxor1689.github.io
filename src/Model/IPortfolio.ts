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
    readonly headline: string;
    readonly summary: string;
}

export interface IContacts {
    readonly email?: string;
    readonly linkedin?: string;
    readonly twitter?: string;
    readonly stackoverflow?: string;
    readonly github?: string;
    readonly pinterest?: string;
    readonly links?: ILink[];
}

export interface IPortfolioItem {
    readonly start: string;
    readonly end?: string;
    readonly description?: string;
}

export interface IExperience extends IPortfolioItem {
    readonly title: string;
    readonly company: ICompany;
}

export interface IEducation extends IPortfolioItem {
    readonly degree?: string;
    readonly field: string;
    readonly school: ICompany;
}

export interface IProject extends IPortfolioItem {
    readonly type: string;
    readonly name: string;
    readonly role: string;
    readonly preview?: string;
    readonly images?: ILink[];
    readonly links?: ILink[];
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