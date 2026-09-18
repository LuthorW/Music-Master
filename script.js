"use strict";

/*
 * CATÁLOGO DA PLAYLIST
 * As faixas abaixo vieram da playlist do Spotify informada para o projeto.
 * Para usar áudio/capa locais, preencha audioLocal e capaLocal no mapeamento MUSICAS.
 * Com os campos vazios, o jogo procura automaticamente uma prévia e a capa no
 * catálogo público do iTunes. O restante do projeto funciona sem servidor.
 */
const PLAYLIST_SPOTIFY = [
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 1,
    "spotifyId": "1L5tZi0izXsi5Kk5OJf4W0",
    "titulo": "Rehab"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 2,
    "spotifyId": "4zQuwW24dweWcaX0fEJkP2",
    "titulo": "You Know I'm No Good"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 3,
    "spotifyId": "7or26qS3BfpTtWO3BFw5GE",
    "titulo": "Addicted"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 4,
    "spotifyId": "0sSdFMuYrn3N9moumV466B",
    "titulo": "He Can Only Hold Her"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 5,
    "spotifyId": "0RatRR1mlxEVR6WATH4jV3",
    "titulo": "Some Unholy War"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 6,
    "spotifyId": "37A5PvtftHtsISQUDFNGUk",
    "titulo": "Wake Up Alone"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 7,
    "spotifyId": "6yLX8QnxlnEqZfs3YKCfjF",
    "titulo": "Tears Dry On Their Own"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 8,
    "spotifyId": "570ZDO2Lmh6NQChOU5xPUL",
    "titulo": "Love Is A Losing Game"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 9,
    "spotifyId": "30FURVTCpbKyykjSEQzGkH",
    "titulo": "Back To Black"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 10,
    "spotifyId": "2i1S5Dq9SaFGcnw8mnb4ks",
    "titulo": "Just Friends"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 11,
    "spotifyId": "5RqIM2vv5nw2PGJBqPD8Rg",
    "titulo": "Me & Mr Jones"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 12,
    "spotifyId": "5it9RIRXDwiLpJKdce6Z7e",
    "titulo": "Valerie - BBC Radio 1 Live Lounge"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Tony Bennett",
      "Amy Winehouse"
    ],
    "index": 13,
    "spotifyId": "12TAfwmQSufwlerS9UJaQB",
    "titulo": "Body And Soul"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 14,
    "spotifyId": "1DYCdxNAVNUCAOlAi7aP5o",
    "titulo": "Love Is A Losing Game - Live At The Mercury Music Awards"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Antonio Pinto"
    ],
    "index": 15,
    "spotifyId": "1w3KJgj6x75PiQm8Ppe0sS",
    "titulo": "Amy Lives"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 16,
    "spotifyId": "1MdMYZN0VnpjTy6nBCM2Qf",
    "titulo": "We're Still Friends - Live At The Union Chapel"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Antonio Pinto"
    ],
    "index": 17,
    "spotifyId": "7taSJbOhxfc7Vfto48gFKj",
    "titulo": "In The Studio - Edit"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 18,
    "spotifyId": "7E4dtl5gWROiMKibvedh0i",
    "titulo": "Rehab - Live On Jools Holland"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 19,
    "spotifyId": "4vCyAAMCZZ9r4443negeQO",
    "titulo": "Back To Black"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 20,
    "spotifyId": "3GnlbPpTLBwz35Cg5sdxuX",
    "titulo": "Tears Dry On Their Own"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 21,
    "spotifyId": "6OaexwzJ7LXIykBzRqpOmD",
    "titulo": "Some Unholy War - Down Tempo"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Antonio Pinto"
    ],
    "index": 22,
    "spotifyId": "34Owb4rZbbKapQ4YFeuhVl",
    "titulo": "Holiday Texts - Edit"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 23,
    "spotifyId": "40GTKaedGtzka8dlV4NuqI",
    "titulo": "What Is It About Men - Live At North Sea Jazz Festival"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 24,
    "spotifyId": "5LC7nItIEFp4nzdFdEGbf9",
    "titulo": "Stronger Than Me"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 25,
    "spotifyId": "4NDpn6yfD5aqafYWFEaJDz",
    "titulo": "Our Day Will Come"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 26,
    "spotifyId": "0IEGGuRHP8ylbCXausRF9p",
    "titulo": "Tears Dry - Original Version"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 27,
    "spotifyId": "0LbK1bodGLc9xmV1cS9jvL",
    "titulo": "Will You Still Love Me Tomorrow? - 2011"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse",
      "Nas"
    ],
    "index": 28,
    "spotifyId": "2r45rookK2awLkiOHOef1o",
    "titulo": "Like Smoke"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 29,
    "spotifyId": "77RrNbeBUXb1Dtewp0HQuR",
    "titulo": "Between The Cheats"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 30,
    "spotifyId": "7F5rIyOI88zk36AiBXC8xq",
    "titulo": "The Girl From Ipanema"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 31,
    "spotifyId": "1om5SLZiUA9DVEnjcZBBzA",
    "titulo": "Valerie - '68 Version"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 32,
    "spotifyId": "2G4rsUWjuBb6vPrUm01etb",
    "titulo": "Wake Up Alone - Original Recording"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 33,
    "spotifyId": "7BizTaPDXSWVi8vdGeFg0W",
    "titulo": "Best Friends, Right?"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 34,
    "spotifyId": "4fdPpmqn1eYLyWRcxZmx2D",
    "titulo": "A Song For You"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse",
      "Tony Bennett"
    ],
    "index": 35,
    "spotifyId": "4AyULNTWuCtbpxzY2qVowJ",
    "titulo": "Body And Soul"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 36,
    "spotifyId": "2qPwYT63eEx3JNWdVE6bb0",
    "titulo": "Intro / Stronger Than Me"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 37,
    "spotifyId": "1FLzTxrNNgqrAEsQvHJ9Gx",
    "titulo": "Fuck Me Pumps"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 38,
    "spotifyId": "1jLNxsmGsEQAM4CUkHemfS",
    "titulo": "(There Is) No Greater Love"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 39,
    "spotifyId": "2zJv4HwUarNnI0My2n6YF8",
    "titulo": "In My Bed"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 40,
    "spotifyId": "4KNfNp4Et9nyLnouySvcFT",
    "titulo": "Take The Box"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 41,
    "spotifyId": "6QIdkhQ33eTSPBHu4NWl7l",
    "titulo": "What Is It About Men"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 42,
    "spotifyId": "5TImISmK9CQtBrt0rLbq0R",
    "titulo": "Help Yourself"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 43,
    "spotifyId": "15vtCacFbCWnRpSjvony3z",
    "titulo": "Amy Amy Amy / Outro"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 44,
    "spotifyId": "67c56hAEeU0cYTevlZQftv",
    "titulo": "Stronger Than Me - Later With Jools Holland, London / 2003"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 45,
    "spotifyId": "1HPLJmxBPEue4VnVlRpdXB",
    "titulo": "Mr Magic (Through The Smoke) - Live, Janice Long Session, Miami/2008"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 46,
    "spotifyId": "7DKCNMc9Sc3bzWGvJXvVO5",
    "titulo": "In My Bed - Live At Concorde, Brighton / 2008"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 47,
    "spotifyId": "7kqXftmU2lrjgvEXm84uEx",
    "titulo": "(There Is) No Greater Love - Live, Janice Long Session, Miami/2008"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse",
      "Matthew Cole"
    ],
    "index": 48,
    "spotifyId": "1yclhzJfclEDk1gEpey3qE",
    "titulo": "Fuck Me Pumps - MJ Cole Remix"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse",
      "Mark Pritchard",
      "Dave Brinkworth"
    ],
    "index": 49,
    "spotifyId": "0VWAQN2xGRDcLaSAdC5nF1",
    "titulo": "Stronger Than Me - Harmonic 33 Remix"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 50,
    "spotifyId": "3KX4eOXIkNHtbXNyfVERSt",
    "titulo": "Hey Little Rich Girl - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 51,
    "spotifyId": "7cXmS8a4SW2Wcm2Pca2S83",
    "titulo": "He Can Only Hold Her / Doo Wop (That Thing) - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 52,
    "spotifyId": "7gkKpedYwOnimoWcSyq0CM",
    "titulo": "Back To Black - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 53,
    "spotifyId": "4YsWbWozRpduVoiPIqZNt7",
    "titulo": "Tears Dry On Their Own - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 54,
    "spotifyId": "6zphGshodNvFpQwBphwueX",
    "titulo": "Wake Up Alone - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 55,
    "spotifyId": "5Qnm8Jwf3KsTopNnBlSAhp",
    "titulo": "Cherry - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 56,
    "spotifyId": "60InztMDeV2ZBuHWHBwNnF",
    "titulo": "Just Friends - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 57,
    "spotifyId": "1SXkCvTFO4CBuA6j2VJ4Ud",
    "titulo": "Intro / Addicted - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Saw Mommy Kissing Santa Claus (Live At Union Chapel / BBC Radio 2)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 58,
    "spotifyId": "4lcOoKiLjBddCcg9FkeIJL",
    "titulo": "I Saw Mommy Kissing Santa Claus - Live At Union Chapel / BBC Radio 2"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 59,
    "spotifyId": "0ofHAoxe9vBkTCp2UQIavz",
    "titulo": "Dreams - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 60,
    "spotifyId": "4xh7W7tlNMIczFhupCPniY",
    "titulo": "Go Your Own Way - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 61,
    "spotifyId": "5e9TFTbltYBg2xThimr0rU",
    "titulo": "The Chain - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 62,
    "spotifyId": "2ssyECwAX5JxtcAUTFw7wI",
    "titulo": "Gold Dust Woman - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 63,
    "spotifyId": "4nZi6XNe36Ut4Nij3IQ1yC",
    "titulo": "Silver Springs - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 64,
    "spotifyId": "5HY7oAMG0FSMewubwIf3iS",
    "titulo": "Dreams - Live 1977"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 65,
    "spotifyId": "5m5XW67LO8x72K0GusruVA",
    "titulo": "The Chain - Live 1977"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 66,
    "spotifyId": "1nWyUagJmVzvBGTMDeY73L",
    "titulo": "Rhiannon - Live 1977"
  },
  {
    "album": "Tango In the Night (Deluxe Edition)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 67,
    "spotifyId": "254bXAqt3zP6P50BdQvEsq",
    "titulo": "Everywhere - 2017 Remaster"
  },
  {
    "album": "Tango In the Night (Deluxe Edition)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 68,
    "spotifyId": "4CoSCPlKNrWli7E5kFtbcl",
    "titulo": "Little Lies - 2017 Remaster"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 69,
    "spotifyId": "1QEzs30PUAJJPbHL1e4NYH",
    "titulo": "Silver Springs - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 70,
    "spotifyId": "6ogxNURdCpRGmtOYbECyqg",
    "titulo": "Rhiannon - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 71,
    "spotifyId": "2hwFQrMDzCPUr8vCanCw0E",
    "titulo": "The Chain - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 72,
    "spotifyId": "6PgcfHSocgnc4pjDgTuJcm",
    "titulo": "Dreams - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 73,
    "spotifyId": "6xTtThCvuvIYHl1ddntJGj",
    "titulo": "Everywhere - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 74,
    "spotifyId": "1EyAx19s8jM6gbCISGGqQW",
    "titulo": "Silver Springs - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 75,
    "spotifyId": "5pJoX8CeMlTYA8z5nXOtKG",
    "titulo": "Go Your Own Way - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 76,
    "spotifyId": "6wJF4lU4YBCz24Y6Se898w",
    "titulo": "Dreams - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 77,
    "spotifyId": "4f9aRCqzooZAh6zePGsElG",
    "titulo": "Rhiannon - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 78,
    "spotifyId": "7fbnfPQni0EeRSdC4x5uq4",
    "titulo": "Landslide - Live on PBS in Boston 2004"
  },
  {
    "album": "we fell in love in october / October Passed Me By",
    "artistas": [
      "girl in red"
    ],
    "index": 79,
    "spotifyId": "6IPwKM3fUUzlElbvKw2sKl",
    "titulo": "we fell in love in october"
  },
  {
    "album": "we fell in love in october / October Passed Me By",
    "artistas": [
      "girl in red"
    ],
    "index": 80,
    "spotifyId": "6JrJFxjeZPkhXE41DGnS65",
    "titulo": "October Passed Me By"
  },
  {
    "album": "we fell in love in october / October Passed Me By",
    "artistas": [
      "girl in red"
    ],
    "index": 81,
    "spotifyId": "5vFuoZLvUmAzzIiLSEhk0K",
    "titulo": "forget her"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 82,
    "spotifyId": "7tLTxOJY6cjQz4aJYMs8Nu",
    "titulo": "Serotonin"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 83,
    "spotifyId": "6GFrELGVKBXRcrTNkwjSfF",
    "titulo": "Body And Mind"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 84,
    "spotifyId": "32XaqPVTVkkuOiOPQZ3SpA",
    "titulo": "midnight love"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 85,
    "spotifyId": "65wEZxhPlAERKLcSbTD7qc",
    "titulo": "You Stupid Bitch"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 86,
    "spotifyId": "4EoE743bWWiZ4ttkdPCNbA",
    "titulo": "Rue"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 87,
    "spotifyId": "1IvX2Dtx4OGoRy6E7fxcA6",
    "titulo": "Apartment 402"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 88,
    "spotifyId": "6rYgEHuyhO064Lgj48qlIe",
    "titulo": "I'll Call You Mine"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 89,
    "spotifyId": "0o2KnhHD5nFFgbfL6cQtY7",
    "titulo": "it would feel like this"
  },
  {
    "album": "i wanna be your girlfriend",
    "artistas": [
      "girl in red"
    ],
    "index": 90,
    "spotifyId": "5PjdC2gMATetx5xdnwGUu7",
    "titulo": "i wanna be your girlfriend"
  },
  {
    "album": "girls",
    "artistas": [
      "girl in red"
    ],
    "index": 91,
    "spotifyId": "04OSnqlwlBJMvidYccraVz",
    "titulo": "girls"
  },
  {
    "album": "bad idea!",
    "artistas": [
      "girl in red"
    ],
    "index": 92,
    "spotifyId": "57j65yC2HggQfmYNc6rdOK",
    "titulo": "bad idea!"
  },
  {
    "album": "i'll die anyway.",
    "artistas": [
      "girl in red"
    ],
    "index": 93,
    "spotifyId": "14tud1FLjpHMYHpD2c7NbO",
    "titulo": "i'll die anyway."
  },
  {
    "album": "summer depression",
    "artistas": [
      "girl in red"
    ],
    "index": 94,
    "spotifyId": "3SEZEyvEALlomED5xFeqOs",
    "titulo": "summer depression"
  },
  {
    "album": "watch you sleep.",
    "artistas": [
      "girl in red"
    ],
    "index": 95,
    "spotifyId": "6tMwheKgpMHBcHtr8aYMn8",
    "titulo": "watch you sleep."
  },
  {
    "album": "4am",
    "artistas": [
      "girl in red"
    ],
    "index": 96,
    "spotifyId": "75enpZYDT6k0PNKu6SJ4W5",
    "titulo": "4am"
  },
  {
    "album": "i need to be alone.",
    "artistas": [
      "girl in red"
    ],
    "index": 97,
    "spotifyId": "2wHmH8OGgU6qi8NrLl0VRY",
    "titulo": "i need to be alone."
  },
  {
    "album": "two queens in a king sized bed",
    "artistas": [
      "girl in red"
    ],
    "index": 98,
    "spotifyId": "2dP8R44P2Lo3hdyevbYFfy",
    "titulo": "two queens in a king sized bed"
  },
  {
    "album": "dead girl in the pool.",
    "artistas": [
      "girl in red"
    ],
    "index": 99,
    "spotifyId": "0g9BOSeEnmv7L2qoFQKyBB",
    "titulo": "dead girl in the pool."
  },
  {
    "album": "1950",
    "artistas": [
      "King Princess"
    ],
    "index": 100,
    "spotifyId": "0CZ8lquoTX2Dkg7Ak2inwA",
    "titulo": "1950"
  },
  {
    "album": "Talia",
    "artistas": [
      "King Princess"
    ],
    "index": 101,
    "spotifyId": "53jbdPQBaH6WaQvW0zmGBs",
    "titulo": "Talia"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 102,
    "spotifyId": "1RujvyGPMWFGKAASzXmCpU",
    "titulo": "Cheap Queen"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 103,
    "spotifyId": "4aGvs7y4hQIbGss7zmEXKf",
    "titulo": "Ain't Together"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 104,
    "spotifyId": "7zBPpr0lmDqho20xz1i4RI",
    "titulo": "Watching My Phone"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 105,
    "spotifyId": "3iiL6merNpFNX1bny9sfvM",
    "titulo": "If You Think It's Love"
  },
  {
    "album": "Make My Bed",
    "artistas": [
      "King Princess"
    ],
    "index": 106,
    "spotifyId": "4R87lF4uKzgCNL1bEJeXqa",
    "titulo": "Make My Bed"
  },
  {
    "album": "Make My Bed",
    "artistas": [
      "King Princess"
    ],
    "index": 107,
    "spotifyId": "7FVGIPgLMDChTffvG2LuHV",
    "titulo": "Holy"
  },
  {
    "album": "Make My Bed",
    "artistas": [
      "King Princess"
    ],
    "index": 108,
    "spotifyId": "7vfaRUaFBDwENwa3tzJY64",
    "titulo": "Upper West Side"
  },
  {
    "album": "Pussy Is God",
    "artistas": [
      "King Princess"
    ],
    "index": 109,
    "spotifyId": "6VCeywT4JeawuZOUkQ1okx",
    "titulo": "Pussy Is God"
  },
  {
    "album": "FOUR (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 110,
    "spotifyId": "3JjnGLK8IxkNLvo8Lb3KOM",
    "titulo": "18"
  },
  {
    "album": "FOUR (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 111,
    "spotifyId": "5O2P9iiztwhomNh8xkR9lJ",
    "titulo": "Night Changes"
  },
  {
    "album": "FOUR (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 112,
    "spotifyId": "4JaLkM90MJutDAl5jD9BZX",
    "titulo": "No Control"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 113,
    "spotifyId": "4nVBt6MZDDP6tRVdQTgxJg",
    "titulo": "Story of My Life"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 114,
    "spotifyId": "6twW4ma6w0mOeejejPK0nY",
    "titulo": "Diana"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 115,
    "spotifyId": "2afCBiru10AFckfOa49wIa",
    "titulo": "You & I"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 116,
    "spotifyId": "1dQQ2QlnvXUehsRUrukKmf",
    "titulo": "Right Now"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 117,
    "spotifyId": "2K87XMYnUMqLcX3zvtAF4G",
    "titulo": "Drag Me Down"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 118,
    "spotifyId": "3NLnwwAQbbFKcEcV8hDItk",
    "titulo": "Perfect"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 119,
    "spotifyId": "5AezhHjX3R1bmxcAEgrFpS",
    "titulo": "End of the Day"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 120,
    "spotifyId": "5CRVwXGikmqzoRO6q7FeAg",
    "titulo": "If I Could Fly"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 121,
    "spotifyId": "5dONhl6aXFuN86UBdayF6W",
    "titulo": "Olivia"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 122,
    "spotifyId": "5omYVLodGmaxnhua99xIE8",
    "titulo": "A.M."
  },
  {
    "album": "Take Me Home (Expanded Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 123,
    "spotifyId": "0TAmnCzOtqRfvA38DDLTjj",
    "titulo": "Little Things"
  },
  {
    "album": "Up All Night",
    "artistas": [
      "One Direction"
    ],
    "index": 124,
    "spotifyId": "5G2c6FsfTzgYUzageCmfXY",
    "titulo": "One Thing"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 125,
    "spotifyId": "1Hv1VTm8zeOeybub15mA2R",
    "titulo": "Smooth Operator - Single Version"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 126,
    "spotifyId": "5qehd5xIsEaifMFy3jcoYr",
    "titulo": "Jezebel"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 127,
    "spotifyId": "7erXAfnatmoUow8DnbseOY",
    "titulo": "Your Love Is King"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 128,
    "spotifyId": "1SvET7grrtsHT0CkyJjJcZ",
    "titulo": "Is It a Crime"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 129,
    "spotifyId": "4tReFKumS5bcFahdXDiM1b",
    "titulo": "Paradise"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 130,
    "spotifyId": "064wRZsHDLuoCJYw65gh7N",
    "titulo": "Like a Tattoo"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 131,
    "spotifyId": "65krtHkaYLPr0mEbjL61UP",
    "titulo": "Kiss of Life"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 132,
    "spotifyId": "38QnxZJMktnt96bxalqgEl",
    "titulo": "Cherish the Day"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 133,
    "spotifyId": "57R1nBluakXaayH9EzgwZa",
    "titulo": "Pearls"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 134,
    "spotifyId": "1oaaSrDJimABpOdCEbw2DJ",
    "titulo": "No Ordinary Love"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 135,
    "spotifyId": "4PEGwWH4tL6H7dGl4uVSPg",
    "titulo": "Like a Tattoo"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 136,
    "spotifyId": "4S0NYVAQdIb81uLoZoQmgq",
    "titulo": "Kiss of Life"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 137,
    "spotifyId": "22QiTJqDn1BIRSh4mkNJ5w",
    "titulo": "Cherish the Day"
  },
  {
    "album": "Promise",
    "artistas": [
      "Sade"
    ],
    "index": 138,
    "spotifyId": "1XR1X1VTyTOVdPgH18RdME",
    "titulo": "Is It a Crime"
  },
  {
    "album": "Diamond Life",
    "artistas": [
      "Sade"
    ],
    "index": 139,
    "spotifyId": "7pLuEMFougkSHXrPBtNxTR",
    "titulo": "Smooth Operator"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 140,
    "spotifyId": "5nHNgVNXzsZLLBz29tfjkB",
    "titulo": "Smooth Operator - Live"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 141,
    "spotifyId": "16rxF3KcGLPtySHTCZCCVZ",
    "titulo": "Kiss of Life - Live"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 142,
    "spotifyId": "4Y8qyqXEspJyiaFhTiiPoy",
    "titulo": "No Ordinary Love - Live"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 143,
    "spotifyId": "1WFao0rkH7gKrxvTowXxnq",
    "titulo": "Is It a Crime - Live"
  },
  {
    "album": "The Score (Expanded Edition)",
    "artistas": [
      "Fugees",
      "Ms. Lauryn Hill"
    ],
    "index": 144,
    "spotifyId": "0Q0IVlqMV64kNLlwjPj0Hl",
    "titulo": "Killing Me Softly With His Song"
  },
  {
    "album": "The Miseducation of Lauryn Hill",
    "artistas": [
      "Ms. Lauryn Hill"
    ],
    "index": 145,
    "spotifyId": "2GFExyKXf9383tSRSrEHEt",
    "titulo": "Can't Take My Eyes Off of You - (I Love You Baby)"
  },
  {
    "album": "Expectations",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 146,
    "spotifyId": "1EXotCuzdXR34W1MoP6Um7",
    "titulo": "Expectations"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 147,
    "spotifyId": "5u0OKowUsABAiaEBEfO3hD",
    "titulo": "Colors"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui",
      "VIC MENSA"
    ],
    "index": 148,
    "spotifyId": "62Zgn9APgcvmeDPgl9ItcV",
    "titulo": "Scattered (feat. Vic Mensa)"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 149,
    "spotifyId": "4clA3kZ6nDN7f0nOV9SGtA",
    "titulo": "Sorry"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 150,
    "spotifyId": "69JDuGOWSe7rPHZukh8XeR",
    "titulo": "Don't Wanna Say"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui",
      "6LACK"
    ],
    "index": 151,
    "spotifyId": "0ad3AcpjwPj5yYoyA2TYnA",
    "titulo": "On Guard (feat. 6lack)"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 152,
    "spotifyId": "7ziPRO2vBbYDzpqpkual3s",
    "titulo": "Falling"
  },
  {
    "album": "Invisible Chains",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 153,
    "spotifyId": "1ksODCBCw4UEuWC0yRHpPZ",
    "titulo": "Invisible Chains"
  },
  {
    "album": "Always Love",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 154,
    "spotifyId": "02TtDZcUvEJGFJSJ6fTMfn",
    "titulo": "Always Love"
  },
  {
    "album": "50ft.",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 155,
    "spotifyId": "1wiphSU5URcMkpMoGK5mFO",
    "titulo": "50ft."
  },
  {
    "album": "More Than That",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 156,
    "spotifyId": "180WImKPbvdUrboKUov5f4",
    "titulo": "More Than That"
  },
  {
    "album": "ACT ONE (The Complete Collection)",
    "artistas": [
      "Marian Hill",
      "Lauren Jauregui"
    ],
    "index": 157,
    "spotifyId": "3NpsflsHTAoand4Jl3ruP7",
    "titulo": "Back To Me"
  },
  {
    "album": "I Have Questions",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 158,
    "spotifyId": "3NgCzSW98SsqBdpYcnm4kv",
    "titulo": "I Have Questions"
  },
  {
    "album": "OMG (feat. Quavo)",
    "artistas": [
      "Camila Cabello",
      "Quavo"
    ],
    "index": 159,
    "spotifyId": "4xBjsLUSjcx2h7PcRikpQp",
    "titulo": "OMG (feat. Quavo)"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 160,
    "spotifyId": "4eWQlBRaTjPPUlzacqEeoQ",
    "titulo": "Never Be the Same"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 161,
    "spotifyId": "4XLu3tTSZiPFVC9mmuR6Zp",
    "titulo": "All These Years"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 162,
    "spotifyId": "5HwnezK198pJCEj1l2Adjy",
    "titulo": "She Loves Control"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 163,
    "spotifyId": "7sTtHHrD0zDpmzQzH3zegz",
    "titulo": "Consequences"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 164,
    "spotifyId": "7IL3UOlcJ6nmcCMwpnlfcA",
    "titulo": "Something's Gotta Give"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 165,
    "spotifyId": "1GO9vCm5Cra5uWGSWQ5mGK",
    "titulo": "In the Dark"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 166,
    "spotifyId": "2gxqozTaq2NYylvS8jd57G",
    "titulo": "Into It"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 167,
    "spotifyId": "2ogKhhoMClkFXek7ZgxAhN",
    "titulo": "Shameless"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 168,
    "spotifyId": "4jFD7byoPdGkEdjHLMduR9",
    "titulo": "Living Proof"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 169,
    "spotifyId": "0sHc1EEeOnmgjP6QmsR7px",
    "titulo": "Should've Said It"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello",
      "DaBaby"
    ],
    "index": 170,
    "spotifyId": "3yOlyBJuViE2YSGn3nVE1K",
    "titulo": "My Oh My (feat. DaBaby)"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 171,
    "spotifyId": "0Q2kFlgnqusKAqCDpCKAIY",
    "titulo": "Bad Kind of Butterflies"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 172,
    "spotifyId": "7DoNtK2gVFRwJh0hkHe5wQ",
    "titulo": "Easy"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 173,
    "spotifyId": "39jcp8zJH7nHWbB7Hr3sFJ",
    "titulo": "Feel It Twice"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 174,
    "spotifyId": "1Ff71LUQO0KBk5Slu3K6Vu",
    "titulo": "Cry for Me"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 175,
    "spotifyId": "7cHje4KLujM18aBSLvaySE",
    "titulo": "This Love"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 176,
    "spotifyId": "3r73OmpBtQAwMgawxOmlg0",
    "titulo": "Used to This"
  },
  {
    "album": "Familia",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 177,
    "spotifyId": "5FLzLuPyBEppywIJprqwDz",
    "titulo": "No Doubt"
  },
  {
    "album": "I'm In Love With a Monster",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 178,
    "spotifyId": "0hO71r8vbnrXSaXVrR9ptF",
    "titulo": "I'm In Love With a Monster"
  },
  {
    "album": "Miss Movin' On",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 179,
    "spotifyId": "0gL0Xf8CN95HmgfEYYLRZV",
    "titulo": "Miss Movin' On"
  },
  {
    "album": "7/27 (Deluxe)",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 180,
    "spotifyId": "22kXvw7mAvMvyZxPnhYzaa",
    "titulo": "No Way"
  },
  {
    "album": "7/27 (Deluxe)",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 181,
    "spotifyId": "660JUD1xQLB4XR1dMxUK4x",
    "titulo": "Dope"
  },
  {
    "album": "Dopamine",
    "artistas": [
      "BØRNS"
    ],
    "index": 182,
    "spotifyId": "2GiJYvgVaD2HtM8GqD9EgQ",
    "titulo": "Electric Love"
  },
  {
    "album": "Dopamine",
    "artistas": [
      "BØRNS"
    ],
    "index": 183,
    "spotifyId": "1Dr5JexwA15wmKe7Y7maA9",
    "titulo": "Past Lives"
  },
  {
    "album": "Not Your Muse (Deluxe)",
    "artistas": [
      "Celeste"
    ],
    "index": 184,
    "spotifyId": "7sq2z9oX2S0CvgTqCZ0ko4",
    "titulo": "Strange"
  },
  {
    "album": "The Middle",
    "artistas": [
      "Zedd",
      "Maren Morris",
      "Grey"
    ],
    "index": 185,
    "spotifyId": "09IStsImFySgyp0pIQdqAc",
    "titulo": "The Middle"
  },
  {
    "album": "Happy Together",
    "artistas": [
      "The Turtles"
    ],
    "index": 186,
    "spotifyId": "1JO1xLtVc8mWhIoE3YaCL0",
    "titulo": "Happy Together"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 187,
    "spotifyId": "1IF5UcqRO42D12vYwceOY6",
    "titulo": "From the Dining Table"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 188,
    "spotifyId": "33bURv895AN4FkBvgFo2dx",
    "titulo": "Woman"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 189,
    "spotifyId": "5LABCxgmP7DATATIJXOh6n",
    "titulo": "Ever Since New York"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 190,
    "spotifyId": "33SNO8AaciGbNaQFkxvPrW",
    "titulo": "Kiwi"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 191,
    "spotifyId": "5Lbsc65org0b85kNsPkluY",
    "titulo": "Only Angel"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 192,
    "spotifyId": "5kRPPEWFJIMox5qIkQkiz5",
    "titulo": "Sweet Creature"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 193,
    "spotifyId": "4B1rpPmQXwj78wk6aIGwwU",
    "titulo": "Two Ghosts"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 194,
    "spotifyId": "3Dwq1oiOFys6Sxr5SslmXw",
    "titulo": "Carolina"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 195,
    "spotifyId": "5Ohxk2dO5COHF1krpoPigN",
    "titulo": "Sign of the Times"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 196,
    "spotifyId": "4u9Y4Z9i9VaAbBK7rW1Rha",
    "titulo": "Meet Me in the Hallway"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 197,
    "spotifyId": "6VzcQuzTNTMFnJ6rBSaLH9",
    "titulo": "Fine Line"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 198,
    "spotifyId": "03mMSLEJCPoGJwQhHpN5y0",
    "titulo": "Treat People With Kindness"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 199,
    "spotifyId": "5IhzJOXNE7ki0IIJbZbnGq",
    "titulo": "Canyon Moon"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 200,
    "spotifyId": "6iYMfxznTBlcVOgRHab2W0",
    "titulo": "Sunflower, Vol. 6"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 201,
    "spotifyId": "6SQLk9HSNketfgs2AyIiMs",
    "titulo": "She"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 202,
    "spotifyId": "5JiH89mHrv9oWHlD0T326z",
    "titulo": "To Be So Lonely"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 203,
    "spotifyId": "1ZMiCix7XSAbfAJlEZWMCp",
    "titulo": "Falling"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 204,
    "spotifyId": "1ZMiCix7XSAbfAJlEZWMCp",
    "titulo": "Falling"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 205,
    "spotifyId": "2IOFZdYYkFxEHVz1w34PoL",
    "titulo": "Cherry"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 206,
    "spotifyId": "4jAIqgrPjKLTY9Gbez25Qb",
    "titulo": "Lights Up"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 207,
    "spotifyId": "3jjujdWJ72nww5eGnfs2E7",
    "titulo": "Adore You"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 208,
    "spotifyId": "45S5WTQEGOB1VHr1Q4FuPl",
    "titulo": "Golden"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 209,
    "spotifyId": "5LYMamLv12UPbemOaTPyeV",
    "titulo": "Music For a Sushi Restaurant"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 210,
    "spotifyId": "1qEmFfgcLObUfQm0j1W2CK",
    "titulo": "Late Night Talking"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 211,
    "spotifyId": "4j6kId9QIqhoXvqHKgSKa0",
    "titulo": "Grapejuice"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 212,
    "spotifyId": "51Zw1cKDgkad0CXv23HCMU",
    "titulo": "Daylight"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 213,
    "spotifyId": "3i058E8uxTsYqJ5NWZzqSj",
    "titulo": "Little Freak"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 214,
    "spotifyId": "6uvh0In7u1Xn4HgxOfAn8O",
    "titulo": "Matilda"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 215,
    "spotifyId": "2NcQic8JxdjAlAHuNbOIRE",
    "titulo": "Keep Driving"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 216,
    "spotifyId": "0rzaRSujxA0bKyjJl6vHYq",
    "titulo": "Satellite"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 217,
    "spotifyId": "6qj02zSeEJGWZ4c0dn5QzJ",
    "titulo": "Boyfriends"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 218,
    "spotifyId": "1mw0RgNXIpYRyyCdBQbLgA",
    "titulo": "Love Of My Life"
  },
  {
    "album": "Spotify Singles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 219,
    "spotifyId": "1GDF5AusV7p0wwi4OVNz3i",
    "titulo": "Two Ghosts - Recorded at Metropolis Studios, London"
  },
  {
    "album": "Spotify Singles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 220,
    "spotifyId": "4YutJsNwBBInE8vemufpQ8",
    "titulo": "Girl Crush - Recorded at Metropolis Studios, London"
  },
  {
    "album": "FUNNY little FEARS (DREAMS)",
    "artistas": [
      "Damiano David"
    ],
    "index": 221,
    "spotifyId": "4rUqU8SKMG22liqDKsiIp9",
    "titulo": "Nothing Breaks Like a Heart - Spotify Singles"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 222,
    "spotifyId": "2t4RCWbICUqhPKVQeA7VPq",
    "titulo": "The First Time"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 223,
    "spotifyId": "7B9zspndqbrSXXUwVNeTCe",
    "titulo": "Born With a Broken Heart"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 224,
    "spotifyId": "5Rep08Yni2yW5UO0MBfF0b",
    "titulo": "Next Summer"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 225,
    "spotifyId": "5hYP7TDRmkJPrgYdIy500S",
    "titulo": "Zombie Lady"
  },
  {
    "album": "Silverlines - prod. Labrinth",
    "artistas": [
      "Damiano David",
      "Labrinth"
    ],
    "index": 226,
    "spotifyId": "1BK1d7b9bhlbKpQPbYGsol",
    "titulo": "Silverlines - prod. Labrinth"
  },
  {
    "album": "Next Summer",
    "artistas": [
      "Damiano David"
    ],
    "index": 227,
    "spotifyId": "6xZCDUaY4XzlhCSHKSW7rf",
    "titulo": "Next Summer"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 228,
    "spotifyId": "4pt5fDVTg5GhEvEtlz9dKk",
    "titulo": "I WANNA BE YOUR SLAVE"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 229,
    "spotifyId": "776AftMmFFAWUIEAb3lHhw",
    "titulo": "ZITTI E BUONI"
  },
  {
    "album": "Chosen",
    "artistas": [
      "Måneskin"
    ],
    "index": 230,
    "spotifyId": "3Wrjm47oTz2sjIgck11l5e",
    "titulo": "Beggin'"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 231,
    "spotifyId": "7HMz8o0m7ASQ3ImFPfhWTY",
    "titulo": "CORALINE"
  },
  {
    "album": "How Did I Get Here?",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 232,
    "spotifyId": "5Njbm0SdToCWO5bgLY8Yqw",
    "titulo": "Lemonade"
  },
  {
    "album": "Faith In The Future (Deluxe)",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 233,
    "spotifyId": "0XdZ6YWnTtkQcMlDXE2qFN",
    "titulo": "Bigger Than Me"
  },
  {
    "album": "Faith In The Future (Deluxe)",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 234,
    "spotifyId": "15JkWkQqlUffU29B1oKUKH",
    "titulo": "Chicago"
  },
  {
    "album": "Faith In The Future (Deluxe)",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 235,
    "spotifyId": "4QU579S6uCG9vWaHUeGnLp",
    "titulo": "Out Of My System"
  },
  {
    "album": "Miss You",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 236,
    "spotifyId": "3zxrecYFao03IrrcyFiaMU",
    "titulo": "Miss You"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 237,
    "spotifyId": "4emicu3yCflgo7z6cAuw5j",
    "titulo": "Kill My Mind"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 238,
    "spotifyId": "1eqwjXdMTed8Pz3PLNcHe9",
    "titulo": "Two of Us"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 239,
    "spotifyId": "2Ov6faSCGlnn4tbbZQYAJQ",
    "titulo": "Walls"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 240,
    "spotifyId": "5KcT9rJDqQJUSFF3O9wPJ5",
    "titulo": "Always You"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 241,
    "spotifyId": "74YzCrLzu7fw0AasX3CEwv",
    "titulo": "Defenceless"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 242,
    "spotifyId": "7A7RygcHdNH0iJHgwteajF",
    "titulo": "Only the Brave"
  },
  {
    "album": "reputation Stadium Tour Surprise Song Playlist",
    "artistas": [
      "ZAYN",
      "Taylor Swift"
    ],
    "index": 243,
    "spotifyId": "55n9yjI6qqXh5F2mYvUc2y",
    "titulo": "I Don’t Wanna Live Forever (Fifty Shades Darker)"
  },
  {
    "album": "Mind Of Mine (Deluxe Edition)",
    "artistas": [
      "ZAYN"
    ],
    "index": 244,
    "spotifyId": "0PDUDa38GO8lMxLCRc4lL1",
    "titulo": "PILLOWTALK"
  },
  {
    "album": "Mind Of Mine (Deluxe Edition)",
    "artistas": [
      "ZAYN"
    ],
    "index": 245,
    "spotifyId": "6lvsJDZ7336YmpBzcNGhbe",
    "titulo": "fOoL fOr YoU"
  },
  {
    "album": "Be My Baby: The Very Best of The Ronettes",
    "artistas": [
      "The Ronettes"
    ],
    "index": 246,
    "spotifyId": "2G2YzndIA6jeWFPBXhUjh5",
    "titulo": "Be My Baby"
  },
  {
    "album": "Presenting the Fabulous Ronettes Featuring Veronica",
    "artistas": [
      "The Ronettes"
    ],
    "index": 247,
    "spotifyId": "1WN4uNclrDuczTO3bCr8s1",
    "titulo": "Be My Baby"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 248,
    "spotifyId": "5J2CHimS7dWYMImCHkEFaJ",
    "titulo": "A Hard Day's Night - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 249,
    "spotifyId": "1hgvykolO4kBIEozATmpyj",
    "titulo": "If I Fell - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 250,
    "spotifyId": "65vdMBskhx3akkG9vQlSH1",
    "titulo": "And I Love Her - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 251,
    "spotifyId": "3SdingSsFcZDZAyvcJbgAw",
    "titulo": "Can't Buy Me Love - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 252,
    "spotifyId": "3lSi6qfnp2YZazTzcOLBZk",
    "titulo": "I'll Be Back - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 253,
    "spotifyId": "2EqlS6tkEnglzr7tkKAAYD",
    "titulo": "Come Together - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 254,
    "spotifyId": "0pNeVovbiZHkulpGeOx1Gj",
    "titulo": "Something - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 255,
    "spotifyId": "2mxByJWOajjiVsLWjNXvDJ",
    "titulo": "Oh! Darling - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 256,
    "spotifyId": "3Z25k4ZF6QENy2d9YatsM5",
    "titulo": "I Want You (She's So Heavy) - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 257,
    "spotifyId": "2jtUGFsqanQ82zqDlhiKIp",
    "titulo": "She Came In Through The Bathroom Window - Remastered 2009"
  },
  {
    "album": "Help! (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 258,
    "spotifyId": "7DD7eSuYSC5xk2ArU62esN",
    "titulo": "Help! - Remastered 2009"
  },
  {
    "album": "Help! (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 259,
    "spotifyId": "3BQHpFgAp4l80e1XslIjNI",
    "titulo": "Yesterday - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 260,
    "spotifyId": "6EHuOufBeL6vk3TvVJB5qo",
    "titulo": "Please Please Me - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 261,
    "spotifyId": "3VbGCXWRiouAq8VyMYN2MI",
    "titulo": "Love Me Do - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 262,
    "spotifyId": "7Msq9qojB7yORuJvz49iUy",
    "titulo": "P.S. I Love You - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 263,
    "spotifyId": "5ZBeML7Lf3FMEVviTyvi8l",
    "titulo": "Twist And Shout - Remastered 2009"
  },
  {
    "album": "Magical Mystery Tour (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 264,
    "spotifyId": "3Am0IbOxmvlSXro7N5iSfZ",
    "titulo": "Strawberry Fields Forever - Remastered 2009"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 265,
    "spotifyId": "0BowNHHxtXVyLMXxS31LBe",
    "titulo": "Love Me Do - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 266,
    "spotifyId": "6dCq7bLa4j3ZFkOGeUbInk",
    "titulo": "Please Please Me - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 267,
    "spotifyId": "39js8qHOPRhKMxl6Qxg55F",
    "titulo": "Twist And Shout - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 268,
    "spotifyId": "72cBk2iqWcax9eoIXGNVM6",
    "titulo": "All My Loving - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 269,
    "spotifyId": "0g1NjFyzJ6FFEOTsuiJLdv",
    "titulo": "I Want To Hold Your Hand - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 270,
    "spotifyId": "01K1zFyjJhG2Qk7PIkSAEA",
    "titulo": "She Loves You - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 271,
    "spotifyId": "4iVudOuRcKPGK8y7GqSZKP",
    "titulo": "Can't Buy Me Love - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 272,
    "spotifyId": "7nGA8YRPmsDmLZ55DIGEdC",
    "titulo": "A Hard Day's Night - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 273,
    "spotifyId": "5VTVK2RtOj6tKH9OPKMht7",
    "titulo": "And I Love Her - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 274,
    "spotifyId": "0bGiTPrxCIFs7lZS9knvRS",
    "titulo": "Help! - 2023 Mix"
  },
  {
    "album": "The Bodyguard - Original Soundtrack Album",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 275,
    "spotifyId": "4eHbdreAnSOrDDsFfc4Fpm",
    "titulo": "I Will Always Love You"
  },
  {
    "album": "The Bodyguard - Original Soundtrack Album",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 276,
    "spotifyId": "31er9IGsfFbwqy1pH4aiTP",
    "titulo": "I Have Nothing"
  },
  {
    "album": "Whitney",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 277,
    "spotifyId": "2tUBqZG2AbRi7Q0BIrVrEj",
    "titulo": "I Wanna Dance with Somebody (Who Loves Me)"
  },
  {
    "album": "Fleetwood Mac",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 278,
    "spotifyId": "5ihS6UUlyQAfmp48eSkxuQ",
    "titulo": "Landslide"
  },
  {
    "album": "Atomic/Atomix",
    "artistas": [
      "Blondie"
    ],
    "index": 279,
    "spotifyId": "4qO03RMQm88DdpTJcxlglY",
    "titulo": "Call Me"
  },
  {
    "album": "Parallel Lines (Remastered)",
    "artistas": [
      "Blondie"
    ],
    "index": 280,
    "spotifyId": "4cQJ27R11K634x5qCOwKW5",
    "titulo": "One Way Or Another - Remastered 2001"
  },
  {
    "album": "Parallel Lines",
    "artistas": [
      "Blondie"
    ],
    "index": 281,
    "spotifyId": "4v2rkl1mC3zVAz0nXMx9r4",
    "titulo": "Heart Of Glass"
  },
  {
    "album": "Dizzy up the Girl",
    "artistas": [
      "The Goo Goo Dolls"
    ],
    "index": 282,
    "spotifyId": "6Qyc6fS4DsZjB2mRW9DsQs",
    "titulo": "Iris"
  },
  {
    "album": "Synchronicity (Remastered 2003)",
    "artistas": [
      "The Police"
    ],
    "index": 283,
    "spotifyId": "1JSTJqkT5qHq8MDJnJbRE1",
    "titulo": "Every Breath You Take"
  },
  {
    "album": "Heathen Chemistry",
    "artistas": [
      "Oasis"
    ],
    "index": 284,
    "spotifyId": "5YciOakY5dB5dULkiLdCaf",
    "titulo": "Stop Crying Your Heart Out"
  },
  {
    "album": "Strange Trails",
    "artistas": [
      "Lord Huron"
    ],
    "index": 285,
    "spotifyId": "5yJaXWIErrrsjQ3J0eR5aK",
    "titulo": "The Night We Met"
  },
  {
    "album": "Purple Rain",
    "artistas": [
      "Prince"
    ],
    "index": 286,
    "spotifyId": "1uvyZBs4IZYRebHIB1747m",
    "titulo": "Purple Rain"
  },
  {
    "album": "Purple Rain (Deluxe Expanded Edition)",
    "artistas": [
      "Prince"
    ],
    "index": 287,
    "spotifyId": "3FnP3j1TyiTwbJb5AR2ynT",
    "titulo": "Purple Rain - 7\" Single Edit; 2017 Remaster"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 288,
    "spotifyId": "0y5CnV2idm2KkQEudDjfDT",
    "titulo": "Last Goodbye"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 289,
    "spotifyId": "1StXVL5gClph4z4XzanYko",
    "titulo": "Lilac Wine"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 290,
    "spotifyId": "3pRaLNL3b8x5uBOcsgvdqM",
    "titulo": "Hallelujah"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 291,
    "spotifyId": "6Jv7kjGkhY2fT4yuBF3aTz",
    "titulo": "Lover, You Should've Come Over"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 292,
    "spotifyId": "6UuVONmxXwTKN1ISepuAoQ",
    "titulo": "Forget Her"
  },
  {
    "album": "Sketches for My Sweetheart The Drunk (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 293,
    "spotifyId": "2bcvooA6HEmVUneEGJnNZD",
    "titulo": "Everybody Here Wants You"
  },
  {
    "album": "Sketches for My Sweetheart The Drunk (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 294,
    "spotifyId": "4oq6sHpGfB4UmX36jK9Cz0",
    "titulo": "I Know We Could Be So Happy Baby (If We Wanted To Be)"
  },
  {
    "album": "You and I (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 295,
    "spotifyId": "4Dk6mrxXQzLMgpFHO2yRY9",
    "titulo": "Dream of You and I - Extended Version"
  },
  {
    "album": "You and I (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 296,
    "spotifyId": "2RTLIQRc8yogHh08waQDVa",
    "titulo": "I Know It's Over"
  },
  {
    "album": "You and I (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 297,
    "spotifyId": "2vA8v1vyStXLOA4GHnQ5Vs",
    "titulo": "Unforgiven aka Last Goodbye"
  },
  {
    "album": "Live at Columbia Records Radio Hour",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 298,
    "spotifyId": "3Z7OFraob1P0QscGaSoh0v",
    "titulo": "Lover, You Should've Come Over - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995"
  },
  {
    "album": "Grace Around The World",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 299,
    "spotifyId": "4ZTOFxmGtYp9iDX1bZdGfM",
    "titulo": "Lover, You Should Have Come Over - Live at JBTV, Chicago, IL - November 1994"
  },
  {
    "album": "XSCAPE",
    "artistas": [
      "Michael Jackson"
    ],
    "index": 300,
    "spotifyId": "5BKKy9fIJL5uM9fz1SnqyP",
    "titulo": "Chicago"
  },
  {
    "album": "Invincible",
    "artistas": [
      "Michael Jackson"
    ],
    "index": 301,
    "spotifyId": "1AZXNAVDD9ZFIEKySgflFz",
    "titulo": "Heaven Can Wait"
  },
  {
    "album": "hopeless fountain kingdom (Deluxe Plus)",
    "artistas": [
      "Halsey",
      "Lauren Jauregui"
    ],
    "index": 302,
    "spotifyId": "6uW5fyyosEMBKfg2W1ye1l",
    "titulo": "Strangers"
  },
  {
    "album": "Gold",
    "artistas": [
      "The Cranberries"
    ],
    "index": 303,
    "spotifyId": "49wOjOkS4pBK3PQnPnNYjb",
    "titulo": "Zombie"
  },
  {
    "album": "Everybody Else Is Doing It, So Why Can't We? (Remastered 2026)",
    "artistas": [
      "The Cranberries"
    ],
    "index": 304,
    "spotifyId": "1WYrTfvKjQYaYfVziGG1ET",
    "titulo": "Linger - Remastered 2026"
  },
  {
    "album": "The Visitors (Deluxe Edition)",
    "artistas": [
      "ABBA"
    ],
    "index": 305,
    "spotifyId": "6TvxPS4fj4LUdjw2es4g21",
    "titulo": "Slipping Through My Fingers"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 306,
    "spotifyId": "4BM8yJ0PzBi2ZewpMTOxtx",
    "titulo": "Fernando"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 307,
    "spotifyId": "3lKN03PDeBnXZS7sDukRBt",
    "titulo": "Money, Money, Money"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 308,
    "spotifyId": "0GjEhVFGZW8afUYGChu3Rr",
    "titulo": "Dancing Queen"
  },
  {
    "album": "Super Trouper",
    "artistas": [
      "ABBA"
    ],
    "index": 309,
    "spotifyId": "0J2p4KYdr6Mg4ET6JPlbe1",
    "titulo": "Super Trouper"
  },
  {
    "album": "Super Trouper",
    "artistas": [
      "ABBA"
    ],
    "index": 310,
    "spotifyId": "3oEkrIfXfSh9zGnE7eBzSV",
    "titulo": "The Winner Takes It All"
  },
  {
    "album": "Super Trouper",
    "artistas": [
      "ABBA"
    ],
    "index": 311,
    "spotifyId": "4euAGZTszWPrriggYK0HG9",
    "titulo": "Lay All Your Love On Me"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 312,
    "spotifyId": "6zk4lFEYIWs1UZZ03NVetT",
    "titulo": "When I Kissed The Teacher"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 313,
    "spotifyId": "3vkQ5DAB1qQMYO4Mr9zJN6",
    "titulo": "Gimme! Gimme! Gimme! (A Man After Midnight)"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 314,
    "spotifyId": "762B4bOcXF7I2Y8UlKTyTy",
    "titulo": "Chiquitita"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 315,
    "spotifyId": "7rWgGyRK7RAqAAXy4bLft9",
    "titulo": "Angeleyes"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 316,
    "spotifyId": "1PtJclc46wTk367PlsU6Uj",
    "titulo": "I Have A Dream"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 317,
    "spotifyId": "17OqI90oTFZ3J8PVu6j07V",
    "titulo": "Voulez-Vous"
  },
  {
    "album": "Oral Fixation, Vol. 2 (Expanded Edition)",
    "artistas": [
      "Shakira",
      "Wyclef Jean"
    ],
    "index": 318,
    "spotifyId": "3d0WouFnFmr0K3kjeza3fF",
    "titulo": "Hips Don't Lie (feat. Wyclef Jean)"
  },
  {
    "album": "El Dorado",
    "artistas": [
      "Shakira",
      "Maluma"
    ],
    "index": 319,
    "spotifyId": "6mICuAdrwEjh6Y6lroV2Kg",
    "titulo": "Chantaje (feat. Maluma)"
  },
  {
    "album": "Shakira. (Expanded Edition) [Spanish Version]",
    "artistas": [
      "Shakira",
      "Rihanna"
    ],
    "index": 320,
    "spotifyId": "7o1Pm9jpH0wFpN5g793Lnq",
    "titulo": "Can't Remember to Forget You (feat. Rihanna)"
  },
  {
    "album": "B'Day Deluxe Edition",
    "artistas": [
      "Beyoncé",
      "Shakira"
    ],
    "index": 321,
    "spotifyId": "2HWWNoWEEEECwZhAiLg7ib",
    "titulo": "Beautiful Liar"
  },
  {
    "album": "TRANSLATION",
    "artistas": [
      "Black Eyed Peas",
      "Shakira"
    ],
    "index": 322,
    "spotifyId": "1zLBsSVxETQOfINOLYvT5m",
    "titulo": "GIRL LIKE ME"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira",
      "El Cata"
    ],
    "index": 323,
    "spotifyId": "42k1KeBehAd83lrGt1okiC",
    "titulo": "Loca (feat. El Cata)"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira"
    ],
    "index": 324,
    "spotifyId": "4zy1s9GnxWsNzZp1688euA",
    "titulo": "Addicted to You"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira",
      "El Cata"
    ],
    "index": 325,
    "spotifyId": "19t0Z7qsoV6A1CGJVYRnjm",
    "titulo": "Rabiosa (feat. El Cata)"
  },
  {
    "album": "Donde Estan Los Ladrones",
    "artistas": [
      "Shakira"
    ],
    "index": 326,
    "spotifyId": "2nSd3kBslXIbBAdrmqvKM6",
    "titulo": "Dónde Están los Ladrones"
  },
  {
    "album": "Donde Estan Los Ladrones",
    "artistas": [
      "Shakira"
    ],
    "index": 327,
    "spotifyId": "7jxHeJLVpnP7S08JFF4GBi",
    "titulo": "Ciega, Sordomuda"
  },
  {
    "album": "El Dorado",
    "artistas": [
      "Shakira"
    ],
    "index": 328,
    "spotifyId": "4qknM1pQz53QOyfDVTjcM9",
    "titulo": "Me Enamoré"
  },
  {
    "album": "Pies Descalzos",
    "artistas": [
      "Shakira"
    ],
    "index": 329,
    "spotifyId": "4M1lEbqPzlEw1JYWB6aE7K",
    "titulo": "Estoy Aquí"
  },
  {
    "album": "Pies Descalzos",
    "artistas": [
      "Shakira"
    ],
    "index": 330,
    "spotifyId": "5yKQTwznar5I75UyYJ9CnR",
    "titulo": "Pies Descalzos, Sueños Blancos"
  },
  {
    "album": "Laundry Service",
    "artistas": [
      "Shakira"
    ],
    "index": 331,
    "spotifyId": "2lnzGkdtDj5mtlcOW2yRtG",
    "titulo": "Whenever, Wherever"
  },
  {
    "album": "Laundry Service",
    "artistas": [
      "Shakira"
    ],
    "index": 332,
    "spotifyId": "3TY1PFZXmYeiLcXygB74My",
    "titulo": "Suerte (Whenever, Wherever)"
  },
  {
    "album": "She Wolf (Expanded Edition)",
    "artistas": [
      "Shakira"
    ],
    "index": 333,
    "spotifyId": "4l9fZ75WzPZlAIkqJIWlo8",
    "titulo": "She Wolf"
  },
  {
    "album": "She Wolf (Expanded Edition)",
    "artistas": [
      "Shakira"
    ],
    "index": 334,
    "spotifyId": "0FpB2Hw5qx9SeMMQuw1G5P",
    "titulo": "Loba"
  },
  {
    "album": "Shakira: Bzrp Music Sessions, Vol. 53/66",
    "artistas": [
      "Bizarrap",
      "Shakira"
    ],
    "index": 335,
    "spotifyId": "4nrPB8O7Y7wsOCJdgXkthe",
    "titulo": "Shakira: Bzrp Music Sessions, Vol. 53/66"
  },
  {
    "album": "Blue Hawaii",
    "artistas": [
      "Elvis Presley"
    ],
    "index": 336,
    "spotifyId": "44AyOl4qVkzS48vBsbNXaC",
    "titulo": "Can't Help Falling in Love"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 337,
    "spotifyId": "5XeFesFbtLpXzIVDNQP22n",
    "titulo": "I Wanna Be Yours"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 338,
    "spotifyId": "086myS9r57YsLbJpU0TgK9",
    "titulo": "Why'd You Only Call Me When You're High?"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 339,
    "spotifyId": "5TTGoX70AFrTvuEtqHK37S",
    "titulo": "No. 1 Party Anthem"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 340,
    "spotifyId": "5FVd6KXrgO9B3JPmC8OPst",
    "titulo": "Do I Wanna Know?"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 341,
    "spotifyId": "2AT8iROs4FQueDv2c8q2KE",
    "titulo": "R U Mine?"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 342,
    "spotifyId": "7nzsY8vlnKdvGOEE0rjAXZ",
    "titulo": "Arabella"
  },
  {
    "album": "Favourite Worst Nightmare",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 343,
    "spotifyId": "0BxE4FqsDD1Ot4YuBXwAPp",
    "titulo": "505"
  },
  {
    "album": "Favourite Worst Nightmare",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 344,
    "spotifyId": "2x8evxqUlF0eRabbW2JBJd",
    "titulo": "Fluorescent Adolescent"
  },
  {
    "album": "Sixpence None The Richer",
    "artistas": [
      "Sixpence None The Richer"
    ],
    "index": 345,
    "spotifyId": "754kgU5rWscRTfvlsuEwFp",
    "titulo": "Kiss Me"
  },
  {
    "album": "Canzoni",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "index": 346,
    "spotifyId": "0BvqinOX3RamcfaUd2bRWJ",
    "titulo": "E penso a te (feat. Ana Carolina)"
  },
  {
    "album": "O Tempo É Agora",
    "artistas": [
      "ANAVITÓRIA"
    ],
    "index": 347,
    "spotifyId": "3bR8wBqLky6b61ROJlaBEF",
    "titulo": "Ai, Amor"
  },
  {
    "album": "Lungs (Deluxe Version)",
    "artistas": [
      "Florence + The Machine"
    ],
    "index": 348,
    "spotifyId": "456WNXWhDwYOSf5SpTuqxd",
    "titulo": "Dog Days Are Over"
  },
  {
    "album": "I Follow Rivers (The Magician Remix)",
    "artistas": [
      "Lykke Li",
      "The Magician"
    ],
    "index": 349,
    "spotifyId": "4Jv7lweGIUOFQ7Oq2AtAh9",
    "titulo": "I Follow Rivers - The Magician Remix"
  },
  {
    "album": "The Bodyguard - Original Soundtrack Album",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 350,
    "spotifyId": "6M1M6cRtVkm5d0qTzkSEuK",
    "titulo": "Run to You"
  },
  {
    "album": "Hatful of Hollow",
    "artistas": [
      "The Smiths"
    ],
    "index": 351,
    "spotifyId": "1xaTREM89RbIxkcjlpf4Uw",
    "titulo": "Heaven Knows I'm Miserable Now - 2011 Remaster"
  },
  {
    "album": "Faccio un casino",
    "artistas": [
      "Coez"
    ],
    "index": 352,
    "spotifyId": "7MMJa7cjMadOSR6CFWvB1x",
    "titulo": "La musica non c'è"
  },
  {
    "album": "Temporary",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 353,
    "spotifyId": "28zcTRqgD2iVOE4KEKCAxi",
    "titulo": "Temporary"
  },
  {
    "album": "Non so chi ha creato il mondo ma so che era innamorato",
    "artistas": [
      "Alfa"
    ],
    "index": 354,
    "spotifyId": "4fffEEVKwaw4gEoNW9fEX2",
    "titulo": "il filo rosso"
  },
  {
    "album": "Le Cose In Comune",
    "artistas": [
      "Alfa"
    ],
    "index": 355,
    "spotifyId": "24FfvTqyMAJKA8lrSqjhfB",
    "titulo": "Le Cose In Comune"
  },
  {
    "album": "Destinazione Paradiso",
    "artistas": [
      "Gianluca Grignani"
    ],
    "index": 356,
    "spotifyId": "5L4wJD8eyVhSrm4pbPuF2u",
    "titulo": "La Mia Storia Tra Le Dita"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 357,
    "spotifyId": "2yQMmtem48vOjB1OXAvbKD",
    "titulo": "Quem de nós Dois (La Mia Storia Tra Le Dita)"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 358,
    "spotifyId": "5bxQHscWvyaQbm37igKP4K",
    "titulo": "La solitudine"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 359,
    "spotifyId": "2I0mW1Ldu2FQ8qmhxqQjeA",
    "titulo": "Non c'è"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 360,
    "spotifyId": "4gXSgEQeLRwCmpa6foSspX",
    "titulo": "Strani amori"
  },
  {
    "album": "Primavera in anticipo",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 361,
    "spotifyId": "6RDrpNxQIKp6LULdQWd2Vl",
    "titulo": "Invece no"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 362,
    "spotifyId": "1WXnbemEJ4t1q3c2kb2fSA",
    "titulo": "Vivimi"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 363,
    "spotifyId": "0itZu27maTPaeqkq7Y2WiX",
    "titulo": "Dove l'aria è polvere"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 364,
    "spotifyId": "03PJW7YIlG86dCvoYviGbh",
    "titulo": "Parlami"
  },
  {
    "album": "Le cose che vivi",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 365,
    "spotifyId": "7qNtV5oSvYLPOlvWjRQ0qa",
    "titulo": "Le cose che vivi"
  },
  {
    "album": "IO CANTO 2 (DELUXE)",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 366,
    "spotifyId": "56e1N6HF5wfBBh41dHZYmk",
    "titulo": "LA MIA STORIA TRA LE DITA"
  },
  {
    "album": "Brand New Eyes",
    "artistas": [
      "Paramore"
    ],
    "index": 367,
    "spotifyId": "7JIuqL4ZqkpfGKQhYlrirs",
    "titulo": "The Only Exception"
  },
  {
    "album": "Brand New Eyes",
    "artistas": [
      "Paramore"
    ],
    "index": 368,
    "spotifyId": "1Bv3h7Vc4AaYA2BcSM3rVd",
    "titulo": "All I Wanted"
  },
  {
    "album": "Lento (feat. Pabllo Vittar) [Brabo Remix]",
    "artistas": [
      "Lauren Jauregui",
      "Pabllo Vittar",
      "Brabo"
    ],
    "index": 369,
    "spotifyId": "3BvwBnmbsKs7dBkU6PKBrT",
    "titulo": "Lento (feat. Pabllo Vittar) [Brabo Remix]"
  },
  {
    "album": "Peter, Paul and Mary",
    "artistas": [
      "Peter, Paul and Mary"
    ],
    "index": 370,
    "spotifyId": "6oMZhY0f1ReI6AJDDYfuSb",
    "titulo": "500 Miles"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 371,
    "spotifyId": "5JCoSi02qi3jJeHdZXMmR8",
    "titulo": "favorite crime"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 372,
    "spotifyId": "0MMyJUC3WNnFS1lit5pTjk",
    "titulo": "jealousy, jealousy"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 373,
    "spotifyId": "6SRsiMl7w1USE4mFqrOhHC",
    "titulo": "brutal"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 374,
    "spotifyId": "5CZ40GBx1sQ9agT82CLQCT",
    "titulo": "traitor"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 375,
    "spotifyId": "5wANPM4fQCJwkGd4rN57mH",
    "titulo": "drivers license"
  },
  {
    "album": "Fallen",
    "artistas": [
      "Evanescence"
    ],
    "index": 376,
    "spotifyId": "0COqiPhxzoWICwFCS4eZcp",
    "titulo": "Bring Me To Life"
  },
  {
    "album": "Young And Beautiful",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 377,
    "spotifyId": "2nMeu6UenVvwUktBCpLMK9",
    "titulo": "Young And Beautiful"
  },
  {
    "album": "Say Yes To Heaven",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 378,
    "spotifyId": "6GGtHZgBycCgGBUhZo81xe",
    "titulo": "Say Yes To Heaven"
  },
  {
    "album": "Born To Die - The Paradise Edition",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 379,
    "spotifyId": "0fBSs3fRoh1yJcne77fdu9",
    "titulo": "Video Games"
  },
  {
    "album": "Born To Die - The Paradise Edition",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 380,
    "spotifyId": "4Ouhoi2lAhrLJKFzUqEzwl",
    "titulo": "Born To Die"
  },
  {
    "album": "A Perfect Contradiction (Outsiders' Expanded Edition)",
    "artistas": [
      "Paloma Faith"
    ],
    "index": 381,
    "spotifyId": "62ke5zFUJN6RvtXZgVH0F8",
    "titulo": "Only Love Can Hurt Like This"
  },
  {
    "album": "Chiara Civello 7752",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 382,
    "spotifyId": "3eq4ncW2xC74TteeoSZ7Ec",
    "titulo": "Resta"
  },
  {
    "album": "Suicide Squad: The Album",
    "artistas": [
      "Kehlani"
    ],
    "index": 383,
    "spotifyId": "1W7zkKgRv9mrLbfdQ8XyH3",
    "titulo": "Gangsta"
  },
  {
    "album": "Ashlyn",
    "artistas": [
      "Ashe"
    ],
    "index": 384,
    "spotifyId": "69HzZ3ti9DLwb0GdWCGYSo",
    "titulo": "Moral of the Story"
  },
  {
    "album": "Dream Your Life Away",
    "artistas": [
      "Vance Joy"
    ],
    "index": 385,
    "spotifyId": "7yq4Qj7cqayVTp3FF9CWbm",
    "titulo": "Riptide"
  },
  {
    "album": "200 KM/H In The Wrong Lane",
    "artistas": [
      "t.A.T.u."
    ],
    "index": 386,
    "spotifyId": "0ZRU3O6kVY8CgtYFYwjH4m",
    "titulo": "All The Things She Said"
  },
  {
    "album": "Honeymoon",
    "artistas": [
      "Beach Bunny"
    ],
    "index": 387,
    "spotifyId": "3ZgkHyoKfNMcHTXC0X1qQj",
    "titulo": "Cloud 9"
  },
  {
    "album": "Make You Mine",
    "artistas": [
      "PUBLIC"
    ],
    "index": 388,
    "spotifyId": "5iFwAOB2TFkPJk8sMlxP8g",
    "titulo": "Make You Mine"
  },
  {
    "album": "Hopes And Fears",
    "artistas": [
      "Keane"
    ],
    "index": 389,
    "spotifyId": "1SKPmfSYaPsETbRHaiA18G",
    "titulo": "Somewhere Only We Know"
  },
  {
    "album": "Someday We Will Foresee Obstacles",
    "artistas": [
      "Syd Matters"
    ],
    "index": 390,
    "spotifyId": "2B52wafRNWOxZTD2lmY6y2",
    "titulo": "To All of You"
  },
  {
    "album": "Texas Chatter",
    "artistas": [
      "Harry James"
    ],
    "index": 391,
    "spotifyId": "4rfh0qEv1HdKRXWiRXfzWF",
    "titulo": "It's Been a Long, Long Time"
  },
  {
    "album": "Let It Roll - Songs of George Harrison",
    "artistas": [
      "George Harrison"
    ],
    "index": 392,
    "spotifyId": "52ksVOpMCbimktgmI59GSq",
    "titulo": "While My Guitar Gently Weeps - Live from Madison Square Garden, New York, U.S.A, 1971 / 2009 Remaster"
  },
  {
    "album": "Immunity",
    "artistas": [
      "Clairo"
    ],
    "index": 393,
    "spotifyId": "7B3z0ySL9Rr0XvZEAjWZzM",
    "titulo": "Sofia"
  },
  {
    "album": "Diane Warren: The Cave Sessions, Vol. 1",
    "artistas": [
      "Diane Warren",
      "Lauren Jauregui"
    ],
    "index": 394,
    "spotifyId": "2cY9Hz1bihEOxPkUx3oFCA",
    "titulo": "Not Prepared For You"
  },
  {
    "album": "The World We Knew",
    "artistas": [
      "Frank Sinatra"
    ],
    "index": 395,
    "spotifyId": "62KZRwymXq9Rgm8Cm5UCfx",
    "titulo": "The World We Knew (Over And Over)"
  },
  {
    "album": "Dummy",
    "artistas": [
      "Portishead"
    ],
    "index": 396,
    "spotifyId": "3Ty7OTBNSigGEpeW2PqcsC",
    "titulo": "Glory Box"
  },
  {
    "album": "How deep is your love? (Mitski's version)",
    "artistas": [
      "Manllii"
    ],
    "index": 397,
    "spotifyId": "4Hj7OQxRvSz5Lrrw75lu2L",
    "titulo": "How deep is your love? (Mitski's version)"
  },
  {
    "album": "Roseland NYC Live",
    "artistas": [
      "Portishead"
    ],
    "index": 398,
    "spotifyId": "2wEHxTBxLJk3vYzyW6dsAU",
    "titulo": "Glory Box - Live"
  },
  {
    "album": "Corinne Bailey Rae",
    "artistas": [
      "Corinne Bailey Rae"
    ],
    "index": 399,
    "spotifyId": "2nGFzvICaeEWjIrBrL2RAx",
    "titulo": "Put Your Records On"
  },
  {
    "album": "Splende",
    "artistas": [
      "Annalisa"
    ],
    "index": 400,
    "spotifyId": "7o34Mp5i0kSmAIJUCxVCFn",
    "titulo": "Ti sento"
  },
  {
    "album": "MATERIA (PELLE)",
    "artistas": [
      "Marco Mengoni"
    ],
    "index": 401,
    "spotifyId": "4eI0ncpnZuv4A3ssTJRSDY",
    "titulo": "Due Vite"
  },
  {
    "album": "The Kitty Kallen Story",
    "artistas": [
      "Kitty Kallen",
      "Harry James"
    ],
    "index": 402,
    "spotifyId": "61sVa3rLHOYqrshahMJj0A",
    "titulo": "It's Been a Long, Long Time (with Harry James & His Orchestra)"
  },
  {
    "album": "The Best Of Bill Medley",
    "artistas": [
      "Bill Medley",
      "Jennifer Warnes"
    ],
    "index": 403,
    "spotifyId": "2JCTiiJQFWQNC0Zp8rsJRB",
    "titulo": "(I've Had) The Time Of My Life - theme from the motion picture \"Dirty Dancing\""
  },
  {
    "album": "Solo",
    "artistas": [
      "Frankie Valli"
    ],
    "index": 404,
    "spotifyId": "0bfvHnWWOeU1U5XeKyVLbW",
    "titulo": "Can't Take My Eyes off You"
  },
  {
    "album": "Songs From The Big Chair (Super Deluxe Edition)",
    "artistas": [
      "Tears For Fears"
    ],
    "index": 405,
    "spotifyId": "4RvWPyQ5RL0ao9LPZeSouE",
    "titulo": "Everybody Wants To Rule The World"
  },
  {
    "album": "Barrio Fino (Bonus Track Version)",
    "artistas": [
      "Daddy Yankee"
    ],
    "index": 406,
    "spotifyId": "228BxWXUYQPJrJYHDLOHkj",
    "titulo": "Gasolina"
  },
  {
    "album": "Loose",
    "artistas": [
      "Nelly Furtado",
      "Timbaland"
    ],
    "index": 407,
    "spotifyId": "2gam98EZKrF9XuOkU13ApN",
    "titulo": "Promiscuous"
  },
  {
    "album": "Good Girl Gone Bad: Reloaded",
    "artistas": [
      "Rihanna"
    ],
    "index": 408,
    "spotifyId": "46aZJc0z1HHHSFxaIRxYSP",
    "titulo": "Breakin' Dishes"
  },
  {
    "album": "Don't Play That Song (Mono)",
    "artistas": [
      "Ben E. King"
    ],
    "index": 409,
    "spotifyId": "3SdTKo2uVsxFblQjpScoHy",
    "titulo": "Stand By Me"
  },
  {
    "album": "VIDA",
    "artistas": [
      "Luis Fonsi",
      "Daddy Yankee"
    ],
    "index": 410,
    "spotifyId": "6habFhsOp2NvshLv26DqMb",
    "titulo": "Despacito"
  },
  {
    "album": "R&B: From Doo-Wop To Hip-Hop",
    "artistas": [
      "Ginuwine"
    ],
    "index": 411,
    "spotifyId": "6mz1fBdKATx6qP4oP1I65G",
    "titulo": "Pony"
  },
  {
    "album": "Church Of Scars",
    "artistas": [
      "Bishop Briggs"
    ],
    "index": 412,
    "spotifyId": "3mRLHiSHYtC8Hk7bzZdUs1",
    "titulo": "River"
  },
  {
    "album": "I See Red",
    "artistas": [
      "Everybody Loves an Outlaw"
    ],
    "index": 413,
    "spotifyId": "5MAK1nd8R6PWnle1Q1WJvh",
    "titulo": "I See Red"
  },
  {
    "album": "VIDA",
    "artistas": [
      "Luis Fonsi",
      "Demi Lovato"
    ],
    "index": 414,
    "spotifyId": "0mlAOSILGRys2IbvyOT5VJ",
    "titulo": "Échame La Culpa"
  },
  {
    "album": "Lesley Gore Sings Of Mixed-Up Hearts",
    "artistas": [
      "Lesley Gore"
    ],
    "index": 415,
    "spotifyId": "7ngRS53kqxLcEt9Pythc5d",
    "titulo": "You Don't Own Me"
  },
  {
    "album": "Cinque Passi In Più",
    "artistas": [
      "Alessandra Amoroso"
    ],
    "index": 416,
    "spotifyId": "7lOlFOWWGQrZ6l1mgj45X6",
    "titulo": "Ti aspetto"
  },
  {
    "album": "Raio X",
    "artistas": [
      "Fernanda Abreu"
    ],
    "index": 417,
    "spotifyId": "70lDFSVPl2SO70Emrmpxp9",
    "titulo": "Kátia Flávia, A Godiva Do Irajá / Incidental: Garota De Ipanema - Medley"
  },
  {
    "album": "Number Ones",
    "artistas": [
      "Michael Jackson"
    ],
    "index": 420,
    "spotifyId": "6JZYMxvcoeLD4IifJPvDux",
    "titulo": "Dirty Diana"
  },
  {
    "album": "Rehab",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 421,
    "spotifyId": "5WV7xL0fxsy6zGfHUu0I9N",
    "titulo": "Rehab - Live From The Album Chart Show / 2006"
  },
  {
    "album": "Trilha das Indias",
    "artistas": [
      " Sukhwinder Singh", 
      "Sunidhi Chauhan"
    ],
    "index": 421,
    "spotifyId": "3FBhYM0JzI6hcl9f5qAXXL",
    "titulo": "Beedi"
  },
  {
    "album": "Neither One Of Us",
    "artistas": [
      "Gladys Knight & The Pips"
    ],
    "index": 422,
    "spotifyId": "0qKnbglSUegyNBWCpw3WWo",
    "titulo": "For Once In My Life"
  }
];


