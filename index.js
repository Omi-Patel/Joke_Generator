function refreshPage() {
    // What do I put here?
    window.location.reload();
  }
  
  let myjoke = [
    {
      "category": "Programming",
      "type": "single",
      "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 43,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Dark",
      "type": "single",
      "joke": "I was going to tell a dead baby joke. But I decided to abort.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "id": 207,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Dark",
      "type": "single",
      "joke": "My little daughter came to me all excited, saying \"Daddy! Daddy! Guess how old I'll be in June!\"\n\"Oh I don't know princess, why don't you tell me?\" I said. She gave me a huge smile and held up four fingers.\nIt's now three hours later, police have joined in and she still won't say where she got them.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 165,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 38,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 35,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"We messed up the keming again guys.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 20,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "ASCII silly question, get a silly ANSI.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 25,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 123,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 4,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": true,
      "id": 301,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 43,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Dark",
      "type": "single",
      "joke": "I was going to tell a dead baby joke. But I decided to abort.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "id": 207,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Dark",
      "type": "single",
      "joke": "My little daughter came to me all excited, saying \"Daddy! Daddy! Guess how old I'll be in June!\"\n\"Oh I don't know princess, why don't you tell me?\" I said. She gave me a huge smile and held up four fingers.\nIt's now three hours later, police have joined in and she still won't say where she got them.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 165,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 38,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 35,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"We messed up the keming again guys.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 20,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "ASCII silly question, get a silly ANSI.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 25,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 123,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 4,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": true,
      "id": 301,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 123,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
      "flags": {
        "nsfw": true,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": false,
      "id": 305,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 23,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 44,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Debugging: Removing the needles from the haystack.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 40,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "id": 55,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "ASCII silly question, get a silly ANSI.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 25,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"We messed up the keming again guys.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 20,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 221,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 22,
      "safe": true,
      "lang": "en"
    }
  ]
  
  let index = Math.floor(Math.random() * (myjoke.length - 1))
  console.log(index)
  joke.innerHTML = myjoke[index].joke;
  
  