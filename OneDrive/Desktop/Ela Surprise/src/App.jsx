import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const memories = [
  {
    title: "Where It All Began ❤️",
    image: "/photos/Photo1.jpeg",
    text: "Andha first photo… ❤️ Namma rendu perum serndhu first-ah edutha photo. Adha naan eppovume marakka maaten da. Romba simple-ah edutha photo dhaan, but enakku romba special. Adha paakumbodhu namma first days ellam nyabagam varum. 🥹❤️"
  },
  {
    title: "One Of My Favourites",
    image: "/photos/photo2.jpeg",
    text: "Indha photo namma phone-la love panromnu sollikitta apram, first time ring potta appo eduthadhu. ❤️ Appo enakku enna feel panrenne puriyala… oru pakkam vekkam, innoru pakkam konjam bayam. 😭❤️ Aana andha moment mattum enakku romba special. 🥹"
  },
  {
    title: "Our Funniest Moment 😂",
    image: "/photos/photo3.jpeg",
    text: "Indha photo namma first time outing pona appo eduthadhu. ❤️ Appo love panromnu sollave illa, aana veetuku pora varaikum kaiya pudichute dhaan irundhom. 🥹 Andha naal nee “yen veetuku vandhuriya?” nu ketta appo dhaan, hidden-ah love sonna moment… ippo nenachaalum cute-ah irukku. ❤️."
  },
  {
    title: "That Special Day",
    image: "/photos/photo4.jpeg",
    text: "Indha photo namma first sem result vandha time-la eduthadhu. ❤️ Appo nee college-ku vara maata, discontinue panra nu sonna… aana enna paaka mall-ku vandhutu, paathutu poiruva nu sonna. 🥹 Appo dhaan namma first hug… romba simple-ah irundhalum, andha hug-um adhulaye irundha sirippum enakku romba special. Adha naan eppovume marakka maaten. ❤️"
  },
  {
    title: "Just Us 🫶",
    image: "/photos/photo5.jpeg",
    text: "Indha photo enakku romba favourite. ❤️ Sudden-ah namma eyes meet aana andha moment… un kannula paakumbodhu enakku oru thani feel varum. 🥹 Un kannu paakradhu enakku romba pidikkum da… adhanala dhaan indha pic enakku romba special. ❤️"
  },
  {
    title: "A Memory I Love",
    image: "/photos/photo6.jpeg",
    text: "Indha photo paakumbodhellam enakku namma rendu perum evlo close aagitom nu feel aagum. ❤️ Un kooda irukkura ovvoru moment-um enakku romba special… indha photo-um apdiye oru azhagana memory. 🥹❤️"
  },
  {
    title: "Another Chapter ❤️",
    image: "/photos/photo7.jpeg",
    text: "Indha photo la namma rendu perum irukradha vida, namma bond dhaan enakku romba azhaga theriyudhu. ❤️ Un kooda irukkura chinna chinna moments kooda enakku romba precious da… indha photo adhulaye oru favourite memory. 🥹❤️"
  },
  {
    title: "This One Makes Me Smile",
    image: "/photos/photo8.jpeg",
    text: "Indha photo paakumbodhu enakku oru vishayam dhaan thonum… un kooda irukkura moments ellame enakku special da. ❤️ Namma rendu perum ipdiye happy-ah, close-ah irukkanum nu dhaan always aasai. 🥹❤️."
  },
  {
    title: "Our Little World 🌎",
    image: "/photos/photo9.jpeg",
    text: "My favourite place is wherever we are together."
  },
  {
    title: "One More Memory",
    image: "/photos/photo10.jpeg",
    text: "And there are still so many more to make."
  },
  {
    title: "To Be Continued... ❤️",
    image: "/photos/photo11.jpeg",
    text: "Because our story definitely isn't finished yet."
  }
];

const letters = [
  "I may not say it every day, but you mean more to me than you know. ❤️",
  "You make my ordinary days feel special.",
  "I love the way you understand me without words.",
  "You are my peace, my chaos and somehow my everything.",
  "Thank you for being you.",
  "Whatever happens, I hope we keep making beautiful memories together."
];

const quizQuestions = [
  {
    question: "Who gets angry first? 😂",
    options: ["Me 😌", "You 😂", "Both", "Nobody"],
    answer: 1
  },
  {
    question: "Who is more likely to say sorry first?",
    options: ["Me", "You", "Both 😂", "Depends"],
    answer: 2
  },
  {
    question: "Who loves the other person more?",
    options: ["Me ❤️", "You ❤️", "Obviously both", "Impossible to measure"],
    answer: 2
  }
];

const hiddenVaultPhotos = [
  "/hidden/secret1.jpeg",
  "/hidden/secret2.jpeg",
  "/hidden/secret3.jpeg",
  "/hidden/secret4.jpeg"
];

const whatsappBirthdayMessage = `Happy Birthday ❤️🎂\n\nToday is all about you. I'm so grateful for every memory, every smile and every little moment we've shared. I hope this year brings you everything you deserve.\n\nHappy Birthday to the person who makes my world a little more beautiful every day. ❤️`;

