import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan larutan penyangga?",
      options: [
        "Larutan yang pH-nya berubah drastis saat ditambah air",
        "Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa",
        "Larutan yang dapat mempercepat reaksi kimia",
        "Larutan yang hanya mengandung air dan garam"
      ],
      correctOption: "Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa",
      explanation: "Larutan penyangga dapat mempertahankan pH-nya meskipun ditambahkan sedikit asam atau basa."
    },
    {
      question: "Komponen utama larutan penyangga adalah?",
      options: [
        "Air dan garam",
        "Asam lemah dan basa kuat",
        "Asam lemah dan garamnya, atau basa lemah dan garamnya",
        "Asam kuat dan basa kuat"
      ],
      correctOption: "Asam lemah dan garamnya, atau basa lemah dan garamnya",
      explanation: "Larutan penyangga terdiri dari asam lemah dan garamnya, atau basa lemah dan garamnya."
    },
    {
      question: "pH larutan penyangga asam dapat dihitung menggunakan rumus?",
      options: [
        "pH = -log[H+]",
        "pH = pKa + log([garam]/[asam])",
        "pH = pKa - log([garam]/[asam])",
        "pH = -log[OH-]"
      ],
      correctOption: "pH = pKa + log([garam]/[asam])",
      explanation: "pH larutan penyangga asam dihitung dengan rumus pH = pKa + log([garam]/[asam])."
    },
    {
      question: "Larutan yang termasuk larutan penyangga basa adalah?",
      options: [
        "HCl dan NaCl",
        "CH3COOH dan CH3COONa",
        "NH3 dan NH4Cl",
        "HNO3 dan NaNO3"
      ],
      correctOption: "NH3 dan NH4Cl",
      explanation: "NH3 dan NH4Cl merupakan larutan penyangga basa karena terdiri dari basa lemah dan garamnya."
    },
    {
      question: "Apa fungsi larutan penyangga dalam tubuh manusia?",
      options: [
        "Meningkatkan kecepatan reaksi metabolisme",
        "Menjaga kestabilan pH darah",
        "Menguraikan zat-zat makanan",
        "Menghancurkan racun dalam tubuh"
      ],
      correctOption: "Menjaga kestabilan pH darah",
      explanation: "Larutan penyangga menjaga kestabilan pH darah agar tetap sekitar 7,4."
    },
    {
      question: "Apa yang dimaksud dengan hidrolisis garam?",
      options: [
        "Reaksi garam dengan basa",
        "Reaksi garam dengan air",
        "Reaksi garam dengan asam",
        "Reaksi garam dengan logam"
      ],
      correctOption: "Reaksi garam dengan air",
      explanation: "Hidrolisis garam adalah reaksi antara garam dengan air yang menghasilkan ion H+ atau OH-."
    },
    {
      question: "Garam dari asam lemah dan basa kuat akan menghasilkan larutan dengan sifat apa?",
      options: [
        "Asam",
        "Basa",
        "Netral",
        "Tidak bereaksi"
      ],
      correctOption: "Basa",
      explanation: "Garam dari asam lemah dan basa kuat menghasilkan larutan yang bersifat basa karena ion OH- lebih dominan."
    },
    {
      question: "Apa yang terjadi jika larutan NaCl dilarutkan dalam air?",
      options: [
        "Bersifat asam",
        "Bersifat basa",
        "Bersifat netral",
        "Tidak larut"
      ],
      correctOption: "Bersifat netral",
      explanation: "NaCl merupakan garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya bersifat netral."
    },
    {
      question: "Apa sifat larutan yang dihasilkan oleh NH4Cl?",
      options: [
        "Asam",
        "Basa",
        "Netral",
        "Tidak bereaksi"
      ],
      correctOption: "Asam",
      explanation: "NH4Cl merupakan garam dari asam lemah (NH4+) dan basa kuat (Cl-), sehingga larutannya bersifat asam."
    },
    {
      question: "Manakah di bawah ini yang merupakan contoh garam netral?",
      options: [
        "CH3COONa",
        "NaCl",
        "NH4Cl",
        "KCN"
      ],
      correctOption: "NaCl",
      explanation: "NaCl adalah garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya netral."
    }
  ];
  

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      resetSelection();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      resetSelection();
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const resetSelection = () => {
    setSelectedOption(null);
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    resetSelection();
  };

  const handleConfirmationResponse = (response) => {
    if (response === "yes") {
      setSelectedOption(true); // Tampilkan pembahasan
    }
    setShowConfirmation(false); // Hilangkan pesan
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

      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="popup-content">
            <p>Yakin mau melihat pembahasan sekarang?</p>
            <div className="popup-buttons">
              <button
                className="popup-button no-button"
                onClick={() => handleConfirmationResponse("no")}
              >
                Tidak
              </button>
              <button
                className="popup-button yes-button"
                onClick={() => handleConfirmationResponse("yes")}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatihanSoal;