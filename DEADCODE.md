# Dead Code Audit Report

## Summary

A comprehensive static, entry-point, and dependency analysis was conducted across the entire **Xenus Consultancy Services** codebase. 

A total of **8 unused files** (3 React component files, 1 stylesheet file, and 4 asset files) comprising **~950 lines of code** and **~82 KB of unused assets** were identified as dead code. These items were rendered obsolete following the recent architecture transformation to a state-driven Game Title Screen & Character Select experience.

---

## Files to Delete

### 1. `src/components/ChooseYourPath.tsx`
- **Reason**: Replaced by `ProgramSelectScene.tsx` during the transformation into a scene-based character selection roster. This file is no longer imported or rendered anywhere in `App.tsx` or any active scene component.
- **Lines of Code**: 359 lines (33.3 KB).

### 2. `src/components/HeroSection.tsx`
- **Reason**: Replaced by `MainTitleScene.tsx` (the Game Title Screen main menu). This file is no longer imported or rendered anywhere in `App.tsx` or any active scene component.
- **Lines of Code**: 98 lines (4.5 KB).

### 3. `src/components/TechIdentityVisuals.tsx`
- **Reason**: Experimental SVG visual component created during earlier design passes. It is not imported or referenced anywhere in `src/`.
- **Lines of Code**: 368 lines (14.7 KB).

### 4. `src/App.css`
- **Reason**: Legacy CSS stylesheet. The application entry point `src/main.tsx` imports `src/index.css` (Tailwind CSS engine). `App.css` is not imported anywhere in the project.
- **Lines of Code**: 120 lines (2.8 KB).

### 5. `src/assets/hero.png`
- **Reason**: Legacy hero PNG illustration. Replaced by the vector-rendered `XenusCharacter.tsx` avatar system. Not imported or referenced in any source file.
- **Size**: 13.0 KB.

### 6. `src/assets/react.svg`
- **Reason**: Starter template React SVG logo. Not referenced or used in any active component.
- **Size**: 4.1 KB.

### 7. `src/assets/vite.svg`
- **Reason**: Duplicate starter template Vite SVG logo inside `src/assets/`. The active HTML favicon references `public/favicon.svg` and `public/vite.svg`.
- **Size**: 8.7 KB.

### 8. `public/icons.svg`
- **Reason**: Legacy icon sprite file. All icons in active components are directly rendered via `lucide-react`.
- **Size**: 5.0 KB.

---

## Functions/Methods to Delete

- N/A — All standalone functions and helper utilities inside active files (`src/utils/sound.ts`, `src/utils/useBodyScrollLock.ts`, `src/components/SelectionTransition.tsx`, `src/components/XenusCharacter.tsx`, `src/components/MainTitleScene.tsx`, `src/components/ProgramSelectScene.tsx`, `src/components/ProgramWorldScene.tsx`, `src/components/WhyXenusSection.tsx`, `src/components/CareerPathsSection.tsx`, `src/components/FinalCtaSection.tsx`, `src/components/Footer.tsx`, `src/components/EnrollModal.tsx`, `src/components/CustomCursor.tsx`, `src/components/IntroScreen.tsx`, and `src/components/Navbar.tsx`) are actively invoked and consumed by the active scene architecture.

---

## Classes to Delete

- N/A — The single utility class `SoundSystem` in `src/utils/sound.ts` is actively instantiated (`soundFx`) and consumed across all scenes and navigation controls for synthesized Web Audio API sound effects.

---

## Variables/Constants to Delete

### 1. `categories` in `src/components/ChooseYourPath.tsx`
- **Reason**: Unused array of 8 course category objects inside dead file `ChooseYourPath.tsx`.

### 2. `pillars` in `src/components/HeroSection.tsx`
- **Reason**: Unused array of hero points inside dead file `HeroSection.tsx`.

---

## Verification Notes

1. **Import Graph Audit**: Verified via `grep_search` across all `.tsx`, `.ts`, `.html`, and `.json` files that `ChooseYourPath`, `HeroSection`, `TechIdentityVisuals`, and `App.css` have zero import statements.
2. **Build Verification**: Run `npx tsc --noEmit` and `npm run build` to confirm zero compilation errors when these 8 files are deleted.
3. **Asset References**: Checked `index.html` and component code for image paths (`/assets/*`). Confirmed `hero.png`, `react.svg`, `src/assets/vite.svg`, and `public/icons.svg` are nowhere referenced.

---

## Estimated Impact

- **Files Removed**: 8 files
- **Lines of Code Removed**: ~945 lines
- **Disk Space Saved**: ~86 KB
