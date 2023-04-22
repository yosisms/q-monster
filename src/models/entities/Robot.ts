interface IRobot {
    id: string;
    name: string;
    description: string;
    path: string;
}

export class Robot implements IRobot {
    id: string;
    name: string;
    description: string;
    path: string;

    constructor(robotInfo: IRobot) {
        this.id = robotInfo.id;
        this.name = robotInfo.name;
        this.description = robotInfo.description;
        this.path = robotInfo.path;
    }
}