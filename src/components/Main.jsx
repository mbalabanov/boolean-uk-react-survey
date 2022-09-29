import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const initialDuckData = {
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: "",
  };

  const [duckData, setDuckData] = useState(initialDuckData);
  const [listState, setListState] = useState([]);

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "color") {
      setDuckData({ ...duckData, color: inputValue });
    }

    if (inputName === "spendTime") {
      let updatedSpendTimeActivities = [];

      if (duckData.spendTime.includes(inputValue)) {
        updatedSpendTimeActivities = duckData.spendTime.filter(
          (itemInSpendTime) => itemInSpendTime !== inputValue
        );
      } else {
        updatedSpendTimeActivities = [...duckData.spendTime, inputValue];
      }

      setDuckData({ ...duckData, spendTime: updatedSpendTimeActivities });
    }

    if (inputName === "review") {
      setDuckData({ ...duckData, review: inputValue });
    }

    if (inputName === "username") {
      setDuckData({ ...duckData, username: inputValue });
    }
    if (inputName === "email") {
      setDuckData({ ...duckData, email: inputValue });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    setListState([duckData, ...listState]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <AnswersList list={listState} />
      </section>

      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                  checked={duckData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                  checked={duckData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                  checked={duckData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                  checked={duckData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={duckData.spendTime.includes("swimming")}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                    checked={duckData.spendTime.includes("bathing")}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={duckData.spendTime.includes("chatting")}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                    checked={duckData.spendTime.includes("noTime")}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={duckData.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={duckData.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={duckData.email}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
