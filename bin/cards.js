const deck = {
  // the major arcana babyyyy
  "the fool": {
    upright: {
      title: "the fool",
      description: "the fool represents new beginnings, having faith in the future, and being inexperienced.",
      card: `
  ┌────────┐
  │  0     │
  │ ⋆✧⋆✧   │
  │  ◠     │
  │   ⋆    │
  │  / \\   │
  └────────┘`
    },
    reversed: {
      title: "the fool reversed",
      description: "the fool reversed warns against being reckless, taking unnecessary risks, and acting without thought.",
      card: `
  ┌────────┐
  │   / \\  │
  │    ⋆   │
  │    ◡   │
  │  ⋆✧⋆✧  │
  │     0  │
  └────────┘`
    }
  },
  "the magician": {
    upright: {
      title: "the magician",
      description: "the magician signifies creativity, self-confidence, and the ability to manifest one's desires.",
      card: `
  ┌────────┐
  │  I     │
  │  ∞     │
  │  ⚡    │
  │  ⭒     │
  │  ⚕     │
  └────────┘`
    },
    reversed: {
      title: "the magician reversed",
      description: "the magician reversed indicates deceit, lack of planning, and not using one's skills to their full potential.",
      card: `
  ┌────────┐
  │  ⚕     │
  │  ⭒     │
  │  ⚡    │
  │  ∞     │
  │  I     │
  └────────┘`
    }
  },
  "the high priestess": {
    upright: {
      title: "the high priestess",
      description: "the high priestess represents wisdom, intuition, and the ability to see beyond the obvious.",
      card: `
  ┌────────┐
  │  II    │
  │  ☽     │
  │  ⚜     │
  │  ✧     │
  │  ☾     │
  └────────┘`
    },
    reversed: {
      title: "the high priestess reversed",
      description: "the high priestess reversed suggests hidden agendas, lack of insight, and feeling disconnected from one's intuition.",
      card: `
  ┌────────┐
  │  ☾     │
  │  ✧     │
  │  ⚜     │
  │  ☽     │
  │  II    │
  └────────┘`
    }
  },
  "the empress": {
    upright: {
      title: "the empress",
      description: "the empress signifies growth, creativity, and the nurturing aspects of life.",
      card: `
  ┌────────┐
  │  III   │
  │  ♀     │
  │  ❀     │
  │  ⚘     │
  │  ❦     │
  └────────┘`
    },
    reversed: {
      title: "the empress reversed",
      description: "the empress reversed indicates dependence on others, neglect, and creative blocks.",
      card: `
  ┌────────┐
  │  ❦     │
  │  ⚘     │
  │  ❀     │
  │  ♀     │
  │  III   │
  └────────┘`
    }
  },
  "the emperor": {
    upright: {
      title: "the emperor",
      description: "the emperor represents authority, structure, and the power to achieve goals.",
      card: `
  ┌────────┐
  │  IV    │
  │  ♂     │
  │  ⚔     │
  │  ♦     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the emperor reversed",
      description: "the emperor reversed suggests abuse of power, rigidity, and lack of discipline.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ♦     │
  │  ⚔     │
  │  ♂     │
  │  IV    │
  └────────┘`
    }
  },
  "the hierophant": {
    upright: {
      title: "the hierophant",
      description: "the hierophant represents tradition, conformity, and spiritual guidance.",
      card: `
  ┌────────┐
  │  V     │
  │  ✟     │
  │  ☨     │
  │  ✞     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the hierophant reversed",
      description: "the hierophant reversed indicates rebellion against tradition, subversiveness, and seeking new approaches.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ✞     │
  │  ☨     │
  │  ✟     │
  │  V     │
  └────────┘`
    }
  },
  "the lovers": {
    upright: {
      title: "the lovers",
      description: "the lovers signify deep connections, harmony, and important relationships.",
      card: `
  ┌────────┐
  │  VI    │
  │  ♡     │
  │  ∞     │
  │  ☁     │
  │  ♥     │
  └────────┘`
    },
    reversed: {
      title: "the lovers reversed",
      description: "the lovers reversed suggests disharmony, misalignment in relationships, and conflicts.",
      card: `
  ┌────────┐
  │  ♥     │
  │  ☁     │
  │  ∞     │
  │  ♡     │
  │  VI    │
  └────────┘`
    }
  },
  "the chariot": {
    upright: {
      title: "the chariot",
      description: "the chariot represents triumph, willpower, and determination to achieve goals.",
      card: `
  ┌────────┐
  │  VII   │
  │  ⚡    │
  │  ☸     │
  │  ⚔     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the chariot reversed",
      description: "the chariot reversed indicates lack of control, aggression, and self-doubt.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ⚔     │
  │  ☸     │
  │  ⚡    │
  │  VII   │
  └────────┘`
    }
  },
  "strength": {
    upright: {
      title: "strength",
      description: "strength signifies inner strength, courage, and compassion.",
      card: `
  ┌────────┐
  │  VIII  │
  │  ∞     │
  │  ♌    │
  │  ⚔     │
  │  ❤     │
  └────────┘`
    },
    reversed: {
      title: "strength reversed",
      description: "strength reversed suggests weakness, self-doubt, and lack of discipline.",
      card: `
  ┌────────┐
  │  ❤     │
  │  ⚔     │
  │  ♌    │
  │  ∞     │
  │  VIII  │
  └────────┘`
    }
  },
  "the hermit": {
    upright: {
      title: "the hermit",
      description: "the hermit represents introspection, seeking solitude, and inner guidance.",
      card: `
  ┌────────┐
  │  IX    │
  │  ✧     │
  │  ☽     │
  │  ⚡    │
  │  ✦     │
  └────────┘`
    },
    reversed: {
      title: "the hermit reversed",
      description: "the hermit reversed indicates isolation, withdrawal from others, and loneliness.",
      card: `
  ┌────────┐
  │  ✦     │
  │  ⚡    │
  │  ☽     │
  │  ✧     │
  │  IX    │
  └────────┘`
    }
  },
  "wheel of fortune": {
    upright: {
      title: "wheel of fortune",
      description: "wheel of fortune signifies change, cycles of life, and fate.",
      card: `
  ┌────────┐
  │  X     │
  │  ⚙     │
  │  ☸     │
  │  ✧     │
  │  ∞     │
  └────────┘`
    },
    reversed: {
      title: "wheel of fortune reversed",
      description: "wheel of fortune reversed suggests bad luck, resistance to change, and unwelcome changes.",
      card: `
  ┌────────┐
  │  ∞     │
  │  ✧     │
  │  ☸     │
  │  ⚙     │
  │  X     │
  └────────┘`
    }
  },
  "justice": {
    upright: {
      title: "justice",
      description: "justice represents fairness, truth, and the law.",
      card: `
  ┌────────┐
  │  XI    │
  │  ⚖     │
  │  ⚔     │
  │  ☤     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "justice reversed",
      description: "justice reversed indicates injustice, dishonesty, and unfairness.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ☤     │
  │  ⚔     │
  │  ⚖     │
  │  XI    │
  └────────┘`
    }
  },
  "the hanged man": {
    upright: {
      title: "the hanged man",
      description: "the hanged man signifies sacrifice, letting go, and gaining a new perspective.",
      card: `
  ┌────────┐
  │  XII   │
  │  ⅄     │
  │  ✝     │
  │  ☯     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the hanged man reversed",
      description: "the hanged man reversed suggests stalling, indecision, and delays.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ☯     │
  │  ✝     │
  │  ⅄     │
  │  XII   │
  └────────┘`
    }
  },
  "death": {
    upright: {
      title: "death",
      description: "death represents transformation, endings, and significant change.",
      card: `
  ┌────────┐
  │  XIII  │
  │  ☠     │
  │  ⚰     │
  │  ✞     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "death reversed",
      description: "death reversed indicates resistance to change, stagnation, and fear of change.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ✞     │
  │  ⚰     │
  │  ☠     │
  │  XIII  │
  └────────┘`
    }
  },
  "temperance": {
    upright: {
      title: "temperance",
      description: "temperance signifies balance, moderation, and patience.",
      card: `
  ┌────────┐
  │  XIV   │
  │  ⚖     │
  │  ∞     │
  │  ☯     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "temperance reversed",
      description: "temperance reversed suggests imbalance, excess, and lack of harmony.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ☯     │
  │  ∞     │
  │  ⚖     │
  │  XIV   │
  └────────┘`
    }
  },
  "the devil": {
    upright: {
      title: "the devil",
      description: "the devil represents addiction, materialism, and feeling trapped.",
      card: `
  ┌────────┐
  │  XV    │
  │  ⛧     │
  │  ♄     │
  │  ⚔     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the devil reversed",
      description: "the devil reversed indicates breaking free, release from bondage, and restoration of control.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ⚔     │
  │  ♄     │
  │  ⛧     │
  │  XV    │
  └────────┘`
    }
  },
  "the tower": {
    upright: {
      title: "the tower",
      description: "the tower signifies sudden upheaval, disaster, and revelation.",
      card: `
  ┌────────┐
  │  XVI   │
  │  ⚡    │
  │  ▲     │
  │  ☄     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the tower reversed",
      description: "the tower reversed suggests resistance to change, fear of change, and narrowly avoiding disaster.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ☄     │
  │  ▲     │
  │  ⚡    │
  │  XVI   │
  └────────┘`
    }
  },
  "the star": {
    upright: {
      title: "the star",
      description: "the star represents hope, inspiration, and serenity.",
      card: `
  ┌────────┐
  │  XVII  │
  │  ★     │
  │  ✧     │
  │  ⭐    │
  │  ✦     │
  └────────┘`
    },
    reversed: {
      title: "the star reversed",
      description: "the star reversed indicates despair, disconnection, and lack of faith.",
      card: `
  ┌────────┐
  │  ✦     │
  │  ⭐    │
  │  ✧     │
  │  ★     │
  │  XVII  │
  └────────┘`
    }
  },
  "the moon": {
    upright: {
      title: "the moon",
      description: "the moon signifies illusion, intuition, and fear of the unknown.",
      card: `
  ┌────────┐
  │  XVIII │
  │  ☽     │
  │  ◑     │
  │  ☾     │
  │  ◐     │
  └────────┘`
    },
    reversed: {
      title: "the moon reversed",
      description: "the moon reversed indicates deception, manipulation, and hidden agendas.",
      card: `
  ┌────────┐
  │  ◐     │
  │  ☾     │
  │  ◑     │
  │  ☽     │
  │  XVIII │
  └────────┘`
    }
  },
  "the sun": {
    upright: {
      title: "the sun",
      description: "the sun embodies boundless joy, radiant clarity, and the triumph of enlightenment, signifying success, vitality, and the illumination of the soul’s true purpose on its journey.",
      card: `
  ┌────────┐
  │  XIX   │
  │  ☀     │
  │  ☼     │
  │  ✺     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the sun reversed",
      description: "the sun reversed signifies temporary setbacks, doubt, or a diminished sense of optimism.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ✺     │
  │  ☼     │
  │  ☀     │
  │  XIX   │
  └────────┘`
    }
  },
  "judgement": {
    upright: {
      title: "judgement",
      description: "judgement represents spiritual awakening, self-evaluation.",
      card: `
  ┌────────┐
  │  XX    │
  │  ☧     │
  │  ✝     │
  │  ⚖     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "judgement reversed",
      description: "judgement reversed signifies doubt, avoidance, or resistance to personal accountability.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ⚖     │
  │  ✝     │
  │  ☧     │
  │  XX    │
  └────────┘`
    }
  },
  "the world": {
    upright: {
      title: "the world",
      description: "the world signifies completion, fulfillment, and unity; it can represent the end of a life cycle and the start of a new one.",
      card: `
  ┌────────┐
  │  XXI   │
  │  ⊕     │
  │  ☯     │
  │  ∞     │
  │  ⚜     │
  └────────┘`
    },
    reversed: {
      title: "the world reversed",
      description: "the world reversed suggests stagnation, unfulfilled goals, or a lack of closure.",
      card: `
  ┌────────┐
  │  ⚜     │
  │  ∞     │
  │  ☯     │
  │  ⊕     │
  │  XXI   │
  └────────┘`
    }
  },
    // wands suit and their reversed cards
    "ace of wands": {
    upright: {
      title: "ace of wands",
      description: "the ace of wands symbolizes inspiration, creative potential, and the spark of new ideas.",
      card: `
    ┌────────┐
    │  A     │
    │  ⚡    │
    │  ♠     │
    │  ✦     │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "ace of wands reversed",
      description: "the ace of wands reversed represents delays, lack of motivation, or creative blocks.",
      card: `
    ┌────────┐
    │  W     │
    │  ✦     │
    │  ♠     │
    │  ⚡    │
    │  A     │
    └────────┘`
    }
  },
  "two of wands": {
    upright: {
      title: "two of wands",
      description: "the two of wands represents planning, decision-making, and taking initial steps toward a goal.",
      card: `
    ┌────────┐
    │  2     │
    │  ⚡    │
    │  ♠♠    │
    │  ✦     │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "two of wands reversed",
      description: "the two of wands reversed suggests indecision, fear of change, or a lack of clear direction.",
      card: `
    ┌────────┐
    │  W     │
    │  ✦     │
    │  ♠♠    │
    │  ⚡    │
    │  2     │
    └────────┘`
    }
  },
  "three of wands": {
    upright: {
      title: "three of wands",
      description: "the three of wands signifies expansion, foresight, and opportunities on the horizon.",
      card: `
    ┌────────┐
    │  3     │
    │  ⚡    │
    │  ♠♠♠   │
    │  ✦     │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "three of wands reversed",
      description: "the three of wands reversed points to delays, setbacks, or a lack of progress in plans.",
      card: `
    ┌────────┐
    │  W     │
    │  ✦     │
    │  ♠♠♠   │
    │  ⚡    │
    │  3     │
    └────────┘`
    }
  },
  "four of wands": {
    upright: {
      title: "four of wands",
      description: "the four of wands represents celebration, harmony, and a sense of community or achievement.",
      card: `
    ┌────────┐
    │  4     │
    │  ⚡    │
    │  ♠♠    │
    │  ♠♠    │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "four of wands reversed",
      description: "the four of wands reversed suggests instability, lack of support, or delayed celebrations.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠    │
    │  ♠♠    │
    │  ⚡    │
    │  4     │
    └────────┘`
    }
  },
  "five of wands": {
    upright: {
      title: "five of wands",
      description: "the five of wands symbolizes conflict, competition, or a struggle for power.",
      card: `
    ┌────────┐
    │  5     │
    │  ⚡    │
    │  ♠♠♠   │
    │  ♠♠    │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "five of wands reversed",
      description: "the five of wands reversed points to resolving conflicts, avoiding disputes, or inner struggles.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠    │
    │  ♠♠♠   │
    │  ⚡    │
    │  5     │
    └────────┘`
    }
  },
  "six of wands": {
    upright: {
      title: "six of wands",
      description: "the six of wands signifies victory, recognition, and achieving success through effort.",
      card: `
    ┌────────┐
    │  6     │
    │  ⚡    │
    │  ♠♠♠   │
    │  ♠♠♠   │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "six of wands reversed",
      description: "the six of wands reversed indicates self-doubt, lack of recognition, or struggles despite effort.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠♠   │
    │  ♠♠♠   │
    │  ⚡    │
    │  6     │
    └────────┘`
    }
  },
  "seven of wands": {
    upright: {
      title: "seven of wands",
      description: "the seven of wands represents perseverance, defending one's position, and overcoming obstacles.",
      card: `
    ┌────────┐
    │  7     │
    │  ♠♠♠   │
    │  ♠     │
    │  ♠♠♠   │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "seven of wands reversed",
      description: "the seven of wands reversed points to feeling overwhelmed, defensiveness, or a lack of confidence.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠♠   │
    │  ♠     │
    │  ♠♠♠   │
    │  7     │
    └────────┘`
    }
  },
  "eight of wands": {
    upright: {
      title: "eight of wands",
      description: "the eight of wands signifies swift movement, progress, and rapid development toward goals.",
      card: `
    ┌────────┐
    │  8     │
    │  ♠♠♠♠  │
    │  ⚡    │
    │  ♠♠♠♠  │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "eight of wands reversed",
      description: "the eight of wands reversed represents delays, miscommunication, or a lack of direction in progress.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠♠♠  │
    │  ⚡    │
    │  ♠♠♠♠  │
    │  8     │
    └────────┘`
    }
  },
  "nine of wands": {
    upright: {
      title: "nine of wands",
      description: "the nine of wands represents resilience, persistence, and standing strong despite challenges.",
      card: `
    ┌────────┐
    │  9     │
    │  ♠♠♠   │
    │  ♠♠♠   │
    │  ♠♠♠   │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "nine of wands reversed",
      description: "the nine of wands reversed suggests exhaustion, defensiveness, or feeling overwhelmed by obstacles.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠♠   │
    │  ♠♠♠   │
    │  ♠♠♠   │
    │  9     │
    └────────┘`
    }
  },
  "ten of wands": {
    upright: {
      title: "ten of wands",
      description: "the ten of wands symbolizes burden, hard work, and the responsibilities that come with success.",
      card: `
    ┌────────┐
    │  10    │
    │  ♠♠♠♠  │
    │  ♠♠    │
    │  ♠♠♠♠  │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "ten of wands reversed",
      description: "the ten of wands reversed indicates release, delegation, or overcoming feelings of overwhelm.",
      card: `
    ┌────────┐
    │  W     │
    │  ♠♠♠♠  │
    │  ♠♠    │
    │  ♠♠♠♠  │
    │  10    │
    └────────┘`
    }
  },
  "page of wands": {
    upright: {
      title: "page of wands",
      description: "the page of wands signifies enthusiasm, curiosity, and the beginning of a creative journey.",
      card: `
    ┌────────┐
    │  P     │
    │  ⚡    │
    │  ♠     │
    │  ✧     │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "page of wands reversed",
      description: "the page of wands reversed represents hesitation, lack of direction, or failed initiatives.",
      card: `
    ┌────────┐
    │  W     │
    │  ✧     │
    │  ♠     │
    │  ⚡    │
    │  P     │
    └────────┘`
    }
  },
  "knight of wands": {
    upright: {
      title: "knight of wands",
      description: "the knight of wands embodies passion, action, and an adventurous spirit driving forward with ambition.",
      card: `
    ┌────────┐
    │  Kn    │
    │  ⚔     │
    │  ♠     │
    │  ⚡    │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "knight of wands reversed",
      description: "the knight of wands reversed points to recklessness, impatience, or a lack of follow-through.",
      card: `
    ┌────────┐
    │  W     │
    │  ⚡    │
    │  ♠     │
    │  ⚔     │
    │  Kn    │
    └────────┘`
    }
  },
  "queen of wands": {
    upright: {
      title: "queen of wands",
      description: "the queen of wands represents confidence, charisma, and the ability to inspire others through passion.",
      card: `
    ┌────────┐
    │  Q     │
    │  ♛     │
    │  ♠     │
    │  ⚡    │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "queen of wands reversed",
      description: "the queen of wands reversed suggests insecurity, jealousy, or a misuse of one's influence.",
      card: `
    ┌────────┐
    │  W     │
    │  ⚡    │
    │  ♠     │
    │  ♛     │
    │  Q     │
    └────────┘`
    }
  },
  "king of wands": {
    upright: {
      title: "king of wands",
      description: "the king of wands signifies leadership, vision, and the ability to inspire and achieve great things.",
      card: `
    ┌────────┐
    │  K     │
    │  ♚     │
    │  ♠     │
    │  ⚡    │
    │  W     │
    └────────┘`
    },
    reversed: {
      title: "king of wands reversed",
      description: "the king of wands reversed points to arrogance, impulsiveness, or a misuse of authority.",
      card: `
    ┌────────┐
    │  W     │
    │  ⚡    │
    │  ♠     │
    │  ♚     │
    │  K     │
    └────────┘`
    }
  },
      // cups suit and their reversed cards

  "ace of cups": {
    upright: {
      title: "ace of cups",
      description: "the ace of cups represents emotional fulfillment, new beginnings in love, and overflowing compassion.",
      card: `
    ┌────────┐
    │  A     │
    │  💧    │
    │  ♡     │
    │  ✦     │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "ace of cups reversed",
      description: "the ace of cups reversed suggests emotional blockages, withheld feelings, or unexpressed love.",
      card: `
    ┌────────┐
    │  C     │
    │  ✦     │
    │  ♡     │
    │  💧    │
    │  A     │
    └────────┘`
    }
  },
  "two of cups": {
    upright: {
      title: "two of cups",
      description: "the two of cups signifies harmony, mutual love, and the deep connection between two people.",
      card: `
    ┌────────┐
    │  2     │
    │  💧    │
    │  ♡♡    │
    │  ✦     │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "two of cups reversed",
      description: "the two of cups reversed points to disharmony, imbalance, or tension in relationships.",
      card: `
    ┌────────┐
    │  C     │
    │  ✦     │
    │  ♡♡    │
    │  💧    │
    │  2     │
    └────────┘`
    }
  },
  "three of cups": {
    upright: {
      title: "three of cups",
      description: "the three of cups represents friendship, celebration, and the joy of shared connections.",
      card: `
    ┌────────┐
    │  3     │
    │  💧    │
    │  ♡♡♡   │
    │  ✦     │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "three of cups reversed",
      description: "the three of cups reversed suggests overindulgence, gossip, or the strain of social dynamics.",
      card: `
    ┌────────┐
    │  C     │
    │  ✦     │
    │  ♡♡♡   │
    │  💧    │
    │  3     │
    └────────┘`
    }
  },
  "four of cups": {
    upright: {
      title: "four of cups",
      description: "the four of cups symbolizes introspection, apathy, and the need to refocus on emotional opportunities.",
      card: `
    ┌────────┐
    │  4     │
    │  💧    │
    │  ♡♡    │
    │  ♡♡    │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "four of cups reversed",
      description: "the four of cups reversed indicates renewed interest, emotional awakening, or taking new opportunities.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡    │
    │  ♡♡    │
    │  💧    │
    │  4     │
    └────────┘`
    }
  },
  "five of cups": {
    upright: {
      title: "five of cups",
      description: "the five of cups represents loss, regret, and dwelling on what has been left behind.",
      card: `
    ┌────────┐
    │  5     │
    │  💧    │
    │  ♡♡♡   │
    │  ♡♡    │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "five of cups reversed",
      description: "the five of cups reversed suggests acceptance, moving on, and finding hope in emotional recovery.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡    │
    │  ♡♡♡   │
    │  💧    │
    │  5     │
    └────────┘`
    }
  },
  "six of cups": {
    upright: {
      title: "six of cups",
      description: "the six of cups signifies nostalgia, childhood memories, and reconnecting with the past.",
      card: `
    ┌────────┐
    │  6     │
    │  💧    │
    │  ♡♡♡   │
    │  ♡♡♡   │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "six of cups reversed",
      description: "the six of cups reversed suggests being stuck in the past, unrealistic nostalgia, or letting go of old ties.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡♡   │
    │  ♡♡♡   │
    │  💧    │
    │  6     │
    └────────┘`
    }
  },
  "seven of cups": {
    upright: {
      title: "seven of cups",
      description: "the seven of cups represents choices, illusions, and the challenge of seeing through fantasy to find clarity.",
      card: `
    ┌────────┐
    │  7     │
    │  ♡♡♡   │
    │  ♡     │
    │  ♡♡♡   │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "seven of cups reversed",
      description: "the seven of cups reversed indicates clarity, making focused choices, or breaking free from illusions.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡♡   │
    │  ♡     │
    │  ♡♡♡   │
    │  7     │
    └────────┘`
    }
  },
  "eight of cups": {
    upright: {
      title: "eight of cups",
      description: "the eight of cups signifies walking away, seeking deeper fulfillment, and leaving behind the familiar.",
      card: `
    ┌────────┐
    │  8     │
    │  ♡♡♡♡  │
    │  💧    │
    │  ♡♡♡♡  │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "eight of cups reversed",
      description: "the eight of cups reversed suggests fear of change, stagnation, or returning to something left behind.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡♡♡  │
    │  💧    │
    │  ♡♡♡♡  │
    │  8     │
    └────────┘`
    }
  },
  "nine of cups": {
    upright: {
      title: "nine of cups",
      description: "the nine of cups represents satisfaction, contentment, and the fulfillment of personal desires.",
      card: `
    ┌────────┐
    │  9     │
    │  ♡♡♡   │
    │  ♡♡♡   │
    │  ♡♡♡   │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "nine of cups reversed",
      description: "the nine of cups reversed indicates dissatisfaction, overindulgence, or a lack of emotional fulfillment.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡♡   │
    │  ♡♡♡   │
    │  ♡♡♡   │
    │  9     │
    └────────┘`
    }
  },
  "ten of cups": {
    upright: {
      title: "ten of cups",
      description: "the ten of cups signifies emotional fulfillment, harmony, and a sense of complete happiness in relationships.",
      card: `
    ┌────────┐
    │  10    │
    │  ♡♡♡♡  │
    │  ♡♡    │
    │  ♡♡♡♡  │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "ten of cups reversed",
      description: "the ten of cups reversed points to disharmony, strained relationships, or unmet expectations.",
      card: `
    ┌────────┐
    │  C     │
    │  ♡♡♡♡  │
    │  ♡♡    │
    │  ♡♡♡♡  │
    │  10    │
    └────────┘`
    }
  },
  "page of cups": {
    upright: {
      title: "page of cups",
      description: "the page of cups signifies new emotional experiences, curiosity, and the wonder of intuition.",
      card: `
    ┌────────┐
    │  P     │
    │  💧    │
    │  ♡     │
    │  ✧     │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "page of cups reversed",
      description: "the page of cups reversed suggests emotional immaturity, insecurity, or repressed feelings.",
      card: `
    ┌────────┐
    │  C     │
    │  ✧     │
    │  ♡     │
    │  💧    │
    │  P     │
    └────────┘`
    }
  },
  "knight of cups": {
    upright: {
      title: "knight of cups",
      description: "the knight of cups represents romance, charm, and pursuing dreams with emotional depth.",
      card: `
    ┌────────┐
    │  Kn    │
    │  💧    │
    │  ♡     │
    │  ⚡    │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "knight of cups reversed",
      description: "the knight of cups reversed indicates moodiness, unrealistic expectations, or emotional instability.",
      card: `
    ┌────────┐
    │  C     │
    │  ⚡    │
    │  ♡     │
    │  💧    │
    │  Kn    │
    └────────┘`
    }
  },
  "queen of cups": {
    upright: {
      title: "queen of cups",
      description: "the queen of cups embodies compassion, emotional intuition, and deep nurturing energy.",
      card: `
    ┌────────┐
    │  Q     │
    │  ♛     │
    │  ♡     │
    │  💧    │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "queen of cups reversed",
      description: "the queen of cups reversed suggests emotional imbalance, insecurity, or a tendency to self-sacrifice.",
      card: `
    ┌────────┐
    │  C     │
    │  💧    │
    │  ♡     │
    │  ♛     │
    │  Q     │
    └────────┘`
    }
  },
  "king of cups": {
    upright: {
      title: "king of cups",
      description: "the king of cups represents emotional mastery, balance, and a calm, compassionate leadership style.",
      card: `
    ┌────────┐
    │  K     │
    │  ♚     │
    │  ♡     │
    │  💧    │
    │  C     │
    └────────┘`
    },
    reversed: {
      title: "king of cups reversed",
      description: "the king of cups reversed suggests emotional manipulation, volatility, or lack of control over feelings.",
      card: `
    ┌────────┐
    │  C     │
    │  💧    │
    │  ♡     │
    │  ♚     │
    │  K     │
    └────────┘`
    }
  }, 
  "ace of swords": {
    upright: {
      title: "ace of swords",
      description: "the ace of swords represents mental clarity, breakthrough ideas, and the power of truth and intellect.",
      card: `
    ┌────────┐
    │  A     │
    │  🗡️     │
    │  ⚡     │
    │  ✦     │
    │  S     │
    └────────┘`
    }
  },
      // swords suit and their reversed cards
    "ace of swords": {
      upright: {
        title: "ace of swords",
        description: "the ace of swords represents mental clarity, breakthrough ideas, and the power of truth and intellect.",
        card: `
    ┌────────┐
    │  A     │
    │  🗡️     │
    │  ⚡     │
    │  ✦     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "ace of swords reversed",
        description: "the ace of swords reversed suggests confusion, miscommunication, or the distortion of truth.",
        card: `
    ┌────────┐
    │  S     │
    │  ✦     │
    │  ⚡     │
    │  🗡️     │
    │  A     │
    └────────┘`
      }
    },
    "two of swords": {
      upright: {
        title: "two of swords",
        description: "the two of swords signifies difficult decisions, indecision, and finding balance between opposing forces.",
        card: `
    ┌────────┐
    │  2     │
    │  🗡️🗡️   │
    │  ⚔️     │
    │  ✦     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "two of swords reversed",
        description: "the two of swords reversed suggests confusion, stalemate, or avoidance of making decisions.",
        card: `
    ┌────────┐
    │  S     │
    │  ✦     │
    │  ⚔️     │
    │  🗡️🗡️   │
    │  2     │
    └────────┘`
      }
    },
    "three of swords": {
      upright: {
        title: "three of swords",
        description: "the three of swords represents heartbreak, sorrow, and emotional pain from difficult experiences.",
        card: `
    ┌────────┐
    │  3     │
    │  🗡️🗡️🗡️ │
    │  ⚔️     │
    │  ✦     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "three of swords reversed",
        description: "the three of swords reversed signifies healing, forgiveness, and overcoming emotional pain.",
        card: `
    ┌────────┐
    │  S     │
    │  ✦     │
    │  ⚔️     │
    │  🗡️🗡️🗡️ │
    │  3     │
    └────────┘`
      }
    },
    "four of swords": {
      upright: {
        title: "four of swords",
        description: "the four of swords symbolizes rest, recovery, and the need for reflection and rejuvenation.",
        card: `
    ┌────────┐
    │  4     │
    │  🗡️🗡️   │
    │  🗡️🗡️   │
    │  ✦     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "four of swords reversed",
        description: "the four of swords reversed suggests burnout, restlessness, or the inability to find peace.",
        card: `
    ┌────────┐
    │  S     │
    │  ✦     │
    │  🗡️🗡️   │
    │  🗡️🗡️   │
    │  4     │
    └────────┘`
      }
    },
    "five of swords": {
      upright: {
        title: "five of swords",
        description: "the five of swords represents conflict, betrayal, or a hollow victory at the expense of others.",
        card: `
    ┌────────┐
    │  5     │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️   │
    │  ✦     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "five of swords reversed",
        description: "the five of swords reversed suggests resolution of conflict, forgiveness, or making amends.",
        card: `
    ┌────────┐
    │  S     │
    │  ✦     │
    │  🗡️🗡️   │
    │  🗡️🗡️🗡️ │
    │  5     │
    └────────┘`
      }
    },
    "six of swords": {
      upright: {
        title: "six of swords",
        description: "the six of swords signifies transition, moving forward, and finding peace after a struggle.",
        card: `
    ┌────────┐
    │  6     │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️🗡️ │
    │  ✦     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "six of swords reversed",
        description: "the six of swords reversed indicates difficulty letting go, resistance to change, or stagnation.",
        card: `
    ┌────────┐
    │  S     │
    │  ✦     │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️🗡️ │
    │  6     │
    └────────┘`
      }
    },
    "seven of swords": {
      upright: {
        title: "seven of swords",
        description: "the seven of swords symbolizes deception, strategy, and the need for discretion or careful planning.",
        card: `
    ┌────────┐
    │  7     │
    │  🗡️🗡️🗡️ │
    │  🗡️     │
    │  🗡️🗡️🗡️ │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "seven of swords reversed",
        description: "the seven of swords reversed represents guilt, exposure of deceit, or a return to honesty.",
        card: `
    ┌────────┐
    │  S     │
    │  🗡️🗡️🗡️ │
    │  🗡️     │
    │  🗡️🗡️🗡️ │
    │  7     │
    └────────┘`
      }
    },
    "eight of swords": {
      upright: {
        title: "eight of swords",
        description: "the eight of swords signifies restriction, feeling trapped, and self-imposed limitations.",
        card: `
    ┌────────┐
    │  8     │
    │  🗡️🗡️🗡️🗡️ │
    │  ⚡     │
    │  🗡️🗡️🗡️🗡️ │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "eight of swords reversed",
        description: "the eight of swords reversed suggests liberation, breaking free, or gaining clarity from constraints.",
        card: `
    ┌────────┐
    │  S     │
    │  🗡️🗡️🗡️🗡️ │
    │  ⚡     │
    │  🗡️🗡️🗡️🗡️ │
    │  8     │
    └────────┘`
      }
    },
    "nine of swords": {
      upright: {
        title: "nine of swords",
        description: "the nine of swords represents anxiety, worry, and sleepless nights caused by inner turmoil.",
        card: `
    ┌────────┐
    │  9     │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️🗡️ │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "nine of swords reversed",
        description: "the nine of swords reversed signifies overcoming fear, finding hope, and releasing mental anguish.",
        card: `
    ┌────────┐
    │  S     │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️🗡️ │
    │  🗡️🗡️🗡️ │
    │  9     │
    └────────┘`
      }
    },
    "ten of swords": {
      upright: {
        title: "ten of swords",
        description: "the ten of swords symbolizes betrayal, painful endings, and the darkest hour before rebirth.",
        card: `
    ┌────────┐
    │  10    │
    │  🗡️🗡️🗡️🗡️ │
    │  🗡️🗡️   │
    │  🗡️🗡️🗡️🗡️ │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "ten of swords reversed",
        description: "the ten of swords reversed signifies recovery, letting go of pain, and the dawn of a new cycle.",
        card: `
    ┌────────┐
    │  S     │
    │  🗡️🗡️🗡️🗡️ │
    │  🗡️🗡️   │
    │  🗡️🗡️🗡️🗡️ │
    │  10    │
    └────────┘`
      }
    },
    "page of swords": {
      upright: {
        title: "page of swords",
        description: "the page of swords represents curiosity, new ideas, and a thirst for knowledge and communication.",
        card: `
    ┌────────┐
    │  P     │
    │  🗡️     │
    │  ⚡     │
    │  ✧     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "page of swords reversed",
        description: "the page of swords reversed suggests gossip, mental restlessness, or a lack of focus.",
        card: `
    ┌────────┐
    │  S     │
    │  ✧     │
    │  ⚡     │
    │  🗡️     │
    │  P     │
    └────────┘`
      }
    },
    "knight of swords": {
      upright: {
        title: "knight of swords",
        description: "the knight of swords embodies determination, action, and a fast-paced pursuit of goals.",
        card: `
    ┌────────┐
    │  Kn    │
    │  ⚔️     │
    │  🗡️     │
    │  ⚡     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "knight of swords reversed",
        description: "the knight of swords reversed points to impulsiveness, recklessness, or a lack of direction.",
        card: `
    ┌────────┐
    │  S     │
    │  ⚡     │
    │  🗡️     │
    │  ⚔️     │
    │  Kn    │
    └────────┘`
      }
    },
    "queen of swords": {
      upright: {
        title: "queen of swords",
        description: "the queen of swords represents intellect, independence, and clear, honest communication.",
        card: `
    ┌────────┐
    │  Q     │
    │  ♛     │
    │  🗡️     │
    │  ⚡     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "queen of swords reversed",
        description: "the queen of swords reversed suggests coldness, overly critical thinking, or miscommunication.",
        card: `
    ┌────────┐
    │  S     │
    │  ⚡     │
    │  🗡️     │
    │  ♛     │
    │  Q     │
    └────────┘`
      }
    },
    "king of swords": {
      upright: {
        title: "king of swords",
        description: "the king of swords embodies authority, truth, and mastery of intellect and rationality.",
        card: `
    ┌────────┐
    │  K     │
    │  ♚     │
    │  🗡️     │
    │  ⚡     │
    │  S     │
    └────────┘`
      },
      reversed: {
        title: "king of swords reversed",
        description: "the king of swords reversed represents manipulation, misuse of power, or lack of clarity.",
        card: `
    ┌────────┐
    │  S     │
    │  ⚡     │
    │  🗡️     │
    │  ♚     │
    │  K     │
    └────────┘`
      }
    },
    // pentacles suit and their reversed cards
    "ace of pentacles": {
      upright: {
        title: "ace of pentacles",
        description: "the ace of pentacles represents new opportunities, material abundance, and the potential for prosperity.",
        card: `
    ┌────────┐
    │  A     │
    │  ★     │
    │  ⚡     │
    │  ✦     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "ace of pentacles reversed",
        description: "the ace of pentacles reversed suggests missed opportunities, financial delays, or lack of grounding.",
        card: `
    ┌────────┐
    │  P     │
    │  ✦     │
    │  ⚡     │
    │  ★     │
    │  A     │
    └────────┘`
      }
    },
    "two of pentacles": {
      upright: {
        title: "two of pentacles",
        description: "the two of pentacles signifies balance, adaptability, and managing multiple priorities.",
        card: `
    ┌────────┐
    │  2     │
    │  ★★    │
    │  ⚖️     │
    │  ✦     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "two of pentacles reversed",
        description: "the two of pentacles reversed points to imbalance, disorganization, or feeling overwhelmed.",
        card: `
    ┌────────┐
    │  P     │
    │  ✦     │
    │  ⚖️     │
    │  ★★    │
    │  2     │
    └────────┘`
      }
    },
    "three of pentacles": {
      upright: {
        title: "three of pentacles",
        description: "the three of pentacles represents teamwork, collaboration, and skillful achievement.",
        card: `
    ┌────────┐
    │  3     │
    │  ★★★   │
    │  ⚒️     │
    │  ✦     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "three of pentacles reversed",
        description: "the three of pentacles reversed suggests lack of teamwork, miscommunication, or unrecognized efforts.",
        card: `
    ┌────────┐
    │  P     │
    │  ✦     │
    │  ⚒️     │
    │  ★★★   │
    │  3     │
    └────────┘`
      }
    },
    "four of pentacles": {
      upright: {
        title: "four of pentacles",
        description: "the four of pentacles symbolizes stability, financial security, and holding on to resources.",
        card: `
    ┌────────┐
    │  4     │
    │  ★★    │
    │  ★★    │
    │  ✦     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "four of pentacles reversed",
        description: "the four of pentacles reversed suggests letting go, generosity, or releasing financial fears.",
        card: `
    ┌────────┐
    │  P     │
    │  ✦     │
    │  ★★    │
    │  ★★    │
    │  4     │
    └────────┘`
      }
    },
    "five of pentacles": {
      upright: {
        title: "five of pentacles",
        description: "the five of pentacles represents financial hardship, isolation, or struggles with security.",
        card: `
    ┌────────┐
    │  5     │
    │  ★★★   │
    │  ★★    │
    │  ✦     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "five of pentacles reversed",
        description: "the five of pentacles reversed signifies recovery, renewed hope, and finding support.",
        card: `
    ┌────────┐
    │  P     │
    │  ✦     │
    │  ★★    │
    │  ★★★   │
    │  5     │
    └────────┘`
      }
    },
    "six of pentacles": {
      upright: {
        title: "six of pentacles",
        description: "the six of pentacles represents generosity, balance in giving and receiving, and charity.",
        card: `
    ┌────────┐
    │  6     │
    │  ★★★   │
    │  ★★★   │
    │  ⚖️     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "six of pentacles reversed",
        description: "the six of pentacles reversed suggests inequality, selfishness, or imbalance in relationships.",
        card: `
    ┌────────┐
    │  P     │
    │  ⚖️     │
    │  ★★★   │
    │  ★★★   │
    │  6     │
    └────────┘`
      }
    },
    "seven of pentacles": {
      upright: {
        title: "seven of pentacles",
        description: "the seven of pentacles symbolizes patience, investment, and long-term growth through effort.",
        card: `
    ┌────────┐
    │  7     │
    │  ★★★   │
    │  ★      │
    │  ★★★   │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "seven of pentacles reversed",
        description: "the seven of pentacles reversed indicates impatience, wasted effort, or lack of progress.",
        card: `
    ┌────────┐
    │  P     │
    │  ★★★   │
    │  ★      │
    │  ★★★   │
    │  7     │
    └────────┘`
      }
    },
    "eight of pentacles": {
      upright: {
        title: "eight of pentacles",
        description: "the eight of pentacles signifies hard work, dedication, and honing one's skills.",
        card: `
    ┌────────┐
    │  8     │
    │  ★★★★  │
    │  ⚒️     │
    │  ★★★★  │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "eight of pentacles reversed",
        description: "the eight of pentacles reversed points to lack of focus, shortcuts, or dissatisfaction with work.",
        card: `
    ┌────────┐
    │  P     │
    │  ★★★★  │
    │  ⚒️     │
    │  ★★★★  │
    │  8     │
    └────────┘`
      }
    },
    "nine of pentacles": {
      upright: {
        title: "nine of pentacles",
        description: "the nine of pentacles represents independence, luxury, and enjoying the rewards of hard work.",
        card: `
    ┌────────┐
    │  9     │
    │  ★★★   │
    │  ★★★   │
    │  ★★★   │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "nine of pentacles reversed",
        description: "the nine of pentacles reversed suggests financial setbacks, overindulgence, or dependence on others.",
        card: `
    ┌────────┐
    │  P     │
    │  ★★★   │
    │  ★★★   │
    │  ★★★   │
    │  9     │
    └────────┘`
      }
    },
    "ten of pentacles": {
      upright: {
        title: "ten of pentacles",
        description: "the ten of pentacles signifies wealth, family legacy, and long-term success and stability.",
        card: `
    ┌────────┐
    │  10    │
    │  ★★★★  │
    │  ★★    │
    │  ★★★★  │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "ten of pentacles reversed",
        description: "the ten of pentacles reversed points to family disputes, financial instability, or short-term thinking.",
        card: `
    ┌────────┐
    │  P     │
    │  ★★★★  │
    │  ★★    │
    │  ★★★★  │
    │  10    │
    └────────┘`
      }
    },
    "page of pentacles": {
      upright: {
        title: "page of pentacles",
        description: "the page of pentacles represents new opportunities, learning, and a practical approach to goals.",
        card: `
    ┌────────┐
    │  P     │
    │  ★      │
    │  ⚡     │
    │  ✧     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "page of pentacles reversed",
        description: "the page of pentacles reversed suggests procrastination, missed opportunities, or lack of focus.",
        card: `
    ┌────────┐
    │  P     │
    │  ✧     │
    │  ⚡     │
    │  ★      │
    │  P     │
    └────────┘`
      }
    },
    "knight of pentacles": {
      upright: {
        title: "knight of pentacles",
        description: "the knight of pentacles embodies hard work, reliability, and a steady, practical approach to progress.",
        card: `
    ┌────────┐
    │  Kn    │
    │  ⚒️     │
    │  ★      │
    │  ⚡     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "knight of pentacles reversed",
        description: "the knight of pentacles reversed indicates stagnation, laziness, or overly cautious behavior.",
        card: `
    ┌────────┐
    │  P     │
    │  ⚡     │
    │  ★      │
    │  ⚒️     │
    │  Kn    │
    └────────┘`
      }
    },
    "queen of pentacles": {
      upright: {
        title: "queen of pentacles",
        description: "the queen of pentacles represents nurturing, abundance, and practical support for others.",
        card: `
    ┌────────┐
    │  Q     │
    │  ♛     │
    │  ★      │
    │  ⚡     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "queen of pentacles reversed",
        description: "the queen of pentacles reversed suggests neglect, work-life imbalance, or material overfocus.",
        card: `
    ┌────────┐
    │  P     │
    │  ⚡     │
    │  ★      │
    │  ♛     │
    │  Q     │
    └────────┘`
      }
    },
    "king of pentacles": {
      upright: {
        title: "king of pentacles",
        description: "the king of pentacles embodies wealth, stability, and mastery over material success.",
        card: `
    ┌────────┐
    │  K     │
    │  ♚     │
    │  ★      │
    │  ⚡     │
    │  P     │
    └────────┘`
      },
      reversed: {
        title: "king of pentacles reversed",
        description: "the king of pentacles reversed points to greed, financial instability, or mismanagement of resources.",
        card: `
    ┌────────┐
    │  P     │
    │  ⚡     │
    │  ★      │
    │  ♚     │
    │  K     │
    └────────┘`
      }
    }
  }

  // export the deck
  module.exports = {
    deck: deck
  };