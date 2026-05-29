# GSAP Scroll-Driven Video Background — Implementation Guide
### For: Excelon IP Website (`raxj06/Excelon-IP`)

---

## What This Does

Instead of the current hero video that **autoplays on a loop**, the new video will be **controlled by the user's scroll position**. As the visitor scrolls down, the video plays forward. If they scroll back up, the video rewinds. The video is frozen/paused at whatever frame corresponds to their scroll depth.

This is called a **"scrubbed" video animation** — GSAP's ScrollTrigger scrubs the video's `currentTime` to the scroll position.

---

## Current State of Your Project

After inspecting your repo, here is exactly what exists today:

### `index.html` — Hero Section (lines 139–157)
```
<section class="hero" id="hero">
  <video class="hero-video-bg" autoplay muted loop playsinline>
    <source src="https://excelonip.com/wp-content/uploads/2020/10/E-IP_10Seconder.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content"> ... </div>
  <div class="scroll-indicator" id="scroll-indicator-widget"> ... </div>
</section>
```

### `style.css` — Hero CSS (lines 592–641)
- `.hero` → `height: 100vh`, `overflow: hidden`, `position: relative`
- `.hero-video-bg` → `position: absolute`, fills 100% width/height, `z-index: 1`
- `.hero-overlay` → dark overlay at `z-index: 2`
- `.hero-content` → text content at `z-index: 3`

### `main.js`
- Scripts load via `<script src="main.js"></script>` at end of `index.html` (line 648)
- Uses `IntersectionObserver` for `.reveal-on-scroll` elements — no GSAP currently
- All feature functions are inside `DOMContentLoaded`

### No GSAP is currently installed or imported anywhere in the project.

---

## What You Need to Add

### 1. Your New Video File
- The uploaded file is: `Video_Project.mp4`
- **Place it in your project root** (same folder as `index.html`)
- It will be referenced as `src="Video_Project.mp4"` locally, or upload it to your hosting and use the full URL

---

### 2. GSAP + ScrollTrigger (CDN — no install needed)
Add these two `<script>` tags to `index.html`, **inside `<head>`** or **just before `</body>`** (before `main.js`):

```
GSAP core:      https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
ScrollTrigger:  https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js
```

They must load **before** `main.js` since your scroll animation code will go inside `main.js`.

---

### 3. HTML Changes Needed in `index.html`

**The `<video>` tag must be changed.** The current tag has `autoplay loop` — both must be removed. The video must also be preloaded so it's ready to scrub instantly.

**Current tag:**
```html
<video class="hero-video-bg" autoplay muted loop playsinline>
  <source src="https://excelonip.com/.../E-IP_10Seconder.mp4" type="video/mp4">
</video>
```

**Required tag:**
```html
<video class="hero-video-bg" id="hero-video" muted playsinline preload="auto">
  <source src="Video_Project.mp4" type="video/mp4">
</video>
```

Changes made:
- Removed `autoplay` — video should not play on its own
- Removed `loop` — video plays once (controlled by scroll)
- Added `id="hero-video"` — so JS can select it
- Added `preload="auto"` — browser loads video data upfront so scrubbing is smooth
- Changed `src` to your new video file

---

### 4. CSS Changes Needed in `style.css`

**The `.hero` section height must change.** Currently it's `100vh` (viewport height). For scroll-driven video, the section needs extra height — this is the "scroll distance" that controls video playback.

A **10-second video** at a good scroll speed needs roughly `500vh` to `700vh` of height. The video stays **pinned/sticky** during this scroll so it looks like the page is revealing over the video.

**Current CSS:**
```css
.hero {
  position: relative;
  height: 100vh;
  ...
  overflow: hidden;
}
```

**Required CSS:**
```css
.hero {
  position: relative;
  height: 600vh;   /* tall enough for full video scroll distance */
  overflow: hidden;
}

.hero-video-bg {
  position: sticky;  /* sticky so it stays in view as user scrolls */
  top: 0;
  width: 100%;
  height: 100vh;     /* video window stays 1 viewport tall */
  object-fit: cover;
  z-index: 1;
}
```

> **Note:** `position: sticky` replaces the current `position: absolute` on `.hero-video-bg`. The overlay and content also need to be repositioned since the layout changes. See Section 6 for full CSS block.

---

### 5. JavaScript Logic to Add in `main.js`

A new function `initVideoScroll()` needs to be written and called from the `DOMContentLoaded` block (alongside the existing `initScrollReveal()` call).

**What the function must do:**

