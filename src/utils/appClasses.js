class Education {
    constructor(uuid) {
        this.startDate = '';
        this.endDate = '';
        this.course = '';
        this.grade = '';
        this.id = uuid;
    }
}

class Work {
    constructor(uuid) {
        this.designation = '';
        this.startDate = '';
        this.endDate = '';
        this.description = '';
        this.id = uuid;
    }
}

class Skills {
    constructor(uuid) {
        this.position = '';
        this.techstack = '';
        this.id = uuid;
    }
}

class Project {
    constructor(uuid) {
        this.designation = '';
        this.startDate = '';
        this.endDate = '';
        this.description = '';
        this.id = uuid;
    }
}

export {Education, Work, Skills, Project};