// Playlist exclusiva do modo Descendentes:
// https://open.spotify.com/playlist/44xYNTfmisUBtQ1oYuEWYe
const PLAYLIST_DESCENDENTES = [
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 1,
    "spotifyId": "53xAT6jud1w0NqlBjSW4VB",
    "titulo": "What's My Name"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 2,
    "spotifyId": "2ziVTVizQdVNC2QhQhNGvg",
    "titulo": "Ways to Be Wicked"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 3,
    "spotifyId": "3N1V03yrqyNPo5A4Fu2Wd7",
    "titulo": "Space Between"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 4,
    "spotifyId": "537mRuCCiKQNFlN1vdSl1k",
    "titulo": "It's Goin' Down"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 5,
    "spotifyId": "5AiD2doxfh5xlfkNc63WPV",
    "titulo": "You and Me"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 6,
    "spotifyId": "1rM0CnyUiiw6A9CHJRXjZA",
    "titulo": "Chillin' Like a Villain"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 7,
    "spotifyId": "6ATDrk56ouL2eCxrgfDeHE",
    "titulo": "Do What You Gotta Do"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 8,
    "spotifyId": "3doNvO8zrwzcM0PJrcn8Rb",
    "titulo": "Night Falls"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 9,
    "spotifyId": "6NyXDWD1bH0fwBrShjSydJ",
    "titulo": "My Once Upon a Time"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 10,
    "spotifyId": "1KB9t6oaVG99L1DIkMfyrx",
    "titulo": "Break This Down"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 11,
    "spotifyId": "35mP1AOFEpTrChN5H4r2u7",
    "titulo": "Rotten to the Core (D3 Remix)"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 12,
    "spotifyId": "7Ci4hHa9wvMajOqt5EpOQK",
    "titulo": "VK Mashup"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 13,
    "spotifyId": "1YekSxsAlGlYvm9zjLsKdh",
    "titulo": "Did I Mention"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 14,
    "spotifyId": "4o05DiC0RQ9DNtGJGauwna",
    "titulo": "Queen of Mean"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 15,
    "spotifyId": "0v2gYvWbmabBYaTlOWi5fi",
    "titulo": "One Kiss"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 16,
    "spotifyId": "0tA3r8h5RZp9xSPrZe8fcK",
    "titulo": "Night Is Young - From \"Descendants: Wicked World\""
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 17,
    "spotifyId": "2bNxCVI4Fub8BAwr0CQDyd",
    "titulo": "Rotten to the Core"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 18,
    "spotifyId": "1mRBJdpIgc3jZH8C3cN2WV",
    "titulo": "If Only"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 19,
    "spotifyId": "0xlHBT4TViZJGdEPi5M4pm",
    "titulo": "If Only (Reprise)"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 20,
    "spotifyId": "7I80zTBTDNnbOiJQ0JLjZr",
    "titulo": "Set It Off"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 21,
    "spotifyId": "0PslQwFjnu3nTm9ka7d0xL",
    "titulo": "Good Is the New Bad - From \"Descendants: Wicked World\""
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 22,
    "spotifyId": "1YekSxsAlGlYvm9zjLsKdh",
    "titulo": "Did I Mention"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 23,
    "spotifyId": "0oe0UYSKAESBUR12I1ESXQ",
    "titulo": "Evil Like Me"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 24,
    "spotifyId": "5bIaUFqwok97vCXAoTqFkj",
    "titulo": "Be Our Guest"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 25,
    "spotifyId": "01vWrOtEdzlQorEhifVUo3",
    "titulo": "Rotten to the Core - From \"Descendants: Wicked World\""
  },
  {
    "album": "Genie in a Bottle",
    "artistas": [
      "Descendentes"
    ],
    "index": 26,
    "spotifyId": "7o6oQ3TTOAdMe46Hg7ijDh",
    "titulo": "Genie in a Bottle"
  },
  {
    "album": "Good to Be Bad (From \"Descendants 3\")",
    "artistas": [
      "Descendentes"
    ],
    "index": 27,
    "spotifyId": "3EJhGXM0fa6nVb6MfgTauX",
    "titulo": "Good to Be Bad - From \"Descendants 3\""
  },
  {
    "album": "Queen of Mean/What's My Name CLOUDxCITY...",
    "artistas": [
      "Descendentes"
    ],
    "index": 28,
    "spotifyId": "2oJG54pCeFBlc63HuZrOX8",
    "titulo": "Queen of Mean/What's My Name CLOUDxCITY Mashup - From \"Descendants...\""
  },
  {
    "album": "Rather Be With You (From \"Descendants: Wicked World\")",
    "artistas": [
      "Descendentes"
    ],
    "index": 29,
    "spotifyId": "06FtGanSUKMJ0ZYak6V1FR",
    "titulo": "Rather Be With You - From \"Descendants: Wicked World\""
  },
  {
    "album": "Stronger (From \"Under the Sea: A Descendant...)",
    "artistas": [
      "Descendentes"
    ],
    "index": 30,
    "spotifyId": "6xjTZCCyLNEOw7AsGV8A5e",
    "titulo": "Stronger - From \"Under the Sea: A Descendants Short Story\""
  }
];

