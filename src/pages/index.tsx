import {useMemo, useState} from "react";
import {TSuggestionsListItem} from "@/components/InputAutoComplete";
import robots from '../assets/robots.json';
import ReactSelect from 'react-select';
import Logo from '../assets/logo.png';
import Image from 'next/image';

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState('');
    const robotsList = useMemo(() => robots.map((item) => {
        return {
            label: `${item.name} (${item.description})`,
            value: item.id
        }}), []);
    const [chosenRobot, setChosenRobot] = useState<any | null>(null);
    const onChooseRobot = (robot: TSuggestionsListItem) => {
        setChosenRobot(robot);
    }

    const runCommand = async () => {
        if(!chosenRobot) return;
        setIsLoading(true);
        const response = await fetch(`/api/run-command?command=${chosenRobot?.value}`);
        const data = await response.json();
        setOutput(data.output);
        setIsLoading(false);
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        runCommand().then();
    };

    const inputStyles = useMemo(() => ({
        control: (provided) => ({
            ...provided,
            maxWidth: '90vw',
            width: '500px',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            display: 'none',
        })
    }), []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-7">
        {/*<h1 className="text-6xl font-bold">Welcome to Q-Monster</h1>*/}
        <Image src={Logo} alt="Q-Monster Logo" width={300} />
        <form onSubmit={formSubmit} className={'flex flex-col gap-7'}>
            <ReactSelect
                value={chosenRobot}
                options={robotsList}
                onChange={(e) => onChooseRobot(e as TSuggestionsListItem)}
                styles={inputStyles}
                placeholder={'Search'}
            />
            <button 
            className={'self-center bg-blue-500 text-white p-2 rounded'} disabled={isLoading} type={'submit'}>
                Search
            </button>
        </form>
        {output && <div className={'flex flex-col gap-3 bg-green-400 p-3 rounded'}>
            <p className="text-xl">Output:</p>
            <p className="text-xl">{output}</p>
        </div>}
    </main>
  )
}
