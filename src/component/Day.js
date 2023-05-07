import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){

  // const inputDay=3;
  const {inputDay} =useParams();

  // Number 는 문자를 숫자로 변환해줌  (url주소에 들어온 숫자는 문자로인식!)
  const wordList = dummy.words.filter(word => (word.day===Number(inputDay)))
// wordList : filter함수로 day가3인 요소들을 담은 배열집합 (words배열집합을 filter재가공한 또다른 배열집합)
 return(
  <>
  <h2> 오늘의 학습 : Day {inputDay} </h2>
    <table>
      <tbody>
        {wordList.map(word =>(
          <Word word={word} key={word.id}></Word>
        ))}
      </tbody>
    </table>
  </>
 )
}