# 👻 Horror Quiz - Interactive Horror-Themed Quiz Game

A modern, spine-chilling interactive quiz website built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. Test your nerve through 5 horror-themed stages with progressive difficulty!

## 🎯 Features

- **Stage-Based Progression**: 5 interconnected horror puzzle stages
- **Interactive UI**: Dark aesthetic with glitch effects and animations
- **Real-time Validation**: Instant feedback on answers with color-coded responses
- **Sound Effects**: Web Audio API generates success and error sounds
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Client-Side Only**: No backend required - all data is hardcoded
- **Modern React Hooks**: Built with functional components and React hooks

## 🎨 Design Highlights

- **Horror Aesthetic**:
  - Dark background with red accents
  - Creepy font styling with glitch effects
  - Smooth animations and transitions
  - Pulsing red glow effects on stage boxes

- **Color Scheme**:
  - Primary: Black background
  - Accent: Red (#ff1744)
  - Success: Green (#4ade80)
  - Highlight: Red-950 gradient

## 📱 How to Play

1. **Stage Selection Screen**: See 5 unlocked/locked stage boxes
   - Click any available stage to start
   - Unlock new stages by answering correctly

2. **Quiz Screen**:
   - Read the horror-themed question
   - Type your answer in the input field
   - Click "Submit" to check your answer

3. **Feedback**:
   - ✓ **Correct**: Green success message + ascending tone sound
   - ✗ **Wrong**: Red error message + descending buzz sound
   - Automatically return to input after 2 seconds (wrong) or return home (correct)

4. **Progression**:
   - Complete all 5 stages to master the horror quiz
   - No score tracking - just pure survival of the nightmare!

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Audio**: Web Audio API (no external sound files needed)
- **Build Tool**: Turbopack
- **Package Manager**: npm

## 📁 Project Structure

```
lokantara/
├── app/
│   ├── components/
│   │   ├── StageGrid.tsx       # Stage selection grid
│   │   └── QuizCard.tsx        # Quiz question & input form
│   ├── lib/
│   │   ├── quizData.ts         # Quiz questions & validation logic
│   │   └── soundEffects.ts     # Web Audio API sound generation
│   ├── globals.css             # Global styles & animations
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main app component
├── public/                      # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone/Enter the project**:

```bash
cd lokantara
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start development server**:

```bash
npm run dev
```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

## 🔨 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint --fix` - Fix linting issues automatically

## ❓ Quiz Questions

The quiz contains 5 horror-themed questions:

1. **Stage 1**: What is the name of the haunted mansion?
   - Answer: `blackwood manor`

2. **Stage 2**: How many souls were trapped in the ancient well?
   - Answer: `13`

3. **Stage 3**: What was the name of the cursed doll?
   - Answer: `vera`

4. **Stage 4**: In which year did the haunting begin?
   - Answer: `1887`

5. **Stage 5**: What is the final word spoken by the ghost?
   - Answer: `remember`

> Note: Answers are case-insensitive and ignore extra spaces

## 🎵 Sound Effects

Sound effects are **generated programmatically** using Web Audio API:

- **Correct Sound**: Ascending C5-E5-G5 tone progression
- **Wrong Sound**: Descending buzz with sawtooth wave

No external audio files needed!

## 🎨 Key Components

### `StageGrid.tsx`

- Displays 5 stage boxes in a grid layout
- Shows progress (PROGRESS: X/5)
- Stage indicators: active (red) or locked (gray)
- Click to enter a stage

### `QuizCard.tsx`

- Question display with optional hints
- Text input for answers
- Validation feedback (green/red)
- Auto-return on wrong answer (2 seconds)
- Back to home on correct answer

### `quizData.ts`

- All quiz questions and answers
- Answer normalization and validation logic
- Stage management utilities

### `soundEffects.ts`

- Web Audio API context initialization
- Sound generation functions
- Audio context resume handling

## 🎯 Customization

### Add New Questions

Edit `app/lib/quizData.ts`:

```typescript
export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "Your question here?",
    correctAnswer: "your answer",
    hint: "Optional hint",
  },
  // Add more...
];
```

### Change Color Scheme

Edit `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ff1744;
  --accent-dark: #1a0000;
  --accent-red: #cc0000;
}
```

### Adjust Animations

Modify `@keyframes` in `app/globals.css`:

- `glitch` - Text glitch effect
- `flicker` - Flickering effect
- `pulse-red` - Pulsing glow
- `fade-in-up` - Entry animation

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with Web Audio API support

## ⚠️ Known Limitations

- No backend/database (all data hardcoded)
- No user authentication
- No score/ranking system
- Audio context may require user interaction to initialize (browser security)

## 🔄 Future Enhancement Ideas

- Add database integration for dynamic questions
- Implement user accounts & leaderboards
- Add difficulty levels
- Include custom sound effects
- Add multiplayer mode
- Implement achievements/badges
- Add more horror-themed visual effects

## 📝 License

MIT License - Feel free to use and modify!

## 👤 Created By

Frontend Web Developer | Horror Quiz Enthusiast

---

**Dare to enter the nightmare? Test your courage!** 👻
