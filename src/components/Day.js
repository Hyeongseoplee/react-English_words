import dummy from '../db/data.json';
import Word from './Word';
import { useParams } from 'react-router-dom';

export default function Day() {
    const { words } = dummy;
    const { day } = useParams();
    
    const wordList = words.filter((word) => {
        return word.day === Number(day)
    })


    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map((word) => <Word key={word.id} word={word}/>)}
                </tbody>
            </table>
        </>
    )
}