// Playlist exclusiva do modo Ana Carolina:
const PLAYLIST_ANA_CAROLINA = [
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 1,
    "spotifyId": "1tnFctXBWxcl4bynuz88SV",
    "titulo": "O Beat Da Beata - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 2,
    "spotifyId": "6fXhVRbRgeDUyeckTYhzwd",
    "titulo": "Vestido Estampado - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 3,
    "spotifyId": "7tGvQQ0GmZVPbk0eaJy90F",
    "titulo": "Garganta - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 4,
    "spotifyId": "39Yhrx9ZZCkwM4erwUx72E",
    "titulo": "Mais Que Isso - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 5,
    "spotifyId": "2CvrbVzGLqAJSeRkh4XvW5",
    "titulo": "Brasil Corrupção (Unimultiplicidade) - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 6,
    "spotifyId": "3yx8ZoQRZQUiIUpSS4xhMP",
    "titulo": "Beatriz - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 7,
    "spotifyId": "6sgNwn5AMtjFWF2W8920yB",
    "titulo": "Chatterton - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 8,
    "spotifyId": "0Z96ZExECrYSQo03nfCak0",
    "titulo": "Prá Rua Me Levar - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 9,
    "spotifyId": "6tvnj77OJD0DJTgSIi6fQ3",
    "titulo": "É Isso Aí (The Blower'S Daughter) - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 10,
    "spotifyId": "2fCxoHkhVU2cxZbGelPIlo",
    "titulo": "Tanta Saudade - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 11,
    "spotifyId": "1SCHnL226Vc4S4lyoGeeSf",
    "titulo": "Comparsas / O Pequenez E O Pit Bull - Ao Vivo"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 12,
    "spotifyId": "3mpm4fPG1RIWHCz6VBfQgq",
    "titulo": "O Beat Da Beata"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 13,
    "spotifyId": "5aIBMkNJ4Gfz1srs3mdQQj",
    "titulo": "Não Fale Desse Jeito"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 14,
    "spotifyId": "2RxlRzPIZrIPmAEv0fVjZe",
    "titulo": "Nua"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 15,
    "spotifyId": "1y3MmmBH8UfKKUKWfaHuy4",
    "titulo": "Vestido Estampado"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 16,
    "spotifyId": "6jJMhX5CuzeZBU1HsX7nFz",
    "titulo": "Vox Populi"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 17,
    "spotifyId": "3VlF8xuYu1Qzr9k7wGaTPA",
    "titulo": "Mais Que Isso"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 18,
    "spotifyId": "2NSqSMc0wd01Km04JVBInL",
    "titulo": "É Mágoa"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 19,
    "spotifyId": "5EGm0I15EH6L1hOkFyO1FC",
    "titulo": "Pra Rua Me Levar"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 20,
    "spotifyId": "3w9pLeERUMc6oGF02YU7ro",
    "titulo": "Uma Louca Tempestade"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 21,
    "spotifyId": "5f2InE6PenFPhBeCLXCvFC",
    "titulo": "É Hora Da Virada"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 22,
    "spotifyId": "752h4gcgAIH6gdlBTFAS6H",
    "titulo": "Só Fala Em Mim"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 23,
    "spotifyId": "0bB6AoOHbBYYuaR9V26E7z",
    "titulo": "Elevador (Livro de Esquecimento)"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 24,
    "spotifyId": "3ZBGVTCNbv5VkRg7vx5uQw",
    "titulo": "2 Bicudos"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 25,
    "spotifyId": "4zVlul17Z9SGqwgmbwm10Z",
    "titulo": "Encostar na Tua"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 26,
    "spotifyId": "2wRDSWplTOhbsG4Tr5YHA6",
    "titulo": "Hoje Eu Tô Sozinha"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 27,
    "spotifyId": "3SXe3otoiV5dywpKe0wHdr",
    "titulo": "Me Sento Na Rua"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 28,
    "spotifyId": "6PaJaElx59xuI8TPxd7XAf",
    "titulo": "Eu Nunca Te Amei Idiota"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 29,
    "spotifyId": "0GZMMUuDB34uvhdSuAcfFF",
    "titulo": "Que Se Danem Os Nós"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 30,
    "spotifyId": "1ITWh6vi5pFYvxPAelp8CK",
    "titulo": "Dadivosa"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 31,
    "spotifyId": "3a4XauKFdsov5eEg3TH7gd",
    "titulo": "A Câmera Que Filma os Dias"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 32,
    "spotifyId": "687IN0vgEIHxAre06KRukW",
    "titulo": "Vê Se Me Esquece"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina",
      "Alcione"
    ],
    "index": 33,
    "spotifyId": "5XqEElLqSgCGigDjAfTGFq",
    "titulo": "Violão e Voz (feat. Alcione)"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 34,
    "spotifyId": "45keLg41B7ruaknqutQqFG",
    "titulo": "Joana"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 35,
    "spotifyId": "7nNHOrnaQR64K2aQwzRnca",
    "titulo": "Que Será"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 36,
    "spotifyId": "7mZwcrez7OblenK3PAIOuy",
    "titulo": "Pra Terminar"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 37,
    "spotifyId": "2yQMmtem48vOjB1OXAvbKD",
    "titulo": "Quem de nós Dois (La Mia Storia Tra Le Dita)"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 38,
    "spotifyId": "3nnrhhoc968wluAuPAkC0e",
    "titulo": "Implicante"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 39,
    "spotifyId": "3NjEZ08bWZUZWGGLRjFHoZ",
    "titulo": "Ela É Bamba"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 40,
    "spotifyId": "6g0WLBUxLNigI5woFtsI5g",
    "titulo": "Confesso"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 41,
    "spotifyId": "7JnjKjVwGAM6Dyq8jgbsFU",
    "titulo": "O Rio"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 42,
    "spotifyId": "2DRMQ194dWZuhiyP2r5zmU",
    "titulo": "Tô Caindo Fora"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 43,
    "spotifyId": "2jXrL5iDQv3aW5YRiNJsRo",
    "titulo": "Beatriz"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 44,
    "spotifyId": "44Z3yhqx9jkzjM6x9AtztM",
    "titulo": "O Avesso Dos Ponteiros"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 45,
    "spotifyId": "6TAnUMIknrI4vIJHXuJPRb",
    "titulo": "Perder Tempo Com Você"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 46,
    "spotifyId": "2Qh7jAuTOWXcVkk002gMrE",
    "titulo": "Retrato Em Branco E Preto"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 47,
    "spotifyId": "1cq4VSZilVlv1oSgrO2Tq5",
    "titulo": "O Melhor De Mim"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 48,
    "spotifyId": "36emRMHsOAcfvBvHTjuOuv",
    "titulo": "Agora Ou Nunca"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina",
      "Milton Guedes"
    ],
    "index": 49,
    "spotifyId": "7dgwx3ft16tAzN3HKpMgSc",
    "titulo": "Tudo Bem"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 50,
    "spotifyId": "1Gb87NbAl8JSzgHwe32RxD",
    "titulo": "A Canção Tocou na Hora Errada"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 51,
    "spotifyId": "7ggsCVhoqrOJOyDXDvWBlB",
    "titulo": "Garganta"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 52,
    "spotifyId": "2zuIYWW6mZXhB1CEHk6T2l",
    "titulo": "Armazém"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 53,
    "spotifyId": "08ZEi8ylglOFwOZOAwDPEe",
    "titulo": "Trancado"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 54,
    "spotifyId": "6TSlu4FAsiLN7wwjvq8BP0",
    "titulo": "Nada Pra Mim"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 55,
    "spotifyId": "0SUeariIBntuFSjc40eDJu",
    "titulo": "Alguém Me Disse"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 56,
    "spotifyId": "6eotWWEnZVmExKoz1DKHyj",
    "titulo": "Tô Saindo"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 57,
    "spotifyId": "2CPh6Ara4JRK5cH93QrAnR",
    "titulo": "Nada Te Faltará"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 58,
    "spotifyId": "6dJdTaUzjpB0Ik07N7EphE",
    "titulo": "Tolerância"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 59,
    "spotifyId": "0lDlal4oAE0Uc3U4k0eE8J",
    "titulo": "Ruas de Outono"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 60,
    "spotifyId": "3HLnb1B8dGQwJLPNfVIiqX",
    "titulo": "Aqui"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 61,
    "spotifyId": "7LRIFDoKVHTUDKpgZXoEMd",
    "titulo": "Rosas"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 62,
    "spotifyId": "29OdXAcCypWsns5JfSBFpB",
    "titulo": "Um Edifício no Meio do Mundo"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 63,
    "spotifyId": "5Gn03bGJmBb0lx3cQvAlja",
    "titulo": "Vai"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 64,
    "spotifyId": "0zQfbMbFcKjVWV426yXO5F",
    "titulo": "O Cristo De Madeira"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 65,
    "spotifyId": "1eG9ihI0kvYy8LdbKTSN5B",
    "titulo": "Eu Comi a Madona"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 66,
    "spotifyId": "44D9t8NUS9yUq0AoWiPr4B",
    "titulo": "1.100,00 (Nega Marrenta)"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 67,
    "spotifyId": "7JebZj9p2L713th5B3DOft",
    "titulo": "Chevette"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 68,
    "spotifyId": "5lzsJEP1GSf0tsNYV1RDpX",
    "titulo": "Notícias Populares"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 69,
    "spotifyId": "0WJwxUPAc5sJczOM3UWXSb",
    "titulo": "La Critique (Instrumental)"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 70,
    "spotifyId": "1gaTdimQRfXwLxUdI0xT2q",
    "titulo": "Então Vá Se Perder"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 71,
    "spotifyId": "2ZqMXGaG6GGArJXLTHwze0",
    "titulo": "Carvão"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 72,
    "spotifyId": "5G1iYYDeu41tfsi6mGi3nv",
    "titulo": "Manhã"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 73,
    "spotifyId": "0CJpBIyPsUeVRNEYn1IAmO",
    "titulo": "Homens e Mulheres"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 74,
    "spotifyId": "6bFmseJnubiUt3UyI1urCZ",
    "titulo": "Corredores"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 75,
    "spotifyId": "5UiacQo0rwUCt0kuE4pceW",
    "titulo": "Sen.Ti.Mentos (Instrumental)"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 76,
    "spotifyId": "3peo6veBWKpehRY3pCOvZ2",
    "titulo": "Cantinho"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 77,
    "spotifyId": "4hPBVkIKQwMEr9bry4KWWE",
    "titulo": "Eu Não Paro"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 78,
    "spotifyId": "0DrWuZTrdOofy1WKetZ2Wf",
    "titulo": "Claridade"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 79,
    "spotifyId": "3KgEEjqxc3QqbN0opmQuf8",
    "titulo": "Eu Comi A Madona (Remix)"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 80,
    "spotifyId": "5uBgLKQhPWkyBtuZPMFLnW",
    "titulo": "Pole Dance - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 81,
    "spotifyId": "0OA7nGEJuH2tZoPrENplkz",
    "titulo": "Esperta"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 82,
    "spotifyId": "2r3plmPjGUfoxiOg9Wi5Be",
    "titulo": "Sangrando - Bônus"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 83,
    "spotifyId": "4vOaqCQXaSAS3eAyLELO7f",
    "titulo": "Coisas - Bônus"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 84,
    "spotifyId": "5PJP3CPkKj3W8B8CGi1Qlm",
    "titulo": "É Isso Aí (The Blower's Daughter) - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 85,
    "spotifyId": "1o2n6GuSIGwyjlrwByp9rc",
    "titulo": "Elevador (Livro de Esquecimento) - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 86,
    "spotifyId": "3PafB65rTH5gfAkV1364q4",
    "titulo": "Garganta - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 87,
    "spotifyId": "7p68I0Kkmcs53fYGaOL8Os",
    "titulo": "Rosas - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 88,
    "spotifyId": "5gGgSvrMtbT4HxF9nfG1pk",
    "titulo": "Cabide - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 89,
    "spotifyId": "3Yy73nvFoUG0ql7k20tcVY",
    "titulo": "Pelo iPhone - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 90,
    "spotifyId": "3dQVtBYtxyIh5yydT4DeiS",
    "titulo": "Piriguete / Você Não Vale Nada - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina",
      "Chico Buarque"
    ],
    "index": 91,
    "spotifyId": "1jHQKlif1dLlxRdixIbDV1",
    "titulo": "Resposta da Rita (feat. Chico Buarque) - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 92,
    "spotifyId": "716lRhM77onoBdidFnnGht",
    "titulo": "Problemas / Quem de Nós Dois (La Mia Storia Tra Le Dita)"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 93,
    "spotifyId": "6dlkBl6k4NH8lpcd8k9Gf0",
    "titulo": "Eu Sei Que Vou Te Amar - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 94,
    "spotifyId": "3Z6IvE9h4ymcZpeSnkxMPB",
    "titulo": "Coração Selvagem - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 95,
    "spotifyId": "6K3EUCw4BkJr9yrfKHDlHV",
    "titulo": "Mais Forte - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 96,
    "spotifyId": "1Fo8OEy53rTXFT6WjI98uI",
    "titulo": "Dez Minutos - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 97,
    "spotifyId": "1lcvdcs54SxYkZ52GV76hD",
    "titulo": "Un Sueño Bajo El Agua - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 98,
    "spotifyId": "6tunUlucfQ50QNVO1buCWT",
    "titulo": "Combustível - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 99,
    "spotifyId": "5UOy4mQIddMQrhpS3pXc9V",
    "titulo": "Nua / Pra Rua Me Levar / Uma Louca Tempestade - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 100,
    "spotifyId": "2Nb7qwV3UZPGU65jBVoECx",
    "titulo": "Libido / Eu Comi a Madona - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 101,
    "spotifyId": "470dqshCthRnLZLqVTkR4J",
    "titulo": "Fire - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 102,
    "spotifyId": "1zxi8saSvDpl6T167u8aXt",
    "titulo": "Esperta / Você Não Sabe / Cantinho - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 103,
    "spotifyId": "0frR37x7ysovc04RfUxkyQ",
    "titulo": "Bang Bang 2 - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 104,
    "spotifyId": "7xHkTuqarDOFXRNV23nYWJ",
    "titulo": "Problemas - (Bonus Track) [Ao Vivo]"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 105,
    "spotifyId": "2lcm865t6juYk9nAULTGkE",
    "titulo": "Stereo - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 106,
    "spotifyId": "0rVlVImg1K2iEQruyTf50F",
    "titulo": "Força Estranha - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 107,
    "spotifyId": "2Lwb7R488jv4TVLKXTaPkP",
    "titulo": "Claridade / Só fala em mim / Pra rua me levar - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 108,
    "spotifyId": "5rLDFJmmyX3lstgmb7ozb5",
    "titulo": "Simplesmente Aconteceu - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 109,
    "spotifyId": "2yxaRa1WkCQdJ45yhx0veD",
    "titulo": "Pra Tomar Três - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 110,
    "spotifyId": "21PaLVKSuUnhDUcFiEogTM",
    "titulo": "Feriado / O Amor é um Rock / Entre Tapas e Beijos - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 111,
    "spotifyId": "0ldoIpzwIS3Lgd5O2kYM36",
    "titulo": "O Violão - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 112,
    "spotifyId": "1jqmEHgMu215vSbQdHdxns",
    "titulo": "Azul - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 113,
    "spotifyId": "2OjIms0BaJxchiKhJUAuTR",
    "titulo": "Todas Elas Juntas Num Só Ser - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 114,
    "spotifyId": "5aVZ7K10idjfbD5QYfEKme",
    "titulo": "Carvão - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 115,
    "spotifyId": "3z6XxH5eIAxB0UIMS2lIQf",
    "titulo": "Você Não Sabe - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 116,
    "spotifyId": "6OXI5dQVXK3qOX8SCitpIi",
    "titulo": "Alguém Me Disse - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 117,
    "spotifyId": "0ZiBFrxM4bodigck8RzXZ4",
    "titulo": "As Telas e Elas - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 118,
    "spotifyId": "1cIp7C4qNh3n63Qwo4qRfa",
    "titulo": "Rai das Cores - Ao Vivo"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 119,
    "spotifyId": "5mNtIExGXAg7ryEj5zMb7Y",
    "titulo": "Eu Sei Que Vou Te Amar"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina",
      "Guinga"
    ],
    "index": 120,
    "spotifyId": "10NU1eBKjcodTBH9QaERes",
    "titulo": "Leveza de Valsa (feat. Guinga) - Bonus Track"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 121,
    "spotifyId": "7H4ZSzKCFLxf508utxV5OU",
    "titulo": "Luz Acesa - Bonus Track"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina",
      "Chiara Civello"
    ],
    "index": 122,
    "spotifyId": "420fZtEgrwK5BejvcG7kqi",
    "titulo": "Un Sueño Bajo el Agua (feat. Chiara Civello)"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 123,
    "spotifyId": "2KbkHKthIrnQ7XxdTGKFps",
    "titulo": "Canção Pra Ti"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 124,
    "spotifyId": "5m1tkcHHeeYCrP6tR3HhVr",
    "titulo": "Bang Bang 2"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 125,
    "spotifyId": "0rRPs1tIy9jNcVOh2mYbxj",
    "titulo": "Mais Forte"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 126,
    "spotifyId": "01R29BmIU7w18l7U2W5DcC",
    "titulo": "Pelo iPhone"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina",
      "Chico Buarque"
    ],
    "index": 127,
    "spotifyId": "0KUQNprkDtwHrkQ286y9Do",
    "titulo": "Resposta da Rita (feat. Chico Buarque)"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 128,
    "spotifyId": "6S2H0C4Isna0gjUSl6OUIz",
    "titulo": "Combustível"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 129,
    "spotifyId": "2LkVAtezMZW9h1u0JnwXX3",
    "titulo": "Libido"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 130,
    "spotifyId": "5eDlcCGJV6TfOedQEqJffP",
    "titulo": "Esperta"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 131,
    "spotifyId": "30AGoYyi07zX5B3eQnk0rl",
    "titulo": "Pole Dance"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 132,
    "spotifyId": "4dmCdzIu5YKmv17RWflEna",
    "titulo": "Heroína e Vilã - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 133,
    "spotifyId": "22aWX1IFLiVdrOy9HdInsJ",
    "titulo": "8 Estórias - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 134,
    "spotifyId": "26mwMGDbUiSXSbd6shD851",
    "titulo": "Torpedo - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 135,
    "spotifyId": "65GmViOSKcP7jK0wNqRs8r",
    "titulo": "Tá Rindo, é? - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 136,
    "spotifyId": "6TldODHKdC8omIig5giYEd",
    "titulo": "Ruas de Outono - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 137,
    "spotifyId": "3yhoByY1s5jtNFthSTJ1o9",
    "titulo": "Mais Que a Mim - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 138,
    "spotifyId": "4BXKKcyyNxHNQ9vsYNtTz4",
    "titulo": "Homens e Mulheres - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 139,
    "spotifyId": "4fqGSfsFdSVhB31EUVZcSf",
    "titulo": "Eu Que Não Sei Quase Nada do Mar - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 140,
    "spotifyId": "529ZHQL2mmbie3LokGYI3q",
    "titulo": "Milhares de Sambas - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina",
      "Luiz Melodia"
    ],
    "index": 141,
    "spotifyId": "7zwsfvjz48mGsxRBivx4lS",
    "titulo": "Cabide (feat. Luiz Melodia) - Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 142,
    "spotifyId": "401q6bNupTUDX6Gk0Vcfmd",
    "titulo": "Vai - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 143,
    "spotifyId": "4NySkcWrZIqu0SmXfrnSD5",
    "titulo": "Um Edifício no Meio do Mundo - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 144,
    "spotifyId": "3Yx26WDHeIePDco2LZxiR0",
    "titulo": "Cabide - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 145,
    "spotifyId": "68xSsmlsezNpQxONQYGG2F",
    "titulo": "Milhares de Sambas - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 146,
    "spotifyId": "5oX4zkLXrYHxjmm1Jz3f5W",
    "titulo": "Aqui / Quem de Nós Dois (La Mia Storia Tra Le Dita) - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 147,
    "spotifyId": "5PK6ziOapmPBltvfhufPPS",
    "titulo": "Ruas de Outono - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 148,
    "spotifyId": "1gBvmCU36IFOCsUzw6tsJX",
    "titulo": "É Isso Aí (The Blower's Daughter) - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 149,
    "spotifyId": "49WnuMB2PTYYDkxHoopTmA",
    "titulo": "O Cristo de Madeira - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 150,
    "spotifyId": "6PhEnGasrWNQJybpPGHscP",
    "titulo": "Nada Te Faltará - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 151,
    "spotifyId": "4d1U64GigNyE1K2mK0WKaB",
    "titulo": "Eu Que Não Sei Quase Nada do Mar - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 152,
    "spotifyId": "1v5b1DxgRV7AWJaBNSwlDS",
    "titulo": "Carvão - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 153,
    "spotifyId": "25D6SLOHQTvUB89Q281nFC",
    "titulo": "Tolerância - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 154,
    "spotifyId": "6rXzGAjv4837NlRZmU5znr",
    "titulo": "Rosas - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 155,
    "spotifyId": "75Xw6xENMmTqns8cTGEZtQ",
    "titulo": "Eu Comi a Madona - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 156,
    "spotifyId": "2S8af9XtRC3tt7s3W118ln",
    "titulo": "Cantinho / Fever / Eu Sou Melhor Que Você - Multishow Ao Vivo"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 157,
    "spotifyId": "2IS5g3Gz9JconlR4YTujM5",
    "titulo": "O Que é Que Há?"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 158,
    "spotifyId": "6uiF6UbsVRaWMobeNVe2fo",
    "titulo": "Com Vista Para Amar"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 159,
    "spotifyId": "3rj5bbWPDGr8l4aQa8ovmN",
    "titulo": "Outra Vez Você"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 160,
    "spotifyId": "2LlOM9pVQTEBt9oWgHhmbZ",
    "titulo": "Dias Roubados"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 161,
    "spotifyId": "4JdvxymmL5A6fgpyEgkfZR",
    "titulo": "Tudo e Mais Um Pouco"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 162,
    "spotifyId": "5THyr4nuCxZhHl8Y5WoXsj",
    "titulo": "Canção Antiga"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 163,
    "spotifyId": "0RzxQkG8PGDLTjqPe6yWjg",
    "titulo": "1296 Mulheres"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina",
      "Elza Soares"
    ],
    "index": 164,
    "spotifyId": "5i8p4Oar6tAWEWyOaAtUEJ",
    "titulo": "Da Vila Vintém Ao Fim do Mundo (feat. Elza Soares)"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 165,
    "spotifyId": "15wTuFD6owZUvRNZ1CyBdg",
    "titulo": "O Tempo se Transforma em Memória"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 166,
    "spotifyId": "3ovmrHRDBkBdlkFgyyZQSl",
    "titulo": "Fogueira em Alto Mar"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 167,
    "spotifyId": "1cx7W5PShF4nWGQ5T9TEID",
    "titulo": "Não Tem no Mapa"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 168,
    "spotifyId": "16wbN9W88hZ9d3UjzImrMm",
    "titulo": "Traição"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 169,
    "spotifyId": "4UQTCxgafMnqHmJr5IXDvE",
    "titulo": "Torpedo"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 170,
    "spotifyId": "0Jl8dk4Oy2MNjlGiwlGXnS",
    "titulo": "Resta"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 171,
    "spotifyId": "1q3DtCcVHzuk0xiU7MHqGS",
    "titulo": "8 Estórias"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 172,
    "spotifyId": "10uka1Nhn0hiFuJo8dNl2y",
    "titulo": "Era"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina",
      "John Legend"
    ],
    "index": 173,
    "spotifyId": "3GoXuabQLaRjOAetIsPsmw",
    "titulo": "Entreolhares (The Way You're Looking at Me) (feat. John Legend)"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 174,
    "spotifyId": "4duJ74llRlWvC0c8pZuTYs",
    "titulo": "Tá Rindo, é?"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 175,
    "spotifyId": "7a97bVgkbbENI6bLgi5VmW",
    "titulo": "Dentro"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 176,
    "spotifyId": "1CcehQY9msX190msXyBIxo",
    "titulo": "10 Minutos (Dimmi Perché)"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 177,
    "spotifyId": "3WsvNrgk9gA0RkNF6DQ5JU",
    "titulo": "Malandragem - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 178,
    "spotifyId": "77FC33UKCnwHjESX3BC07u",
    "titulo": "Gatas Extraordinárias - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 179,
    "spotifyId": "6t0XQiOcqlv8xGATIXkt5n",
    "titulo": "Relicário - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 180,
    "spotifyId": "6ODo3hK287KbafOrrOYZPM",
    "titulo": "O Segundo Sol - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 181,
    "spotifyId": "1wpgey8upO8HoGdFbEzGJd",
    "titulo": "All Star - Ao Vivo"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 182,
    "spotifyId": "7v6ELTg9rth4P4ZJWZDeoh",
    "titulo": "Canção Antiga"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 183,
    "spotifyId": "4PUbenUmRsBHzXX0uRG7er",
    "titulo": "1296 Mulheres"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina",
      "Elza Soares"
    ],
    "index": 184,
    "spotifyId": "3GhGWBElw2DMPvcOyMxmJt",
    "titulo": "Da Vila Vintém Ao Fim do Mundo (feat. Elza Soares)"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 185,
    "spotifyId": "0BumkbMOjaGROaVCR2I4An",
    "titulo": "O Tempo se Transforma em Memória"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 186,
    "spotifyId": "1bNt0KCVOyAB5e6jRiVSHX",
    "titulo": "Fogueira em Alto Mar"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 187,
    "spotifyId": "35sFWnnQpeFQMq24urNxbQ",
    "titulo": "Não Tem no Mapa"
  },
  {
    "album": "Malandragem (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 188,
    "spotifyId": "2AnFF6VJTemksxNOuqrtV4",
    "titulo": "Malandragem - Ao Vivo"
  },
  {
    "album": "Mais uma Vez (Nós Dois)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 189,
    "spotifyId": "5BmGmbhJSCvroT36nj1J5B",
    "titulo": "Mais uma Vez (Nós Dois)"
  },
  {
    "album": "Problemas [(Bonus Track) [Ao Vivo]]",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 190,
    "spotifyId": "60FqAhJ7p2hcXhOR1zbDUy",
    "titulo": "Problemas - (Bonus Track) [Ao Vivo]"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 3",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 191,
    "spotifyId": "4OBSqOoBaEp2bVyuHNyC8v",
    "titulo": "Com Vista Para Amar"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 3",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 192,
    "spotifyId": "3tUztDyMQvNSlY0eH7cLFv",
    "titulo": "O Que é Que Há?"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 193,
    "spotifyId": "5kknr0Tyal1aGQGZokoDxv",
    "titulo": "Notícias Populares"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 194,
    "spotifyId": "3z4a3HzSy6QcbkjkHaa63u",
    "titulo": "Chevette"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 195,
    "spotifyId": "7w50YeX7TTDcnsYeWcvtQd",
    "titulo": "1.100,00 (Nega Marrenta)"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 196,
    "spotifyId": "3MMz5ZuXJb9k1ln7CG9s5Q",
    "titulo": "Eu Comi a Madona"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 197,
    "spotifyId": "7AGvAdQZfhSLB6RVZSaiRh",
    "titulo": "O Cristo De Madeira"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 198,
    "spotifyId": "1lZVACRnco8p8k1X1iSVgD",
    "titulo": "Vai"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 199,
    "spotifyId": "3v0pC91WwN2rT0sVspHH9t",
    "titulo": "Um Edifício no Meio do Mundo"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 200,
    "spotifyId": "2y5puTU1gNc16fa8MFsvH8",
    "titulo": "Rosas"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 201,
    "spotifyId": "1kTfefAUqW9cpToLN8RMbp",
    "titulo": "Aqui"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 202,
    "spotifyId": "40zXnfwbOjkpc4Lm7wtnMG",
    "titulo": "Ruas de Outono"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 203,
    "spotifyId": "5fhwz5uikAVUGu7euKowlW",
    "titulo": "Tolerância"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 204,
    "spotifyId": "5amijKz6oO8jpxjBEEorsl",
    "titulo": "Nada Te Faltará"
  },
  {
    "album": "Noite Preta Ao Vivo",
    "artistas": [
      "Preta Gil",
      "Ana Carolina"
    ],
    "index": 205,
    "spotifyId": "5338vnPnf5fzJDyiWulX9Y",
    "titulo": "Sinais de Fogo - Ao Vivo"
  },
  {
    "album": "Canzoni",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "index": 206,
    "spotifyId": "50XDXUhJ91S6cQKblDyxTY",
    "titulo": "E penso a te"
  },
  {
    "album": "Chiara Civello 7752",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 207,
    "spotifyId": "3eq4ncW2xC74TteeoSZ7Ec",
    "titulo": "Resta"
  },
  {
    "album": "Som (Ruído Branco)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 208,
    "spotifyId": "6TneeBKCVGAWtYYl6uggvP",
    "titulo": "A Pele"
  },
  {
    "album": "2 Bicudos (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 209,
    "spotifyId": "6gguCVwEt1SqXWfEMZL9Gg",
    "titulo": "2 Bicudos - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 210,
    "spotifyId": "1dd22aQgBpJYagghwioZAD",
    "titulo": "Todas As Mulheres do Mundo - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 211,
    "spotifyId": "4k7oNz2BFbHFMuGjXfs6o7",
    "titulo": "E.C.T. - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 212,
    "spotifyId": "1o0bCEQawLfZBTHuP6a88M",
    "titulo": "Maluca - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 213,
    "spotifyId": "02AV2ZWLY5Ueex9VU2gtks",
    "titulo": "Partido Alto - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 214,
    "spotifyId": "1atJzMPAgiVdd5AqvC5GCa",
    "titulo": "Milagreiro - Ao Vivo"
  },
  {
    "album": "Ainda Já (Sua)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 215,
    "spotifyId": "67OqoQE4bMypl1Xe1WzQmE",
    "titulo": "Ainda Já (Sua)"
  },
  {
    "index": 216,
    "spotifyId": "ana-local-namoradinha-um-amigo-meu",
    "titulo": "Namoradinha de Um Amigo Meu",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "album": ""
  }
];

