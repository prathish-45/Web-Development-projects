import React from "react";
import Entry from "./Entry";
import emoji from "../emojipedia";

function emojiMap(emoji) {
  return(
    <Entry 
      key = {emoji.id}
      emoji = {emoji.emoji}
      name = {emoji.name}
      meaning = {emoji.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emoji.map(emojiMap)}
      </dl>
    </div>
  );
}

export default App;