1. Select the `#hero-video` element
2. Register the ScrollTrigger plugin with GSAP (`gsap.registerPlugin(ScrollTrigger)`)
3. Wait for the video's metadata to load (`loadedmetadata` event) so `video.duration` is available
4. Create a GSAP ScrollTrigger that:
   - Pins the hero section so the video stays visible while scrolling through the tall section
   - Scrubs `video.currentTime` from `0` to `video.duration` as the user scrolls from top to bottom of the hero section
   - Uses `scrub: true` (or a number like `scrub: 0.5` for slight smoothing)
5. The trigger start should be `"top top"` (when top of hero hits top of viewport) and end should be `"bottom bottom"` (when bottom of the tall hero section hits bottom of viewport)

**Pseudocode / logic flow:**
```
Register GSAP ScrollTrigger plugin

Get the video element by id "hero-video"

On video "loadedmetadata" event:
  Create a GSAP tween:
    - animate a plain object { t: 0 } → { t: video.duration }
    - on each update, set video.currentTime = object.t
    - attach ScrollTrigger:
        trigger: "#hero"
        start: "top top"
        end: "bottom bottom"
        scrub: true
        pin: true  (pins the section in viewport while scrolling through it)
```

---

### 6. Full Reference: What Each File Should Look Like After Changes

#### `index.html` — Changes summary:
| Location | Change |
|---|---|
| Inside `<head>` | Add GSAP CDN script tag |
| Inside `<head>` | Add ScrollTrigger CDN script tag |
| Line ~141 (video tag) | Remove `autoplay loop`, add `id="hero-video" preload="auto"` |
| Line ~142 (video src) | Change src to `Video_Project.mp4` |

#### `style.css` — Full hero block replacement:
```css
.hero {
  position: relative;
  height: 600vh;          /* <-- was 100vh */
  color: var(--color-white);
  text-align: center;
}

.hero-video-bg {
  position: sticky;       /* <-- was absolute */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: fixed;        /* overlay stays fixed over the video */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(15, 23, 42, 0.72);
  z-index: 2;
  pointer-events: none;
}

.hero-content {
  position: fixed;        /* content stays centered and fixed */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  max-width: 800px;
  padding: 0 24px;
  text-align: center;
}
```

> **Why `fixed` for overlay and content?** Because `.hero-video-bg` is `sticky`, the overlay and text need to stay visually on top of it throughout the scroll. They should disappear once the hero section is fully scrolled past — this can be handled with ScrollTrigger's `onLeave` callback (fade them out).

#### `main.js` — Add new function `initVideoScroll()`:
- Call it on line 11 alongside `initScrollReveal()`
- The function body follows the logic described in Section 5 above

---

## Potential Issues to Watch For

| Issue | Cause | Fix |
|---|---|---|
| Video scrubbing is choppy | Video file is too large / not optimized | Compress `Video_Project.mp4` using HandBrake or FFmpeg — aim for under 8MB at 720p |
| Video doesn't scrub on iOS Safari | iOS restricts video `currentTime` manipulation | Add `webkit-playsinline` attribute; iOS may fallback to autoplay |
| Hero content disappears too early | `position: fixed` content tied to wrong stacking context | Wrap content in a `position: sticky` container inside hero instead |
| Scroll distance feels too short/long | `600vh` may not match video duration | Adjust `height` — rule of thumb: `height = video.duration * 60 + 100` (in vh) |
| GSAP not found error | Scripts loaded in wrong order | Ensure GSAP CDN tags are before `main.js` |
| Black frame at end of scroll | Video ends before scroll finishes | Reduce hero height or trim video |

---

## Files You Need to Touch — Summary

| File | Action |
|---|---|
| `index.html` | Add 2 CDN script tags, modify `<video>` tag |
| `style.css` | Modify `.hero`, `.hero-video-bg`, `.hero-overlay`, `.hero-content` |
| `main.js` | Add `initVideoScroll()` function, call it in `DOMContentLoaded` |
| `Video_Project.mp4` | Place in project root folder (same level as `index.html`) |

---

## Optional Enhancements (After Core Works)

- **Fade out hero text** as user scrolls past 50% of hero — use a second ScrollTrigger on `.hero-content` to animate opacity to 0
- **Show next section** smoothly — add a fade-in ScrollTrigger on `#introduction` section
- **Progress bar** — thin line at top of screen that fills as video plays
- **Preloader** — show a spinner until video is ready (`canplaythrough` event)

---

## Video Format Recommendation

For best cross-browser compatibility and performance:
- Format: **MP4 with H.264 codec** (your file is already MP4 ✓)
- Resolution: **1280×720** or **1920×1080** max
- Bitrate: **2–5 Mbps** for smooth web delivery
- Duration: **8–15 seconds** works best for this effect
- File size: **Under 10MB** ideally

If `Video_Project.mp4` is larger, compress it before deploying.
