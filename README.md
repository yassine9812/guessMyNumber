# 🎮 Guess My Number

A fun, retro-style number guessing game inspired by the vibrant design of 80s arcade games.

## 🕹️ How to Play

- The goal is to guess a **secret number between 1 and 20**.
- Enter your guess in the input box and click the **Check** button.
- You'll get feedback:
  - "Too high!" if your guess is higher than the secret number.
  - "Too low!" if your guess is lower than the secret number.
- You start with a score of **20**. Each wrong guess **decreases your score by 1**.
- If your score hits **0**, the game is over.
- When you guess correctly:
  - The layout turns green.
  - Your current score is saved as the **high score** if it’s the best so far.

## 🔄 Play Again

Click the **Again** button to reset the game and try again — your high score will be kept unless you beat it!

## 🛠️ Tech Stack

- Built with **vanilla JavaScript**
- Uses **DOM manipulation** to update the UI dynamically
- Styled with **CSS**, using class changes to reflect game state
