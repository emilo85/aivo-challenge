export class Video {
    
    title:string;
    description:string;
    programType:string;
    images:string;
    releaseYear:string;

    constructor(title:string, description:string, programType:string, images:string, releaseYear:string)
    {
        this.title = title;
        this.description = description; 
        this.programType = programType;
        this.images = images;
        this.releaseYear = releaseYear;
    }   
}