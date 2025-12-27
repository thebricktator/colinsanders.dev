# Portfolio Design Research & Recommendations - 2025

## Executive Summary

After reviewing your current 2019 portfolio and researching 2025 design trends, here's what I found: modern portfolios have evolved dramatically toward **personality-driven, interactive experiences** while maintaining professional polish. The sweet spot for an engineer targeting frontier AI companies combines sophisticated technical demonstrations with clean, memorable design.

---

## Analysis of Your Current Site

**Strengths:**
- Clean, straightforward structure
- GitHub integration shows real work
- Professional tone

**Areas for Evolution:**
- Very static/text-heavy presentation
- Limited personality/differentiation
- No interactive elements or visual hierarchy
- Doesn't showcase technical depth beyond GitHub links
- Mobile experience is basic

**The Gap:** Your 2019 site works for traditional SWE roles, but frontier AI companies want to see *how you think*, not just what you've built.

---

## Key Trends Worth Adopting (2025)

### 1. **Purposeful Minimalism with Personality**
The trend has shifted from "boring minimal" to "intentional minimal with character"
- Strategic use of whitespace (not emptiness)
- Custom typography as a design element
- Subtle animations that enhance (not distract)
- **Example:** Brittany Chiang's portfolio - clean layout, but her personality shines through project descriptions and the "time travel" Easter egg

**Why it works for you:** Shows engineering discipline while avoiding corporate blandness

### 2. **Interactive Storytelling**
Modern portfolios let visitors *explore* rather than just read
- Scroll-triggered animations
- Hover effects that reveal depth
- Custom cursor interactions
- Micro-animations on UI elements
- **Example:** Elliott Mangham's portfolio - unique preloader that floats into headings, agency names appearing on hover

**Why it works for you:** Demonstrates frontend chops and attention to detail - crucial for AI companies building consumer products

### 3. **Technical Demonstrations as Design**
Your work at Amazon (2.5M findings/sec, 67K TPS) should be *shown* not just told
- Interactive system diagrams
- Live data visualizations
- Animated architecture flows
- Performance metrics that update on scroll
- **Example:** Jesse Zhou's 3D portfolio built with Three.js - turns technical skills into the experience itself

**Why it works for you:** Transforms abstract scale into tangible impressiveness for non-technical reviewers

### 4. **AI-Native Features**
Since you're targeting AI companies, lean into it:
- AI chat assistant that can answer questions about your experience
- Dynamic content that adapts to viewer context
- Generative elements (maybe AI-generated visualizations of your projects)
- **Example:** Several 2025 portfolios now include embedded Claude/GPT to answer visitor questions

**Why it works for you:** Shows you understand modern AI capabilities and can ship them

### 5. **Single-Page with Deep Sections**
Moving away from multi-page navigation toward smooth scrolling experiences
- Full-screen hero sections
- Seamless transitions between content areas
- Fixed/sticky navigation
- **Example:** Most award-winning portfolios (Awwwards SOTD) use this pattern

**Why it works for you:** Mobile-first, fast-loading, tells a cohesive story

---

## Design Patterns to Consider

### Option A: "The Technical Showcase"
**Vibe:** Sophisticated, data-driven, impressive scale

**Elements:**
- Dark theme with accent colors (think IDE aesthetic)
- Animated metrics showing your systems' performance
- Interactive architecture diagrams
- Code snippets with syntax highlighting
- Terminal-style intro animation

**Best for:** Emphasizing your backend/systems expertise

**Inspiration:** Tamal Sen's portfolio (dark IDE theme), developers using gaming-UI aesthetics

### Option B: "The Product Engineer"
**Vibe:** Clean, modern, shows you ship end-to-end

**Elements:**
- Light/bright color palette
- Project cards with live demos or recordings
- Clear narrative from problem → solution → impact
- Shuolio prominently featured as shipped product
- Skills shown through actual implementations

**Best for:** Highlighting that you can take ideas from 0→1

**Inspiration:** Brittany Chiang (clean, professional), Ryan Furrer (strong hierarchy)

### Option C: "The Hybrid Innovator"
**Vibe:** Forward-thinking, AI-native, experimental

**Elements:**
- Glassmorphism or subtle 3D effects
- AI chat interface integrated into site
- Dynamic content generation
- Experimental interactions (custom cursors, parallax)
- Projects shown as "living" demos

**Best for:** Positioning for AI research/bleeding-edge roles

**Inspiration:** Award-winning sites using Three.js, Spline, WebGL

---

## Recommended Structure

