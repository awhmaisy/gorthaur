const deck = {
  // Major Arcana
  "The Fool": {
    upright: {
      title: "The Fool",
      card: `
   ┌────────┐
   │  0     │
   │ ⋆✧⋆✧   │
   │  ◠     │
   │   ⋆    │
   │  / \\   │
   └────────┘`,
      meaning: {
        keywords: ["innocence", "adventure", "potential"],
        description: "The Fool represents new beginnings, having faith in the future, and being inexperienced."
      }
    },
    reversed: {
      title: "The Fool Reversed", 
      card: `
   ┌────────┐
   │   / \\  │
   │    ⋆   │
   │    ◡   │
   │  ⋆✧⋆✧  │
   │     0  │
   └────────┘`,
      meaning: {
        keywords: ["recklessness", "naivety", "risk"],
        description: "The Fool Reversed warns against being reckless, taking unnecessary risks, and acting without thought."
      }
    }
  },
  "The Magician": {
    upright: {
      title: "The Magician",
      card: `
   ┌────────┐
   │  I     │
   │  ∞     │
   │  ⚡    │
   │  ⭒     │
   │  ⚕     │
   └────────┘`,
      meaning: {
        keywords: ["power", "skill", "concentration"],
        description: "The Magician signifies creativity, self-confidence, and the ability to manifest one's desires."
      }
    },
    reversed: {
      title: "The Magician Reversed",
      card: `
   ┌────────┐
   │  ⚕     │
   │  ⭒     │
   │  ⚡    │
   │  ∞     │
   │  I     │
   └────────┘`,
      meaning: {
        keywords: ["manipulation", "poor planning", "untapped talents"],
        description: "The Magician Reversed indicates deceit, lack of planning, and not using one's skills to their full potential."
      }
    }
  },
  "The High Priestess": {
    upright: {
      title: "The High Priestess",
      card: `
   ┌────────┐
   │  II    │
   │  ☽     │
   │  ⚜     │
   │  ✧     │
   │  ☾     │
   └────────┘`,
      meaning: {
        keywords: ["intuition", "unconscious", "mystery"],
        description: "The High Priestess represents wisdom, intuition, and the ability to see beyond the obvious."
      }
    },
    reversed: {
      title: "The High Priestess Reversed",
      card: `
   ┌────────┐
   │  ☾     │
   │  ✧     │
   │  ⚜     │
   │  ☽     │
   │  II    │
   └────────┘`,
      meaning: {
        keywords: ["secrets", "disconnected", "withdrawal"],
        description: "The High Priestess Reversed suggests hidden agendas, lack of insight, and feeling disconnected from one's intuition."
      }
    }
  },
  "The Empress": {
    upright: {
      title: "The Empress",
      card: `
   ┌────────┐
   │  III   │
   │  ♀     │
   │  ❀     │
   │  ⚘     │
   │  ❦     │
   └────────┘`,
      meaning: {
        keywords: ["fertility", "abundance", "nurturing"],
        description: "The Empress signifies growth, creativity, and the nurturing aspects of life."
      }
    },
    reversed: {
      title: "The Empress Reversed",
      card: `
   ┌────────┐
   │  ❦     │
   │  ⚘     │
   │  ❀     │
   │  ♀     │
   │  III   │
   └────────┘`,
      meaning: {
        keywords: ["dependence", "neglect", "creative block"],
        description: "The Empress Reversed indicates dependence on others, neglect, and creative blocks."
      }
    }
  },
  "The Emperor": {
    upright: {
      title: "The Emperor",
      card: `
   ┌────────┐
   │  IV    │
   │  ♂     │
   │  ⚔     │
   │  ♦     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["authority", "structure", "control"],
        description: "The Emperor represents authority, structure, and the power to achieve goals."
      }
    },
    reversed: {
      title: "The Emperor Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ♦     │
   │  ⚔     │
   │  ♂     │
   │  IV    │
   └────────┘`,
      meaning: {
        keywords: ["tyranny", "rigidity", "lack of discipline"],
        description: "The Emperor Reversed suggests abuse of power, rigidity, and lack of discipline."
      }
    }
  },
  "The Hierophant": {
    upright: {
      title: "The Hierophant",
      card: `
   ┌────────┐
   │  V     │
   │  ✟     │
   │  ☨     │
   │  ✞     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["tradition", "conformity", "spirituality"],
        description: "The Hierophant represents tradition, conformity, and spiritual guidance."
      }
    },
    reversed: {
      title: "The Hierophant Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ✞     │
   │  ☨     │
   │  ✟     │
   │  V     │
   └────────┘`,
      meaning: {
        keywords: ["rebellion", "subversiveness", "new approaches"],
        description: "The Hierophant Reversed indicates rebellion against tradition, subversiveness, and seeking new approaches."
      }
    },
    "The Lovers": {
      upright: {
        title: "The Lovers",
        card: `
   ┌────────┐
   │  VI    │
   │  ♡     │
   │  ∞     │
   │  ☁     │
   │  ♥     │
   └────────┘`,
        meaning: {
          keywords: ["love", "harmony", "relationships"],
          description: "The Lovers signify deep connections, harmony, and important relationships."
        }
      },
      reversed: {
        title: "The Lovers Reversed",
        card: `
   ┌────────┐
   │  ♥     │
   │  ☁     │
   │  ∞     │
   │  ♡     │
   │  VI    │
   └────────┘`,
        meaning: {
          keywords: ["imbalance", "misalignment", "conflict"],
          description: "The Lovers Reversed suggests disharmony, misalignment in relationships, and conflicts."
        }
      }
    },
    "The Chariot": {
      upright: {
        title: "The Chariot",
        card: `
   ┌────────┐
   │  VII   │
   │  ⚡    │
   │  ☸     │
   │  ⚔     │
   │  ⚜     │
   └────────┘`,
        meaning: {
          keywords: ["victory", "willpower", "determination"],
          description: "The Chariot represents triumph, willpower, and determination to achieve goals."
        }
      },
      reversed: {
        title: "The Chariot Reversed",
        card: `
   ┌────────┐
   │  ⚜     │
   │  ⚔     │
   │  ☸     │
   │  ⚡     │
   │  VII   │
   └────────┘`,
        meaning: {
          keywords: ["lack of control", "directionless", "defeat"],
          description: "The Chariot Reversed indicates a lack of control, feeling directionless, and potential defeat."
        }
      }
    },
    "The Star": {
      upright: {
        title: "The Star",
        card: `
   ┌────────┐
   │  XVII  │
   │  ✦     │
   │  🌟     │
   │  ✧     │
   │  ⚜     │
   └────────┘`,
        meaning: {
          keywords: ["hope", "faith", "renewal"],
          description: "The Star signifies hope, faith, and a sense of renewal."
        }
      },
      reversed: {
        title: "The Star Reversed",
        card: `
   ┌────────┐
   │  ⚜     │
   │  ✧     │
   │  🌟     │
   │  ✦     │
   │  XVII  │
   └────────┘`,
        meaning: {
          keywords: ["despair", "disconnection", "lack of faith"],
          description: "The Star Reversed indicates despair, disconnection, and lack of faith."
        }
      }
    }
  },
  "The Lovers": {
    upright: {
      title: "The Lovers",
      card: `
   ┌────────┐
   │  VI    │
   │  ♡     │
   │  ∞     │
   │  ☁     │
   │  ♥     │
   └────────┘`,
      meaning: {
        keywords: ["love", "harmony", "relationships"],
        description: "The Lovers signify deep connections, harmony, and important relationships."
      }
    },
    reversed: {
      title: "The Lovers Reversed",
      card: `
   ┌────────┐
   │  ♥     │
   │  ☁     │
   │  ∞     │
   │  ♡     │
   │  VI    │
   └────────┘`,
      meaning: {
        keywords: ["imbalance", "misalignment", "conflict"],
        description: "The Lovers Reversed suggests disharmony, misalignment in relationships, and conflicts."
      }
    }
  },
  "The Chariot": {
    upright: {
      title: "The Chariot",
      card: `
   ┌────────┐
   │  VII   │
   │  ⚡    │
   │  ☸     │
   │  ⚔     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["victory", "willpower", "determination"],
        description: "The Chariot represents triumph, willpower, and determination to achieve goals."
      }
    },
    reversed: {
      title: "The Chariot Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ⚔     │
   │  ☸     │
   │  ⚡    │
   │  VII   │
   └────────┘`,
      meaning: {
        keywords: ["lack of control", "aggression", "self-doubt"],
        description: "The Chariot Reversed indicates lack of control, aggression, and self-doubt."
      }
    }
  },
  "Strength": {
    upright: {
      title: "Strength",
      card: `
   ┌────────┐
   │  VIII  │
   │  ∞     │
   │  ♌    │
   │  ⚔     │
   │  ❤     │
   └────────┘`,
      meaning: {
        keywords: ["courage", "patience", "compassion"],
        description: "Strength signifies inner strength, courage, and compassion."
      }
    },
    reversed: {
      title: "Strength Reversed",
      card: `
   ┌────────┐
   │  ❤     │
   │  ⚔     │
   │  ♌    │
   │  ∞     │
   │  VIII  │
   └────────┘`,
      meaning: {
        keywords: ["weakness", "self-doubt", "lack of discipline"],
        description: "Strength Reversed suggests weakness, self-doubt, and lack of discipline."
      }
    }
  },
  "The Hermit": {
    upright: {
      title: "The Hermit",
      card: `
   ┌────────┐
   │  IX    │
   │  ✧     │
   │  ☽     │
   │  ⚡    │
   │  ✦     │
   └────────┘`,
      meaning: {
        keywords: ["introspection", "solitude", "guidance"],
        description: "The Hermit represents introspection, seeking solitude, and inner guidance."
      }
    },
    reversed: {
      title: "The Hermit Reversed",
      card: `
   ┌────────┐
   │  ✦     │
   │  ⚡    │
   │  ☽     │
   │  ✧     │
   │  IX    │
   └────────┘`,
      meaning: {
        keywords: ["isolation", "withdrawal", "loneliness"],
        description: "The Hermit Reversed indicates isolation, withdrawal from others, and loneliness."
      }
    }
  },
  "Wheel of Fortune": {
    upright: {
      title: "Wheel of Fortune",
      card: `
   ┌────────┐
   │  X     │
   │  ⚙     │
   │  ☸     │
   │  ✧     │
   │  ∞     │
   └────────┘`,
      meaning: {
        keywords: ["change", "cycles", "fate"],
        description: "Wheel of Fortune signifies change, cycles of life, and fate."
      }
    },
    reversed: {
      title: "Wheel of Fortune Reversed",
      card: `
   ┌────────┐
   │  ∞     │
   │  ✧     │
   │  ☸     │
   │  ⚙     │
   │  X     │
   └────────┘`,
      meaning: {
        keywords: ["bad luck", "resistance", "unwelcome change"],
        description: "Wheel of Fortune Reversed suggests bad luck, resistance to change, and unwelcome changes."
      }
    }
  },
  "Justice": {
    upright: {
      title: "Justice",
      card: `
   ┌────────┐
   │  XI    │
   │  ⚖     │
   │  ⚔     │
   │  ☤     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["fairness", "truth", "law"],
        description: "Justice represents fairness, truth, and the law."
      }
    },
    reversed: {
      title: "Justice Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ☤     │
   │  ⚔     │
   │  ⚖     │
   │  XI    │
   └────────┘`,
      meaning: {
        keywords: ["injustice", "dishonesty", "unfairness"],
        description: "Justice Reversed indicates injustice, dishonesty, and unfairness."
      }
    }
  },
  "The Hanged Man": {
    upright: {
      title: "The Hanged Man",
      card: `
   ┌────────┐
   │  XII   │
   │  ⅄     │
   │  ✝     │
   │  ☯     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["sacrifice", "release", "perspective"],
        description: "The Hanged Man signifies sacrifice, letting go, and gaining a new perspective."
      }
    },
    reversed: {
      title: "The Hanged Man Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ☯     │
   │  ✝     │
   │  ⅄     │
   │  XII   │
   └────────┘`,
      meaning: {
        keywords: ["stalling", "indecision", "delay"],
        description: "The Hanged Man Reversed suggests stalling, indecision, and delays."
      }
    }
  },
  "Death": {
    upright: {
      title: "Death",
      card: `
   ┌────────┐
   │  XIII  │
   │  ☠     │
   │  ⚰     │
   │  ✞     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["transformation", "endings", "change"],
        description: "Death represents transformation, endings, and significant change."
      }
    },
    reversed: {
      title: "Death Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ✞     │
   │  ⚰     │
   │  ☠     │
   │  XIII  │
   └────────┘`,
      meaning: {
        keywords: ["resistance", "stagnation", "fear of change"],
        description: "Death Reversed indicates resistance to change, stagnation, and fear of change."
      }
    }
  },
  "Temperance": {
    upright: {
      title: "Temperance",
      card: `
   ┌────────┐
   │  XIV   │
   │  ⚖     │
   │  ∞     │
   │  ☯     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["balance", "moderation", "patience"],
        description: "Temperance signifies balance, moderation, and patience."
      }
    },
    reversed: {
      title: "Temperance Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ☯     │
   │  ∞     │
   │  ⚖     │
   │  XIV   │
   └────────┘`,
      meaning: {
        keywords: ["imbalance", "excess", "lack of harmony"],
        description: "Temperance Reversed suggests imbalance, excess, and lack of harmony."
      }
    }
  },
  "The Devil": {
    upright: {
      title: "The Devil",
      card: `
   ┌────────┐
   │  XV    │
   │  ⛧     │
   │  ♄     │
   │  ⚔     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["addiction", "materialism", "bondage"],
        description: "The Devil represents addiction, materialism, and feeling trapped."
      }
    },
    reversed: {
      title: "The Devil Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ⚔     │
   │  ♄     │
   │  ⛧     │
   │  XV    │
   └────────┘`,
      meaning: {
        keywords: ["freedom", "release", "restoration"],
        description: "The Devil Reversed indicates breaking free, release from bondage, and restoration of control."
      }
    }
  },
  "The Tower": {
    upright: {
      title: "The Tower",
      card: `
   ┌────────┐
   │  XVI   │
   │  ⚡    │
   │  ▲     │
   │  ☄     │
   │  ⚜     │
   └────────┘`,
      meaning: {
        keywords: ["upheaval", "disaster", "revelation"],
        description: "The Tower signifies sudden upheaval, disaster, and revelation."
      }
    },
    reversed: {
      title: "The Tower Reversed",
      card: `
   ┌────────┐
   │  ⚜     │
   │  ☄     │
   │  ▲     │
   │  ⚡    │
   │  XVI   │
   └────────┘`,
      meaning: {
        keywords: ["resistance", "fear of change", "averted disaster"],
        description: "The Tower Reversed suggests resistance to change, fear of change, and narrowly avoiding disaster."
      }
    }
  },
  "The Star": {
    upright: {
      title: "The Star",
      card: `
   ┌────────┐
   │  XVII  │
   │  ★     │
   │  ✧     │
   │  ⭐    │
   │  ✦     │
   └────────┘`,
      meaning: {
        keywords: ["hope", "inspiration", "serenity"],
        description: "The Star represents hope, inspiration, and serenity."
      }
    },
    reversed: {
      title: "The Star Reversed",
      card: `
   ┌────────┐
   │  ✦     │
   │  ⭐    │
   │  ✧     │
   │  ★     │
   │  XVII  │
   └────────┘`,
      meaning: {
        keywords: ["despair", "disconnection", "lack of faith"],
        description: "The Star Reversed indicates despair, disconnection, and lack of faith."
      }
    }
  },
  "The Moon": {
    upright: {
      title: "The Moon",
      card: `
   ┌────────┐
   │  XVIII │
   │  ☽     │
   │  ◑     │
   │  ☾     │
   │  ◐     │
   └────────┘`,
      meaning: {
        keywords: ["illusion", "intuition", "fear"],
        description: "The Moon signifies illusion, intuition, and fear of the unknown."
      }
    },
    reversed: {
      title: "The Moon Reversed",
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
  "The Sun": {
    upright: {
      title: "The Sun",
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
      title: "The Sun Reversed",
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
  "Judgement": {
    upright: {
      title: "Judgement",
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
      title: "Judgement Reversed",
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
  "The World": {
    upright: {
      title: "The World",
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
      title: "The World Reversed",
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
  
  // Wands Suite
  "Ace of Wands": {
    upright: {
      title: "Ace of Wands",
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
      title: "Ace of Wands Reversed",
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
  "Two of Wands": {
    upright: {
      title: "Two of Wands",
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
      title: "Two of Wands Reversed",
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
  "Three of Wands": {
    upright: {
      title: "Three of Wands",
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
      title: "Three of Wands Reversed",
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
  "Four of Wands": {
    upright: {
      title: "Four of Wands",
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
      title: "Four of Wands Reversed",
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
  "Five of Wands": {
    upright: {
      title: "Five of Wands",
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
      title: "Five of Wands Reversed",
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
  "Six of Wands": {
    upright: {
      title: "Six of Wands",
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
      title: "Six of Wands Reversed",
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
  "Seven of Wands": {
    upright: {
      title: "Seven of Wands",
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
      title: "Seven of Wands Reversed",
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
  "Eight of Wands": {
    upright: {
      title: "Eight of Wands",
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
      title: "Eight of Wands Reversed",
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
  "Nine of Wands": {
    upright: {
      title: "Nine of Wands",
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
      title: "Nine of Wands Reversed",
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
  "Ten of Wands": {
    upright: {
      title: "Ten of Wands",
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
      title: "Ten of Wands Reversed",
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
  "Page of Wands": {
    upright: {
      title: "Page of Wands",
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
      title: "Page of Wands Reversed",
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
  "Knight of Wands": {
    upright: {
      title: "Knight of Wands",
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
      title: "Knight of Wands Reversed",
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
  "Queen of Wands": {
    upright: {
      title: "Queen of Wands",
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
      title: "Queen of Wands Reversed",
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
  "King of Wands": {
    upright: {
      title: "King of Wands",
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
      title: "King of Wands Reversed",
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

  // Cups Suite
  "Ace of Cups": {
    upright: {
      title: "Ace of Cups",
      card: `
   ┌────────┐
   │  A     │
   │  ♡     │
   │  ☆     │
   │  ✧     │
   │  C     │
   └────────┘`
    },
    reversed: {
      title: "Ace of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ✧     │
   │  ☆     │
   │  ♡     │
   │  A     │
   └────────┘`
    }
  },
  "Two of Cups": {
    upright: {
      title: "Two of Cups",
      card: `
   ┌────────┐
   │  2     │
   │  ♡♡    │
   │  ☆     │
   │  ✧     │
   │  C     │
   └────────┘`
    },
    reversed: {
      title: "Two of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ✧     │
   │  ☆     │
   │  ♡♡    │
   │  2     │
   └────────┘`
    }
  },
  "Three of Cups": {
    upright: {
      title: "Three of Cups",
      card: `
   ┌────────┐
   │  3     │
   │  ♡♡♡   │
   │  ☆     │
   │  ✧     │
   │  C     │
   └────────┘`
    },
    reversed: {
      title: "Three of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ✧     │
   │  ☆     │
   │  ♡♡♡   │
   │  3     │
   └────────┘`
    }
  },
  "Four of Cups": {
    upright: {
      title: "Four of Cups",
      card: `
   ┌────────┐
   │  4     │
   │  ♡♡    │
   │  ♡♡    │
   │  ✧     │
   │  C     │
   └────────┘`
    },
    reversed: {
      title: "Four of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ✧     │
   │  ♡♡    │
   │  ♡♡    │
   │  4     │
   └────────┘`
    }
  },
  "Five of Cups": {
    upright: {
      title: "Five of Cups",
      card: `
   ┌────────┐
   │  5     │
   │  ♡♡♡   │
   │  ♡♡    │
   │  ✧     │
   │  C     │
   └────────┘`
    },
    reversed: {
      title: "Five of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ✧     │
   │  ♡♡    │
   │  ♡♡♡   │
   │  5     │
   └────────┘`
    }
  },
  "Six of Cups": {
    upright: {
      title: "Six of Cups",
      card: `
   ┌────────┐
   │  6     │
   │  ♡♡♡   │
   │  ♡♡♡   │
   │  ✧     │
   │  C     │
   └────────┘`
    },
    reversed: {
      title: "Six of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ✧     │
   │  ♡♡♡   │
   │  ♡♡♡   │
   │  6     │
   └────────┘`
    }
  },
  "Seven of Cups": {
    upright: {
      title: "Seven of Cups",
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
      title: "Seven of Cups Reversed",
      card: `
   ┌────────┐
   │  C     │
   │  ♡♡♡   │
   │  ♡     │
   │  7     │
   └────────┘`
    }
  },
  // Swords Suite
  "Ace of Swords": {
    upright: {
      title: "Ace of Swords",
      card: `
   ┌────────┐
   │  A     │
   │  ⚔     │
   │  ☆     │
   │  ✧     │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Ace of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ✧     │
   │  ☆     │
   │  ⚔     │
   │  A     │
   └────────┘`
    }
  },
  "Two of Swords": {
    upright: {
      title: "Two of Swords",
      card: `
   ┌────────┐
   │  2     │
   │  ⚔⚔    │
   │  ☆     │
   │  ✧     │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Two of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ✧     │
   │  ☆     │
   │  ⚔⚔    │
   │  2     │
   └────────┘`
    }
  },
  "Three of Swords": {
    upright: {
      title: "Three of Swords",
      card: `
   ┌────────┐
   │  3     │
   │  ⚔⚔⚔   │
   │  ☆     │
   │  ✧     │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Three of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ✧     │
   │  ☆     │
   │  ⚔⚔⚔   │
   │  3     │
   └────────┘`
    }
  },
  "Four of Swords": {
    upright: {
      title: "Four of Swords",
      card: `
   ┌────────┐
   │  4     │
   │  ⚔⚔    │
   │  ⚔⚔    │
   │  ✧     │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Four of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ✧     │
   │  ⚔⚔    │
   │  ⚔⚔    │
   │  4     │
   └────────┘`
    }
  },
  "Five of Swords": {
    upright: {
      title: "Five of Swords",
      card: `
   ┌────────┐
   │  5     │
   │  ⚔⚔⚔   │
   │  ⚔⚔    │
   │  ✧     │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Five of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ✧     │
   │  ⚔⚔    │
   │  ⚔⚔⚔   │
   │  5     │
   └────────┘`
    }
  },
  "Six of Swords": {
    upright: {
      title: "Six of Swords",
      card: `
   ┌────────┐
   │  6     │
   │  ⚔⚔⚔   │
   │  ⚔⚔⚔   │
   │  ✧     │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Six of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ✧     │
   │  ⚔⚔⚔   │
   │  ⚔⚔⚔   │
   │  6     │
   └────────┘`
    }
  },
  "Seven of Swords": {
    upright: {
      title: "Seven of Swords",
      card: `
   ┌────────┐
   │  7     │
   │  ⚔⚔⚔   │
   │  ⚔     │
   │  ⚔⚔⚔   │
   │  S     │
   └────────┘`
    },
    reversed: {
      title: "Seven of Swords Reversed",
      card: `
   ┌────────┐
   │  S     │
   │  ⚔⚔⚔   │
   │  ⚔     │
   │  ⚔⚔⚔   │
   │  7     │
   └────────┘`
    }
  },
  // Pentacles Suite
  "Ace of Pentacles": {
    upright: {
      title: "Ace of Pentacles",
      card: `
   ┌────────┐
   │  A     │
   │  ⛀     │
   │  ☆     │
   │  ✧     │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Ace of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ✧     │
   │  ☆     │
   │  ⛀     │
   │  A     │
   └────────┘`
    }
  },
  "Two of Pentacles": {
    upright: {
      title: "Two of Pentacles",
      card: `
   ┌────────┐
   │  2     │
   │  ⛀⛀    │
   │  ☆     │
   │  ✧     │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Two of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ✧     │
   │  ☆     │
   │  ⛀⛀    │
   │  2     │
   └────────┘`
    }
  },
  "Three of Pentacles": {
    upright: {
      title: "Three of Pentacles",
      card: `
   ┌────────┐
   │  3     │
   │  ⛀⛀⛀   │
   │  ☆     │
   │  ✧     │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Three of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ✧     │
   │  ☆     │
   │  ⛀⛀⛀   │
   │  3     │
   └────────┘`
    }
  },
  "Four of Pentacles": {
    upright: {
      title: "Four of Pentacles",
      card: `
   ┌────────┐
   │  4     │
   │  ⛀⛀    │
   │  ⛀⛀    │
   │  ✧     │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Four of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ✧     │
   │  ⛀⛀    │
   │  ⛀⛀    │
   │  4     │
   └────────┘`
    }
  },
  "Five of Pentacles": {
    upright: {
      title: "Five of Pentacles",
      card: `
   ┌────────┐
   │  5     │
   │  ⛀⛀⛀   │
   │  ⛀⛀    │
   │  ✧     │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Five of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ✧     │
   │  ⛀⛀    │
   │  ⛀⛀⛀   │
   │  5     │
   └────────┘`
    }
  },
  "Six of Pentacles": {
    upright: {
      title: "Six of Pentacles",
      card: `
   ┌────────┐
   │  6     │
   │  ⛀⛀⛀   │
   │  ⛀⛀⛀   │
   │  ✧     │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Six of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ✧     │
   │  ⛀⛀⛀   │
   │  ⛀⛀⛀   │
   │  6     │
   └────────┘`
    }
  },
  "Seven of Pentacles": {
    upright: {
      title: "Seven of Pentacles",
      card: `
   ┌────────┐
   │  7     │
   │  ⛀⛀⛀   │
   │  ⛀     │
   │  ⛀⛀⛀   │
   │  P     │
   └────────┘`
    },
    reversed: {
      title: "Seven of Pentacles Reversed",
      card: `
   ┌────────┐
   │  P     │
   │  ⛀⛀⛀   │
   │  ⛀     │
   │  ⛀⛀⛀   │
   │  7     │
   └────────┘`
    }
  }
};

module.exports = {
  deck: deck
};