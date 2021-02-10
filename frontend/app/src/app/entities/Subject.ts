
export class SubjectInfo{
    typee: string;
    years: [number] ;
    code: string;
    fond: number;
    epsb: number;
    goal: string;
    outcome: string;
    lectureTerm: string;
    exerciseTerm: string;
    additional: string;
    professors: [string];

    constructor(){
        this.years=[-1];
        this.professors=[''];

    }
}

export class SubjectNotification{
    title: string;
    description: string
    date: Date;
}