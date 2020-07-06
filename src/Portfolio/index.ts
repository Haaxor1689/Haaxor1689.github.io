import Portfolio from './portfolio.json';

export type PortfolioType = {
	readonly biography: Biography;
	readonly contacts: Contacts;
	readonly experience: Experience[];
	readonly education: Education[];
	readonly skills: Skill[];
	readonly projects: Project[];
};

export type Biography = {
	readonly name: string;
	readonly headline: string;
	readonly summary: string;
};

export type Contacts = {
	readonly email: string;
	readonly linkedin: string;
	readonly twitter: string;
	readonly stackoverflow: string;
	readonly github: string;
};

export type PortfolioItem = {
	readonly start: string;
	readonly end?: string;
	readonly description?: string;
};

export type Experience = {
	readonly title: string;
	readonly company: Company;
} & PortfolioItem;

export type Education = {
	readonly degree?: string;
	readonly field: string;
	readonly school: Company;
} & PortfolioItem;

export type Project = {
	readonly type: string;
	readonly name: string;
	readonly role: string;
	readonly preview?: string;
	readonly images?: Link[];
	readonly links?: Link[];
} & PortfolioItem;

export type Skill = {
	field: string;
	description: string;
};

export type Link = {
	readonly title: string;
	readonly url: string;
};

export type Company = {
	readonly name: string;
	readonly url: string;
	readonly logo?: string;
};

export default Portfolio as PortfolioType;