const futureCards = [
  "Our Marriage Day 💍",
  "Our First Home Together 🏡",
  "Our First Trip as Husband & Wife ✈️",
  "Growing Old Together ❤️"
];

const openWhenList = [
  {
    title: "Open when you miss me ❤️",
    icon: "❤️",
    message: "Remember that distance is just a temporary test. Close your eyes, take a deep breath, and know that I'm thinking of you right at this exact moment."
  },
  {
    title: "Open when you're sad 🥺",
    icon: "🥺",
    message: "I wish I could be right there to wrap my arms around you. Whatever is bothering you right now will pass, and I'll always be in your corner."
  },
  {
    title: "Open when you need a hug 🤗",
    icon: "🤗",
    message: "Consider this a warm, giant, tight hug delivered straight to your heart. Imagine me wrapping my arms around you and holding you tight."
  },
  {
    title: "Open when you want to smile 😊",
    icon: "😊",
    message: "Just remember that ridiculous face I make when I try to impress you, or the way we both burst into laughter at jokes nobody else gets!"
  },
  {
    title: "Open when you can't sleep 🌙",
    icon: "🌙",
    message: "Rest your mind... tomorrow is another day for us to create more amazing memories together. Sleep peaceful, my favourite person."
  },
  {
    title: "Open when you need to remember how much I love you ❤️",
    icon: "💖",
    message: "More than words, more than distance, and more than yesterday. You are my absolute favourite person in this world, always and forever."
  }
];