```
┌─────────────────────────────────────┐
│   HERO                              │
│   - Bold intro                      │
│   - Current role context            │
│   - Subtle animation hook           │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   FEATURED PROJECT (Shuolio)        │
│   - Full-width showcase             │
│   - Live demo or compelling video   │
│   - Technical depth on hover        │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   TECHNICAL IMPACT                  │
│   - Amazon scale visualized         │
│   - 2.5M findings/sec animation     │
│   - System architecture diagram     │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   OTHER PROJECTS                    │
│   - Grid of 3-4 key projects        │
│   - Hover reveals tech stack        │
│   - Links to demos/GitHub           │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   ABOUT / CONTACT                   │
│   - Brief, human bio                │
│   - Current location (Seattle)      │
│   - Cats (personality!)             │
│   - Contact methods                 │
└─────────────────────────────────────┘
```

---

## Technical Implementation Recommendations

### Framework: **Next.js 14+ with App Router**
- Built-in performance optimization
- Great SEO (important for discoverability)
- Easy deployment on Vercel
- You already know React from Shuolio

### Styling: **Tailwind CSS**
- You're already using it
- Perfect for rapid iteration
- Great for responsive design
- Easy to maintain

### Animations: **Framer Motion**
- Industry standard for React animations
- Declarative, easy to use
- Great scroll animations
- Performance-optimized

### 3D/Advanced Effects (Optional): **Three.js or Spline**
- Only if you want a "wow" factor
- Could visualize your security pipeline
- Risk: can be gimmicky if overdone

### AI Integration: **Anthropic API**
- Add a chat interface powered by Claude
- Pre-populate with your experience/projects
- Shows AI implementation skills
- Makes site memorable/interactive

---

## Specific Elements Worth Stealing

### From Brittany Chiang:
- **Clean section transitions** - smooth scroll between areas
- **Minimal navigation** - sticky sidebar with jump links
- **Project cards** - uniform presentation with clear CTAs
- **Tech stack badges** - visual way to show technologies used

### From Elliott Mangham:
- **Creative loading states** - preloader that becomes part of design
- **Hover interactions** - revealing additional context without clutter
- **Custom cursor** - subtle but memorable
- **Attention to detail** - micro-animations on scroll

### From Award-Winning Sites (Awwwards):
- **Full-screen sections** - each project/section gets breathing room
- **Motion narrative** - content reveals as you scroll
- **Glassmorphism** - translucent layers for depth
- **Custom typography** - using variable fonts for personality

### From Modern Trends:
- **Dark mode toggle** - increasingly expected
- **Purposeful white space** - letting content breathe
- **Interactive elements** - things visitors can click/drag
- **Performance-first** - fast loading is non-negotiable

---

## Content Strategy

### What to Highlight (Priority Order):

1. **Shuolio** - Your first independently shipped product
   - Shows end-to-end ownership
   - AI integration (relevant for target companies)
   - Full infrastructure (impressive for L6)
   - Real users, App Store approved

2. **Amazon Scale** - The numbers are mind-blowing
   - 2.5M security findings per second
   - 67K TPS systems
   - Leading a 7-person team
   - Promotion to L6 (unusually fast progression)

3. **Technical Depth** - Show you can go deep
   - System architecture diagrams
   - Performance optimization stories
   - Complex problem-solving examples
   - Open source contributions (if any)

4. **Unique Projects** - The weird/interesting stuff
   - Mandarin learning app
   - Any side experiments
   - Contributions to interesting problems

### What to Downplay:
- Generic CRUD apps
- School projects
- Anything that doesn't tell your story

---

## Color Palette Recommendations

### Option 1: "Dark Technical"
- Background: `#0a0a0a` (almost black)
- Primary: `#00ff88` (bright green - terminal vibes)
- Accent: `#8b5cf6` (purple)
- Text: `#e5e5e5` (off-white)

**Vibe:** Hacker, systems engineer, technical depth

### Option 2: "Clean Modern"
- Background: `#ffffff` (white)
- Primary: `#2563eb` (blue)
- Accent: `#f59e0b` (amber)
- Text: `#1f2937` (dark gray)

**Vibe:** Product engineer, approachable, professional

### Option 3: "AI Native"
- Background: `#f8fafc` (very light blue-gray)
- Primary: `#6366f1` (indigo)
- Accent: `#ec4899` (pink)
- Text: `#0f172a` (slate)

**Vibe:** Forward-thinking, AI-focused, modern

---

## Anti-Patterns to Avoid

❌ **Over-animation** - If everything moves, nothing stands out
❌ **Too much 3D** - Can feel gimmicky and slow
❌ **Auto-playing video with sound** - Instant turnoff
❌ **Long loading times** - Kills first impression
❌ **Generic stock photos** - Better to have none
❌ **Walls of text** - Nobody reads it
❌ **Resume-style listings** - Boring and dated
❌ **Social proof overload** - Don't need every award/certification
❌ **Hamburger menu on desktop** - Navigation should be visible

---

## Quick Wins

These are high-impact, low-effort improvements you could make immediately:

