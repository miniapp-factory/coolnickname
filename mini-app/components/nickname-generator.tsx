"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NicknameGenerator() {
  const [keyword, setKeyword] = useState("");
  const [nickname, setNickname] = useState("");

  const adjectives = ["Slick", "Brave", "Mighty", "Swift", "Clever"];
  const nouns = ["Falcon", "Tiger", "Dragon", "Phoenix", "Wolf"];

  const generate = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    setNickname(`${adj}${noun}${keyword}`);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-2 rounded"
      />
      <Button onClick={generate}>Generate Nickname</Button>
      {nickname && <span className="text-xl font-bold">{nickname}</span>}
    </div>
  );
}
