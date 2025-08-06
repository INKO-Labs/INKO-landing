"use client";

import { useState } from "react";
import { registerBetaTester } from "../registerBetaTester";
import { showToast } from "./toast";
import { LandingPageText } from "@/i18n/landing/LandingPageText";

export default function BetaTesterForm(props: {
  text: LandingPageText["betaTesting"]["form"];
}) {
  const { text } = props;
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex flex-col sm:flex-row gap-4 justify-center"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await registerBetaTester(email);
          showToast(text.success, "info");
        } catch (e) {
          showToast(text.fail, "error");
        }
      }}
    >
      <input
        type="text"
        placeholder={text.placeholder}
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded bg-white"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition hover:cursor-pointer"
      >
        {text.label}
      </button>
    </form>
  );
}
