import { Project } from './project'

export class ProjectService {
    port: any;

    constructor(port: number) {
        this.port = port;
    }

    getProjects(category: number) {
        let projects: Project[] = [];
        let url !: string;
        
        // if 0 is provided, all results are returned
        category > 0
        ? url = `http://127.0.0.1:${this.port}/api/projects/?category_id=${category}`
        : url = `http://127.0.0.1:${this.port}/api/projects`
        fetch(url)
        .then(response => response.json())
        .then(json => {
            json.forEach((element: any) => {
                let p = new Project({title: element.title, 
                                    description: element.description, 
                                    category_id: element.category_id});
                projects.push(p);                                      
            });
        })
        return projects;
    }
}