import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "Apa yang dimaksud dengan larutan penyangga?",
      options: ["A. Larutan yang pH-nya berubah drastis saat ditambah air", "B. Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa", "C. Larutan yang dapat mempercepat reaksi kimia", "D. Larutan yang hanya mengandung air dan garam"],
      correctOption: "B",
      explanation: "Larutan penyangga dapat mempertahankan pH-nya meskipun ditambahkan sedikit asam atau basa."
    },
    {
      question: "Komponen utama larutan penyangga adalah?",
      options: ["A. Air dan garam", "B. Asam lemah dan basa kuat", "C. Asam lemah dan garamnya, atau basa lemah dan garamnya", "D. Asam kuat dan basa kuat"],
      correctOption: "C",
      explanation: "Larutan penyangga terdiri dari asam lemah dan garamnya, atau basa lemah dan garamnya."
    },
    {
      question: "pH larutan penyangga asam dapat dihitung menggunakan rumus?",
      options: ["A. pH = -log[H+]", "B. pH = pKa + log([garam]/[asam])", "C. pH = pKa - log([garam]/[asam])", "D. pH = -log[OH-]"],
      correctOption: "B",
      explanation: "pH larutan penyangga asam dihitung dengan rumus pH = pKa + log([garam]/[asam])."
    },
    {
      question: "Larutan yang termasuk larutan penyangga basa adalah?",
      options: ["A. HCl dan NaCl", "B. CH3COOH dan CH3COONa", "C. NH3 dan NH4Cl", "D. HNO3 dan NaNO3"],
      correctOption: "C",
      explanation: "NH3 dan NH4Cl merupakan larutan penyangga basa karena terdiri dari basa lemah dan garamnya."
    },
    {
      question: "Apa fungsi larutan penyangga dalam tubuh manusia?",
      options: ["A. Meningkatkan kecepatan reaksi metabolisme", "B. Menjaga kestabilan pH darah", "C. Menguraikan zat-zat makanan", "D. Menghancurkan racun dalam tubuh"],
      correctOption: "B",
      explanation: "Larutan penyangga menjaga kestabilan pH darah agar tetap sekitar 7,4."
    },
    // More questions can be added here
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset the selection for the next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Reset the selection for the previous question
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    setSelectedOption(null); // Reset selection when question is changed from dropdown
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button previous-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Soal Sebelumnya
        </button>
        <div className="question-box">
          <h2>Soal {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Soal Berikutnya &rarr;
        </button>
      </div>

      <div className="interactive-section">
        <div className="dropdown-container">
          <label htmlFor="question-dropdown">Pilih Soal:</label>
          <select
            id="question-dropdown"
            value={currentQuestion}
            onChange={handleDropdownChange}
          >
            {questions.map((_, index) => (
              <option key={index} value={index + 1}>
                Soal {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="options-container">
          {questions[currentQuestion - 1].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedOption === option
                  ? option === questions[currentQuestion - 1].correctOption
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="explanation-container">
            <p className="explanation-text">
              {questions[currentQuestion - 1].explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatihanSoal;
