import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "Apa yang dimaksud dengan hidrolisis garam?",
      options: [
        "A. Reaksi garam dengan basa",
        "B. Reaksi garam dengan air",
        "C. Reaksi garam dengan asam",
        "D. Reaksi garam dengan logam",
      ],
      correctOption: "B",
      explanation:
        "Hidrolisis garam adalah reaksi antara garam dengan air yang menghasilkan ion H+ atau OH-.",
    },
    {
      question: "Garam dari asam lemah dan basa kuat akan menghasilkan larutan dengan sifat apa?",
      options: [
        "A. Asam",
        "B. Basa",
        "C. Netral",
        "D. Tidak bereaksi",
      ],
      correctOption: "B",
      explanation:
        "Garam dari asam lemah dan basa kuat menghasilkan larutan yang bersifat basa karena ion OH- lebih dominan.",
    },
    {
      question: "Garam apa yang akan membentuk larutan asam setelah dilarutkan dalam air?",
      options: [
        "A. NaCl",
        "B. CH3COONa",
        "C. NH4Cl",
        "D. Na2SO4",
      ],
      correctOption: "C",
      explanation:
        "NH4Cl merupakan garam dari asam lemah (NH4OH) dan basa kuat (HCl), sehingga larutannya bersifat asam.",
    },
    {
      question: "Apa yang akan terjadi jika larutan Na2CO3 dicampurkan dengan air?",
      options: [
        "A. Larutan akan menjadi netral",
        "B. Larutan akan bersifat asam",
        "C. Larutan akan bersifat basa",
        "D. Tidak ada reaksi",
      ],
      correctOption: "C",
      explanation:
        "Na2CO3 adalah garam dari asam lemah (H2CO3) dan basa kuat (NaOH), sehingga larutannya bersifat basa.",
    },
    {
      question: "Mengapa garam dari asam kuat dan basa kuat tidak menyebabkan hidrolisis?",
      options: [
        "A. Asam kuat sepenuhnya terionisasi",
        "B. Basa kuat tidak terionisasi",
        "C. Reaksi hidrolisis tidak terjadi pada pH netral",
        "D. Asam dan basa tidak bereaksi satu sama lain",
      ],
      correctOption: "C",
      explanation:
        "Asam kuat dan basa kuat menghasilkan larutan yang netral, sehingga tidak terjadi hidrolisis dan tidak ada perubahan pH.",
    },
    {
      question: "Apa yang dimaksud dengan hidrolisis garam yang menyebabkan pembentukan ion H+?",
      options: [
        "A. Garam yang berasal dari asam kuat dan basa kuat",
        "B. Garam yang berasal dari asam lemah dan basa kuat",
        "C. Garam yang berasal dari asam kuat dan basa lemah",
        "D. Garam yang berasal dari asam lemah dan basa lemah",
      ],
      correctOption: "C",
      explanation:
        "Garam dari asam kuat dan basa lemah akan terhidrolisis menghasilkan ion H+, membuat larutan bersifat asam.",
    },
    {
      question: "Garam dari asam lemah dan basa lemah akan menghasilkan larutan dengan pH yang bersifat?",
      options: [
        "A. Asam",
        "B. Basa",
        "C. Netral",
        "D. Tergantung pada konsentrasi",
      ],
      correctOption: "D",
      explanation:
        "Garam dari asam lemah dan basa lemah dapat menghasilkan larutan yang pH-nya tergantung pada kekuatan asam dan basa serta konsentrasi garam.",
    },
    {
      question: "Bagaimana cara menentukan apakah larutan garam bersifat asam atau basa?",
      options: [
        "A. Menambah air ke larutan",
        "B. Mengukur pH larutan",
        "C. Menggunakan indikator universal",
        "D. Semua jawaban benar",
      ],
      correctOption: "B",
      explanation:
        "Untuk mengetahui sifat larutan, kita dapat mengukur pH larutan tersebut. pH yang lebih rendah dari 7 menunjukkan sifat asam, sedangkan pH lebih tinggi dari 7 menunjukkan sifat basa.",
    },
    {
      question: "Apa yang terjadi jika larutan Na2SO4 dilarutkan dalam air?",
      options: [
        "A. Larutan akan bersifat netral",
        "B. Larutan akan bersifat asam",
        "C. Larutan akan bersifat basa",
        "D. Tidak bereaksi",
      ],
      correctOption: "A",
      explanation:
        "Na2SO4 adalah garam dari asam kuat (H2SO4) dan basa kuat (NaOH), sehingga larutannya bersifat netral.",
    },
    {
      question: "Pada larutan garam apa yang terjadi jika garam dari asam lemah dan basa lemah terlarut?",
      options: [
        "A. Tidak terjadi hidrolisis",
        "B. Terjadi hidrolisis yang menghasilkan ion H+ dan OH-",
        "C. Terjadi reaksi pembentukan garam baru",
        "D. pH larutan tetap netral",
      ],
      correctOption: "B",
      explanation:
        "Pada garam yang berasal dari asam lemah dan basa lemah, keduanya akan terhidrolisis menghasilkan ion H+ dan OH-, yang mempengaruhi pH larutan.",
    },
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
