import dummy from '../db/data.json';
import { Link } from 'react-router-dom';

export default function Daylist() {
    const { days } = dummy;

    return(
        <ul className="list_day">
            {days.map((day) => {
                return (
                <li key={day.id}>
                    <Link to={'/words/1'}>Day {day.day}</Link>
                </li>
                )
            })}
        </ul>
    )
}