// Playlist exclusiva do modo Ludmilla:
// https://open.spotify.com/playlist/44xYNTfmisUBtQ1oYuEWYe
const PLAYLIST_LUDMILLA = [
  {
    "album": "Numanice #2",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 1,
    "spotifyId": "1FGRA5pMtBqJLNAaSBia2x",
    "titulo": "Maldivas"
  },
  {
    "album": "A danada sou eu",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 2,
    "spotifyId": "25SL3ZSbEGtu4oU14xllMQ",
    "titulo": "Bom"
  },
  {
    "album": "Verdinha",
    "artistas": [
      "LUDMILLA",
      "Topo La Maskara",
      "Walshy Fire"
    ],
    "index": 3,
    "spotifyId": "2RMOwSvOGQyy985Vx4VSGQ",
    "titulo": "Verdinha"
  },
  {
    "album": "Socadona (feat. Mr. Vegas)",
    "artistas": [
      "LUDMILLA",
      "Mariah Angeliq",
      "Topo La Maskara",
      "Mr. Vegas"
    ],
    "index": 4,
    "spotifyId": "5jYEiTNR3FQXFouTX7Ju0N",
    "titulo": "Socadona"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Péricles"
    ],
    "index": 5,
    "spotifyId": "5Uq1ta57YcmShqMyPmVyyO",
    "titulo": "Sinais de fogo - Ao Vivo"
  },
  {
    "album": "VILÃ",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 6,
    "spotifyId": "2D1rmVTeaZrr5Ipow29t4b",
    "titulo": "Sintomas de Prazer"
  },
  {
    "album": "Hoje",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 7,
    "spotifyId": "2rC41weP3q2jhM0PDYOZGo",
    "titulo": "Sem querer"
  },
  {
    "album": "Macetando",
    "artistas": [
      "Ivete Sangalo",
      "LUDMILLA"
    ],
    "index": 8,
    "spotifyId": "6eJUG282cUKuIoa72sEsqO",
    "titulo": "Macetando"
  },
  {
    "album": "Hoje",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 9,
    "spotifyId": "321oxaH6WpQNyDToySTkRF",
    "titulo": "Te ensinei certin"
  },
  {
    "album": "A danada sou eu",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 10,
    "spotifyId": "1Tn0msQvQMbD6woO9VnEG3",
    "titulo": "Sou eu"
  },
  {
    "album": "Hoje",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 11,
    "spotifyId": "3WLAcpFwRmC98f5UGRXAkI",
    "titulo": "Hoje"
  },
  {
    "album": "Numanice Lud Session - Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Gloria Groove"
    ],
    "index": 12,
    "spotifyId": "3hXCANK2ys6D2HZE3kuDfz",
    "titulo": "Numanice Lud Session - Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Sorriso Maroto"
    ],
    "index": 13,
    "spotifyId": "19IIiuViFv6TsPDXV2ZWB3",
    "titulo": "Não É Por Maldade - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 14,
    "spotifyId": "3B7aR5W9WNzo9FeIsdGxI1",
    "titulo": "Ela Não - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Tá Na Mente"
    ],
    "index": 15,
    "spotifyId": "1Y7ShD0kGmHPwJTWOuBlHK",
    "titulo": "Dorme com Deus / Fica - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 16,
    "spotifyId": "7gGCGzNFmW0xjhA8dA3Y5w",
    "titulo": "Mande Um Sinal / Sinais - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 17,
    "spotifyId": "67RqkhyO4AI7RbgjTPNQF7",
    "titulo": "Eu Te Uso e Sumo / Não Seria Justo / Nem Pensar - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 18,
    "spotifyId": "6NHjL6DkSsaGjFz2KJN1q2",
    "titulo": "Cheiro Bom do Seu Cabelo - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Delacruz"
    ],
    "index": 19,
    "spotifyId": "58RnbwfvEYB8VS5JHrUwc8",
    "titulo": "Cigana - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 20,
    "spotifyId": "7M1YydD0jJ9teSC62fhfY9",
    "titulo": "Um Pôr do Sol na Praia - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Alcione"
    ],
    "index": 21,
    "spotifyId": "2hy9PyCleGC4HRe5MsPwfF",
    "titulo": "Faz uma Loucura por mim / Você me vira a cabeça - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Belo"
    ],
    "index": 22,
    "spotifyId": "6Q3JFwQ0EoAO7gosrWI3na",
    "titulo": "Não vá me enganar - Ao Vivo"
  },
  {
    "album": "Maliciosa (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 23,
    "spotifyId": "3vCH7bgO37Cx4dOIUlX9sv",
    "titulo": "Maliciosa - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 24,
    "spotifyId": "1CehxijvhSszrBS3FuCxBw",
    "titulo": "Desse Jeito é Ruim Pra Mim / Perfume / Antes de Dizer Adeus - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Thiaguinho"
    ],
    "index": 25,
    "spotifyId": "7vzfaxzAl0YNLBp2xA7T0b",
    "titulo": "Amor Difícil - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 26,
    "spotifyId": "0bkGRThWulixJ3hBPr5nlH",
    "titulo": "Amor difícil - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Orochi"
    ],
    "index": 27,
    "spotifyId": "5NnXWsezmRvC5oxhguptYl",
    "titulo": "I Love You Too - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 28,
    "spotifyId": "4J6Mo4lgXcVirTQzOVHQyx",
    "titulo": "Meu desapego - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 29,
    "spotifyId": "07lEHXZYuhl0KpmXOYvwpc",
    "titulo": "Eu estive Aqui - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 30,
    "spotifyId": "4KjHcvzmFeYo2ebthgKoJk",
    "titulo": "Por causa de você / Baby / 1 minuto - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Di Propósito"
    ],
    "index": 31,
    "spotifyId": "1zl7WDDCPttJSLWEhFJG3r",
    "titulo": "Te Amar Demais / Best Part - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Júlio Sereno"
    ],
    "index": 32,
    "spotifyId": "6zR192lueVX45AwK5PLB0M",
    "titulo": "Teu Segredo - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 33,
    "spotifyId": "6c2GVdk6HbWH3u6Cb5jDtK",
    "titulo": "212 - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Belo"
    ],
    "index": 34,
    "spotifyId": "6Eu4upXqRZxGTJref5U5c4",
    "titulo": "Perfume - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 35,
    "spotifyId": "7r1VxuU92S2GKWvEX6ivqF",
    "titulo": "Você Não Sabe o Que é Amor - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 36,
    "spotifyId": "7D9sdH2LEs3To9nMZnLXUt",
    "titulo": "Pique Djavan - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Grupo Menos É Mais"
    ],
    "index": 37,
    "spotifyId": "1J8rfA9BdhlpzNSKKePf3U",
    "titulo": "Destilado - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 38,
    "spotifyId": "4BB3adxRhL1lTK5WpB1eo1",
    "titulo": "Se Não Chorar com Pagode - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Vitinho"
    ],
    "index": 39,
    "spotifyId": "6gu8xo31Bsg22KhwTLJsmJ",
    "titulo": "1% - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 40,
    "spotifyId": "6U3kssAL4oPYbkYFbkFDJp",
    "titulo": "A Preta Venceu - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Mari Fernandez"
    ],
    "index": 41,
    "spotifyId": "2IGh6DnMiX408xwoJP9Lmb",
    "titulo": "Falta de Mim - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 42,
    "spotifyId": "55nT7v7CtFduUP7A1CEZvA",
    "titulo": "Baile Charme - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Caio Luccas"
    ],
    "index": 43,
    "spotifyId": "7zD6UkCZatI0QhTr3Q9c59",
    "titulo": "Saudade da Gente - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 44,
    "spotifyId": "0b9Hc2wjFYkH0qSpNQWXs7",
    "titulo": "Diz pra Mim / Preciso Desabafar - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Belo"
    ],
    "index": 45,
    "spotifyId": "0raxK8ujnzkC2Ra4Np24n5",
    "titulo": "26 de Dezembro - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 46,
    "spotifyId": "2EjNAvGjxPi6qY5FZfF7UJ",
    "titulo": "Era Tão Bom (So Sick) - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Veigh"
    ],
    "index": 47,
    "spotifyId": "28uWqEWQVNTJ7Y3E1cSVAp",
    "titulo": "Sim ou Não - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 48,
    "spotifyId": "2L28P73JhKFGhprPlCseiR",
    "titulo": "Espelho - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Carol Biazin"
    ],
    "index": 49,
    "spotifyId": "3iGwvlMJT1GAH9WcRKHwMi",
    "titulo": "Raio X - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 50,
    "spotifyId": "0B0OMXrlNj44fJ5PcdjLNG",
    "titulo": "Clichê / Cedo ou Tarde - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 51,
    "spotifyId": "5nikCkO9Yba0o4VktrvUEo",
    "titulo": "Ela - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Delacruz"
    ],
    "index": 52,
    "spotifyId": "3Z04c8GQ4li07j3bEi3LNQ",
    "titulo": "Maria Joana (Remix) - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 53,
    "spotifyId": "3ha8agv3lnJeRstkBVVcgP",
    "titulo": "Cabelo Cacheado - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 54,
    "spotifyId": "773yaWXesaznWwZBHY77Cq",
    "titulo": "Meu Homem é Seu Homem - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Vou pro Sereno"
    ],
    "index": 55,
    "spotifyId": "19u7ucz8tazDZL1daf5y23",
    "titulo": "Tô de Boa - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 56,
    "spotifyId": "3ojDttdAfpz1UhnFVLSG3s",
    "titulo": "Fora de Si - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Gabby Moura"
    ],
    "index": 57,
    "spotifyId": "46WAJyMF8mNDcn9CcsTcmT",
    "titulo": "Me Arrepender - Ao Vivo"
  },
  {
    "album": "Piña Colada",
    "artistas": [
      "LUDMILLA",
      "Ryan Castro"
    ],
    "index": 58,
    "spotifyId": "07n2nBfbBGVpVLcbElqTOy",
    "titulo": "Piña Colada"
  },
  {
    "album": "Rainha da Favela",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 59,
    "spotifyId": "3vu864xi5Xis9VfOsJpmXu",
    "titulo": "Rainha da Favela"
  },
  {
    "album": "Fala Mal de Mim",
    "artistas": [
      "Mc Beyonce"
    ],
    "index": 60,
    "spotifyId": "217ovfMlicUkrnZsxtjPh2",
    "titulo": "Fala Mal de Mim"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 61,
    "spotifyId": "3qS3bQgpoJp3lLaa900gsu",
    "titulo": "Maldivas - Ao Vivo"
  },
  {
    "album": "Lud Session #4: Morrer de Viver / Saudade Daquilo / Tô Querendo Mais / Sem Filtro / Embrasa",
    "artistas": [
      "LUDMILLA",
      "IZA"
    ],
    "index": 62,
    "spotifyId": "3PXJxUzZ6dn9ykFBFMmOnL",
    "titulo": "Lud Session #4: Morrer de Viver / Saudade Daquilo / Tô Querendo Mais / Sem Filtro / Embrasa"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 63,
    "spotifyId": "7IaBxzOQ3uUvztZI4bposC",
    "titulo": "Mini Saia - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Prateado"
    ],
    "index": 64,
    "spotifyId": "2b5fnlLlr7R612vWpCEIcT",
    "titulo": "Nunca mais sofrer / Intriga da Oposição (feat. Prateado) - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Marília Mendonça"
    ],
    "index": 65,
    "spotifyId": "3EM71GPnUGJ75uDhkH77pq",
    "titulo": "Insônia - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 66,
    "spotifyId": "5lALwDKmNYMiLXbaNkSAuR",
    "titulo": "Quem é Você - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 67,
    "spotifyId": "3dUt9ITdKYKP7dsjVoRrWM",
    "titulo": "Vai e Volta - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 68,
    "spotifyId": "6LgkG3CQKp6qejNMpOatMj",
    "titulo": "Sintoma de Amor / Depois do Amor / Agenda - Ao vivo"
  },
  {
    "album": "Vem amor",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 69,
    "spotifyId": "5rRi4RW8F99U24EAS2Cdte",
    "titulo": "Vem amor"
  },
  {
    "album": "Lud Session #2: Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano",
    "artistas": [
      "LUDMILLA",
      "Gloria Groove"
    ],
    "index": 70,
    "spotifyId": "7HYdckQd1guaSYVwMQ3SFL",
    "titulo": "Lud Session #2: Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano"
  },
  {
    "album": "Hello mundo (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 71,
    "spotifyId": "4jQmLCQingMe51sGRrsqRg",
    "titulo": "Duas doses de saudade / Nunca me verá chorar / Não quero mais - Ao vivo"
  }
];

