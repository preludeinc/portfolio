export class Project {
    title: string;
    description: string;
    category_id: number;
    
    constructor({title, description, category_id} : 
        { title: string, description: string, category_id: number}) {
        this.title = title;
        this.description = description;
        this.category_id = category_id;
    }
}