import { data } from "../data.js";
import { isWord } from "../logic/is-word.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";

const warnings = document.getElementById("warnings");

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log("-- handler: input word --");

  /* -- check the target -- */
  if (event.target.type !== "button") {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value; // input field
  const action = event.target.value; // add or remove button
  const thyWarning = document.getElementById("warnings");

  if (action === "add") {
      thyWarning.textContent = ``;
      if (!isWord(text)) {
      // write into innerHTML the message
      // const thyWarning = document.getElementById("warnings");
      thyWarning.textContent = `"${text}" is not a word!`;
      thyWarning.style.color = "red";
      console.log(`${text} is not a word!`);
    } else {
      console.log("adding to the list");
      data.words.push(text);
      console.log(data);
    }
  } // else{
  if (action === "remove") {
    thyWarning.textContent = ``;
    // 1-word is in the list -> remove; 2- word is not in the list- warning
    if (data.words.includes(text)) {
      // in the list DELETE
      console.log("i will delete");
      const index = data.words.indexOf(text);
      if (index > -1) {
        // HERE!!!
        data.words.splice(index, 1);
        console.log(data);
      }
    } else {
      
      thyWarning.textContent = `"${text}" is not in the list!`;
      thyWarning.style.color = "red";
      console.log(`${text} is not in the list`);
    }
  }

  /* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
    a user can remove words from the list
      given the input is not in the list
        a warning is posted
      given the input is in the list
        it is removed
        the list is re-rendered
  */

  // ... write some code ...

  /* -- render new words -- */
  const sorted = sortStrings(data.words, data.sort);
  updateList(sorted);
};
