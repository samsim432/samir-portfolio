import { useEffect, useMemo, useState } from "react";
import { baseQuestions } from "../data/quizData";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import "./Quiz.css";

const categories = [
  { id: "space", title: "Space", icon: "🚀" },
  { id: "physics", title: "Physics", icon: "⚛️" },
  { id: "ai", title: "AI & Technology", icon: "🤖" },
  { id: "general", title: "General Knowledge", icon: "🌍" },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function makeQuestions(category, paper) {
  const allQuestions = baseQuestions[category] || [];
  const startIndex = (paper - 1) * 30;
  const endIndex = startIndex + 30;

  return allQuestions.slice(startIndex, endIndex).map((q, index) => ({
    id: `${category}-${paper}-${index + 1}`,
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer,
  }));
}

function Quiz() {
  const [screen, setScreen] = useState("categories");
  const [category, setCategory] = useState(null);
  const [paper, setPaper] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userName, setUserName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [saving, setSaving] = useState(false);

  const questions = useMemo(() => {
    if (!category || !paper) return [];
    return makeQuestions(category, paper);
  }, [category, paper]);

  const correctCount = answers.filter((a) => a.isCorrect).length;
  const incorrectCount = answers.length - correctCount;
  const percentage = Math.round((correctCount / 30) * 100);

  const nextQuestion = (answerValue = "") => {
    const q = questions[current];
    if (!q) return;

    const newAnswer = {
      question: q.question,
      selected: answerValue || "No answer",
      correct: q.answer,
      isCorrect: answerValue === q.answer,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected("");
      setTimeLeft(60);
    } else {
      setScreen("result");
    }
  };

  useEffect(() => {
    if (screen !== "quiz") return;

    if (timeLeft === 0) {
      nextQuestion("");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, screen]);

  const startPaper = (paperNo) => {
    const paperQuestions = makeQuestions(category, paperNo);

    if (paperQuestions.length < 30) {
      alert(
        "This paper does not have 30 questions yet. Please add more questions in quizData.js."
      );
      return;
    }

    setPaper(paperNo);
    setCurrent(0);
    setAnswers([]);
    setSelected("");
    setTimeLeft(60);
    setUserName("");
    setScreen("quiz");
  };

  const loadLeaderboard = async () => {
    const q = query(
  collection(db, "quizScores"),
  orderBy("score", "desc"),
  limit(10)
);

    const snap = await getDocs(q);

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setLeaderboard(data);
  };

  const saveScore = async () => {
    if (!userName.trim()) {
      alert("Please enter your name");
      return;
    }

    try {
      setSaving(true);

      await addDoc(collection(db, "quizScores"), {
        name: userName.trim(),
        category,
        paper,
        score: correctCount,
        incorrect: incorrectCount,
        percentage,
        total: 30,
        createdAt: serverTimestamp(),
        date: new Date().toLocaleDateString(),
      });

      await loadLeaderboard();
      setScreen("leaderboard");
    } catch (error) {
      console.error(error);
      alert("Score not saved. Please check Firebase rules.");
    } finally {
      setSaving(false);
    }
  };

  const resetQuiz = () => {
    setScreen("papers");
    setCurrent(0);
    setSelected("");
    setAnswers([]);
    setTimeLeft(60);
    setUserName("");
  };

  return (
    <section className="quiz-page">
      {screen === "categories" && (
        <>
          <h1>Quiz Categories</h1>
          <p>Choose a category and start your quiz exam.</p>

          <div className="category-grid">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="category-card"
                onClick={() => {
                  setCategory(cat.id);
                  setScreen("papers");
                }}
              >
                <span>{cat.icon}</span>
                <h3>{cat.title}</h3>
              </button>
            ))}
          </div>
        </>
      )}

      {screen === "papers" && (
        <>
          <button className="back-btn" onClick={() => setScreen("categories")}>
            ← Back
          </button>

          <h1>Question Papers</h1>
          <p>Select one question paper. Each paper has 30 MCQs.</p>

          <div className="paper-grid">
            {Array.from({ length: 10 }, (_, i) => (
              <button key={i} onClick={() => startPaper(i + 1)}>
                Question Paper {i + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {screen === "quiz" && questions[current] && (
        <div className="quiz-card">
          <div className="quiz-top">
            <span>Question {current + 1} of 30</span>
            <span className={timeLeft <= 10 ? "timer danger" : "timer"}>
              ⏱ {timeLeft}s
            </span>
          </div>

          <div className="progress-bar">
            <div style={{ width: `${((current + 1) / 30) * 100}%` }}></div>
          </div>

          <h2>{questions[current].question}</h2>

          <div className="quiz-options">
            {questions[current].options.map((opt) => (
              <button
                key={opt}
                className={selected === opt ? "selected" : ""}
                disabled={selected !== ""}
                onClick={() => {
                  setSelected(opt);

                  setTimeout(() => {
                    nextQuestion(opt);
                  }, 400);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === "result" && (
        <div className="result-card">
          <h1>Quiz Completed</h1>

          <div className="score-box">
            <h2>{correctCount}/30</h2>
            <p>{percentage}% Score</p>
          </div>

          <p>Correct Answers: {correctCount}</p>
          <p>Incorrect Answers: {incorrectCount}</p>

          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <button className="next-btn" onClick={saveScore} disabled={saving}>
            {saving ? "Saving..." : "Save Score"}
          </button>

          <button className="retake-btn" onClick={resetQuiz}>
            Retake Paper
          </button>

          <div className="answer-summary">
            <h3>Answer Summary</h3>

            {answers.map((a, i) => (
              <div key={i} className={a.isCorrect ? "right" : "wrong"}>
                <strong>
                  {i + 1}. {a.question}
                </strong>
                <p>Your answer: {a.selected}</p>
                <p>Correct answer: {a.correct}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === "leaderboard" && (
        <div className="leaderboard-card">
          <h1>Leaderboard</h1>

          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>%</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.score}/30</td>
                  <td>{item.percentage}%</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="next-btn" onClick={() => setScreen("categories")}>
            Take Another Quiz
          </button>
        </div>
      )}
    </section>
  );
}

export default Quiz;