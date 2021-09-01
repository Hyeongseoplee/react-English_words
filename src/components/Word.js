export default function Word({word}) {
    return (
        <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
        </tr>
    )
}