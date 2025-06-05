import { createServer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        routes() {
            this.namespace = "api"
            this.timing = 3000 

            this.get("/educations", () => ({
                data: [
                    { "date": 2001, "title": "Title 0", "text": "Elit voluptate ad nostrud laboris..." },
                    { "date": 2000, "title": "Title 1", "text": "Et irure culpa ad proident..." },
                    { "date": 2012, "title": "Title 2", "text": "Labore esse tempor nisi..." },
                    { "date": 2015, "title": "Title 3", "text": "Cupidatat excepteur enim..." },
                    { "date": 2017, "title": "Title 4", "text": "Sint amet excepteur deserunt..." }
                ]
            })
        )

            this.get("/skills", () => {
                let skills = localStorage.getItem("skills")
                return {
                    skills: skills ? JSON.parse(skills) : []
                }
            })

            this.post("/skills", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let skills = localStorage.getItem("skills")
                skills = skills ? JSON.parse(skills) : []
                skills.push(attrs)
                localStorage.setItem("skills", JSON.stringify(skills))
                return { skill: attrs }
            })
        },
    })
    return server
}