function criarFaixa(faixa, { exclusiva = false, artistaModo = null } = {}) {
  return {
    titulo: faixa.titulo,
    artistas: faixa.artistas,
    artista: faixa.artistas.join(", "),
    album: faixa.album,
    ano: "",
    busca: `${faixa.titulo} ${faixa.artistas[0] || ""}`.trim(),
    spotifyId: faixa.spotifyId,
    playlistIndex: faixa.index,
    exclusiva,
    artistaModo,
    audioLocal: "",
    capaLocal: "",
  };
}

const MUSICAS_ALEATORIAS = PLAYLIST_SPOTIFY.map((faixa) => criarFaixa(faixa));
const MUSICAS = [
  ...MUSICAS_ALEATORIAS,
  ...PLAYLIST_ANA_CAROLINA.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Ana Carolina" }),
  ),
  ...PLAYLIST_DESCENDENTES.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Descendentes" }),
  ),
  ...PLAYLIST_LUDMILLA.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Ludmilla" }),
  ),
];

function chaveUnicaFaixa(faixa) {
  if (faixa.spotifyId) return `spotify:${faixa.spotifyId}`;
  return `titulo:${normalizar(faixa.titulo)}:${normalizar(faixa.artista)}`;
}

function indicesDoArtista(artista) {
  const artistaNormalizado = normalizar(artista);
  const vistos = new Set();
  return MUSICAS.reduce((indices, faixa, index) => {
    const pertenceAoModo =
      normalizar(faixa.artistaModo || "") === artistaNormalizado ||
      (!faixa.exclusiva &&
        faixa.artistas.some((nome) => normalizar(nome) === artistaNormalizado));
    const chave = chaveUnicaFaixa(faixa);
    if (pertenceAoModo && !vistos.has(chave)) {
      vistos.add(chave);
      indices.push(index);
    }
    return indices;
  }, []);
}

