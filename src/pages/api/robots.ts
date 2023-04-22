import { NextApiRequest, NextApiResponse } from 'next';
import robots from '../../assets/robots.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { name } = req.query;

        console.log({ name });

        console.log('robots', robots);

        // filter robots by name and description but regex:
        const filteredRobots = robots.filter(robot => {
            // const nameMatches = robot.name.match(name as string);
            // const descriptionMatches = robot.description.match(description as string);
            const nameMatches = robot.name.match(new RegExp(name as string, 'i'));
            const descriptionMatches = robot.description.match(new RegExp(name as string, 'i'));
            return nameMatches || descriptionMatches;
        });

        console.log('filteredRobots', filteredRobots);

        // handle GET request
        res.status(200).json(filteredRobots);
    }
}