1. **Custom domain** - `colinsanders.dev` or similar
2. **Animated hero** - Text that types out or fades in
3. **Project screenshots/videos** - Show don't tell
4. **Hover effects on links** - Subtle color shifts
5. **Smooth scroll** - Modern browsers make this easy
6. **Dark mode** - Almost expected now
7. **Better typography** - Inter or Geist fonts (free)
8. **Loading animation** - Even simple ones feel polished

---

## Next Steps

### Phase 1: Exploration (This Week)
- [ ] Browse the portfolio examples I found
- [ ] Screenshot 3-5 elements you love from different sites
- [ ] Sketch rough layout on paper/Figma
- [ ] Decide on overall vibe (Technical/Product/Hybrid)

### Phase 2: Foundation (Week 1-2)
- [ ] Set up Next.js project
- [ ] Choose color palette
- [ ] Build basic structure (hero, sections)
- [ ] Get domain and deployment working

### Phase 3: Content (Week 2-3)
- [ ] Write compelling project descriptions
- [ ] Create/capture Shuolio demo
- [ ] Design system architecture diagrams
- [ ] Gather metrics/numbers for Amazon work

### Phase 4: Polish (Week 3-4)
- [ ] Add animations with Framer Motion
- [ ] Implement interactive elements
- [ ] Optimize performance
- [ ] Test on mobile
- [ ] (Optional) Add AI chat assistant

---

## Example Sites to Study

**Developer Portfolios:**
- [Brittany Chiang](https://brittanychiang.com/) - Clean, minimal, effective
- [Elliott Mangham](https://elliott.mangham.dev) - Award-winning, detailed interactions
- Jesse Zhou - 3D portfolio with Three.js (mentioned in research)

**Award Sites (Awwwards):**
- Search "portfolio 2025" on Awwwards
- Filter by "Developer Award" to see technical excellence
- Look at recent "Site of the Day" winners

**Trend Resources:**
- [Webflow Blog](https://webflow.com/blog/web-design-trends-2025)
- [Framer Examples](https://www.framer.com/blog/web-design-trends/)
- [Awwwards Collections](https://www.awwwards.com/websites/portfolio/)

---

## My Recommendation

Given your background and goals, I'd suggest **Option B (Product Engineer) with selective elements from Option C**.

**Why:**
1. **Frontier AI companies want builders** - Show Shuolio front and center
2. **Clean beats clever** - You're senior enough to not need gimmicks
3. **Add one "wow" moment** - Maybe an AI chat assistant or interactive architecture diagram
4. **Optimize for mobile** - Recruiters often browse on phones
5. **Ship fast, iterate** - Weekend project, not month-long ordeal

**Specific Vision:**
- Clean, light design (professional but warm)
- Shuolio demo with animated metrics
- Interactive Amazon systems diagram
- Simple but smooth animations
- Small AI chat widget (bottom right) to answer questions
- Custom cursor that highlights clickable elements
- Dark mode toggle
- Sub-3 second load time

**Estimated Time:** 2-3 weekends if you focus

**Differentiator:** The AI chat assistant. Very few portfolios have this, it's on-brand for AI companies, and it's actually useful for answering "tell me about his experience with X" type questions.

---

## Questions to Consider

1. **What's your tolerance for "flashy"?** - Some people love 3D, others find it distracting
2. **How much do you want to stand out vs. blend in?** - Safe can still be effective
3. **Mobile-first or desktop-first?** - Affects design decisions
4. **How often will you update this?** - Affects architecture choices
5. **Do you want to blog?** - Could add a technical writing section

---

## Resources

**Design Inspiration:**
- [Awwwards Portfolio Collection](https://www.awwwards.com/websites/portfolio/)
- [One Page Love](https://onepagelove.com/)
- [Behance](https://www.behance.net/)

**Development:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Templates](https://vercel.com/templates)

**Fonts:**
- [Inter](https://rsms.me/inter/) - Modern, readable
- [Geist](https://vercel.com/font) - Vercel's new font
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - For code

**Color Tools:**
- [Coolors](https://coolors.co/) - Palette generator
- [Realtime Colors](https://www.realtimecolors.com/) - Preview palettes
- [Tailwind Color Generator](https://uicolors.app/create)

---

## Final Thoughts

Your 2019 site isn't *bad* - it's just outdated in the context of 2025 and your current goals. Modern portfolios are less about listing accomplishments and more about creating an experience that leaves visitors thinking "I want to work with this person."

The good news: you have incredible material to work with. Shuolio alone is a stronger portfolio piece than most senior engineers have. The Amazon scale numbers are genuinely impressive. You just need to *present* it in a way that matches the quality of the work.

Focus on:
- **Story over specs** - Why these projects mattered
- **Show over tell** - Demos, videos, diagrams
- **Personality over polish** - Let your interests show
- **Speed over features** - Fast, simple beats slow, fancy

Remember: The portfolio itself is a product. Treat it like you'd treat Shuolio - start with an MVP, ship it, get feedback, iterate.

Want me to help you sketch out a specific design or start building the foundation?