import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import robots from '../../assets/robots.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { command } = req.query;
    if (!command) {
        res.status(400).send('Missing command parameter');
        return;
    }

    const commandExists = robots.find(c => String(c.id) === String(command));
    if (!commandExists) {
        res.status(400).send('Command not found');
        return;
    }

    exec(commandExists?.command?.toString(), (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            res.status(500).send('An error occurred while running the command.');
            return;
        }
        try {
            const reportFile = stdout.substring(stdout.indexOf('Report:') + 8);
            console.log({ reportFile });
            if(!!reportFile) {
                exec(reportFile, (err) => {
                    if(err) {
                        console.log({err});
                    }
                })
                
            }
        } catch (err) {
            console.log({a: err})
        }
        res.status(200).json({ output: stdout });
    });
}