const ARTISTAS_FIXOS = ["Ana Carolina", "Descendentes", "Ludmilla"];
const mapaArtistas = new Map(ARTISTAS_FIXOS.map((artista) => [normalizar(artista), artista]));
MUSICAS_ALEATORIAS.flatMap((faixa) => faixa.artistas).forEach((artista) => {
  const chave = normalizar(artista);
  if (!mapaArtistas.has(chave)) mapaArtistas.set(chave, artista);
});
const ARTISTAS = [...mapaArtistas.values()]
  .filter((artista) => indicesDoArtista(artista).length >= 5)
  .sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }));

const ESTAGIOS = [
  { segundos: 0.5, tipo: "audio", rotulo: "0,5 segundo" },
  { segundos: 1, tipo: "audio", rotulo: "1 segundo" },
  { segundos: 2, tipo: "audio", rotulo: "2 segundos" },
  { segundos: 3, tipo: "audio", rotulo: "3 segundos" },
  { segundos: 4, tipo: "audio", rotulo: "4 segundos" },
  { segundos: 5, tipo: "audio", rotulo: "5 segundos" },
  { segundos: 5, tipo: "artista", rotulo: "artista" },
  { segundos: 5, tipo: "inicial", rotulo: "primeira letra" },
];

const INICIO_TRECHO = 0;
const STORAGE_KEY = "ouvido-relampago:winstreak";
const START_DURATION_STORAGE_KEY = "ouvido-relampago:duracao-inicial";
const DURACAO_INICIAL_SALVA = lerDuracaoInicial();

