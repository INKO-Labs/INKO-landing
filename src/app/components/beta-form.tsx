'use client';

import { useState } from "react";
import { registerBetaTester } from "../registerBetaTester";
import { showToast } from "./toast";

export default function BetaTesterForm(props: {
  language: 'en' | 'ko';
}) {
  const { language } = props;
  const [email, setEmail] = useState('')

  return (
    <form className="flex flex-col sm:flex-row gap-4 justify-center"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await registerBetaTester(email);
          showToast(
            language === 'ko'
              ? '성공적으로 등록되었습니다.'
              : 'You have been successfully registered.',
            'info'
          );
        } catch (e) {
          showToast(
            language === 'ko'
              ? '등록에 실패했습니다. 다시 시도해주세요.'
              : 'Registration failed. Please try again.',
            'error'
          );
        }
      }}
    >
      <input
        type="text"
        placeholder={language === 'ko' ? "이메일 또는 전화번호" : 'Email or phone number'}
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded bg-white"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition hover:cursor-pointer"
      >
        {language === 'ko' ? '신청하기' : 'Apply Now'}
      </button>
    </form>
  );
}