import FirstComponent from './FirstComponet';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import {FifthComponent} from './FirstComponet'; // If we want to import something that is not deflaut component but eligible for importing (in the same file) we have to use this {}
import LearningJavaScript from './LearningJavaScript';


export default function LearningComponnet() {
    return (
      <div className="App">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
        <LearningJavaScript/>
      </div>
    );
  }