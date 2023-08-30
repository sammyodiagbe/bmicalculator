import Logo from "./assets/logo.svg";
import ManImage from "./assets/image-man-eating.webp";
import IconSleep from "./assets/icon-sleep.svg";
import IconEating from "./assets/icon-eating.svg";
import IconExcercise from "./assets/icon-exercise.svg";
import IconGender from "./assets/icon-gender.svg";
import IconAge from "./assets/icon-age.svg";
import IconMuscle from "./assets/icon-muscle.svg";
import IconPregnacy from "./assets/icon-pregnancy.svg";
import IconRace from "./assets/icon-race.svg";
import { useState } from "react";

function App() {
  const [unit, setUnit] = useState("metric");
  return (
    <div className="App">
      <header>
        <div className="background" />
        <img src={Logo} alt="Company logo" />
        <section className="text-content">
          <div className="introduction">
            <h1 className="title">Body Mass Index Calculator</h1>
            <p>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <div className="form-container">
            <form className="form">
              <h2 className="title">Enter your details below</h2>
              <div className="unit-container">
                <label className="input-label" htmlFor="metric">
                  <input type="radio" id="metric" name="unit" hidden />
                  <span className="custom-radio">
                    <span className="sub" />
                  </span>
                  <span className="title">Metric</span>
                </label>
                <label className="input-label" htmlFor="imperial">
                  <input type="radio" id="imperial" name="unit" hidden />
                  <span className="custom-radio">
                    <span className="sub" />
                  </span>
                  <span className="title">Imperial</span>
                </label>
              </div>
              {unit === "metric" ? (
                <div className="inputs-container metric">
                  <div className="input-container">
                    <input placeholder="0" type="number" name="cm" />
                    <span className="unit">cm</span>
                  </div>
                  <div className="input-container">
                    <input placeholder="0" type="number" name="kg" />
                    <span className="unit">kg</span>
                  </div>
                </div>
              ) : (
                <div className="inputs-container imperial">
                  <div className="input-container">
                    <input placeholder="0" type="number" name="cm" />
                    <span className="unit">cm</span>
                  </div>
                  <div className="input-container">
                    <input placeholder="0" type="number" name="kg" />
                    <span className="unit">kg</span>
                  </div>
                  <div className="input-container">
                    <input placeholder="0" type="number" name="cm" />
                    <span className="unit">cm</span>
                  </div>
                  <div className="input-container">
                    <input placeholder="0" type="number" name="kg" />
                    <span className="unit">kg</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      </header>
      <section className="result-meaning">
        <img src={ManImage} alt="Man eating" />
        <aside className="write-up">
          <h2 className="title">What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </aside>
      </section>
      <section className="tips">
        <div className="tip">
          <img src={IconEating} alt="Eating healthy is important" />
          <div className="writeup">
            <h3>Healthy eating</h3>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="tip">
          <img src={IconExcercise} alt="Eating healthy is important" />
          <div className="writeup">
            <h3>Regular exercise</h3>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longetivity.
            </p>
          </div>
        </div>
        <div className="tip">
          <img src={IconSleep} alt="Eating healthy is important" />
          <div className="writeup">
            <h3>Adequate sleep</h3>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </section>
      <section className="limitations">
        <aside className="write-up">
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indivator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </aside>
        <aside className="limitations">
          <div className="limitation">
            <div className="head">
              <img src={IconGender} alt="Gender" />
              <h3>Gender</h3>
            </div>
            <p>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
          <div className="limitation">
            <div className="head">
              <img src={IconAge} alt="Gender" />
              <h3>Age</h3>
            </div>
            <p>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="limitation">
            <div className="head">
              <img src={IconMuscle} alt="Gender" />
              <h3>Muscle</h3>
            </div>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
          <div className="limitation">
            <div className="head">
              <img src={IconPregnacy} alt="Gender" />
              <h3>Pregnancy</h3>
            </div>
            <p>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="limitation">
            <div className="head">
              <img src={IconRace} alt="Gender" />
              <h3>Race</h3>
            </div>
            <p>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default App;