const refs = {
  audio: document.querySelector("#audioPlayer"),
  audioTime: document.querySelector("#audioTime"),
  artistSelect: document.querySelector("#artistSelect"),
  artistTrackCount: document.querySelector("#artistTrackCount"),
  catalogStatus: document.querySelector("#catalogStatus"),
  challengeDuration: document.querySelector("#challengeDuration"),
  clipLabel: document.querySelector("#clipLabel"),
  coverFrame: document.querySelector("#coverFrame"),
  coverImage: document.querySelector("#coverImage"),
  durationFill: document.querySelector("#durationFill"),
  durationProgress: document.querySelector("#durationProgress"),
  fileNumber: document.querySelector("#fileNumber"),
  filePreview: document.querySelector("#filePreview"),
  fileState: document.querySelector("#fileState"),
  formFeedback: document.querySelector("#formFeedback"),
  giveUpButton: document.querySelector("#giveUpButton"),
  guessForm: document.querySelector("#guessForm"),
  guessInput: document.querySelector("#guessInput"),
  heardMarker: document.querySelector("#heardMarker"),
  hintButton: document.querySelector("#hintButton"),
  hintCount: document.querySelector("#hintCount"),
  hintItems: [...document.querySelectorAll("#hintTrack li")],
  metaAlbum: document.querySelector("#metaAlbum"),
  metaArtist: document.querySelector("#metaArtist"),
  metaTitle: document.querySelector("#metaTitle"),
  metaYear: document.querySelector("#metaYear"),
  modeSummary: document.querySelector("#modeSummary"),
  nextButton: document.querySelector("#nextButton"),
  playButton: document.querySelector("#playButton"),
  playDuration: document.querySelector("#playDuration"),
  previewButton: document.querySelector("#previewButton"),
  resultAlbum: document.querySelector("#resultAlbum"),
  resultArtist: document.querySelector("#resultArtist"),
  resultCover: document.querySelector("#resultCover"),
  resultDialog: document.querySelector("#resultDialog"),
  resultKicker: document.querySelector("#resultKicker"),
  resultMessage: document.querySelector("#resultMessage"),
  resultSong: document.querySelector("#resultSong"),
  resultTitle: document.querySelector("#resultTitle"),
  revealedHints: document.querySelector("#revealedHints"),
  randomTab: document.querySelector("#randomTab"),
  roundCounter: document.querySelector("#roundCounter"),
  songSuggestions: document.querySelector("#songSuggestions"),
  specificControls: document.querySelector("#specificControls"),
  specificTab: document.querySelector("#specificTab"),
  startHalfButton: document.querySelector("#startHalfButton"),
  startOneButton: document.querySelector("#startOneButton"),
  streakValue: document.querySelector("#streakValue"),
  submitButton: document.querySelector("#submitButton"),
  toast: document.querySelector("#toast"),
  waveform: document.querySelector("#waveform"),
};

const state = {
  ordem: embaralhar(
    MUSICAS.reduce((indices, faixa, index) => {
      if (!faixa.exclusiva) indices.push(index);
      return indices;
    }, []),
  ),
  posicao: 0,
  modo: "random",
  artistaSelecionado: ARTISTAS.includes("Ana Carolina") ? "Ana Carolina" : ARTISTAS[0],
  duracaoInicial: DURACAO_INICIAL_SALVA,
  estagio: DURACAO_INICIAL_SALVA === 1 ? 1 : 0,
  faixa: null,
  resolvida: null,
  audioPronto: false,
  rodadaEncerrada: false,
  tocandoTrecho: false,
  tocandoPrevia: false,
  timerTrecho: null,
  timerToast: null,
  pedidoAtual: 0,
  streak: lerStreak(),
  cache: new Map(),
  palpitesErrados: new Set(),
  sugestoesAtuais: [],
  sugestaoAtiva: 0,
};

function embaralhar(itens) {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function indicesDoModo() {
  if (state.modo === "specific") return indicesDoArtista(state.artistaSelecionado);
  return MUSICAS.reduce((indices, faixa, index) => {
    if (!faixa.exclusiva) indices.push(index);
    return indices;
  }, []);
}

function normalizar(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\([^)]*\)|\[[^\]]*\]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizarTituloDistinto(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escaparXml(texto = "") {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function coresDaFaixa(faixa) {
  const texto = `${faixa.titulo}|${faixa.artista}`;
  let hash = 0;
  for (let i = 0; i < texto.length; i += 1) hash = (hash * 31 + texto.charCodeAt(i)) | 0;
  const matiz = Math.abs(hash) % 360;
  return [`hsl(${matiz} 48% 13%)`, `hsl(${(matiz + 54) % 360} 68% 43%)`];
}

function criarCapaFallback(faixa) {
  const iniciais = faixa.titulo
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
  const titulo = escaparXml(faixa.titulo.toUpperCase());
  const artista = escaparXml(faixa.artista.toUpperCase());
  const [corA, corB] = coresDaFaixa(faixa);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${faixa.corA || corA}"/>
          <stop offset="1" stop-color="${faixa.corB || corB}"/>
        </linearGradient>
        <pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="32" stroke="white" stroke-opacity=".055" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <rect width="600" height="600" fill="url(#p)"/>
      <circle cx="300" cy="270" r="165" fill="none" stroke="white" stroke-opacity=".16" stroke-width="2"/>
      <circle cx="300" cy="270" r="120" fill="none" stroke="white" stroke-opacity=".11" stroke-width="2"/>
      <text x="300" y="310" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="118" font-weight="800">${iniciais}</text>
      <text x="42" y="522" fill="white" font-family="Arial, sans-serif" font-size="22" font-weight="700">${titulo.slice(0, 34)}</text>
      <text x="42" y="557" fill="white" fill-opacity=".68" font-family="Arial, sans-serif" font-size="16" letter-spacing="3">${artista.slice(0, 42)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function lerStreak() {
  try {
    const valor = Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    return Number.isFinite(valor) && valor > 0 ? valor : 0;
  } catch {
    return 0;
  }
}

function salvarStreak() {
  try {
    localStorage.setItem(STORAGE_KEY, String(state.streak));
  } catch {
    // O jogo continua normalmente quando o navegador bloqueia o armazenamento.
  }
  refs.streakValue.textContent = String(state.streak);
}

function lerDuracaoInicial() {
  try {
    return localStorage.getItem(START_DURATION_STORAGE_KEY) === "1" ? 1 : 0.5;
  } catch {
    return 0.5;
  }
}

function salvarDuracaoInicial() {
  try {
    localStorage.setItem(START_DURATION_STORAGE_KEY, String(state.duracaoInicial));
  } catch {
    // A escolha ainda vale durante a sessão quando o armazenamento está bloqueado.
  }
}

function indiceEstagioInicial() {
  return state.duracaoInicial === 1 ? 1 : 0;
}

function atualizarControleDuracao() {
  const comecaEmUm = state.duracaoInicial === 1;
  refs.startHalfButton.classList.toggle("is-active", !comecaEmUm);
  refs.startHalfButton.setAttribute("aria-pressed", String(!comecaEmUm));
  refs.startOneButton.classList.toggle("is-active", comecaEmUm);
  refs.startOneButton.setAttribute("aria-pressed", String(comecaEmUm));
}

function definirDuracaoInicial(valor) {
  const novaDuracao = Number(valor) === 1 ? 1 : 0.5;
  if (novaDuracao === state.duracaoInicial) return;
  state.duracaoInicial = novaDuracao;
  salvarDuracaoInicial();
  atualizarControleDuracao();
  mostrarToast(`Padrão alterado para ${formatarDuracaoFrase(novaDuracao)}.`);

  if (state.faixa && !state.rodadaEncerrada) {
    pararAudio();
    void iniciarRodada();
  }
}

function formatarSegundos(valor) {
  return Number.isInteger(valor) ? `${valor} S` : `${String(valor).replace(".", ",")} S`;
}

function formatarDuracaoFrase(valor) {
  if (valor === 0.5) return "0,5 segundo";
  if (valor === 1) return "1 segundo";
  return `${valor} segundos`;
}

function gerarWaveform() {
  refs.waveform.replaceChildren();
  const total = 58;
  for (let i = 0; i < total; i += 1) {
    const barra = document.createElement("span");
    const onda = Math.sin(i * 1.73) * 14 + Math.cos(i * 0.61) * 10;
    const altura = Math.max(8, Math.min(68, 31 + onda + ((i * 17) % 13)));
    barra.style.height = `${altura}px`;
    barra.style.setProperty("--bar-index", String(i));
    refs.waveform.append(barra);
  }
}

function faixasAtivas() {
  return indicesDoModo().map((index) => MUSICAS[index]);
}

function obterSugestoes(termo) {
  const busca = normalizar(termo);
  if (!busca) return [];
  const vistas = new Set();

  return faixasAtivas()
    .filter((faixa) => !state.palpitesErrados.has(normalizarTituloDistinto(faixa.titulo)))
    .map((faixa) => {
      const titulo = normalizar(faixa.titulo);
      const artista = normalizar(faixa.artista);
      let pontos = Number.POSITIVE_INFINITY;
      if (titulo === busca) pontos = 0;
      else if (titulo.startsWith(busca)) pontos = 1;
      else if (titulo.split(" ").some((palavra) => palavra.startsWith(busca))) pontos = 2;
      else if (titulo.includes(busca)) pontos = 3;
      else if (artista.includes(busca)) pontos = 4;
      return { faixa, pontos };
    })
    .filter(({ faixa, pontos }) => {
      const chave = normalizarTituloDistinto(faixa.titulo);
      if (!Number.isFinite(pontos) || vistas.has(chave)) return false;
      vistas.add(chave);
      return true;
    })
    .sort((a, b) =>
      a.pontos - b.pontos ||
      a.faixa.titulo.length - b.faixa.titulo.length ||
      a.faixa.titulo.localeCompare(b.faixa.titulo, "pt-BR"),
    )
    .slice(0, 7)
    .map(({ faixa }) => faixa);
}

function fecharSugestoes() {
  state.sugestoesAtuais = [];
  state.sugestaoAtiva = 0;
  refs.songSuggestions.hidden = true;
  refs.songSuggestions.replaceChildren();
  refs.guessInput.setAttribute("aria-expanded", "false");
  refs.guessInput.removeAttribute("aria-activedescendant");
}

function marcarSugestaoAtiva(indice) {
  if (!state.sugestoesAtuais.length) return;
  state.sugestaoAtiva = (indice + state.sugestoesAtuais.length) % state.sugestoesAtuais.length;
  [...refs.songSuggestions.children].forEach((item, itemIndex) => {
    const ativa = itemIndex === state.sugestaoAtiva;
    item.classList.toggle("is-active", ativa);
    item.setAttribute("aria-selected", String(ativa));
  });
  refs.guessInput.setAttribute(
    "aria-activedescendant",
    `song-suggestion-${state.sugestaoAtiva}`,
  );
}

function selecionarSugestao(indice, enviar = false) {
  const faixa = state.sugestoesAtuais[indice];
  if (!faixa) return;
  refs.guessInput.value = faixa.titulo;
  fecharSugestoes();
  if (enviar) refs.guessForm.requestSubmit();
}

function renderizarSugestoes() {
  if (state.rodadaEncerrada || refs.guessInput.disabled) {
    fecharSugestoes();
    return;
  }
  const sugestoes = obterSugestoes(refs.guessInput.value);
  state.sugestoesAtuais = sugestoes;
  state.sugestaoAtiva = 0;
  refs.songSuggestions.replaceChildren();

  if (!sugestoes.length) {
    refs.songSuggestions.hidden = true;
    refs.guessInput.setAttribute("aria-expanded", "false");
    refs.guessInput.removeAttribute("aria-activedescendant");
    return;
  }

  const fragment = document.createDocumentFragment();
  sugestoes.forEach((faixa, index) => {
    const item = document.createElement("li");
    const botao = document.createElement("button");
    const titulo = document.createElement("strong");
    const artista = document.createElement("span");
    item.id = `song-suggestion-${index}`;
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(index === 0));
    item.classList.toggle("is-active", index === 0);
    botao.type = "button";
    botao.tabIndex = -1;
    titulo.textContent = faixa.titulo;
    artista.textContent = faixa.artista;
    botao.append(titulo, artista);
    botao.addEventListener("click", () => selecionarSugestao(index));
    item.append(botao);
    fragment.append(item);
  });
  refs.songSuggestions.append(fragment);
  refs.songSuggestions.hidden = false;
  refs.guessInput.setAttribute("aria-expanded", "true");
  marcarSugestaoAtiva(0);
}

function popularOpcoes() {
  fecharSugestoes();
}

function popularArtistas() {
  const fragment = document.createDocumentFragment();
  ARTISTAS.forEach((artista) => {
    const option = document.createElement("option");
    option.value = artista;
    option.textContent = artista;
    fragment.append(option);
  });
  refs.artistSelect.replaceChildren(fragment);
  refs.artistSelect.value = state.artistaSelecionado;
}

function atualizarModoInterface() {
  const especificas = state.modo === "specific";
  refs.randomTab.classList.toggle("is-active", !especificas);
  refs.randomTab.setAttribute("aria-selected", String(!especificas));
  refs.specificTab.classList.toggle("is-active", especificas);
  refs.specificTab.setAttribute("aria-selected", String(especificas));
  refs.specificControls.hidden = !especificas;
  refs.artistSelect.value = state.artistaSelecionado;

  const total = indicesDoModo().length;
  refs.artistTrackCount.textContent = `${total} ${total === 1 ? "faixa" : "faixas"}`;
  refs.modeSummary.textContent = especificas
    ? `${total} ${total === 1 ? "faixa" : "faixas"} de ${state.artistaSelecionado}`
    : `${MUSICAS_ALEATORIAS.length} faixas da playlist · ordem aleatória`;
  atualizarControleDuracao();
}

function prepararFila() {
  state.ordem = embaralhar(indicesDoModo());
  state.posicao = 0;
  popularOpcoes();
  atualizarModoInterface();
}

function ativarModo(modo, artista = state.artistaSelecionado) {
  if (modo !== "random" && modo !== "specific") return false;
  const modoAnterior = state.modo;
  const artistaAnterior = state.artistaSelecionado;
  if (modo === "specific") {
    const artistaValido = ARTISTAS.find((item) => normalizar(item) === normalizar(artista));
    if (!artistaValido) return false;
    state.artistaSelecionado = artistaValido;
  }

  const nadaMudou = modoAnterior === modo &&
    (modo === "random" || artistaAnterior === state.artistaSelecionado);
  if (nadaMudou) return true;

  state.modo = modo;
  pararAudio();
  if (refs.resultDialog.open) refs.resultDialog.close();
  prepararFila();
  void iniciarRodada();
  return true;
}

function definirStatus(tipo, texto) {
  refs.catalogStatus.classList.toggle("is-ready", tipo === "ready");
  refs.catalogStatus.classList.toggle("is-error", tipo === "error");
  refs.catalogStatus.lastChild.textContent = ` ${texto}`;
}

function mostrarToast(mensagem) {
  window.clearTimeout(state.timerToast);
  refs.toast.textContent = mensagem;
  refs.toast.classList.add("is-visible");
  state.timerToast = window.setTimeout(() => {
    refs.toast.classList.remove("is-visible");
  }, 3000);
}

function buscarJsonp(url, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const callback = `__ouvidoRelampago_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = window.setTimeout(() => finalizar(new Error("Tempo de resposta esgotado")), timeoutMs);

    const limpar = () => {
      window.clearTimeout(timer);
      script.remove();
      try {
        delete window[callback];
      } catch {
        window[callback] = undefined;
      }
    };

    const finalizar = (erro, dados) => {
      limpar();
      if (erro) reject(erro);
      else resolve(dados);
    };

    window[callback] = (dados) => finalizar(null, dados);
    script.async = true;
    script.onerror = () => finalizar(new Error("Catálogo indisponível"));
    const separador = url.includes("?") ? "&" : "?";
    script.src = `${url}${separador}callback=${encodeURIComponent(callback)}`;
    document.head.append(script);
  });
}

async function buscarNoItunes(faixa) {
  const chaveCache = faixa.spotifyId || faixa.busca;
  if (state.cache.has(chaveCache)) return state.cache.get(chaveCache);

  const tituloEsperado = normalizar(faixa.titulo);
  const artistaEsperado = normalizar(faixa.artistas[0] || faixa.artista);
  const termoComAlbum = `${faixa.titulo} ${faixa.album || ""}`.trim();
  const consultas = [
    { termo: faixa.busca, pais: "BR" },
    { termo: termoComAlbum, pais: "BR" },
    { termo: faixa.titulo, pais: "BR" },
    { termo: termoComAlbum, pais: "US" },
  ];

  for (const consulta of consultas) {
    const params = new URLSearchParams({
      term: consulta.termo,
      country: consulta.pais,
      media: "music",
      entity: "song",
      limit: "25",
    });
    const dados = await buscarJsonp(`https://itunes.apple.com/search?${params}`);
    const resultados = Array.isArray(dados.results) ? dados.results : [];
    const candidatos = resultados
      .filter((item) => typeof item.previewUrl === "string" && item.previewUrl.startsWith("https://"))
      .map((item) => {
        const titulo = normalizar(item.trackName);
        const artista = normalizar(item.artistName);
        const tituloCompativel =
          titulo === tituloEsperado ||
          titulo.includes(tituloEsperado) ||
          tituloEsperado.includes(titulo);
        const pontosTitulo = titulo === tituloEsperado ? 0 : tituloCompativel ? 8 : 100;
        const pontosArtista =
          artista.includes(artistaEsperado) || artistaEsperado.includes(artista) ? 0 : 20;
        return { item, pontos: pontosTitulo + pontosArtista };
      })
      .filter(({ pontos }) => pontos < 100)
      .sort((a, b) => a.pontos - b.pontos);

    const melhor = candidatos[0]?.item;
    if (!melhor) continue;

    const resolvida = {
      ...faixa,
      titulo: faixa.titulo,
      artista: faixa.artista,
      album: faixa.album || melhor.collectionName,
      ano: melhor.releaseDate ? String(new Date(melhor.releaseDate).getUTCFullYear()) : faixa.ano,
      audio: melhor.previewUrl,
      capa:
        (melhor.artworkUrl100 || "")
          .replace("100x100bb", "600x600bb")
          .replace("100x100-75", "600x600-75") || criarCapaFallback(faixa),
    };
    state.cache.set(chaveCache, resolvida);
    return resolvida;
  }

  const erro = new Error("Prévia não encontrada");
  erro.codigo = "SEM_PREVIA";
  throw erro;
}

async function resolverFaixa(faixa, pedido) {
  const fallback = {
    ...faixa,
    audio: faixa.audioLocal,
    capa: faixa.capaLocal || criarCapaFallback(faixa),
  };

  if (faixa.audioLocal) return fallback;

  try {
    return await buscarNoItunes(faixa);
  } catch (erro) {
    if (pedido === state.pedidoAtual) {
      console.warn("Não foi possível carregar a prévia:", erro);
    }
    return {
      ...fallback,
      indisponibilidade: erro?.codigo === "SEM_PREVIA" ? "sem_previa" : "catalogo",
    };
  }
}

function aguardarAudioCarregar() {
  return new Promise((resolve, reject) => {
    if (refs.audio.readyState >= 1) {
      resolve("carregado");
      return;
    }
    const timer = window.setTimeout(() => finalizar(null, "adiado"), 4500);
    const limpar = () => {
      window.clearTimeout(timer);
      refs.audio.removeEventListener("loadedmetadata", sucesso);
      refs.audio.removeEventListener("loadeddata", sucesso);
      refs.audio.removeEventListener("canplay", sucesso);
      refs.audio.removeEventListener("error", falha);
    };
    const finalizar = (erro, estado) => {
      limpar();
      if (erro) reject(erro);
      else resolve(estado);
    };
    const sucesso = () => {
      finalizar(null, "carregado");
    };
    const falha = () => {
      finalizar(new Error("Falha ao carregar o áudio"));
    };
    refs.audio.addEventListener("loadedmetadata", sucesso, { once: true });
    refs.audio.addEventListener("loadeddata", sucesso, { once: true });
    refs.audio.addEventListener("canplay", sucesso, { once: true });
    refs.audio.addEventListener("error", falha, { once: true });
  });
}

async function prepararAudio(resolvida, pedido) {
  state.audioPronto = false;
  refs.playButton.disabled = true;
  refs.previewButton.disabled = true;
  pararAudio();
  refs.audio.removeAttribute("src");
  refs.audio.load();

  if (!resolvida.audio) {
    if (pedido === state.pedidoAtual) {
      definirStatus("error", "PRÉVIA INDISPONÍVEL");
      refs.fileState.textContent =
        resolvida.indisponibilidade === "catalogo"
          ? "CATÁLOGO FORA DO AR"
          : "PROCURANDO OUTRA FAIXA";
    }
    return {
      pronto: false,
      motivo: resolvida.indisponibilidade || "sem_previa",
    };
  }

  try {
    refs.audio.src = resolvida.audio;
    refs.audio.load();
    const carregamento = await aguardarAudioCarregar();
    if (pedido !== state.pedidoAtual) return { pronto: false, motivo: "cancelado" };
    state.audioPronto = true;
    refs.playButton.disabled = false;
    refs.previewButton.disabled = false;
    definirStatus(
      "ready",
      resolvida.audio === state.faixa.audioLocal
        ? "ARQUIVO LOCAL"
        : carregamento === "adiado"
          ? "TOQUE PARA CARREGAR"
          : "PRÉVIA CONECTADA",
    );
    return { pronto: true, motivo: null };
  } catch {
    if (pedido !== state.pedidoAtual) return { pronto: false, motivo: "cancelado" };
    state.audioPronto = false;
    refs.playButton.disabled = true;
    refs.previewButton.disabled = true;
    definirStatus("error", "PRÉVIA INDISPONÍVEL");
    return { pronto: false, motivo: "arquivo" };
  }
}

function pararAudio() {
  window.clearTimeout(state.timerTrecho);
  state.timerTrecho = null;
  state.tocandoTrecho = false;
  state.tocandoPrevia = false;
  refs.audio.pause();
  refs.playButton.classList.remove("is-playing");
  refs.waveform.classList.remove("is-playing");
  refs.heardMarker.classList.remove("is-playing");
  refs.previewButton.innerHTML = '<span aria-hidden="true">▶</span> OUVIR PRÉVIA';
  if (refs.waveform.children.length) atualizarWaveform();
}

function atualizarProgressoReproducao(decorrido, total) {
  const proporcaoNoTrecho = total > 0 ? Math.min(1, Math.max(0, decorrido / total)) : 0;
  const posicaoNaEscala = Math.min(1, decorrido / 5);
  const barras = [...refs.waveform.children];
  const totalLiberado = Math.ceil(barras.length * Math.min(1, total / 5));
  const totalTocado = Math.ceil(totalLiberado * proporcaoNoTrecho);

  barras.forEach((barra, index) => {
    barra.classList.toggle("is-played", index < totalTocado);
  });
  refs.heardMarker.style.left = `${posicaoNaEscala * 100}%`;
  refs.durationFill.style.width = `${posicaoNaEscala * 100}%`;
}

async function tocarTrecho() {
  if (!state.audioPronto || state.rodadaEncerrada) {
    if (!state.audioPronto) mostrarToast("A prévia ainda não está disponível para esta faixa.");
    return false;
  }

  pararAudio();
  const segundos = ESTAGIOS[state.estagio].segundos;
  try {
    if (refs.audio.readyState > 0) refs.audio.currentTime = INICIO_TRECHO;
    await refs.audio.play();
    state.tocandoTrecho = true;
    refs.playButton.classList.add("is-playing");
    refs.waveform.classList.add("is-playing");
    refs.heardMarker.classList.add("is-playing");
    atualizarProgressoReproducao(0, segundos);
    const atualizarRelogio = () => {
      if (!state.tocandoTrecho) return;
      const decorrido = Math.min(
        segundos,
        Math.max(0, refs.audio.currentTime - INICIO_TRECHO),
      );
      refs.audioTime.textContent = `00:${decorrido.toFixed(1).padStart(4, "0")}`;
      atualizarProgressoReproducao(decorrido, segundos);
      if (decorrido < segundos) requestAnimationFrame(atualizarRelogio);
    };
    requestAnimationFrame(atualizarRelogio);

    state.timerTrecho = window.setTimeout(() => {
      refs.audio.pause();
      if (refs.audio.readyState > 0) refs.audio.currentTime = INICIO_TRECHO;
      state.tocandoTrecho = false;
      refs.playButton.classList.remove("is-playing");
      refs.waveform.classList.remove("is-playing");
      refs.heardMarker.classList.remove("is-playing");
      refs.audioTime.textContent = "00:00.0";
      atualizarWaveform();
    }, segundos * 1000);
    return true;
  } catch {
    state.audioPronto = false;
    refs.playButton.disabled = true;
    definirStatus("error", "ÁUDIO BLOQUEADO");
    mostrarToast("O navegador não conseguiu reproduzir esta prévia.");
    return false;
  }
}

async function alternarPreviaCompleta() {
  if (!state.audioPronto) return;
  if (state.tocandoPrevia) {
    pararAudio();
    return;
  }
  pararAudio();
  try {
    if (refs.audio.readyState > 0) refs.audio.currentTime = INICIO_TRECHO;
    await refs.audio.play();
    state.tocandoPrevia = true;
    refs.previewButton.innerHTML = '<span aria-hidden="true">Ⅱ</span> PAUSAR PRÉVIA';
  } catch {
    mostrarToast("Não foi possível tocar a prévia completa.");
  }
}

function atualizarWaveform() {
  const segundos = ESTAGIOS[state.estagio].segundos;
  const proporcao = segundos / 5;
  const barras = [...refs.waveform.children];
  barras.forEach((barra, index) => {
    barra.classList.toggle("is-heard", index < Math.ceil(barras.length * proporcao));
    barra.classList.remove("is-played");
  });
  refs.heardMarker.style.left = `${Math.min(100, proporcao * 100)}%`;
  refs.durationFill.style.width = `${proporcao * 100}%`;
  refs.durationProgress.setAttribute("aria-valuenow", String(segundos));
}

function atualizarEstagio() {
  const atual = ESTAGIOS[state.estagio];
  const estagioInicial = indiceEstagioInicial();
  const dicasUsadas = Math.max(0, state.estagio - estagioInicial);
  const totalDicas = ESTAGIOS.length - 1 - estagioInicial;
  refs.challengeDuration.textContent = `${formatarDuracaoFrase(atual.segundos)}?`;
  refs.clipLabel.textContent = `TRECHO LIBERADO · ${formatarSegundos(atual.segundos)}`;
  refs.playDuration.textContent = formatarSegundos(atual.segundos);
  refs.playButton.setAttribute("aria-label", `Tocar trecho de ${atual.rotulo} desde o início`);
  refs.hintCount.textContent = `${dicasUsadas} DE ${totalDicas} USADAS`;

  refs.hintItems.forEach((item, index) => {
    item.classList.toggle("is-skipped", index < estagioInicial);
    item.classList.toggle("is-unlocked", index >= estagioInicial && index < state.estagio);
    item.classList.toggle("is-current", index === state.estagio);
  });

  refs.hintButton.disabled = state.estagio >= ESTAGIOS.length - 1 || state.rodadaEncerrada;
  refs.hintButton.lastChild.textContent =
    state.estagio >= ESTAGIOS.length - 1 ? " TODAS AS DICAS ABERTAS" : " PRECISO DE UMA DICA";
  atualizarWaveform();
  atualizarPistasReveladas();
}

function atualizarPistasReveladas() {
  refs.revealedHints.replaceChildren();
  const fragment = document.createDocumentFragment();

  if (state.estagio >= 6) {
    const chipArtista = document.createElement("span");
    chipArtista.className = "hint-chip";
    chipArtista.innerHTML = `ARTISTA: <strong>${escaparXml(state.resolvida?.artista || state.faixa.artista)}</strong>`;
    fragment.append(chipArtista);
    refs.metaArtist.textContent = state.resolvida?.artista || state.faixa.artista;
    refs.metaArtist.classList.add("is-revealed");
  }

  if (state.estagio >= 7) {
    const primeiraLetra = state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?";
    const chipInicial = document.createElement("span");
    chipInicial.className = "hint-chip";
    chipInicial.innerHTML = `PRIMEIRA LETRA: <strong>${primeiraLetra}</strong>`;
    fragment.append(chipInicial);
  }

  if (!fragment.childNodes.length) {
    const vazio = document.createElement("span");
    vazio.textContent = "Nenhuma pista extra revelada.";
    fragment.append(vazio);
  }

  refs.revealedHints.append(fragment);
}

function usarDica() {
  if (state.rodadaEncerrada || state.estagio >= ESTAGIOS.length - 1) return null;
  state.estagio += 1;
  atualizarEstagio();
  const atual = ESTAGIOS[state.estagio];

  if (atual.tipo === "audio") {
    refs.formFeedback.textContent = `Agora você pode ouvir ${atual.rotulo}.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast(`Dica liberada: ${atual.rotulo} de áudio.`);
  } else if (atual.tipo === "artista") {
    refs.formFeedback.textContent = `Artista revelado: ${state.resolvida?.artista || state.faixa.artista}.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast("Dica liberada: artista da faixa.");
  } else {
    const letra = state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?";
    refs.formFeedback.textContent = `O título começa com “${letra}”.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast("Última dica liberada: primeira letra.");
  }

  return { estagio: state.estagio, tipo: atual.tipo, rotulo: atual.rotulo };
}

function respostaCorreta(palpite) {
  const aceitas = [state.faixa.titulo, ...(state.faixa.aliases || [])].map(normalizar);
  if (!aceitas.includes(normalizar(palpite))) return false;

  const mesmaBase = faixasAtivas().filter(
    (faixa) => normalizar(faixa.titulo) === normalizar(state.faixa.titulo),
  );
  if (mesmaBase.length <= 1) return true;

  const aceitasDistintas = [state.faixa.titulo, ...(state.faixa.aliases || [])].map(
    normalizarTituloDistinto,
  );
  return aceitasDistintas.includes(normalizarTituloDistinto(palpite));
}

function validarPalpite(valor) {
  const palpite = String(valor || "").trim();
  if (state.rodadaEncerrada) return { ok: false, motivo: "rodada_encerrada" };
  if (!palpite) {
    refs.formFeedback.textContent = "Digite um título antes de confirmar.";
    refs.formFeedback.className = "form-feedback is-error";
    refs.guessInput.focus();
    return { ok: false, motivo: "vazio" };
  }
  if (palpite.length > 120) return { ok: false, motivo: "muito_longo" };

  if (respostaCorreta(palpite)) {
    state.streak += 1;
    salvarStreak();
    encerrarRodada(true);
    return {
      ok: true,
      correto: true,
      streak: state.streak,
      faixa: { titulo: state.faixa.titulo, artista: state.resolvida.artista },
    };
  }

  refs.guessInput.classList.remove("is-wrong");
  void refs.guessInput.offsetWidth;
  refs.guessInput.classList.add("is-wrong");
  const palpiteNormalizado = normalizar(palpite);
  const palpiteDistinto = normalizarTituloDistinto(palpite);
  const faixasDisponiveis = faixasAtivas();
  const faixaTentada =
    faixasDisponiveis.find((faixa) =>
      [faixa.titulo, ...(faixa.aliases || [])].some(
        (titulo) => normalizarTituloDistinto(titulo) === palpiteDistinto,
      ),
    ) ||
    faixasDisponiveis.find((faixa) =>
      [faixa.titulo, ...(faixa.aliases || [])].some(
        (titulo) => normalizar(titulo) === palpiteNormalizado,
      ),
    );
  if (faixaTentada) {
    state.palpitesErrados.add(normalizarTituloDistinto(faixaTentada.titulo));
  }
  refs.guessInput.value = "";
  fecharSugestoes();
  refs.formFeedback.textContent = faixaTentada
    ? `“${faixaTentada.titulo}” não é a resposta e saiu da lista desta rodada.`
    : "Ainda não. Tente uma das sugestões ou peça uma dica.";
  refs.formFeedback.className = "form-feedback is-error";
  return { ok: true, correto: false, streak: state.streak };
}

function revelarMetadados() {
  const faixa = state.resolvida;
  refs.coverFrame.classList.remove("is-concealed");
  refs.coverImage.alt = `Capa de ${faixa.album}, de ${faixa.artista}`;

  [
    [refs.metaTitle, faixa.titulo],
    [refs.metaArtist, faixa.artista],
    [refs.metaAlbum, faixa.album],
    [refs.metaYear, faixa.ano],
  ].forEach(([elemento, valor]) => {
    elemento.textContent = valor || "Não informado";
    elemento.classList.add("is-revealed");
  });

  refs.filePreview.classList.add("is-revealed");
  refs.fileState.textContent = "ARQUIVO IDENTIFICADO";
}

function encerrarRodada(acertou) {
  if (state.rodadaEncerrada) return;
  state.rodadaEncerrada = true;
  pararAudio();
  fecharSugestoes();
  revelarMetadados();

  refs.guessInput.disabled = true;
  refs.submitButton.disabled = true;
  refs.hintButton.disabled = true;
  refs.giveUpButton.disabled = true;

  const faixa = state.resolvida;
  refs.resultDialog.classList.toggle("is-loss", !acertou);
  refs.resultKicker.textContent = acertou ? "VOCÊ ACERTOU" : "RESPOSTA REVELADA";
  refs.resultTitle.textContent = acertou ? "Ouvido afiado." : "Fica para a próxima.";
  refs.resultSong.textContent = faixa.titulo;
  refs.resultArtist.textContent = faixa.artista;
  refs.resultAlbum.textContent = `${faixa.album}${faixa.ano ? ` · ${faixa.ano}` : ""}`;
  refs.resultCover.src = faixa.capa;
  refs.resultCover.alt = `Capa de ${faixa.album}`;
  refs.resultMessage.textContent = acertou
    ? `Acerto com ${ESTAGIOS[state.estagio].rotulo}. Sua sequência agora é de ${state.streak} ${state.streak === 1 ? "acerto" : "acertos"}.`
    : "A sequência voltou a zero, mas a próxima faixa já está pronta para uma nova tentativa.";

  window.setTimeout(() => refs.resultDialog.showModal(), 360);
}

function desistir() {
  if (state.rodadaEncerrada) return null;
  state.streak = 0;
  salvarStreak();
  encerrarRodada(false);
  return {
    desistiu: true,
    streak: state.streak,
    faixa: {
      titulo: state.resolvida.titulo,
      artista: state.resolvida.artista,
      album: state.resolvida.album,
    },
  };
}

function resetarInterface() {
  state.estagio = indiceEstagioInicial();
  state.rodadaEncerrada = false;
  state.audioPronto = false;
  state.palpitesErrados.clear();
  fecharSugestoes();
  refs.audioTime.textContent = "00:00.0";
  refs.coverFrame.classList.add("is-concealed");
  refs.filePreview.classList.remove("is-revealed");
  refs.fileState.textContent = "IDENTIDADE OCULTA";
  refs.guessInput.disabled = false;
  refs.guessInput.value = "";
  refs.guessInput.classList.remove("is-wrong");
  refs.submitButton.disabled = false;
  refs.giveUpButton.disabled = false;
  refs.formFeedback.textContent = "Pressione Enter para usar a primeira sugestão.";
  refs.formFeedback.className = "form-feedback";
  refs.previewButton.disabled = true;

  [
    [refs.metaTitle, "••••••••••••"],
    [refs.metaArtist, "••••••••••••"],
    [refs.metaAlbum, "••••••••••••"],
    [refs.metaYear, "••••"],
  ].forEach(([elemento, texto]) => {
    elemento.textContent = texto;
    elemento.classList.remove("is-revealed");
  });
  atualizarEstagio();
}

async function iniciarRodada(tentativaDePrevia = 0) {
  pararAudio();
  resetarInterface();

  const indice = state.ordem[state.posicao];
  state.faixa = MUSICAS[indice];
  state.resolvida = {
    ...state.faixa,
    audio: state.faixa.audioLocal,
    capa: state.faixa.capaLocal || criarCapaFallback(state.faixa),
  };

  const numero = state.posicao + 1;
  const total = state.ordem.length;
  const largura = Math.max(2, String(total).length);
  refs.roundCounter.textContent = `FAIXA ${String(numero).padStart(largura, "0")} / ${String(total).padStart(largura, "0")}`;
  refs.fileNumber.textContent = `#${String(state.faixa.playlistIndex || indice + 1).padStart(3, "0")}`;
  refs.coverImage.src = state.resolvida.capa;
  refs.coverImage.alt = "Capa do álbum oculta";
  definirStatus("loading", "CARREGANDO PRÉVIA");
  refs.playButton.disabled = true;

  const pedido = ++state.pedidoAtual;
  const resolvida = await resolverFaixa(state.faixa, pedido);
  if (pedido !== state.pedidoAtual) return;

  state.resolvida = resolvida;
  refs.coverImage.src = resolvida.capa;
  const preparo = await prepararAudio(resolvida, pedido);
  if (pedido !== state.pedidoAtual || preparo?.pronto) return;

  const podeTentarOutra =
    ["sem_previa", "arquivo"].includes(preparo?.motivo) &&
    tentativaDePrevia < Math.min(5, state.ordem.length - 1);
  if (!podeTentarOutra) return;

  state.posicao = (state.posicao + 1) % state.ordem.length;
  definirStatus("loading", "BUSCANDO OUTRA PRÉVIA");
  await iniciarRodada(tentativaDePrevia + 1);
}

function proximaRodada() {
  pararAudio();
  if (refs.resultDialog.open) refs.resultDialog.close();
  state.posicao += 1;
  if (state.posicao >= state.ordem.length) {
    state.ordem = embaralhar(indicesDoModo());
    state.posicao = 0;
  }
  void iniciarRodada();
}

function registrarEventos() {
  refs.randomTab.addEventListener("click", () => ativarModo("random"));
  refs.specificTab.addEventListener("click", () => ativarModo("specific"));
  refs.startHalfButton.addEventListener("click", () => definirDuracaoInicial(0.5));
  refs.startOneButton.addEventListener("click", () => definirDuracaoInicial(1));
  refs.artistSelect.addEventListener("change", () => {
    ativarModo("specific", refs.artistSelect.value);
  });
  refs.playButton.addEventListener("click", () => void tocarTrecho());
  refs.hintButton.addEventListener("click", usarDica);
  refs.giveUpButton.addEventListener("click", desistir);
  refs.previewButton.addEventListener("click", () => void alternarPreviaCompleta());
  refs.nextButton.addEventListener("click", proximaRodada);

  refs.guessForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const resultado = validarPalpite(refs.guessInput.value);
    if (resultado.correto) {
      refs.formFeedback.textContent = "Resposta correta!";
      refs.formFeedback.className = "form-feedback is-success";
    }
  });

  refs.guessInput.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowDown" && state.sugestoesAtuais.length) {
      evento.preventDefault();
      marcarSugestaoAtiva(state.sugestaoAtiva + 1);
      return;
    }
    if (evento.key === "ArrowUp" && state.sugestoesAtuais.length) {
      evento.preventDefault();
      marcarSugestaoAtiva(state.sugestaoAtiva - 1);
      return;
    }
    if (evento.key === "Escape") {
      fecharSugestoes();
      return;
    }
    if (evento.key === "Enter" && state.sugestoesAtuais.length) {
      evento.preventDefault();
      selecionarSugestao(state.sugestaoAtiva, true);
    }
  });

  refs.guessInput.addEventListener("input", () => {
    refs.guessInput.classList.remove("is-wrong");
    renderizarSugestoes();
    if (refs.formFeedback.classList.contains("is-error")) {
      refs.formFeedback.textContent = "Pressione Enter para usar a primeira sugestão.";
      refs.formFeedback.className = "form-feedback";
    }
  });

  refs.guessInput.addEventListener("focus", renderizarSugestoes);
  refs.guessInput.addEventListener("blur", () => {
    window.setTimeout(fecharSugestoes, 120);
  });

  refs.audio.addEventListener("ended", pararAudio);
  refs.resultDialog.addEventListener("cancel", (evento) => evento.preventDefault());
}

