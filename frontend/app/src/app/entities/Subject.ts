
export class SubjectInfo{
    typee: string;
    departments: string[];
    years: [number] ;
    code: string;
    name: string;
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
export class File{
    filename:string;
    professor: string;
    fileSize: number;
    date: Date;
}
export class SubjectLab{
    info: string;
    numberOfExercises: number;
    materials: File[]
}

export class SubjectProject{
        info: string;
        materials: File[];
}
export class SubjectNotification{
    title: string;
    description: string
    date: Date;
}

export class SubjectSyllabus{
    name: string;
    date: Date;
    expireDate: Date;
    limit: Number;
    place: string;
    students: string[];
    active: boolean;
}
export class SubjectPlan{
    professor: string;
    number: number;
    typee: string;
}