function App() {
  const [started, setStarted] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [openLetter, setOpenLetter] = useState(null);
  const [giftOpened, setGiftOpened] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [futureOpen, setFutureOpen] = useState([]);
  const [vaultPassword, setVaultPassword] = useState("");
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [selectedVaultPhoto, setSelectedVaultPhoto] = useState(null);

  const [musicPlaying, setMusicPlaying] = useState(false);
  const [loveScore, setLoveScore] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    const timer = setInterval(() => {
      setLoveScore((value) => {
        if (value >= 100) return 100;
        return value + 1;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [started]);

  const celebrate = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      startVelocity: 40,
      origin: { y: 0.65 }
    });
  };

  const startSurprise = () => {
    setStarted(true);

    setTimeout(() => {
      document
        .getElementById("secret")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() =>
          alert("Add your song as public/music/our-song.mp3")
        );
    }
  };

  const answerQuiz = (index) => {
    if (index === quizQuestions[quizIndex].answer) {
      setQuizScore((score) => score + 1);
    }

    if (quizIndex === quizQuestions.length - 1) {
      setQuizFinished(true);
      setTimeout(celebrate, 300);
    } else {
      setQuizIndex((value) => value + 1);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const openGift = () => {
    setGiftOpened(true);
    celebrate();
  };

  const unlockVault = () => {
    if (vaultPassword.trim().toLowerCase() === "love") {
      setVaultUnlocked(true);
      celebrate();
    } else {
      alert("Hint: It's the word that connects us ❤️");
    }
  };

  const revealFuture = (index) => {
    if (!futureOpen.includes(index)) {
      setFutureOpen([...futureOpen, index]);
    }
  };

  return (
    <div className="app">

      <FloatingHearts />

      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        loop
      />

      {!started ? (
        <WelcomeScreen onStart={startSurprise} />
      ) : (
        <>
          <Navbar
            musicPlaying={musicPlaying}
            toggleMusic={toggleMusic}
          />

          {/* HERO */}
          <section className="hero-small">
            <div className="container center">

              <span className="eyebrow">
                A LITTLE SOMETHING FOR YOU ❤️
              </span>

              <h1>
                Hey You...
                <br />
                <span>This is all for you.</span>
              </h1>

              <p>
                No expensive gift.
                <br />
                Just a little piece of my heart.
              </p>

              <div className="love-counter">
                <span>Love level</span>

                <div className="progress">
                  <div
                    style={{ width: `${loveScore}%` }}
                  />
                </div>

                <strong>{loveScore}% ❤️</strong>
              </div>

            </div>
          </section>

          {/* 1. SECRET */}
          <section id="secret" className="section">

            <div className="container">

              <SectionHeading
                eyebrow="01 — SECRET"
                title="Don't Click This!"
                subtitle="Seriously... I warned you 👀"
              />

              <div className="secret-box">

                <div className="secret-lock">
                  {secretOpen ? "❤️" : "🔒"}
                </div>

                <h3>
                  There is something hidden here...
                </h3>

                <p>
                  But maybe you shouldn't open it.
                </p>

                <button
                  className="btn primary"
                  onClick={() =>
                    setSecretOpen(!secretOpen)
                  }
                >
                  {secretOpen
                    ? "You Found It ❤️"
                    : "I Warned You..."}
                </button>

                <AnimatePresence>
                  {secretOpen && (
                    <motion.div
                      className="secret-message"
                      initial={{
                        opacity: 0,
                        y: 20
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                    >
                      <span>❤️</span>

                      <p>
                        If you clicked this even after I
                        warned you...
                      </p>

                      <strong>
                        You're officially too curious
                        for your own good 😂
                      </strong>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>

          </section>

          {/* 2. CHAT */}
          <section className="section soft">

            <div className="container">

              <SectionHeading
                eyebrow="02 — OUR CHAT"
                title="A Little Conversation"
                subtitle="Imagine this is our chat right now..."
              />

              <div className="chat-window">

                <div className="chat-header">

                  <div className="avatar">
                    ❤️
                  </div>

                  <div>
                    <strong>My Person</strong>
                    <span>online</span>
                  </div>

                </div>

                <div className="chat-body">

                  <motion.div
                    className="bubble them"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Hey... edhuku idha enakku send panniruka? 👀
                  </motion.div>

                  <motion.div
                    className="bubble me"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Just open pannu… ❤️
                  </motion.div>

                  <motion.div
                    className="bubble them"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Idhu en birthday-ku dhaana? 😭
                  </motion.div>

                  <motion.div
                    className="bubble me"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Maybe... continue pannu ❤️
                  </motion.div>

                  <motion.div
                    className="bubble them"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Okay... ippo romba curious-ah irukku 👀
                  </motion.div>

                  <motion.div
                    className="bubble me"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Actually... idhu dhaan unakku naan kudukka mudinja birthday gift. 🥹❤️

Ennaala mudinja alavuku namma memories ellathayum serthu, unakkaaga idha panniruken. ❤️

Idhu just oru website illa da... namma rendu peroda story. 🥹

Unakku expensive-ah edhuvum kudukka mudiyala... aana ennaala mudinja oru special gift-ah idha kudukkanum nu aasapaten. ❤️

Happy Birthday da, en favourite person. 🎂❤️
                  </motion.div>

                </div>

              </div>

            </div>

          </section>

          {/* 3. NEW FEATURE: BIRTHDAY COUNTDOWN */}
          <BirthdayCountdown celebrate={celebrate} />

          <section className="whatsapp-section">
            <div className="container center">
              <a
                className="btn whatsapp-btn"
                href={`https://wa.me/?text=${encodeURIComponent(whatsappBirthdayMessage)}`}
                target="_blank"
                rel="noreferrer"
              >
                Send Birthday Message on WhatsApp ❤️
              </a>
              <p className="whatsapp-note">WhatsApp will open with the message ready. You can choose the contact and press Send.</p>
            </div>
          </section>

          {/* 4. MEMORY CHECK */}
          <section className="section">

            <div className="container">

              <SectionHeading
                eyebrow="03 — MEMORY CHECK"
                title="Do You Remember?"
                subtitle="Let's take a trip down memory lane..."
              />

              <div className="remember-card">

                <div className="memory-stack">

                  <div className="stack-card one" />
                  <div className="stack-card two" />

                  <div className="stack-main">

                    <span>
                      Do you remember...
                    </span>

                    <h3>
                      our first conversation?
                    </h3>

                    <div className="button-row">

                      <button
                        className="btn primary"
                        onClick={celebrate}
                      >
                        YES ❤️
                      </button>

                      <button
                        className="btn outline"
                        onClick={() =>
                          alert(
                            "I know you remember 😏"
                          )
                        }
                      >
                        I FORGOT 😭
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* 5. 11 PHOTOS MEMORIES */}
          <section
            id="memories"
            className="section soft"
          >

            <div className="container">

              <SectionHeading
                eyebrow="04 — OUR WORLD"
                title="Our Memories"
                subtitle="11 little pieces of our story."
              />

              <div className="memory-grid">

                {memories.map((memory, index) => (

                  <motion.button
                    className="memory-card"
                    key={memory.title}
                    onClick={() =>
                      setSelectedMemory(memory)
                    }
                    whileHover={{
                      y: -8,
                      rotate:
                        index % 2 === 0 ? -1 : 1
                    }}
                    whileTap={{
                      scale: 0.97
                    }}
                  >

                    <div className="photo-frame">

                      <img
                        src={memory.image}
                        alt={memory.title}
                      />

                      <span>❤️</span>

                    </div>

                    <h3>
                      {memory.title}
                    </h3>

                    {memory.text && (
                      <p className="memory-scenario">
                        {memory.text}
                      </p>
                    )}

                    <span className="memory-click-hint">
                      Memory {index + 1} · Click to open →
                    </span>

                  </motion.button>

                ))}

              </div>

            </div>

          </section>

          {/* 6. MEMORY PUZZLE (Photo9) */}
          <section id="puzzle">
            <MemoryPuzzle celebrate={celebrate} />
          </section>

          {/* 7. QUIZ */}
          <section className="section">

            <div className="container">

              <SectionHeading
                eyebrow="05 — LITTLE GAME"
                title="How Well Do You Know Us?"
                subtitle="Let's see if you really know me... 😏"
              />

              <div className="quiz-card">

                {!quizFinished ? (

                  <>

                    <div className="quiz-number">
                      QUESTION {quizIndex + 1} /{" "}
                      {quizQuestions.length}
                    </div>

                    <h2>
                      {quizQuestions[quizIndex].question}
                    </h2>

                    <div className="quiz-options">

                      {quizQuestions[
                        quizIndex
                      ].options.map(
                        (option, index) => (

                          <button
                            key={option}
                            onClick={() =>
                              answerQuiz(index)
                            }
                          >
                            <span>❤️</span>
                            {option}
                          </button>

                        )
                      )}

                    </div>

                  </>

                ) : (

                  <motion.div
                    className="quiz-result"
                    initial={{
                      opacity: 0,
                      scale: 0.8
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                  >

                    <div className="big-heart">
                      ❤️
                    </div>

                    <h2>
                      You scored {quizScore}/
                      {quizQuestions.length}
                    </h2>

                    <p>
                      {quizScore ===
                      quizQuestions.length
                        ? "Okay... you actually know us REALLY well. 🥹"
                        : "Looks like we need another date to study 😂"}
                    </p>

                    <button
                      className="btn primary"
                      onClick={resetQuiz}
                    >
                      Play Again
                    </button>

                  </motion.div>

                )}

              </div>

            </div>

          </section>

          {/* 8. SONG */}
          <section className="section music-section">

            <div className="container">

              <SectionHeading
                eyebrow="06 — OUR SONG"
                title="The Song That Reminds Me Of You"
                subtitle="Same song. Different day. Still you & me."
                light
              />

              <div className="music-player">

                <div className="album-art">

                  <img
                    src="/photos/photo7.jpeg"
                    alt="Our song"
                  />

                  <span>❤️</span>

                </div>

                <div className="music-info">

                  <span>OUR SONG</span>

                  <h2>
                    Your Special Song
                  </h2>

                  <p>
                    For the person who makes ordinary
                    days special.
                  </p>

                  <div className="music-line">
                    <div />
                  </div>

                  <button
                    className="btn light-btn"
                    onClick={toggleMusic}
                  >
                    {musicPlaying
                      ? "⏸ Pause Song"
                      : "▶ Play Our Song"}
                  </button>

                </div>

              </div>

            </div>

          </section>

          {/* 9. NEW FEATURE: SECRET VOICE MESSAGE */}
          <SecretVoiceMessage />

          {/* 10. NEW FEATURE: OPEN WHEN LETTERS */}
          <section id="open-when">
            <OpenWhenLetters />
          </section>

          {/* 11. REASONS / WHY YOU */}
          <section className="section soft">

            <div className="container">

              <SectionHeading
                eyebrow="08 — WHY YOU"
                title="A Few Reasons I Love You"
                subtitle="I could write a thousand..."
              />

              <div className="reasons-grid">

                {[
                  "Your smile 😊",
                  "Your care 🫶",
                  "Your madness 😂",
                  "The way you understand me",
                  "Your heart ❤️",
                  "Simply... you"
                ].map((reason, index) => (

                  <motion.div
                    className="reason-card"
                    key={reason}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.08
                    }}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{reason}</h3>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>

          {/* 12. FUTURE */}
          <section className="section">

            <div className="container">

              <SectionHeading
                eyebrow="09 — OUR FUTURE"
                title="Things We Haven't Done Yet"
                subtitle="Because the best memories are still waiting."
              />

              <div className="future-grid">

                {futureCards.map(
                  (future, index) => (

                    <motion.button
                      className="future-card"
                      key={future}
                      onClick={() =>
                        revealFuture(index)
                      }
                      whileHover={{
                        scale: 1.03
                      }}
                    >

                      {!futureOpen.includes(index) ? (
                        <>
                          <div className="future-lock">
                            🔒
                          </div>

                          <h3>
                            Future Memory #{index + 1}
                          </h3>

                          <span>
                            Click to reveal
                          </span>
                        </>
                      ) : (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.8
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1
                          }}
                        >
                          <div className="future-heart">
                            ❤️
                          </div>

                          <h3>{future}</h3>

                          <p>
                            We'll make this memory
                            together.
                          </p>
                        </motion.div>
                      )}

                    </motion.button>

                  )
                )}

              </div>

            </div>

          </section>

          {/* 13. NEW FEATURE: OUR STORY — WRAPPED */}
          <RelationshipWrapped celebrate={celebrate} />

          {/* 14. GIFT */}
          <section className="section gift-section">

            <div className="container center">

              <SectionHeading
                eyebrow="10 — YOUR GIFT"
                title="Okay... One Last Thing"
                subtitle="It's not expensive. But it's from my heart."
              />

              {!giftOpened ? (

                <motion.button
                  className="gift-box"
                  onClick={openGift}
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                >

                  <div className="gift-ribbon">
                    ❤️
                  </div>

                  <div className="gift-lid" />

                  <div className="gift-body">
                    🎁
                  </div>

                  <p>
                    OPEN ME
                  </p>

                </motion.button>

              ) : (

                <motion.div
                  className="gift-message"
                  initial={{
                    opacity: 0,
                    scale: 0.7
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                >

                  <div className="gift-heart">
                    ❤️
                  </div>

                  <h2>
                    My gift is simple...
                  </h2>

                  <p>
                    More memories.
                    <br />
                    More laughter.
                    <br />
                    More crazy moments.
                    <br />
                    More us.
                  </p>

                  <strong>
                    Happy Birthday, my favourite person. ❤️
                  </strong>

                </motion.div>

              )}

            </div>

          </section>

          {/* 15. SECRET VAULT */}
          <section className="section soft">

            <div className="container">

              <SectionHeading
                eyebrow="11 — SECRET VAULT"
                title="One Last Secret"
                subtitle="Only you can unlock this."
              />

              <div className="vault">

                {!vaultUnlocked ? (

                  <>
                    <div className="vault-icon">🔐</div>
                    <h3>Enter the secret word</h3>
                    <p>Hint: It's what connects us.</p>

                    <div className="vault-input">
                      <input
                        type="password"
                        placeholder="Secret word..."
                        value={vaultPassword}
                        autoComplete="off"
                        onChange={(e) => setVaultPassword(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") unlockVault();
                        }}
                      />
                      <button className="btn primary" onClick={unlockVault}>
                        Unlock ❤️
                      </button>
                    </div>
                  </>

                ) : (

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="vault-open"
                  >
                    <div className="vault-private-message">
                      <span className="vault-private-icon">❤️</span>
                      <h2>These are the memories I kept hidden...</h2>
                      <p>because they were meant only for you. ❤️</p>
                      <p>These memories were never meant to be opened in front of everyone.</p>
                    </div>

                    <div className="vault-gallery">
                      {hiddenVaultPhotos.map((photo, index) => (
                        <motion.button
                          type="button"
                          className="vault-gallery-item"
                          key={photo}
                          onClick={() => setSelectedVaultPhoto(photo)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          whileHover={{ y: -7, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`Open private memory ${index + 1}`}
                        >
                          <img src={photo} alt={`Private memory ${index + 1}`} />
                          <span>View memory ↗</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>

            </div>

          </section>

          {/* 16. FINAL BIRTHDAY MESSAGE */}
          <section className="final-section">

            <div className="final-photo">

              <img
                src="/photos/photo5.jpeg"
                alt="Final memory"
              />

            </div>

            <div className="final-overlay" />

            <div className="final-content">

              <span>
                HAPPY BIRTHDAY ❤️
              </span>

              <h1>
                To My Favourite Person
              </h1>

              <p>
                This little website is just a small
                way of saying...
              </p>

              <h2>
                I love you. ❤️
              </h2>

              <p className="continue">
                And our story is only getting started...
              </p>

              <button
                className="btn light-btn"
                onClick={() => {
                  setProposalOpen(true);
                  celebrate();
                }}
              >
                One More Hug 🤗
              </button>

              <AnimatePresence>
                {proposalOpen && (
                  <motion.div
                    className="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setProposalOpen(false)}
                  >
                    <motion.div
                      className="letter-modal-paper"
                      initial={{ scale: 0.8, y: 30 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.8, y: 30 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className="modal-close"
                        onClick={() => setProposalOpen(false)}
                      >
                        ×
                      </button>

                      <div className="letter-paper-header">
                        <span>💌 ONE LAST LETTER...</span>
                        <h2>Once Again, I Choose You ❤️</h2>
                      </div>

                      <div className="letter-paper-body">
                        <p>
                          The first time I fell in love with you, I never
                          knew how beautifully you would become a part of my
                          life. ❤️
                          <br /><br />
                          Even today, if I had to choose again, my answer
                          would still be you. Without any doubt. 🥹
                          <br /><br />
                          So today, I want to ask you one more time...
                          <br /><br />
                          <strong>Will you choose me again? 💍❤️</strong>
                          <br /><br />
                          Not just for today, but for all the tomorrows we
                          are yet to live. I want to marry you, grow with
                          you, fight with you, laugh with you and spend my
                          life with you. ❤️
                          <br /><br />
                          <strong>Once again... will you be mine, forever? ❤️</strong>
                        </p>
                      </div>

                      <div className="letter-paper-footer">
                        <span>Forever choosing you. ❤️</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </section>

          <footer>

            <p>
              Made with ❤️ for someone very special.
            </p>

            <span>
              Our little story • Forever
            </span>

          </footer>

        </>
      )}

      <AnimatePresence>
        {selectedVaultPhoto && (
          <motion.div
            className="modal vault-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVaultPhoto(null)}
          >
            <motion.div
              className="vault-lightbox-content"
              initial={{ scale: 0.86, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.86, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close vault-close"
                onClick={() => setSelectedVaultPhoto(null)}
                aria-label="Close private memory"
              >
                ×
              </button>
              <img src={selectedVaultPhoto} alt="Private memory" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEMORY MODAL */}
      <AnimatePresence>

        {selectedMemory && (

          <motion.div
            className="modal"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() =>
              setSelectedMemory(null)
            }
          >

            <motion.div
              className="memory-modal"
              initial={{
                scale: 0.8,
                y: 30
              }}
              animate={{
                scale: 1,
                y: 0
              }}
              exit={{
                scale: 0.8,
                y: 30
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedMemory(null)
                }
              >
                ×
              </button>

              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
              />

              <div className="modal-content">

                <span>
                  A LITTLE PIECE OF US ❤️
                </span>

                <h2>
                  {selectedMemory.title}
                </h2>

                <p>
                  {selectedMemory.text}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}


/* ---------------- NEW FEATURE 1: BIRTHDAY COUNTDOWN ---------------- */

function BirthdayCountdown({ celebrate }) {
  const getTarget = () => {
    const now = new Date();
    const target = new Date(now.getFullYear(), 9, 8, 0, 0, 0, 0);

    if (now.getMonth() === 9 && now.getDate() === 8) {
      return target;
    }

    if (now >= target) {
      return new Date(now.getFullYear() + 1, 9, 8, 0, 0, 0, 0);
    }

    return target;
  };

  const [targetDate] = useState(getTarget);
  const [timeLeft, setTimeLeft] = useState(() => calculateBirthdayTime(targetDate));
  const [isFinished, setIsFinished] = useState(() => calculateBirthdayTime(targetDate).total <= 0);

  useEffect(() => {
    const update = () => {
      const result = calculateBirthdayTime(targetDate);
      setTimeLeft(result);

      if (result.total <= 0) {
        setIsFinished((finished) => {
          if (!finished) celebrate();
          return true;
        });
      }
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate, celebrate]);

  return (
    <section className="section soft">
      <div className="container center">
        <SectionHeading
          eyebrow="SPECIAL DAY COUNTDOWN"
          title="Counting down to October 8 ❤️"
          subtitle="Every second brings us closer to celebrating you..."
        />

        <div className="countdown-card">
          {!isFinished ? (
            <div className="countdown-timer">
              <TimeBox value={timeLeft.days} label="Days" />
              <span className="colon">:</span>
              <TimeBox value={timeLeft.hours} label="Hours" />
              <span className="colon">:</span>
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <span className="colon">:</span>
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
          ) : (
            <motion.div
              className="countdown-finished"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2>Happy Birthday, My Love ❤️🎂</h2>
              <p>Today is your day. ❤️</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function calculateBirthdayTime(target) {
  const diff = Math.max(0, target.getTime() - Date.now());

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff
  };
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <span className="time-number">{String(value).padStart(2, "0")}</span>
      <span className="time-label">{label}</span>
    </div>
  );
}

/* ---------------- NEW FEATURE 2: MEMORY PUZZLE (Photo9) ---------------- */

function MemoryPuzzle({ celebrate }) {
  // Photo9 is divided into 9 pieces and starts shuffled.
  const [pieces, setPieces] = useState([
    4, 0, 7,
    1, 8, 2,
    5, 3, 6
  ]);

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isSolved, setIsSolved] = useState(false);

  const handleTileClick = (index) => {
    if (isSolved) return;

    if (selectedIdx === null) {
      setSelectedIdx(index);
      return;
    }

    if (selectedIdx === index) {
      setSelectedIdx(null);
      return;
    }

    const next = [...pieces];

    [next[selectedIdx], next[index]] = [
      next[index],
      next[selectedIdx]
    ];

    setPieces(next);
    setSelectedIdx(null);

    if (next.every((value, position) => value === position)) {
      setIsSolved(true);
      celebrate();
    }
  };

  const autoSolve = () => {
    setPieces([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8
    ]);
    setSelectedIdx(null);
    setIsSolved(true);
    celebrate();
  };

  const resetPuzzle = () => {
    setPieces([
      4, 0, 7,
      1, 8, 2,
      5, 3, 6
    ]);
    setSelectedIdx(null);
    setIsSolved(false);
  };

  const getPieceStyle = (pieceValue) => {
    const row = Math.floor(pieceValue / 3);
    const column = pieceValue % 3;

    return {
      width: "300%",
      height: "300%",
      maxWidth: "none",
      maxHeight: "none",
      position: "absolute",
      left: `${column * -100}%`,
      top: `${row * -100}%`,
      objectFit: "fill",
      display: "block",
      margin: 0,
      padding: 0,
      border: 0,
      pointerEvents: "none",
      userSelect: "none"
    };
  };

  return (
    <section className="section">
      <div className="container center">
        <SectionHeading
          eyebrow="INTERACTIVE GAME"
          title="Our Memory Puzzle 🧩"
          subtitle="Put our photo back together, one piece at a time..."
        />

        <div className="puzzle-container">
          <div
            className={`puzzle-board ${isSolved ? "solved" : ""}`}
            style={{
              gap: 0,
              padding: 0,
              overflow: "hidden",
              borderRadius: 0
            }}
          >
            {pieces.map((pieceValue, gridIndex) => (
              <motion.button
                key={`${pieceValue}-${gridIndex}`}
                type="button"
                className={`puzzle-tile ${
                  selectedIdx === gridIndex ? "selected" : ""
                }`}
                style={{
                  margin: 0,
                  padding: 0,
                  borderRadius: 0,
                  border: selectedIdx === gridIndex
                    ? "2px solid #e62058"
                    : "0 solid transparent",
                  outline: "none",
                  boxShadow: selectedIdx === gridIndex
                    ? "inset 0 0 0 1px #ffffff, 0 0 18px rgba(230, 32, 88, 0.55)"
                    : "none",
                  overflow: "hidden"
                }}
                onClick={() => handleTileClick(gridIndex)}
                whileHover={{ scale: isSolved ? 1 : 1.01 }}
                whileTap={{ scale: 0.985 }}
                aria-label="Memory puzzle piece"
              >
                <img
                  src="/photos/photo9.jpeg"
                  alt=""
                  className="puzzle-piece-image"
                  draggable="false"
                  style={getPieceStyle(pieceValue)}
                />
              </motion.button>
            ))}
          </div>

          {isSolved ? (
            <motion.div
              className="puzzle-success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="success-heart">❤️</div>

              <h2>You still remember us ❤️</h2>

              <p>
                Every piece of our story fits together perfectly.
              </p>

              <button
                className="btn outline"
                onClick={resetPuzzle}
              >
                Play Again 🔄
              </button>
            </motion.div>
          ) : (
            <div className="puzzle-actions">
              <p className="puzzle-hint">
                Tap any two pieces to swap their positions. No numbers — just the memory. ❤️
              </p>

              <button
                className="btn outline sm"
                onClick={autoSolve}
              >
                Auto Solve ✨
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


function SecretVoiceMessage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const voiceAudioRef = useRef(null);

  const toggleVoice = () => {
    if (!voiceAudioRef.current) return;
    if (isPlaying) {
      voiceAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      voiceAudioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          alert("Add your voice message as public/music/voice-message.mp3 ❤️");
        });
    }
  };

  const onTimeUpdate = () => {
    if (voiceAudioRef.current) {
      setCurrentTime(voiceAudioRef.current.currentTime);
      setDuration(voiceAudioRef.current.duration || 0);
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section className="section voice-section">
      <div className="container center">
        <SectionHeading
          eyebrow="VOICE NOTE 🎙️"
          title="A message I want you to hear..."
          subtitle="Put your headphones on... 🎧"
          light
        />

        <div className="voice-player-card">
          <audio
            ref={voiceAudioRef}
            src="/music/voice-message.mp3"
            onTimeUpdate={onTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="voice-mic-icon">🎙️</div>

          <div className="voice-details">
            <h3>Secret Voice Recording</h3>
            <p>Recorded with love, just for you.</p>

            <div className="voice-waveform">
              {[40, 75, 30, 90, 60, 100, 45, 85, 50, 95, 65, 40, 85, 35, 75, 50].map((h, i) => (
                <span
                  key={i}
                  style={{
                    height: isPlaying ? `${h}%` : "25%",
                    transition: "height 0.3s ease"
                  }}
                />
              ))}
            </div>

            <div className="voice-timer">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <button className="btn voice-btn" onClick={toggleVoice}>
            {isPlaying ? "⏸ Pause Message" : "▶ Play My Voice Message ❤️"}
          </button>
        </div>
      </div>
    </section>
  );
}


/* ---------------- NEW FEATURE 4: OPEN WHEN LETTERS ---------------- */

function OpenWhenLetters() {
  const [activeLetter, setActiveLetter] = useState(null);

  return (
    <section className="section soft">
      <div className="container">
        <SectionHeading
          eyebrow="FOR EVERY MOMENT 💌"
          title="Open When..."
          subtitle="Whenever you need me, open one of these letters..."
        />

        <div className="open-when-grid">
          {openWhenList.map((item) => (
            <motion.button
              key={item.title}
              className="open-when-card"
              onClick={() => setActiveLetter(item)}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="envelope-badge">{item.icon}</div>
              <h3>{item.title}</h3>
              <span>Click to open letter ✉️</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {activeLetter && (
            <motion.div
              className="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLetter(null)}
            >
              <motion.div
                className="letter-modal-paper"
                initial={{ scale: 0.8, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setActiveLetter(null)}
                >
                  ×
                </button>
                <div className="letter-paper-header">
                  <span>💌 OPEN WHEN...</span>
                  <h2>{activeLetter.title}</h2>
                </div>
                <div className="letter-paper-body">
                  <p>{activeLetter.message}</p>
                </div>
                <div className="letter-paper-footer">
                  <span>With all my love ❤️</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


/* ---------------- NEW FEATURE 5: OUR STORY WRAPPED ---------------- */

function RelationshipWrapped({ celebrate }) {
  const [revealedCount, setRevealedCount] = useState(1);

  const stats = [
    { icon: "💬", title: "Conversations", value: "Countless" },
    { icon: "😂", title: "Times we laughed", value: "Too many to count" },
    { icon: "📸", title: "Memories", value: "11" },
    { icon: "❤️", title: "Favourite person", value: "You" },
    { icon: "🥹", title: "Best feeling", value: "Having you in my life" },
    { icon: "♾️", title: "Love", value: "∞" }
  ];

  const revealNext = () => {
    if (revealedCount < stats.length + 1) {
      const next = revealedCount + 1;
      setRevealedCount(next);
      if (next === stats.length + 1) {
        celebrate();
      }
    }
  };

  return (
    <section className="section wrapped-section">
      <div className="container center">
        <SectionHeading
          eyebrow="OUR HIGHLIGHTS ✨"
          title="Our Story — Wrapped ❤️"
          subtitle="Looking back at our favourite stats together..."
          light
        />

        <div className="wrapped-grid">
          {stats.slice(0, Math.min(revealedCount, stats.length)).map((stat, idx) => (
            <motion.div
              key={stat.title}
              className="wrapped-card"
              initial={{ scale: 0.7, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="wrapped-icon">{stat.icon}</div>
              <span className="wrapped-label">{stat.title}</span>
              <h3 className="wrapped-value">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {revealedCount <= stats.length ? (
          <button className="btn light-btn wrapped-next-btn" onClick={revealNext}>
            Next Highlight ✨ ({revealedCount}/{stats.length})
          </button>
        ) : (
          <motion.div
            className="wrapped-finale"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="wrapped-question">And my favourite part of every year is still...</p>
            <h1 className="wrapped-big-you">YOU. ❤️</h1>
          </motion.div>
        )}
      </div>
    </section>
  );
}


/* ---------------- EXISTING COMPONENTS ---------------- */

function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <div className="welcome-photo kenburns">
        <img
          src="/rose-bg.jpg"
          alt="Cinematic Red Roses"
        />
      </div>

      <div className="welcome-overlay" />

      <motion.div
        className="welcome-content"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <span className="welcome-badge">
          ✨ SOMEONE SPECIAL MADE THIS FOR YOU ✨
        </span>

        <h1 className="welcome-title">
          Hey Birthday Boy...
        </h1>

        <p className="welcome-subtitle">
          I have a little surprise for you.
        </p>

        <motion.button
          className="btn welcome-btn primary-glow"
          onClick={onStart}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 45px rgba(230, 32, 88, 0.9)"
          }}
          whileTap={{ scale: 0.96 }}
        >
          Open Your Surprise ❤️
        </motion.button>
      </motion.div>
    </motion.div>
  );
}


function Navbar({ musicPlaying, toggleMusic }) {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <span>♥</span>
        OUR STORY
      </div>

      <div className="nav-links">

        <button onClick={() => scrollTo("secret")}>
          Story
        </button>

        <button onClick={() => scrollTo("memories")}>
          Memories
        </button>

        <button onClick={() => scrollTo("puzzle")}>
          Puzzle
        </button>

        <button onClick={() => scrollTo("open-when")}>
          Letters
        </button>

        <button onClick={toggleMusic}>
          {musicPlaying ? "Pause ♪" : "Music ♫"}
        </button>

      </div>

    </nav>
  );
}


function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false
}) {
  return (
    <div
      className={`section-heading ${
        light ? "light" : ""
      }`}
    >

      <span>
        {eyebrow}
      </span>

      <h2>
        {title}
      </h2>

      <p>
        {subtitle}
      </p>

    </div>
  );
}


function FloatingHearts() {
  const particles = [
    { char: "🌹", size: "22px", left: "6%", duration: 11, delay: 0 },
    { char: "❤️", size: "16px", left: "15%", duration: 9, delay: 1.2 },
    { char: "✨", size: "14px", left: "24%", duration: 13, delay: 0.5 },
    { char: "🌸", size: "20px", left: "33%", duration: 10, delay: 2.1 },
    { char: "♥", size: "18px", left: "42%", duration: 12, delay: 3.0 },
    { char: "🌹", size: "24px", left: "53%", duration: 14, delay: 0.8 },
    { char: "❤️", size: "15px", left: "62%", duration: 8, delay: 2.5 },
    { char: "✨", size: "16px", left: "71%", duration: 11, delay: 1.7 },
    { char: "🌸", size: "22px", left: "80%", duration: 13, delay: 0.2 },
    { char: "♥", size: "19px", left: "89%", duration: 10, delay: 2.8 },
    { char: "🌹", size: "20px", left: "95%", duration: 12, delay: 1.0 }
  ];

  return (
    <div className="floating-hearts">
      {particles.map((p, index) => (
        <motion.span
          key={index}
          style={{
            left: p.left,
            fontSize: p.size
          }}
          initial={{
            y: "105vh",
            x: 0,
            rotate: 0,
            opacity: 0
          }}
          animate={{
            y: "-10vh",
            x: [0, (index % 2 === 0 ? 30 : -30), 0],
            rotate: [0, (index % 2 === 0 ? 180 : -180)],
            opacity: [0, 0.75, 0.85, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        >
          {p.char}
        </motion.span>
      ))}
    </div>
  );
}

export default App;