function registrarWebMcp() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const registrar = (tool) => {
    try {
      void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
    } catch {
      // Navegadores sem suporte completo simplesmente ignoram as ferramentas.
    }
  };

  registrar({
    name: "get_music_game_state",
    title: "Consultar rodada musical",
    description: "Consulta o progresso visível da rodada sem revelar a resposta.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      return {
        round: state.posicao + 1,
        totalRounds: state.ordem.length,
        mode: state.modo,
        selectedArtist: state.modo === "specific" ? state.artistaSelecionado : null,
        clipSeconds: ESTAGIOS[state.estagio].segundos,
        hintStage: state.estagio,
        artistHint: state.estagio >= 6 ? state.resolvida.artista : null,
        firstLetterHint:
          state.estagio >= 7
            ? state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?"
            : null,
        streak: state.streak,
        audioReady: state.audioPronto,
        roundOver: state.rodadaEncerrada,
      };
    },
  });

  registrar({
    name: "play_current_music_snippet",
    title: "Tocar trecho atual",
    description: "Toca o trecho de áudio atualmente liberado na interface.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    async execute() {
      const played = await tocarTrecho();
      if (!played) throw new Error("A prévia não está pronta para reprodução.");
      return { played: true, seconds: ESTAGIOS[state.estagio].segundos };
    },
  });

  registrar({
    name: "use_music_hint",
    title: "Usar próxima dica",
    description: "Libera a próxima dica da rodada seguindo a ordem do jogo.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      const dica = usarDica();
      if (!dica) throw new Error("Não há outra dica disponível nesta rodada.");
      return dica;
    },
  });

  registrar({
    name: "submit_music_guess",
    title: "Responder título da música",
    description: "Envia um palpite de título para a rodada musical atual.",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string", minLength: 1, maxLength: 120 } },
      required: ["title"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (!input || typeof input.title !== "string") throw new TypeError("title deve ser um texto.");
      const resultado = validarPalpite(input.title);
      if (!resultado.ok) throw new Error(`Palpite rejeitado: ${resultado.motivo}.`);
      return resultado;
    },
  });

  registrar({
    name: "select_music_artist",
    title: "Selecionar artista",
    description: "Ativa o modo de músicas específicas e seleciona um artista da playlist.",
    inputSchema: {
      type: "object",
      properties: { artist: { type: "string", minLength: 1, maxLength: 120 } },
      required: ["artist"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (!input || typeof input.artist !== "string") {
        throw new TypeError("artist deve ser um texto.");
      }
      if (!ativarModo("specific", input.artist)) {
        throw new Error("Artista não encontrado nesta playlist.");
      }
      return {
        mode: state.modo,
        artist: state.artistaSelecionado,
        tracks: state.ordem.length,
      };
    },
  });

  registrar({
    name: "give_up_music_round",
    title: "Desistir da rodada",
    description: "Encerra a rodada, revela a faixa e zera a sequência de acertos.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      const resultado = desistir();
      if (!resultado) throw new Error("A rodada já foi encerrada.");
      return resultado;
    },
  });

  window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
}

function iniciar() {
  refs.audio.preload = "metadata";
  refs.audio.setAttribute("playsinline", "");
  refs.streakValue.textContent = String(state.streak);
  gerarWaveform();
  popularArtistas();
  prepararFila();
  registrarEventos();
  registrarWebMcp();
  void iniciarRodada();
}

iniciar();
