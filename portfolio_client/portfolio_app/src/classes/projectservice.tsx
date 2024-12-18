export class ProjectService {
    port: any;

    constructor(port: number) {
        this.port = port;
    }

    getProjects = async (category: number) => {
        let url !: string;
        
        try {
            // if 0 is provided, all results are returned
            category > 0
            ? url = `http://127.0.0.1:${this.port}/api/projects/?category_id=${category}`
            : url = `http://127.0.0.1:${this.port}/api/projects`
            const response = await fetch(url)
            let projects = await response.json();
            if (response.ok) {
                return projects;
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
        }
    }
}