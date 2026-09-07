const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const makeSet = (items, category) => {
  return Array.from({ length: 300 }, (_, i) => {
    const item = items[i % items.length];

    return {
      question: `${item.question} (${category} Question ${i + 1})`,
      options: shuffle(item.options),
      answer: item.answer,
    };
  });
};

const spaceItems = [
     {
    question: "What is the Sun primarily made of?",
    options: ["Hydrogen and Helium", "Oxygen and Carbon", "Iron and Nickel", "Nitrogen and Argon"],
    answer: "Hydrogen and Helium",
  },
  {
    question: "What is the surface temperature of the Sun approximately?",
    options: ["5,500°C", "1,000°C", "50,000°C", "500°C"],
    answer: "5,500°C",
  },
  {
    question: "What process produces the Sun's energy?",
    options: ["Nuclear fusion", "Nuclear fission", "Combustion", "Radioactive decay"],
    answer: "Nuclear fusion",
  },
  {
    question: "How long does light from the Sun take to reach Earth?",
    options: ["About 8 minutes", "About 8 hours", "About 8 seconds", "About 8 days"],
    answer: "About 8 minutes",
  },
  {
    question: "What is the outermost layer of the Sun called?",
    options: ["Corona", "Chromosphere", "Photosphere", "Core"],
    answer: "Corona",
  },
  {
    question: "What are dark, cooler areas on the Sun's surface called?",
    options: ["Sunspots", "Solar flares", "Prominences", "Coronal holes"],
    answer: "Sunspots",
  },
  {
    question: "What is a solar flare?",
    options: ["A burst of radiation from the Sun", "A planet passing the Sun", "A comet near the Sun", "A moon eclipse"],
    answer: "A burst of radiation from the Sun",
  },
  {
    question: "What is the Sun's classification as a star?",
    options: ["Yellow dwarf", "Red giant", "White dwarf", "Blue supergiant"],
    answer: "Yellow dwarf",
  },
  {
    question: "How old is the Sun approximately?",
    options: ["4.6 billion years", "1 billion years", "10 billion years", "500 million years"],
    answer: "4.6 billion years",
  },
  {
    question: "What will the Sun eventually become at the end of its life?",
    options: ["White dwarf", "Black hole", "Neutron star", "Red dwarf"],
    answer: "White dwarf",
  },

  // THE SOLAR SYSTEM - PLANETS
  {
    question: "How many planets are in our solar system?",
    options: ["8", "9", "7", "10"],
    answer: "8",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which planet has the most visible ring system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "Which planet rotates on its side?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    answer: "Uranus",
  },
  {
    question: "Which planet is known for the Great Red Spot?",
    options: ["Jupiter", "Mars", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which planet is the hottest in our solar system?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    answer: "Venus",
  },
  {
    question: "Which is the farthest planet from the Sun?",
    options: ["Neptune", "Uranus", "Saturn", "Pluto"],
    answer: "Neptune",
  },
  {
    question: "Which planet is called Earth's twin due to similar size?",
    options: ["Venus", "Mars", "Mercury", "Saturn"],
    answer: "Venus",
  },
  {
    question: "How many moons does Mars have?",
    options: ["2", "0", "1", "4"],
    answer: "2",
  },
  {
    question: "What are the two moons of Mars named?",
    options: ["Phobos and Deimos", "Titan and Enceladus", "Io and Europa", "Triton and Nereid"],
    answer: "Phobos and Deimos",
  },
  {
    question: "Which planet has a moon called Titan?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "Which planet spins fastest on its axis?",
    options: ["Jupiter", "Saturn", "Earth", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "Which planet has the longest year?",
    options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    answer: "Neptune",
  },
  {
    question: "Which planet has the shortest day?",
    options: ["Jupiter", "Saturn", "Earth", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "Venus rotates in which direction compared to most planets?",
    options: ["Retrograde (backward)", "Prograde (forward)", "It does not rotate", "Sideways"],
    answer: "Retrograde (backward)",
  },
  {
    question: "Which planet is the smallest in our solar system?",
    options: ["Mercury", "Mars", "Venus", "Pluto"],
    answer: "Mercury",
  },
  {
    question: "What is the name of the largest volcano on Mars?",
    options: ["Olympus Mons", "Vesuvius Mons", "Maxwell Mons", "Elysium Mons"],
    answer: "Olympus Mons",
  },
  {
    question: "Which planet has the longest day (slowest rotation)?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    answer: "Venus",
  },

  // THE MOON
  {
    question: "What is the name of Earth's natural satellite?",
    options: ["The Moon", "Titan", "Europa", "Ganymede"],
    answer: "The Moon",
  },
  {
    question: "Who was the first human to walk on the Moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: "Neil Armstrong",
  },
  {
    question: "In what year did humans first land on the Moon?",
    options: ["1969", "1965", "1972", "1959"],
    answer: "1969",
  },
  {
    question: "What is the name of the NASA mission that first landed humans on the Moon?",
    options: ["Apollo 11", "Apollo 13", "Gemini 7", "Mercury 6"],
    answer: "Apollo 11",
  },
  {
    question: "What causes the tides on Earth?",
    options: ["The Moon's gravity", "The Sun's heat", "Earth's rotation", "Wind patterns"],
    answer: "The Moon's gravity",
  },
  {
    question: "How long does it take the Moon to orbit Earth?",
    options: ["About 27 days", "About 7 days", "About 365 days", "About 90 days"],
    answer: "About 27 days",
  },
  {
    question: "What is a lunar eclipse?",
    options: ["Earth's shadow falls on the Moon", "The Moon covers the Sun", "The Moon disappears", "A meteor hits the Moon"],
    answer: "Earth's shadow falls on the Moon",
  },
  {
    question: "What is a solar eclipse?",
    options: ["The Moon blocks the Sun from Earth's view", "Earth blocks the Sun", "The Sun goes dark", "Jupiter covers the Sun"],
    answer: "The Moon blocks the Sun from Earth's view",
  },
  {
    question: "What are the flat plains on the Moon called?",
    options: ["Maria", "Craters", "Highlands", "Regolith"],
    answer: "Maria",
  },
  {
    question: "Does the Moon have an atmosphere?",
    options: ["No, it has almost none", "Yes, thick like Earth's", "Yes, made of oxygen", "Yes, made of nitrogen"],
    answer: "No, it has almost none",
  },

  // STARS & STELLAR OBJECTS
  {
    question: "What is the nearest star to Earth (other than the Sun)?",
    options: ["Proxima Centauri", "Sirius", "Betelgeuse", "Alpha Centauri A"],
    answer: "Proxima Centauri",
  },
  {
    question: "What is a light-year?",
    options: ["The distance light travels in one year", "The time light takes to reach the Moon", "A measure of star brightness", "The age of a star"],
    answer: "The distance light travels in one year",
  },
  {
    question: "What is a neutron star?",
    options: ["The dense remnant of a supernova", "A young forming star", "A star with no gravity", "A star made of neutrons and planets"],
    answer: "The dense remnant of a supernova",
  },
  {
    question: "What is a supernova?",
    options: ["A massive stellar explosion", "A new star forming", "A comet near a star", "A type of black hole"],
    answer: "A massive stellar explosion",
  },
  {
    question: "What color are the hottest stars?",
    options: ["Blue", "Red", "Yellow", "Orange"],
    answer: "Blue",
  },
  {
    question: "What color are the coolest stars?",
    options: ["Red", "Blue", "White", "Yellow"],
    answer: "Red",
  },
  {
    question: "What is the brightest star visible from Earth at night?",
    options: ["Sirius", "Polaris", "Betelgeuse", "Vega"],
    answer: "Sirius",
  },
  {
    question: "What is Polaris also known as?",
    options: ["The North Star", "The South Star", "The Evening Star", "The Dog Star"],
    answer: "The North Star",
  },
  {
    question: "What is a binary star system?",
    options: ["Two stars orbiting each other", "A star with two planets", "A star that explodes twice", "Two identical galaxies"],
    answer: "Two stars orbiting each other",
  },
  {
    question: "What is the Hertzsprung-Russell diagram used for?",
    options: ["Classifying stars by temperature and brightness", "Mapping planets", "Tracking asteroids", "Measuring galaxy distances"],
    answer: "Classifying stars by temperature and brightness",
  },
  {
    question: "What is the main sequence in stellar classification?",
    options: ["The phase where stars fuse hydrogen in their cores", "The path of a comet", "The orbit of planets", "The stages of a black hole"],
    answer: "The phase where stars fuse hydrogen in their cores",
  },
  {
    question: "What is a red giant?",
    options: ["An aging star that has expanded", "A young forming star", "A type of asteroid", "A small red dwarf"],
    answer: "An aging star that has expanded",
  },
  {
    question: "What is a pulsar?",
    options: ["A rapidly rotating neutron star emitting beams of radiation", "A pulsing black hole", "A type of comet", "An exploding star"],
    answer: "A rapidly rotating neutron star emitting beams of radiation",
  },
  {
    question: "What is stellar parallax used to measure?",
    options: ["Distances to nearby stars", "The mass of black holes", "The temperature of stars", "The age of the universe"],
    answer: "Distances to nearby stars",
  },
  {
    question: "What element do stars primarily fuse in their cores?",
    options: ["Hydrogen", "Helium", "Carbon", "Oxygen"],
    answer: "Hydrogen",
  },

  // BLACK HOLES & EXOTIC OBJECTS
{
  question: "What is the name of the first star system discovered to have multiple exoplanets?",
  options: ["Upsilon Andromedae", "Proxima Centauri", "TRAPPIST-1", "51 Pegasi"],
  answer: "Upsilon Andromedae",
},
  {
    question: "What is the boundary around a black hole called?",
    options: ["Event horizon", "Singularity", "Accretion disk", "Photon sphere"],
    answer: "Event horizon",
  },
  {
    question: "What is the singularity of a black hole?",
    options: ["The point of infinite density at the center", "The outer edge of a black hole", "A ring of orbiting matter", "The shadow of a black hole"],
    answer: "The point of infinite density at the center",
  },
  {
    question: "What is the name of the first black hole ever imaged?",
    options: ["M87*", "Sagittarius A*", "Cygnus X-1", "NGC 1277"],
    answer: "M87*",
  },
  {
    question: "What is the supermassive black hole at the center of the Milky Way called?",
    options: ["Sagittarius A*", "M87*", "Cygnus X-1", "Perseus A"],
    answer: "Sagittarius A*",
  },
  {
    question: "What is Hawking radiation?",
    options: ["Theoretical radiation emitted by black holes", "Radiation from the Sun", "X-rays from neutron stars", "Cosmic background radiation"],
    answer: "Theoretical radiation emitted by black holes",
  },
  {
    question: "What is a quasar?",
    options: ["An extremely bright active galactic nucleus powered by a black hole", "A type of star", "A fast-moving comet", "A large asteroid belt"],
    answer: "An extremely bright active galactic nucleus powered by a black hole",
  },
  {
    question: "What is spaghettification?",
    options: ["The stretching of objects by black hole tidal forces", "A type of nebula shape", "The formation of spiral galaxies", "The orbit of moons"],
    answer: "The stretching of objects by black hole tidal forces",
  },

  // GALAXIES & THE UNIVERSE
  {
    question: "What is the name of our galaxy?",
    options: ["The Milky Way", "Andromeda", "Triangulum", "Sombrero"],
    answer: "The Milky Way",
  },
  {
    question: "What type of galaxy is the Milky Way?",
    options: ["Spiral galaxy", "Elliptical galaxy", "Irregular galaxy", "Lenticular galaxy"],
    answer: "Spiral galaxy",
  },
  {
    question: "What is the nearest large galaxy to the Milky Way?",
    options: ["Andromeda Galaxy", "Triangulum Galaxy", "Large Magellanic Cloud", "Sombrero Galaxy"],
    answer: "Andromeda Galaxy",
  },
{
  question: "Which galaxy will eventually collide with the Milky Way?",
  options: ["Andromeda Galaxy", "Triangulum Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
  answer: "Andromeda Galaxy",
},

  {
    question: "How old is the universe approximately?",
    options: ["13.8 billion years", "4.6 billion years", "1 trillion years", "6,000 years"],
    answer: "13.8 billion years",
  },
{
  question: "Which spacecraft was the first to visit both Uranus and Neptune?",
  options: ["Voyager 2", "Voyager 1", "Pioneer 10", "New Horizons"],
  answer: "Voyager 2",
},
  {
    question: "What is dark energy?",
    options: ["A mysterious force causing the universe to expand faster", "Energy from black holes", "Solar energy that is invisible", "Energy inside dark matter"],
    answer: "A mysterious force causing the universe to expand faster",
  },
  {
    question: "What is the cosmic microwave background?",
    options: ["Remnant radiation from the early universe", "Radiation from the Sun", "Light from distant quasars", "Noise from black holes"],
    answer: "Remnant radiation from the early universe",
  },
  {
    question: "What is the observable universe estimated to be in diameter?",
    options: ["About 93 billion light-years", "About 13.8 billion light-years", "About 1 trillion light-years", "About 1 billion light-years"],
    answer: "About 93 billion light-years",
  },
  {
    question: "What is a galaxy cluster?",
    options: ["A large grouping of galaxies bound by gravity", "A cluster of stars within a galaxy", "A group of solar systems", "A nebula containing many galaxies"],
    answer: "A large grouping of galaxies bound by gravity",
  },
  {
    question: "What is the Local Group?",
    options: ["The cluster of galaxies containing the Milky Way", "The planets in our solar system", "The nearest stars to the Sun", "A cluster of nearby quasars"],
    answer: "The cluster of galaxies containing the Milky Way",
  },
  {
    question: "What is redshift in astronomy?",
    options: ["The stretching of light from objects moving away", "A type of star color", "A red-colored nebula", "The glow of Mars"],
    answer: "The stretching of light from objects moving away",
  },
  {
    question: "Who first proposed that the universe is expanding?",
    options: ["Edwin Hubble", "Albert Einstein", "Isaac Newton", "Stephen Hawking"],
    answer: "Edwin Hubble",
  },
  {
    question: "What is the Hubble constant used to measure?",
    options: ["The rate of expansion of the universe", "The speed of light", "The distance to the Moon", "The mass of black holes"],
    answer: "The rate of expansion of the universe",
  },

  // SPACE EXPLORATION & MISSIONS
  {
    question: "What was the first artificial satellite launched into space?",
    options: ["Sputnik 1", "Vanguard 1", "Explorer 1", "Luna 1"],
    answer: "Sputnik 1",
  },
  {
    question: "Which country launched Sputnik 1?",
    options: ["Soviet Union", "United States", "China", "Germany"],
    answer: "Soviet Union",
  },
  {
    question: "Who was the first human in space?",
    options: ["Yuri Gagarin", "Neil Armstrong", "Alan Shepard", "Buzz Aldrin"],
    answer: "Yuri Gagarin",
  },
  {
    question: "In what year did Yuri Gagarin go to space?",
    options: ["1961", "1957", "1969", "1965"],
    answer: "1961",
  },
  {
    question: "What is the International Space Station?",
    options: ["A habitable satellite orbiting Earth", "A space telescope", "A lunar base", "A Mars rover"],
    answer: "A habitable satellite orbiting Earth",
  },
  {
    question: "Which space telescope was launched in 1990?",
    options: ["Hubble Space Telescope", "James Webb Space Telescope", "Chandra X-ray Observatory", "Spitzer Space Telescope"],
    answer: "Hubble Space Telescope",
  },
  {
    question: "What is the James Webb Space Telescope primarily designed to observe?",
    options: ["Infrared light from distant objects", "Visible light from nearby stars", "Radio waves from pulsars", "X-rays from black holes"],
    answer: "Infrared light from distant objects",
  },
  {
    question: "What is the name of NASA's Mars rover launched in 2020?",
    options: ["Perseverance", "Curiosity", "Opportunity", "Spirit"],
    answer: "Perseverance",
  },
  {
    question: "What was the first Mars rover called?",
    options: ["Sojourner", "Spirit", "Opportunity", "Curiosity"],
    answer: "Sojourner",
  },
  {
    question: "What mission brought the first humans to the Moon?",
    options: ["Apollo 11", "Apollo 8", "Gemini 12", "Mercury Atlas 6"],
    answer: "Apollo 11",
  },
  {
    question: "Which probe was the first spacecraft to leave our solar system?",
    options: ["Voyager 1", "Voyager 2", "New Horizons", "Pioneer 10"],
    answer: "Voyager 1",
  },
  {
    question: "What is the mission of New Horizons?",
    options: ["To study Pluto and the outer solar system", "To land on Mars", "To orbit Jupiter", "To explore the asteroid belt"],
    answer: "To study Pluto and the outer solar system",
  },
  {
    question: "What was the Space Shuttle program?",
    options: ["NASA's reusable spacecraft program from 1981 to 2011", "A lunar rocket program", "A Mars mission program", "The first satellite program"],
    answer: "NASA's reusable spacecraft program from 1981 to 2011",
  },
  {
    question: "What company developed the Falcon 9 rocket?",
    options: ["SpaceX", "NASA", "Boeing", "Blue Origin"],
    answer: "SpaceX",
  },
  {
    question: "What is the Artemis program designed to do?",
    options: ["Return humans to the Moon", "Send humans to Mars", "Explore Jupiter's moons", "Build a Moon telescope"],
    answer: "Return humans to the Moon",
  },
  {
    question: "What was the Voyager program?",
    options: ["A mission to study the outer planets", "A mission to land on Mars", "A Moon exploration program", "A Sun observation program"],
    answer: "A mission to study the outer planets",
  },
  {
    question: "Which space mission famously said 'Houston, we have a problem'?",
    options: ["Apollo 13", "Apollo 11", "Apollo 12", "Gemini 8"],
    answer: "Apollo 13",
  },
  {
    question: "What is SpaceX's large rocket designed for deep space travel called?",
    options: ["Starship", "Falcon Heavy", "Dragon", "Atlas V"],
    answer: "Starship",
  },
  {
    question: "What was the first crewed spacecraft to orbit Earth?",
    options: ["Vostok 1", "Mercury Friendship 7", "Gemini 3", "Apollo 7"],
    answer: "Vostok 1",
  },
  {
    question: "What is the name of the first woman in space?",
    options: ["Valentina Tereshkova", "Sally Ride", "Svetlana Savitskaya", "Mae Jemison"],
    answer: "Valentina Tereshkova",
  },
  {
    question: "What year was the International Space Station first inhabited?",
    options: ["2000", "1998", "2005", "1995"],
    answer: "2000",
  },

  // ASTEROIDS, COMETS & DWARF PLANETS
  {
    question: "What is an asteroid?",
    options: ["A rocky body orbiting the Sun", "A chunk of ice and gas", "A failed star", "A moon of Jupiter"],
    answer: "A rocky body orbiting the Sun",
  },
  {
    question: "Where is the main asteroid belt located?",
    options: ["Between Mars and Jupiter", "Between Earth and Mars", "Between Jupiter and Saturn", "Beyond Neptune"],
    answer: "Between Mars and Jupiter",
  },
  {
    question: "What is a comet?",
    options: ["An icy body that develops a tail near the Sun", "A large rocky asteroid", "A type of moon", "A small planet"],
    answer: "An icy body that develops a tail near the Sun",
  },
  {
    question: "What is Halley's Comet?",
    options: ["A famous comet visible from Earth every ~75 years", "An asteroid that hit Earth", "A moon of Neptune", "A type of meteor shower"],
    answer: "A famous comet visible from Earth every ~75 years",
  },
  {
    question: "Why is Pluto no longer classified as a planet?",
    options: ["It has not cleared its orbital neighborhood", "It is too small to orbit the Sun", "It was discovered to be a comet", "It orbits a different star"],
    answer: "It has not cleared its orbital neighborhood",
  },
  {
    question: "What is Pluto classified as?",
    options: ["A dwarf planet", "A moon", "An asteroid", "A comet"],
    answer: "A dwarf planet",
  },
  {
    question: "What is the Kuiper Belt?",
    options: ["A region of icy bodies beyond Neptune's orbit", "The asteroid belt between Mars and Jupiter", "A ring around Saturn", "A cloud of gas around the Sun"],
    answer: "A region of icy bodies beyond Neptune's orbit",
  },
  {
    question: "What is the Oort Cloud?",
    options: ["A distant spherical shell of icy objects surrounding the solar system", "A cloud of gas around Jupiter", "The outer atmosphere of the Sun", "A region of asteroids"],
    answer: "A distant spherical shell of icy objects surrounding the solar system",
  },
  {
    question: "What is a meteor?",
    options: ["A space rock that burns up in Earth's atmosphere", "A rock on Earth's surface from space", "A chunk of ice near a comet", "A small moon"],
    answer: "A space rock that burns up in Earth's atmosphere",
  },
  {
    question: "What is a meteorite?",
    options: ["A space rock that reaches Earth's surface", "A meteor burning in the sky", "A piece of a comet", "A small asteroid"],
    answer: "A space rock that reaches Earth's surface",
  },
  {
    question: "What is the largest known asteroid?",
    options: ["Ceres", "Vesta", "Pallas", "Eros"],
    answer: "Ceres",
  },
  {
    question: "What is a meteor shower?",
    options: ["Earth passing through debris left by a comet", "A storm on Mars", "Asteroids orbiting Jupiter", "Comets approaching the Sun"],
    answer: "Earth passing through debris left by a comet",
  },

  // NEBULAE & STAR FORMATION
  {
    question: "What is a nebula?",
    options: ["A cloud of gas and dust in space", "A type of galaxy", "A large asteroid cluster", "A dying star"],
    answer: "A cloud of gas and dust in space",
  },
  {
    question: "What is the Orion Nebula?",
    options: ["A stellar nursery in the constellation Orion", "A dying star in Orion", "A galaxy near the Milky Way", "A black hole in Orion"],
    answer: "A stellar nursery in the constellation Orion",
  },
  {
    question: "What is a planetary nebula?",
    options: ["The ejected outer layers of a dying star", "A cloud around a newly formed planet", "A nebula shaped like a planet", "A nebula that forms planets"],
    answer: "The ejected outer layers of a dying star",
  },
  {
    question: "Where do new stars form?",
    options: ["Inside nebulae", "Inside black holes", "On the surface of planets", "Near the Sun"],
    answer: "Inside nebulae",
  },
  {
    question: "What is a protostar?",
    options: ["A star in its early forming stage", "A dying star", "A white dwarf", "A star before it explodes"],
    answer: "A star in its early forming stage",
  },
  {
    question: "What famous image shows 'pillars' of star-forming gas?",
    options: ["Pillars of Creation", "Eagle Nebula core", "Horsehead Nebula", "Crab Nebula"],
    answer: "Pillars of Creation",
  },

  // SPACE PHYSICS & CONCEPTS
  {
    question: "What is gravity?",
    options: ["A force of attraction between masses", "A magnetic force", "A type of radiation", "A chemical force"],
    answer: "A force of attraction between masses",
  },
  {
    question: "What is escape velocity?",
    options: ["The minimum speed needed to escape a planet's gravity", "The speed of a rocket launch", "The speed of light", "The orbital speed of a satellite"],
    answer: "The minimum speed needed to escape a planet's gravity",
  },
  {
    question: "What is an orbit?",
    options: ["The curved path of an object around another due to gravity", "A type of space station", "The path of light around a star", "A measurement of distance"],
    answer: "The curved path of an object around another due to gravity",
  },
  {
    question: "What keeps satellites in orbit around Earth?",
    options: ["The balance between gravity and their velocity", "Rocket engines", "Magnetic fields", "Solar wind"],
    answer: "The balance between gravity and their velocity",
  },
  {
    question: "What is zero gravity also called?",
    options: ["Microgravity or weightlessness", "Anti-gravity", "Null gravity", "Free gravity"],
    answer: "Microgravity or weightlessness",
  },
  {
    question: "What is the Doppler effect in astronomy?",
    options: ["The change in frequency of light due to relative motion", "The brightening of stars", "The bending of light near black holes", "The dimming of a star by a planet"],
    answer: "The change in frequency of light due to relative motion",
  },
  {
    question: "What is gravitational lensing?",
    options: ["The bending of light by gravity", "A type of telescope lens", "A method to measure black hole mass", "The orbit of light around planets"],
    answer: "The bending of light by gravity",
  },
  {
    question: "What does Einstein's general theory of relativity describe?",
    options: ["Gravity as the curvature of space-time", "The speed of light in a vacuum", "The energy of atomic nuclei", "The orbit of planets"],
    answer: "Gravity as the curvature of space-time",
  },
  {
    question: "What is the speed of light in a vacuum?",
    options: ["299,792 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"],
    answer: "299,792 km/s",
  },
  {
    question: "What is an astronomical unit (AU)?",
    options: ["The average distance from Earth to the Sun", "The distance light travels in a year", "The radius of the Milky Way", "The diameter of Jupiter"],
    answer: "The average distance from Earth to the Sun",
  },
  {
    question: "What is a parsec?",
    options: ["A unit of distance equal to about 3.26 light-years", "A unit of time in space", "The distance from Earth to the Moon", "The size of a nebula"],
    answer: "A unit of distance equal to about 3.26 light-years",
  },
  {
    question: "What is the cosmic calendar?",
    options: ["A scale compressing the universe's history into one year", "A calendar used on the ISS", "A timeline of Mars missions", "A measurement of star ages"],
    answer: "A scale compressing the universe's history into one year",
  },
  {
    question: "What is space-time?",
    options: ["The four-dimensional fabric combining space and time", "The distance between galaxies", "The time it takes to travel to Mars", "The speed of light multiplied by time"],
    answer: "The four-dimensional fabric combining space and time",
  },
  {
    question: "What is a gravitational wave?",
    options: ["A ripple in space-time caused by accelerating masses", "A type of solar wave", "A sound wave in space", "A magnetic wave from a pulsar"],
    answer: "A ripple in space-time caused by accelerating masses",
  },
  {
    question: "When were gravitational waves first detected?",
    options: ["2015", "2000", "2010", "2020"],
    answer: "2015",
  },
  {
    question: "What telescope/detector first detected gravitational waves?",
    options: ["LIGO", "Hubble", "James Webb", "Chandra"],
    answer: "LIGO",
  },

  // EARTH & ITS PLACE IN SPACE
  {
    question: "How far is Earth from the Sun on average?",
    options: ["About 150 million km", "About 15 million km", "About 1.5 billion km", "About 1.5 million km"],
    answer: "About 150 million km",
  },
  {
    question: "How long does it take Earth to orbit the Sun?",
    options: ["365.25 days", "24 hours", "28 days", "100 days"],
    answer: "365.25 days",
  },
  {
    question: "What causes the seasons on Earth?",
    options: ["The tilt of Earth's axis", "Earth's changing distance from the Sun", "The Moon's gravity", "The Sun's brightness changing"],
    answer: "The tilt of Earth's axis",
  },
  {
    question: "What is the axial tilt of Earth?",
    options: ["23.5 degrees", "45 degrees", "90 degrees", "10 degrees"],
    answer: "23.5 degrees",
  },
  {
    question: "What is the thermosphere?",
    options: ["A layer of Earth's upper atmosphere where auroras occur", "The core of Earth", "A layer of the Sun", "The outer layer of Mars"],
    answer: "A layer of Earth's upper atmosphere where auroras occur",
  },
  {
    question: "What causes the Northern Lights (Aurora Borealis)?",
    options: ["Charged solar particles interacting with Earth's magnetic field", "Reflections of sunlight off snow", "Light from nearby stars", "Volcanic ash in the atmosphere"],
    answer: "Charged solar particles interacting with Earth's magnetic field",
  },
  {
    question: "What is Earth's magnetic field generated by?",
    options: ["The movement of molten iron in Earth's core", "The Moon's gravity", "Solar wind", "Atmospheric electricity"],
    answer: "The movement of molten iron in Earth's core",
  },
  {
    question: "What is the Van Allen radiation belt?",
    options: ["Zones of charged particles trapped by Earth's magnetic field", "A layer of the atmosphere", "A ring around Earth like Saturn's", "A zone of asteroids near Earth"],
    answer: "Zones of charged particles trapped by Earth's magnetic field",
  },

  // CONSTELLATIONS & OBSERVATIONAL ASTRONOMY
  {
    question: "How many official constellations are there?",
    options: ["88", "48", "12", "100"],
    answer: "88",
  },
  {
    question: "What is the zodiac?",
    options: ["A band of 12 constellations along the ecliptic", "A type of galaxy", "A star cluster in Orion", "The path of the Moon"],
    answer: "A band of 12 constellations along the ecliptic",
  },
  {
    question: "What is the ecliptic?",
    options: ["The apparent path of the Sun across the sky", "The Moon's orbit", "Earth's rotation axis", "The Milky Way's center"],
    answer: "The apparent path of the Sun across the sky",
  },
  {
    question: "What is Orion's Belt?",
    options: ["Three bright stars in the Orion constellation", "A ring around Saturn", "A meteor shower", "A nebula cluster"],
    answer: "Three bright stars in the Orion constellation",
  },
  {
    question: "What is the Southern Cross constellation used for?",
    options: ["Navigating in the Southern Hemisphere", "Predicting eclipses", "Measuring star distances", "Identifying the Sun's position"],
    answer: "Navigating in the Southern Hemisphere",
  },
  {
    question: "What is a magnitude in astronomy?",
    options: ["A measure of a star's brightness", "The mass of a star", "The distance to a star", "The size of a star"],
    answer: "A measure of a star's brightness",
  },
  {
    question: "What is absolute magnitude?",
    options: ["A star's intrinsic brightness from a standard distance", "The brightness seen from Earth", "A star's temperature", "The mass of a star"],
    answer: "A star's intrinsic brightness from a standard distance",
  },
  {
    question: "What is the celestial equator?",
    options: ["The projection of Earth's equator onto the sky", "The orbit of the Moon", "The band of constellations", "The ecliptic path"],
    answer: "The projection of Earth's equator onto the sky",
  },

  // TELESCOPES & INSTRUMENTS
  {
    question: "Who invented the first telescope?",
    options: ["Hans Lippershey", "Galileo Galilei", "Isaac Newton", "Johannes Kepler"],
    answer: "Hans Lippershey",
  },
  {
    question: "Who first used a telescope to observe space systematically?",
    options: ["Galileo Galilei", "Isaac Newton", "Tycho Brahe", "Copernicus"],
    answer: "Galileo Galilei",
  },
  {
    question: "What type of telescope uses mirrors to focus light?",
    options: ["Reflecting telescope", "Refracting telescope", "Radio telescope", "X-ray telescope"],
    answer: "Reflecting telescope",
  },
  {
    question: "What type of telescope uses lenses to focus light?",
    options: ["Refracting telescope", "Reflecting telescope", "Infrared telescope", "Gamma-ray telescope"],
    answer: "Refracting telescope",
  },
  {
    question: "What does a radio telescope detect?",
    options: ["Radio waves from space", "Visible light", "X-rays from stars", "Ultraviolet light"],
    answer: "Radio waves from space",
  },
  {
    question: "What is the Very Large Array (VLA)?",
    options: ["A system of 27 radio telescopes in New Mexico", "A giant optical telescope in Chile", "A space telescope in orbit", "An X-ray telescope on the Moon"],
    answer: "A system of 27 radio telescopes in New Mexico",
  },
  {
    question: "What is the Chandra X-ray Observatory?",
    options: ["A space telescope that observes X-rays", "A ground telescope in India", "An infrared telescope", "A radio telescope"],
    answer: "A space telescope that observes X-rays",
  },
  {
    question: "Why is it an advantage to put telescopes in space?",
    options: ["To avoid atmospheric interference", "Because it is cheaper", "To be closer to stars", "To avoid clouds only"],
    answer: "To avoid atmospheric interference",
  },

  // NOTABLE ASTRONOMERS & SCIENTISTS
  {
    question: "Who proposed the heliocentric model of the solar system?",
    options: ["Nicolaus Copernicus", "Ptolemy", "Aristotle", "Galileo Galilei"],
    answer: "Nicolaus Copernicus",
  },
  {
    question: "Who described the laws of planetary motion?",
    options: ["Johannes Kepler", "Isaac Newton", "Galileo Galilei", "Tycho Brahe"],
    answer: "Johannes Kepler",
  },
  {
    question: "Who formulated the law of universal gravitation?",
    options: ["Isaac Newton", "Albert Einstein", "Johannes Kepler", "Galileo Galilei"],
    answer: "Isaac Newton",
  },
  {
    question: "Who developed the theory of general relativity?",
    options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck"],
    answer: "Albert Einstein",
  },
  {
    question: "Who first calculated that the universe is expanding?",
    options: ["Edwin Hubble", "Georges Lemaître", "Albert Einstein", "Fred Hoyle"],
    answer: "Edwin Hubble",
  },
  {
    question: "Who is known for the phrase 'We are made of star stuff'?",
    options: ["Carl Sagan", "Neil deGrasse Tyson", "Stephen Hawking", "Richard Feynman"],
    answer: "Carl Sagan",
  },
  {
    question: "What was Stephen Hawking famous for studying?",
    options: ["Black holes and cosmology", "Planetary geology", "Solar physics", "Asteroid classification"],
    answer: "Black holes and cosmology",
  },
  {
    question: "Who was the first American woman in space?",
    options: ["Sally Ride", "Mae Jemison", "Eileen Collins", "Peggy Whitson"],
    answer: "Sally Ride",
  },

  // MARS MISSIONS & EXPLORATION
  {
    question: "What is the name of the first successful Mars lander?",
    options: ["Viking 1", "Mars Pathfinder", "Curiosity", "Phoenix"],
    answer: "Viking 1",
  },
  {
    question: "What did the Mars rovers Spirit and Opportunity primarily study?",
    options: ["The geology and soil of Mars", "The Martian atmosphere", "Signs of current life", "Mars's moons"],
    answer: "The geology and soil of Mars",
  },
  {
    question: "What is the helicopter that flew on Mars called?",
    options: ["Ingenuity", "Dragonfly", "Phoenix", "Sojourner"],
    answer: "Ingenuity",
  },
  {
    question: "What is the main goal of the Perseverance rover on Mars?",
    options: ["Search for signs of ancient microbial life", "Drill for water", "Build a human habitat", "Map the Martian surface"],
    answer: "Search for signs of ancient microbial life",
  },
  {
    question: "What is ISRO's first Mars mission called?",
    options: ["Mangalyaan", "Chandrayaan", "Aditya", "Astrosat"],
    answer: "Mangalyaan",
  },

  // JUPITER'S MOONS & OUTER SOLAR SYSTEM
  {
    question: "How many known moons does Jupiter have?",
    options: ["More than 90", "4", "16", "50"],
    answer: "More than 90",
  },
  {
    question: "What is the largest moon in the solar system?",
    options: ["Ganymede", "Titan", "Callisto", "Europa"],
    answer: "Ganymede",
  },
  {
    question: "Which moon of Jupiter is thought to have a subsurface ocean?",
    options: ["Europa", "Io", "Ganymede", "Callisto"],
    answer: "Europa",
  },
  {
    question: "Which moon of Jupiter has active volcanoes?",
    options: ["Io", "Europa", "Ganymede", "Callisto"],
    answer: "Io",
  },
  {
    question: "What is Titan known for?",
    options: ["Having a thick atmosphere and lakes of liquid methane", "Being the largest moon in the solar system", "Having active volcanoes", "Having a subsurface ocean"],
    answer: "Having a thick atmosphere and lakes of liquid methane",
  },
  {
    question: "Which moon of Saturn has geysers of water ice?",
    options: ["Enceladus", "Titan", "Mimas", "Rhea"],
    answer: "Enceladus",
  },
  {
    question: "What is Neptune's largest moon called?",
    options: ["Triton", "Nereid", "Proteus", "Despina"],
    answer: "Triton",
  },
  {
    question: "What is unusual about Triton's orbit around Neptune?",
    options: ["It orbits in the opposite direction of Neptune's rotation", "It is perfectly circular", "It is the largest moon in the system", "It is farther than Pluto"],
    answer: "It orbits in the opposite direction of Neptune's rotation",
  },

  // SPACE PHENOMENA
  {
    question: "What is a shooting star?",
    options: ["A meteor burning up in Earth's atmosphere", "A distant star moving fast", "A comet near Earth", "A piece of a planet"],
    answer: "A meteor burning up in Earth's atmosphere",
  },
  {
    question: "What is a tidal locking?",
    options: ["When a moon always shows the same face to its planet", "The Moon causing ocean tides", "A comet locked into orbit", "An asteroid captured by gravity"],
    answer: "When a moon always shows the same face to its planet",
  },
  {
    question: "What is a syzygy?",
    options: ["A straight-line configuration of three celestial bodies", "A type of eclipse", "The orbit of comets", "The alignment of Jupiter's moons"],
    answer: "A straight-line configuration of three celestial bodies",
  },
  {
    question: "What is a lagrange point?",
    options: ["A point of gravitational balance between two bodies", "A type of orbit around the Sun", "A spot on Jupiter's surface", "A gap in Saturn's rings"],
    answer: "A point of gravitational balance between two bodies",
  },
  {
    question: "What is the heliopause?",
    options: ["The boundary where the Sun's solar wind meets interstellar space", "The outer edge of the asteroid belt", "The boundary of the Kuiper Belt", "The Sun's outermost atmospheric layer"],
    answer: "The boundary where the Sun's solar wind meets interstellar space",
  },
  {
    question: "What is solar wind?",
    options: ["A stream of charged particles emitted by the Sun", "Wind on the Sun's surface", "Radiation from solar flares only", "The Sun's gravitational pull"],
    answer: "A stream of charged particles emitted by the Sun",
  },
  {
    question: "What is an exoplanet?",
    options: ["A planet orbiting a star other than the Sun", "A planet outside the asteroid belt", "A dwarf planet", "A moon of Jupiter"],
    answer: "A planet orbiting a star other than the Sun",
  },
  {
    question: "What method detects exoplanets by the dimming of a star?",
    options: ["Transit method", "Radial velocity method", "Direct imaging", "Gravitational microlensing"],
    answer: "Transit method",
  },
  {
    question: "What is the habitable zone?",
    options: ["The region around a star where liquid water could exist on a planet", "Earth's breathable atmosphere", "The safe zone around a black hole", "The area between Mars and Jupiter"],
    answer: "The region around a star where liquid water could exist on a planet",
  },
  {
    question: "What is the Fermi Paradox?",
    options: ["The contradiction between expected alien life and the lack of evidence", "Why Fermi's rocket failed", "The impossibility of faster-than-light travel", "The question of where dark matter is"],
    answer: "The contradiction between expected alien life and the lack of evidence",
  },

  // SPACE AGENCIES & PROGRAMS
  {
    question: "What does NASA stand for?",
    options: ["National Aeronautics and Space Administration", "National Aerospace and Space Agency", "North American Space Authority", "National Astronomy and Space Administration"],
    answer: "National Aeronautics and Space Administration",
  },
  {
    question: "What does ESA stand for?",
    options: ["European Space Agency", "Earth Science Agency", "Exploration Space Academy", "European Satellite Authority"],
    answer: "European Space Agency",
  },
  {
    question: "What is ISRO?",
    options: ["India's space agency", "An international space organization", "A type of satellite", "Israel's space agency"],
    answer: "India's space agency",
  },
  {
    question: "What is JAXA?",
    options: ["Japan's space agency", "A type of rocket", "A satellite communication company", "A joint US-China space project"],
    answer: "Japan's space agency",
  },
  {
    question: "What is Roscosmos?",
    options: ["Russia's space agency", "A type of rocket fuel", "A space station module", "A Soviet-era satellite"],
    answer: "Russia's space agency",
  },
  {
    question: "What is the name of China's space station?",
    options: ["Tiangong", "Shenzhou", "Long March", "Taikong"],
    answer: "Tiangong",
  },
  {
    question: "What is the Cassini mission famous for?",
    options: ["Orbiting Saturn and studying its rings and moons", "Landing on Mars", "Studying Jupiter's moons", "Exploring the asteroid belt"],
    answer: "Orbiting Saturn and studying its rings and moons",
  },
  {
    question: "What was the Rosetta mission?",
    options: ["The first mission to orbit and land on a comet", "A mission to Mars", "A lunar orbiter", "A solar observation mission"],
    answer: "The first mission to orbit and land on a comet",
  },
  {
    question: "What comet did the Rosetta mission study?",
    options: ["67P/Churyumov–Gerasimenko", "Halley's Comet", "Hale-Bopp", "Shoemaker-Levy 9"],
    answer: "67P/Churyumov–Gerasimenko",
  },
  {
    question: "What was the Juno mission's objective?",
    options: ["To study Jupiter's atmosphere and interior", "To land on Jupiter's moons", "To explore the asteroid belt", "To fly past Neptune"],
    answer: "To study Jupiter's atmosphere and interior",
  },

  // MISCELLANEOUS SPACE FACTS
  {
    question: "What is interstellar space?",
    options: ["The space between star systems", "The space between planets", "The space inside a galaxy", "The region near a black hole"],
    answer: "The space between star systems",
  },
  {
    question: "What is the multiverse theory?",
    options: ["The hypothesis that multiple universes exist", "The theory of multiple Big Bangs within one universe", "A type of black hole physics", "The idea that time repeats"],
    answer: "The hypothesis that multiple universes exist",
  },
  {
    question: "What is spectroscopy used for in astronomy?",
    options: ["Analyzing the composition of stars and galaxies from their light", "Measuring distances to stars", "Mapping the surface of planets", "Tracking asteroid orbits"],
    answer: "Analyzing the composition of stars and galaxies from their light",
  },
  {
    question: "What is a globular cluster?",
    options: ["A spherical collection of thousands of stars orbiting a galaxy", "A cluster of galaxies", "A ring of asteroids", "A nebula in the shape of a sphere"],
    answer: "A spherical collection of thousands of stars orbiting a galaxy",
  },
  {
    question: "What is an open cluster?",
    options: ["A loose group of young stars formed from the same nebula", "A cluster of black holes", "A region of old tightly packed stars", "A formation of galaxies"],
    answer: "A loose group of young stars formed from the same nebula",
  },
  {
    question: "What is astrometry?",
    options: ["The measurement of star positions and movements", "The study of asteroids", "The study of planetary atmospheres", "The measurement of galaxy distances"],
    answer: "The measurement of star positions and movements",
  },
  {
    question: "What is the Chandrasekhar limit?",
    options: ["The maximum mass of a stable white dwarf", "The maximum size of a black hole", "The minimum temperature of a star", "The boundary of the solar system"],
    answer: "The maximum mass of a stable white dwarf",
  },
  {
    question: "What is a magnetar?",
    options: ["A neutron star with an extremely strong magnetic field", "A magnetic asteroid", "A type of pulsar with no radiation", "A highly magnetic planet"],
    answer: "A neutron star with an extremely strong magnetic field",
  },
  {
    question: "What is SETI?",
    options: ["The Search for Extraterrestrial Intelligence", "A type of space telescope", "A satellite communication system", "A space exploration treaty"],
    answer: "The Search for Extraterrestrial Intelligence",
  },
  {
    question: "What is the Pioneer plaque?",
    options: ["A message to extraterrestrials on the Pioneer 10 and 11 spacecraft", "A plaque on the Moon from Apollo 11", "A commemorative plate on the ISS", "A marker on Mars from Viking 1"],
    answer: "A message to extraterrestrials on the Pioneer 10 and 11 spacecraft",
  },
  {
    question: "What is the Voyager Golden Record?",
    options: ["A record of sounds and images of Earth sent on Voyager spacecraft", "The log of Voyager's mission data", "A gold-coated solar panel on Voyager", "A record of the first Moon landing"],
    answer: "A record of sounds and images of Earth sent on Voyager spacecraft",
  },
  {
    question: "How many Earth-like planets are estimated to exist in the Milky Way?",
    options: ["Billions", "Hundreds", "Millions", "Just a few"],
    answer: "Billions",
  },
  {
    question: "What is the Drake Equation?",
    options: ["A formula estimating the number of communicating alien civilizations", "An equation for rocket thrust", "A formula for black hole size", "An equation for galaxy formation"],
    answer: "A formula estimating the number of communicating alien civilizations",
  },
  {
    question: "What is cosmic inflation?",
    options: ["The rapid exponential expansion of the early universe", "The gradual expansion of the universe today", "The expansion of a star before a supernova", "The growth of black holes"],
    answer: "The rapid exponential expansion of the early universe",
  },
  {
    question: "What is the fate of the Milky Way and Andromeda galaxies?",
    options: ["They will collide and merge in about 4.5 billion years", "They will drift apart forever", "They will orbit each other indefinitely", "Andromeda will be absorbed by a black hole"],
    answer: "They will collide and merge in about 4.5 billion years",
  },
  {
    question: "What is the Planck length?",
    options: ["The smallest meaningful unit of length in physics", "The diameter of a proton", "The distance light travels in one second", "The size of the observable universe"],
    answer: "The smallest meaningful unit of length in physics",
  },
  {
    question: "What is baryonic matter?",
    options: ["Ordinary matter made of protons, neutrons, and electrons", "Dark matter particles", "Antimatter in space", "Matter inside black holes"],
    answer: "Ordinary matter made of protons, neutrons, and electrons",
  },
  {
    question: "What is the anthropic principle?",
    options: ["The idea that the universe's properties allow for conscious observers", "A method to find life in space", "The study of human adaptation in space", "A principle of rocket propulsion"],
    answer: "The idea that the universe's properties allow for conscious observers",
  },
  {
    question: "What is a wormhole theoretically?",
    options: ["A shortcut through space-time connecting distant regions", "A hole left by a meteor", "The tunnel inside a black hole", "A type of nebula"],
    answer: "A shortcut through space-time connecting distant regions",
  },
{
  question: "What is the term for a star that suddenly increases greatly in brightness and then fades?",
  options: ["Nova", "Pulsar", "Quasar", "Protostar"],
  answer: "Nova",
},
  {
    question: "What happened in the Apollo 13 mission?",
    options: ["An oxygen tank exploded, forcing the crew to return safely", "It was the first Moon landing", "A lunar rover was lost", "The crew walked on the Moon's far side"],
    answer: "An oxygen tank exploded, forcing the crew to return safely",
  },
  {
    question: "What is the Kepler Space Telescope famous for?",
    options: ["Discovering thousands of exoplanets", "Imaging the first black hole", "Mapping the cosmic microwave background", "Observing the Sun's corona"],
    answer: "Discovering thousands of exoplanets",
  },
  {
    question: "What is TESS?",
    options: ["Transiting Exoplanet Survey Satellite", "Tracking Earth's Space Systems", "The European Space Station", "Telescope for Extrasolar System Search"],
    answer: "Transiting Exoplanet Survey Satellite",
  },
  {
    question: "What does the term 'perihelion' mean?",
    options: ["The point in an orbit closest to the Sun", "The point farthest from the Sun", "The midpoint of a planet's orbit", "The crossing point of two orbits"],
    answer: "The point in an orbit closest to the Sun",
  },
  {
    question: "What does the term 'aphelion' mean?",
    options: ["The point in an orbit farthest from the Sun", "The point closest to the Sun", "The start of a planet's orbit", "The orbital speed at its peak"],
    answer: "The point in an orbit farthest from the Sun",
  },
  {
    question: "What is a transit (in exoplanet astronomy)?",
    options: ["When a planet passes in front of its star as seen from Earth", "A satellite crossing another's orbit", "The movement of a comet near a planet", "The Moon crossing the Sun"],
    answer: "When a planet passes in front of its star as seen from Earth",
  },
  {
    question: "What is accretion in astronomy?",
    options: ["The process where material accumulates due to gravity", "The explosion of a star", "The merging of two black holes", "The orbit of a moon around a planet"],
    answer: "The process where material accumulates due to gravity",
  },
  {
    question: "What is the interstellar medium?",
    options: ["Gas and dust that fills the space between stars", "The region between galaxies", "The space between planets in a solar system", "The atmosphere of a star"],
    answer: "Gas and dust that fills the space between stars",
  },
  {
    question: "What is albedo in astronomy?",
    options: ["The reflectivity of a surface", "The mass of a moon", "The brightness of a star", "The size of an asteroid"],
    answer: "The reflectivity of a surface",
  },
  {
    question: "What is retrograde motion?",
    options: ["When a planet appears to move backward in the sky", "A planet spinning in reverse", "An orbit going toward the Sun", "A moon moving away from its planet"],
    answer: "When a planet appears to move backward in the sky",
  },
  {
    question: "What is an ecliptic plane?",
    options: ["The plane of Earth's orbit around the Sun", "The flat surface of a black hole", "The orbit of the Moon around Earth", "The equatorial plane of Jupiter"],
    answer: "The plane of Earth's orbit around the Sun",
  },
  {
    question: "What is the difference between a meteor and a meteoroid?",
    options: ["A meteoroid is in space; a meteor is the streak of light in the atmosphere", "They are the same thing", "A meteor is larger than a meteoroid", "A meteoroid has already hit the ground"],
    answer: "A meteoroid is in space; a meteor is the streak of light in the atmosphere",
  },
  {
    question: "What is the Great Dark Spot?",
    options: ["A storm observed on Neptune", "A crater on Mars", "A region on Jupiter", "A black hole in the Milky Way"],
    answer: "A storm observed on Neptune",
  },
  {
    question: "What is the name of the region between Uranus's orbit and Neptune's?",
    options: ["There is no special name; it is part of the outer solar system", "The Scattered Disc", "The Kuiper Cliff", "The Trans-Neptunian belt"],
    answer: "There is no special name; it is part of the outer solar system",
  },
  {
    question: "What is the name of Saturn's largest and most complex ring division?",
    options: ["Cassini Division", "Keeler Gap", "Encke Gap", "Roche Division"],
    answer: "Cassini Division",
  },
  {
    question: "What is a syzygy eclipse?",
    options: ["An eclipse occurring when Sun, Moon, and Earth align perfectly", "A type of partial lunar eclipse", "An eclipse of a distant star", "A double solar eclipse"],
    answer: "An eclipse occurring when Sun, Moon, and Earth align perfectly",
  },
  {
    question: "What is the name of NASA's first space station?",
    options: ["Skylab", "Mir", "Salyut 1", "Freedom"],
    answer: "Skylab",
  },
  {
    question: "What is the Soviet/Russian space station that operated from 1986 to 2001?",
    options: ["Mir", "Salyut 7", "Soyuz", "Progress"],
    answer: "Mir",
  },
  {
    question: "What fuel do most chemical rockets use?",
    options: ["Liquid hydrogen and liquid oxygen", "Gasoline and compressed air", "Kerosene and water", "Methane and nitrogen"],
    answer: "Liquid hydrogen and liquid oxygen",
  },
  {
    question: "What is ion propulsion?",
    options: ["A thruster that uses electrically accelerated ions for thrust", "A type of nuclear rocket", "A propulsion using solar sails", "Thrust from compressed air"],
    answer: "A thruster that uses electrically accelerated ions for thrust",
  },
  {
    question: "What is the Tsiolkovsky rocket equation?",
    options: ["A formula relating fuel mass, exhaust speed, and change in velocity", "An equation for gravitational pull", "A formula for orbital speed", "An equation for black hole mass"],
    answer: "A formula relating fuel mass, exhaust speed, and change in velocity",
  },
  {
    question: "What is a Dyson sphere (hypothetically)?",
    options: ["A megastructure that harvests energy from a star", "A type of telescope array", "A shield around a planet", "A spherical space station"],
    answer: "A megastructure that harvests energy from a star",
  },
  {
    question: "What is Kepler's first law of planetary motion?",
    options: ["Planets orbit the Sun in ellipses with the Sun at one focus", "Planets move faster farther from the Sun", "All planets orbit the Sun in circles", "Planets orbit at constant speeds"],
    answer: "Planets orbit the Sun in ellipses with the Sun at one focus",
  },
  {
    question: "What is Kepler's second law of planetary motion?",
    options: ["A planet sweeps equal areas in equal times", "All planets have the same orbital period", "Planets orbit in perfect circles", "The Sun orbits the center of the galaxy"],
    answer: "A planet sweeps equal areas in equal times",
  },
  {
    question: "What is the Chandrasekhar limit related to?",
    options: ["The maximum mass of a white dwarf before collapse", "The minimum temperature of a star", "The maximum size of an asteroid", "The distance at which a moon forms"],
    answer: "The maximum mass of a white dwarf before collapse",
  },
  {
    question: "What is the Schwarzschild radius?",
    options: ["The radius at which an object becomes a black hole", "The radius of the observable universe", "The minimum orbit distance around a black hole", "The radius of a neutron star"],
    answer: "The radius at which an object becomes a black hole",
  },
  {
  question: "What is the name of the first privately funded spacecraft to reach space?",
  options: ["SpaceShipOne", "Dragon", "Starship", "New Shepard"],
  answer: "SpaceShipOne",
},
{
  question: "Which planet has the strongest magnetic field in the solar system?",
  options: ["Jupiter", "Earth", "Saturn", "Neptune"],
  answer: "Jupiter",
},
{
  question: "What is the Roche limit?",
  options: ["The distance where a celestial body can be torn apart by gravity", "The edge of a galaxy", "The boundary of a black hole", "The distance to the Moon"],
  answer: "The distance where a celestial body can be torn apart by gravity",
},
{
  question: "Which planet has the highest mountain in the solar system?",
  options: ["Mars", "Earth", "Venus", "Mercury"],
  answer: "Mars",
},
{
  question: "What is the name of the first object discovered in the Kuiper Belt after Pluto?",
  options: ["1992 QB1", "Eris", "Makemake", "Haumea"],
  answer: "1992 QB1",
},
{
  question: "What is the largest known dwarf planet?",
  options: ["Pluto", "Eris", "Ceres", "Haumea"],
  answer: "Pluto",
},
{
  question: "Which spacecraft carried the first animals into orbit?",
  options: ["Sputnik 2", "Vostok 1", "Explorer 1", "Mercury 7"],
  answer: "Sputnik 2",
},
{
  question: "What was the name of the first dog in orbit?",
  options: ["Laika", "Belka", "Strelka", "Zvezdochka"],
  answer: "Laika",
},
{
  question: "Which moon is the second-largest in the solar system?",
  options: ["Titan", "Ganymede", "Callisto", "Io"],
  answer: "Titan",
},
{
  question: "What is the largest canyon in the solar system?",
  options: ["Valles Marineris", "Grand Canyon", "Hellas Basin", "Olympus Chasma"],
  answer: "Valles Marineris",
},
{
  question: "What is the Sun's diameter approximately?",
  options: ["1.39 million km", "139,000 km", "13.9 million km", "500,000 km"],
  answer: "1.39 million km",
},
{
  question: "What is a brown dwarf?",
  options: ["An object between a planet and a star", "A dead star", "A small galaxy", "A black hole"],
  answer: "An object between a planet and a star",
},
{
  question: "Which planet has the most moons currently known?",
  options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  answer: "Saturn",
},
{
  question: "What is the heliocentric model?",
  options: ["A Sun-centered solar system", "An Earth-centered universe", "A galaxy-centered model", "A Moon-centered model"],
  answer: "A Sun-centered solar system",
},
{
  question: "Which spacecraft first flew past Pluto?",
  options: ["New Horizons", "Voyager 2", "Pioneer 10", "Cassini"],
  answer: "New Horizons",
},
{
  question: "What is a rogue planet?",
  options: ["A planet not orbiting any star", "A planet with no atmosphere", "A planet outside the Milky Way", "A destroyed planet"],
  answer: "A planet not orbiting any star",
},
{
  question: "What is the Sun's core temperature approximately?",
  options: ["15 million °C", "5,500 °C", "150,000 °C", "1 million °C"],
  answer: "15 million °C",
},
{
  question: "What is a circumstellar disk?",
  options: ["A disk of gas and dust around a young star", "A planetary ring", "A galaxy disk", "A comet tail"],
  answer: "A disk of gas and dust around a young star",
},
{
  question: "Which mission first landed a probe on Titan?",
  options: ["Huygens", "Cassini", "Voyager 1", "Juno"],
  answer: "Huygens",
},
{
  question: "What is the primary gas in Jupiter's atmosphere?",
  options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon Dioxide"],
  answer: "Hydrogen",
},
{
  question: "Which planet has diamond rain theorized in its atmosphere?",
  options: ["Neptune", "Mercury", "Mars", "Earth"],
  answer: "Neptune",
},
{
  question: "What is the Sun's escape velocity at its surface?",
  options: ["About 618 km/s", "About 11 km/s", "About 50 km/s", "About 100 km/s"],
  answer: "About 618 km/s",
},
{
  question: "What is the name of the first reusable orbital spacecraft?",
  options: ["Space Shuttle Columbia", "Soyuz", "Apollo 11", "Dragon"],
  answer: "Space Shuttle Columbia",
},
{
  question: "Which moon has the most impact craters in the solar system?",
  options: ["Callisto", "Europa", "Titan", "Io"],
  answer: "Callisto",
},
{
  question: "What is a solar prominence?",
  options: ["A large loop of plasma extending from the Sun", "A solar flare", "A sunspot", "A solar eclipse"],
  answer: "A large loop of plasma extending from the Sun",
},
{
  question: "Which exoplanet was the first discovered orbiting a Sun-like star?",
  options: ["51 Pegasi b", "Kepler-22b", "Proxima b", "TRAPPIST-1e"],
  answer: "51 Pegasi b",
},
{
  question: "What is the name of the nearest known exoplanet to Earth?",
  options: ["Proxima Centauri b", "Kepler-186f", "TRAPPIST-1d", "51 Pegasi b"],
  answer: "Proxima Centauri b",
},
{
  question: "Which spacecraft was the first to land on an asteroid?",
  options: ["NEAR Shoemaker", "Hayabusa", "Rosetta", "Dawn"],
  answer: "NEAR Shoemaker",
},
{
  question: "What is the primary component of Saturn's rings?",
  options: ["Water ice", "Rock", "Dust", "Iron"],
  answer: "Water ice",
},
{
  question: "Which planet experiences the fastest winds in the solar system?",
  options: ["Neptune", "Jupiter", "Saturn", "Uranus"],
  answer: "Neptune",
},
{
  question: "What is the name of the first space tourist?",
  options: ["Dennis Tito", "Jeff Bezos", "Elon Musk", "Richard Branson"],
  answer: "Dennis Tito",
},
{
  question: "Which mission first returned samples from an asteroid?",
  options: ["Hayabusa", "OSIRIS-REx", "Dawn", "Rosetta"],
  answer: "Hayabusa",
},
{
  question: "What is a super-Earth?",
  options: ["An exoplanet larger than Earth but smaller than Neptune", "A giant Earth moon", "A habitable planet identical to Earth", "A planet made entirely of rock"],
  answer: "An exoplanet larger than Earth but smaller than Neptune",
},
{
  question: "What is the largest structure in the observable universe?",
  options: ["Hercules–Corona Borealis Great Wall", "Milky Way", "Local Group", "Virgo Cluster"],
  answer: "Hercules–Corona Borealis Great Wall",
},
{
  question: "Which mission first orbited Mercury?",
  options: ["MESSENGER", "Mariner 10", "BepiColombo", "Pioneer 11"],
  answer: "MESSENGER",
},
{
  question: "What is the primary gas in Earth's atmosphere?",
  options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  answer: "Nitrogen",
},
{
  question: "Which planet has the largest moon relative to its size?",
  options: ["Earth", "Jupiter", "Mars", "Saturn"],
  answer: "Earth",
},
{
  question: "What is the name of the brightest galaxy in the Local Group after the Milky Way?",
  options: ["Andromeda", "Triangulum", "Large Magellanic Cloud", "Small Magellanic Cloud"],
  answer: "Andromeda",
},
{
  question: "What is the primary source of energy for a quasar?",
  options: ["A supermassive black hole", "A neutron star", "Nuclear fusion", "Dark matter"],
  answer: "A supermassive black hole",
},
{
  question: "What is a kilonova?",
  options: ["An explosion caused by merging neutron stars", "A giant supernova", "A black hole eruption", "A stellar nursery"],
  answer: "An explosion caused by merging neutron stars",
},
{
  question: "Which mission first photographed Pluto up close?",
  options: ["New Horizons", "Voyager 1", "Cassini", "Juno"],
  answer: "New Horizons",
},
{
  question: "What is the name of the largest impact basin on the Moon?",
  options: ["South Pole–Aitken Basin", "Mare Imbrium", "Tycho", "Copernicus"],
  answer: "South Pole–Aitken Basin",
},
{
  question: "What is the most abundant element in the universe?",
  options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
  answer: "Hydrogen",
},
{
  question: "Which mission first reached interstellar space?",
  options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"],
  answer: "Voyager 1",
},
{
  question: "What is a red dwarf?",
  options: ["A small, cool, long-lived star", "A dying giant star", "A neutron star", "A brown dwarf"],
  answer: "A small, cool, long-lived star",
},
{
  question: "Which moon is known as the 'Death Star Moon' due to its appearance?",
  options: ["Mimas", "Europa", "Titan", "Enceladus"],
  answer: "Mimas",
},
{
  question: "What is the name of the first Chinese rover on Mars?",
  options: ["Zhurong", "Yutu", "Chang'e", "Tianwen"],
  answer: "Zhurong",
},
{
  question: "What is a coronagraph used for?",
  options: ["Studying the Sun's corona", "Measuring star distances", "Detecting asteroids", "Mapping galaxies"],
  answer: "Studying the Sun's corona",
},
{
  question: "Which spacecraft first visited all four giant planets?",
  options: ["Voyager 2", "Voyager 1", "Cassini", "Pioneer 11"],
  answer: "Voyager 2",
},
{
  question: "What is the Roche lobe in astronomy?",
  options: ["A region around a star where orbiting material is gravitationally bound", "A type of nebula", "A black hole boundary", "A planetary ring gap"],
  answer: "A region around a star where orbiting material is gravitationally bound",
},
{
  question: "Which planet has the highest atmospheric pressure at its surface?",
  options: ["Venus", "Earth", "Jupiter", "Mars"],
  answer: "Venus",
},
{
  question: "What is the name of NASA's asteroid sample-return mission?",
  options: ["OSIRIS-REx", "Dawn", "Hayabusa", "Lucy"],
  answer: "OSIRIS-REx",
},
{
  question: "What is the primary purpose of the Lucy mission?",
  options: ["Study Jupiter's Trojan asteroids", "Land on Mars", "Explore Pluto", "Observe the Sun"],
  answer: "Study Jupiter's Trojan asteroids",
},
{
  question: "What is the Sun expected to become before turning into a white dwarf?",
  options: ["Red Giant", "Blue Giant", "Neutron Star", "Black Hole"],
  answer: "Red Giant",
},
{
  question: "Which moon may contain more water than all of Earth's oceans combined?",
  options: ["Europa", "Io", "Mimas", "Phobos"],
  answer: "Europa",
},
{
  question: "What is the name of the first black hole detected through gravitational waves?",
  options: ["GW150914", "M87*", "Cygnus X-1", "Sagittarius A*"],
  answer: "GW150914",
},
{
  question: "Which telescope succeeded the Hubble Space Telescope as NASA's flagship observatory?",
  options: ["James Webb Space Telescope", "Chandra", "Spitzer", "Kepler"],
  answer: "James Webb Space Telescope",
},
{
  question: "What is the estimated number of stars in the Milky Way?",
  options: ["100–400 billion", "10 million", "1 billion", "10 trillion"],
  answer: "100–400 billion",
},
{
  question: "What galaxy will eventually merge with the Milky Way?",
  options: ["Andromeda Galaxy", "Triangulum Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
  answer: "Andromeda Galaxy",
},
];
    


const physicsItems = [
  {
    question: "What is the unit of energy?",
    options: ["Joule", "Newton", "Volt", "Ampere"],
    answer: "Joule",
  },
  {
    question: "Who formulated the laws of motion?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    answer: "Isaac Newton",
  },
  {
    question: "What is the SI unit of power?",
    options: ["Watt", "Joule", "Volt", "Ohm"],
    answer: "Watt",
  },
  {
    question: "What is acceleration due to gravity on Earth?",
    options: ["9.8 m/s²", "5 m/s²", "15 m/s²", "20 m/s²"],
    answer: "9.8 m/s²",
  },
  {
    question: "What is the unit of voltage?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Volt",
  },
  {
    question: "Which particle has a negative charge?",
    options: ["Electron", "Proton", "Neutron", "Photon"],
    answer: "Electron",
  },
  {
    question: "Which particle has no electric charge?",
    options: ["Neutron", "Electron", "Proton", "Ion"],
    answer: "Neutron",
  },
  {
    question: "What is the SI unit of resistance?",
    options: ["Ohm", "Volt", "Ampere", "Joule"],
    answer: "Ohm",
  },
  {
    question: "What type of lens is used in a magnifying glass?",
    options: ["Convex lens", "Concave lens", "Plane mirror", "Prism"],
    answer: "Convex lens",
  },
  {
    question: "What happens to an object in free fall?",
    options: ["It accelerates downward", "It stops moving", "It moves upward", "It loses mass"],
    answer: "It accelerates downward",
  },
  {
    question: "What is the formula for force?",
    options: ["F = ma", "E = mc²", "V = IR", "P = IV"],
    answer: "F = ma",
  },
  {
    question: "What is friction?",
    options: ["A force that opposes motion", "A type of energy", "A magnetic effect", "A sound wave"],
    answer: "A force that opposes motion",
  },
  {
    question: "What is momentum?",
    options: ["Mass × Velocity", "Force × Distance", "Mass × Gravity", "Energy × Time"],
    answer: "Mass × Velocity",
  },
  {
    question: "What is the SI unit of momentum?",
    options: ["kg·m/s", "Newton", "Joule", "Watt"],
    answer: "kg·m/s",
  },
  {
    question: "What is the speed of sound in air approximately?",
    options: ["343 m/s", "100 m/s", "1000 m/s", "3000 m/s"],
    answer: "343 m/s",
  },
  {
    question: "What is the unit of frequency?",
    options: ["Hertz", "Watt", "Volt", "Newton"],
    answer: "Hertz",
  },
  {
    question: "What kind of wave is sound?",
    options: ["Longitudinal wave", "Transverse wave", "Light wave", "Radio wave"],
    answer: "Longitudinal wave",
  },
  {
    question: "Which color of light has the longest wavelength?",
    options: ["Red", "Blue", "Violet", "Green"],
    answer: "Red",
  },
  {
    question: "Which color of light has the shortest wavelength?",
    options: ["Violet", "Red", "Yellow", "Orange"],
    answer: "Violet",
  },
  {
    question: "What is reflection?",
    options: ["Bouncing of light from a surface", "Bending of light", "Splitting of light", "Absorption of light"],
    answer: "Bouncing of light from a surface",
  },
  {
    question: "What is refraction?",
    options: ["Bending of light", "Reflection of light", "Creation of light", "Absorption of light"],
    answer: "Bending of light",
  },
  {
    question: "What is the SI unit of temperature?",
    options: ["Kelvin", "Celsius", "Fahrenheit", "Joule"],
    answer: "Kelvin",
  },
  {
    question: "What instrument measures temperature?",
    options: ["Thermometer", "Barometer", "Ammeter", "Voltmeter"],
    answer: "Thermometer",
  },
  {
    question: "What is heat?",
    options: ["Transfer of thermal energy", "A type of matter", "A force", "A wave"],
    answer: "Transfer of thermal energy",
  },
  {
    question: "What is the SI unit of pressure?",
    options: ["Pascal", "Newton", "Joule", "Watt"],
    answer: "Pascal",
  },
  {
    question: "Which device measures electric current?",
    options: ["Ammeter", "Voltmeter", "Thermometer", "Barometer"],
    answer: "Ammeter",
  },
  {
    question: "Which device measures voltage?",
    options: ["Voltmeter", "Ammeter", "Ohmmeter", "Thermometer"],
    answer: "Voltmeter",
  },
  {
    question: "What is an electric circuit?",
    options: ["A closed path for electric current", "A battery", "A resistor", "A switch"],
    answer: "A closed path for electric current",
  },
  {
    question: "What is Ohm's Law?",
    options: ["V = IR", "F = ma", "E = mc²", "P = IV"],
    answer: "V = IR",
  },
  {
    question: "Which scientist developed the theory of relativity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo", "Tesla"],
    answer: "Albert Einstein",
  },
  {
    question: "What is inertia?",
    options: ["Resistance to change in motion", "A force", "A type of energy", "Gravity"],
    answer: "Resistance to change in motion",
  },
  {
    question: "What is kinetic energy?",
    options: ["Energy of motion", "Stored energy", "Heat energy", "Light energy"],
    answer: "Energy of motion",
  },
  {
    question: "What is potential energy?",
    options: ["Stored energy", "Energy of motion", "Electrical energy", "Heat energy"],
    answer: "Stored energy",
  },
  {
    question: "Which law states energy cannot be created or destroyed?",
    options: ["Law of Conservation of Energy", "Newton's First Law", "Ohm's Law", "Hooke's Law"],
    answer: "Law of Conservation of Energy",
  },
  {
    question: "What is the formula for kinetic energy?",
    options: ["½mv²", "mgh", "F=ma", "V=IR"],
    answer: "½mv²",
  },
  {
    question: "What is the formula for gravitational potential energy?",
    options: ["mgh", "½mv²", "Fd", "P=IV"],
    answer: "mgh",
  },
  {
    question: "What is power?",
    options: ["Rate of doing work", "Force × Distance", "Mass × Velocity", "Energy stored"],
    answer: "Rate of doing work",
  },
  {
    question: "What is work done?",
    options: ["Force × Distance", "Mass × Velocity", "Power × Time", "Energy ÷ Time"],
    answer: "Force × Distance",
  },
  {
    question: "What type of mirror is used in car side mirrors?",
    options: ["Convex mirror", "Concave mirror", "Plane mirror", "Lens"],
    answer: "Convex mirror",
  },
  {
    question: "What type of mirror is used in shaving mirrors?",
    options: ["Concave mirror", "Convex mirror", "Plane mirror", "Glass mirror"],
    answer: "Concave mirror",
  },
  {
    question: "What is density?",
    options: ["Mass per unit volume", "Volume per unit mass", "Weight per area", "Force per volume"],
    answer: "Mass per unit volume",
  },
  {
    question: "What is the SI unit of density?",
    options: ["kg/m³", "g/cm", "Newton", "Pascal"],
    answer: "kg/m³",
  },
  {
    question: "What is buoyancy?",
    options: ["Upward force exerted by a fluid", "Downward force", "Magnetic force", "Electric force"],
    answer: "Upward force exerted by a fluid",
  },
  {
    question: "What is a conductor?",
    options: ["Material that allows electricity to flow", "Material that blocks electricity", "A battery", "An insulator"],
    answer: "Material that allows electricity to flow",
  },
  {
    question: "What is an insulator?",
    options: ["Material that resists electric flow", "Material that conducts electricity", "A battery", "A wire"],
    answer: "Material that resists electric flow",
  },
  {
    question: "What is the charge of a proton?",
    options: ["Positive", "Negative", "Neutral", "Variable"],
    answer: "Positive",
  },
  {
    question: "What is the center of an atom called?",
    options: ["Nucleus", "Electron cloud", "Shell", "Core"],
    answer: "Nucleus",
  },
  {
    question: "Which electromagnetic wave has the highest energy?",
    options: ["Gamma rays", "Radio waves", "Microwaves", "Infrared"],
    answer: "Gamma rays",
  },
  {
    question: "Which electromagnetic wave is used for cooking in microwave ovens?",
    options: ["Microwaves", "Radio waves", "X-rays", "Gamma rays"],
    answer: "Microwaves",
  },
  {
    question: "What is the SI unit of magnetic field strength?",
    options: ["Tesla", "Newton", "Watt", "Volt"],
    answer: "Tesla",
  },
  {
  question: "What is the SI unit of capacitance?",
  options: ["Farad", "Henry", "Tesla", "Coulomb"],
  answer: "Farad",
},
{
  question: "What is the SI unit of electric charge?",
  options: ["Coulomb", "Ampere", "Volt", "Ohm"],
  answer: "Coulomb",
},
{
  question: "Who discovered radioactivity?",
  options: ["Henri Becquerel", "Marie Curie", "Rutherford", "Bohr"],
  answer: "Henri Becquerel",
},
{
  question: "What is the SI unit of inductance?",
  options: ["Henry", "Farad", "Tesla", "Weber"],
  answer: "Henry",
},
{
  question: "What is the SI unit of magnetic flux?",
  options: ["Weber", "Tesla", "Henry", "Farad"],
  answer: "Weber",
},
{
  question: "What is the SI unit of luminous intensity?",
  options: ["Candela", "Lumen", "Lux", "Watt"],
  answer: "Candela",
},
{
  question: "Which scientist discovered the electron?",
  options: ["J. J. Thomson", "Rutherford", "Bohr", "Einstein"],
  answer: "J. J. Thomson",
},
{
  question: "Which scientist discovered the neutron?",
  options: ["James Chadwick", "Bohr", "Thomson", "Faraday"],
  answer: "James Chadwick",
},
{
  question: "What is the SI unit of frequency?",
  options: ["Hertz", "Newton", "Joule", "Tesla"],
  answer: "Hertz",
},
{
  question: "What is the SI unit of work?",
  options: ["Joule", "Watt", "Newton", "Pascal"],
  answer: "Joule",
},
{
  question: "What is absolute zero?",
  options: ["0 Kelvin", "0 Celsius", "−100 Celsius", "100 Kelvin"],
  answer: "0 Kelvin",
},
{
  question: "Which law explains action and reaction?",
  options: ["Newton's Third Law", "Newton's First Law", "Newton's Second Law", "Ohm's Law"],
  answer: "Newton's Third Law",
},
{
  question: "Which law explains inertia?",
  options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Kepler's Law"],
  answer: "Newton's First Law",
},
{
  question: "What is the formula for pressure?",
  options: ["Force ÷ Area", "Mass × Gravity", "Work ÷ Time", "Distance ÷ Time"],
  answer: "Force ÷ Area",
},
{
  question: "What type of energy is stored in a stretched spring?",
  options: ["Elastic potential energy", "Kinetic energy", "Heat energy", "Sound energy"],
  answer: "Elastic potential energy",
},
{
  question: "What is the SI unit of volume?",
  options: ["Cubic meter", "Liter", "Kilogram", "Pascal"],
  answer: "Cubic meter",
},
{
  question: "What is velocity?",
  options: ["Speed with direction", "Distance traveled", "Rate of acceleration", "Mass per volume"],
  answer: "Speed with direction",
},
{
  question: "What is acceleration?",
  options: ["Rate of change of velocity", "Speed", "Distance traveled", "Force"],
  answer: "Rate of change of velocity",
},
{
  question: "What is displacement?",
  options: ["Shortest distance with direction", "Total path traveled", "Speed", "Velocity"],
  answer: "Shortest distance with direction",
},
{
  question: "Which energy source powers the Sun?",
  options: ["Nuclear fusion", "Nuclear fission", "Combustion", "Electricity"],
  answer: "Nuclear fusion",
},
{
  question: "What is the SI unit of mass?",
  options: ["Kilogram", "Gram", "Newton", "Ton"],
  answer: "Kilogram",
},
{
  question: "What is the SI unit of length?",
  options: ["Meter", "Centimeter", "Kilometer", "Inch"],
  answer: "Meter",
},
{
  question: "What is the SI unit of time?",
  options: ["Second", "Minute", "Hour", "Day"],
  answer: "Second",
},
{
  question: "Which electromagnetic wave is used in TV remote controls?",
  options: ["Infrared", "Radio", "Gamma", "X-ray"],
  answer: "Infrared",
},
{
  question: "Which electromagnetic wave is used for medical imaging of bones?",
  options: ["X-rays", "Microwaves", "Radio waves", "Infrared"],
  answer: "X-rays",
},
{
  question: "What is resonance?",
  options: ["Increase in vibration at natural frequency", "Decrease in energy", "Loss of sound", "Heat transfer"],
  answer: "Increase in vibration at natural frequency",
},
{
  question: "What is the SI unit of sound intensity?",
  options: ["Watt per square meter", "Decibel", "Pascal", "Joule"],
  answer: "Watt per square meter",
},
{
  question: "What is a transformer used for?",
  options: ["Changing voltage", "Generating electricity", "Storing energy", "Producing heat"],
  answer: "Changing voltage",
},
{
  question: "What is the frequency of alternating current in the UK?",
  options: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
  answer: "50 Hz",
},
{
  question: "Which scientist discovered electromagnetic induction?",
  options: ["Michael Faraday", "Tesla", "Einstein", "Newton"],
  answer: "Michael Faraday",
},
{
  question: "What is the SI unit of electric power?",
  options: ["Watt", "Joule", "Volt", "Ampere"],
  answer: "Watt",
},
{
  question: "What is a scalar quantity?",
  options: ["Has magnitude only", "Has magnitude and direction", "Has direction only", "Has mass only"],
  answer: "Has magnitude only",
},
{
  question: "What is a vector quantity?",
  options: ["Has magnitude and direction", "Has magnitude only", "Has mass only", "Has speed only"],
  answer: "Has magnitude and direction",
},
{
  question: "Which is a vector quantity?",
  options: ["Force", "Mass", "Temperature", "Energy"],
  answer: "Force",
},
{
  question: "Which is a scalar quantity?",
  options: ["Temperature", "Velocity", "Force", "Acceleration"],
  answer: "Temperature",
},
{
  question: "What is terminal velocity?",
  options: ["Maximum constant falling speed", "Launch speed", "Orbital speed", "Escape speed"],
  answer: "Maximum constant falling speed",
},
{
  question: "What causes lightning?",
  options: ["Electrical discharge", "Magnetism", "Solar wind", "Gravity"],
  answer: "Electrical discharge",
},
{
  question: "What is the unit of sound level?",
  options: ["Decibel", "Hertz", "Pascal", "Watt"],
  answer: "Decibel",
},
{
  question: "What is a photon?",
  options: ["Particle of light", "Particle of sound", "Particle of gravity", "Particle of heat"],
  answer: "Particle of light",
},
{
  question: "What is the formula for density?",
  options: ["Mass ÷ Volume", "Force ÷ Area", "Work ÷ Time", "Distance ÷ Time"],
  answer: "Mass ÷ Volume",
},
{
  question: "What is the SI unit of energy?",
  options: ["Joule", "Newton", "Pascal", "Tesla"],
  answer: "Joule",
},
{
  question: "What is the formula for power?",
  options: ["Work ÷ Time", "Force × Distance", "Mass × Velocity", "Pressure × Volume"],
  answer: "Work ÷ Time",
},
{
  question: "What is the formula for speed?",
  options: ["Distance ÷ Time", "Time ÷ Distance", "Force ÷ Mass", "Mass ÷ Volume"],
  answer: "Distance ÷ Time",
},
{
  question: "What is the SI unit of acceleration?",
  options: ["m/s²", "m/s", "N", "J"],
  answer: "m/s²",
},
{
  question: "What is nuclear fission?",
  options: ["Splitting of a nucleus", "Joining of nuclei", "Electron transfer", "Heat transfer"],
  answer: "Splitting of a nucleus",
},
{
  question: "What is nuclear fusion?",
  options: ["Joining of nuclei", "Splitting of nuclei", "Magnetic attraction", "Electric discharge"],
  answer: "Joining of nuclei",
},
{
  question: "What is the strongest fundamental force?",
  options: ["Strong Nuclear Force", "Gravity", "Electromagnetic Force", "Weak Nuclear Force"],
  answer: "Strong Nuclear Force",
},
{
  question: "What is the weakest fundamental force?",
  options: ["Gravity", "Strong Nuclear Force", "Electromagnetic Force", "Weak Nuclear Force"],
  answer: "Gravity",
},
{
  question: "What is the unit of radioactive activity?",
  options: ["Becquerel", "Curie", "Tesla", "Henry"],
  answer: "Becquerel",
},
{
  question: "What is the study of motion called?",
  options: ["Mechanics", "Optics", "Thermodynamics", "Electronics"],
  answer: "Mechanics",
},
{
  question: "What branch of physics studies heat and temperature?",
  options: ["Thermodynamics", "Optics", "Mechanics", "Electromagnetism"],
  answer: "Thermodynamics",
},
{
  question: "What is entropy a measure of?",
  options: ["Disorder in a system", "Energy", "Force", "Mass"],
  answer: "Disorder in a system",
},
{
  question: "What is the first law of thermodynamics about?",
  options: ["Conservation of energy", "Conservation of momentum", "Gravity", "Electricity"],
  answer: "Conservation of energy",
},
{
  question: "What is the second law of thermodynamics about?",
  options: ["Entropy increases", "Energy is created", "Mass increases", "Force decreases"],
  answer: "Entropy increases",
},
{
  question: "What is specific heat capacity?",
  options: ["Heat needed to raise 1 kg by 1°C", "Heat produced by an object", "Temperature of an object", "Energy lost"],
  answer: "Heat needed to raise 1 kg by 1°C",
},
{
  question: "What is latent heat?",
  options: ["Heat absorbed without temperature change", "Heat causing temperature rise", "Heat from friction", "Heat from electricity"],
  answer: "Heat absorbed without temperature change",
},
{
  question: "Which scale uses absolute zero as zero?",
  options: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
  answer: "Kelvin",
},
{
  question: "What is conduction?",
  options: ["Heat transfer through direct contact", "Heat transfer by waves", "Heat transfer by fluids", "Heat transfer by light"],
  answer: "Heat transfer through direct contact",
},
{
  question: "What is convection?",
  options: ["Heat transfer by fluid movement", "Heat transfer through solids", "Heat transfer by radiation", "Heat transfer by sound"],
  answer: "Heat transfer by fluid movement",
},
{
  question: "What is radiation?",
  options: ["Heat transfer by electromagnetic waves", "Heat transfer through matter", "Sound transfer", "Mass transfer"],
  answer: "Heat transfer by electromagnetic waves",
},
{
  question: "What is a black body?",
  options: ["Perfect absorber of radiation", "Perfect reflector", "Dark object", "Cold object"],
  answer: "Perfect absorber of radiation",
},
{
  question: "What is Hooke's Law?",
  options: ["Force proportional to extension", "Energy conservation", "Pressure law", "Current law"],
  answer: "Force proportional to extension",
},
{
  question: "What is the SI unit of spring constant?",
  options: ["N/m", "J", "Pa", "kg"],
  answer: "N/m",
},
{
  question: "What is simple harmonic motion?",
  options: ["Periodic oscillation about equilibrium", "Circular motion", "Random motion", "Linear motion"],
  answer: "Periodic oscillation about equilibrium",
},
{
  question: "What is amplitude?",
  options: ["Maximum displacement", "Frequency", "Wavelength", "Period"],
  answer: "Maximum displacement",
},
{
  question: "What is period?",
  options: ["Time for one cycle", "Distance of one cycle", "Frequency", "Amplitude"],
  answer: "Time for one cycle",
},
{
  question: "What is wavelength?",
  options: ["Distance between wave crests", "Wave speed", "Wave height", "Wave energy"],
  answer: "Distance between wave crests",
},
{
  question: "What is frequency?",
  options: ["Number of cycles per second", "Wave speed", "Distance", "Amplitude"],
  answer: "Number of cycles per second",
},
{
  question: "What is diffraction?",
  options: ["Bending of waves around obstacles", "Reflection", "Refraction", "Absorption"],
  answer: "Bending of waves around obstacles",
},
{
  question: "What is interference?",
  options: ["Combination of waves", "Reflection of waves", "Absorption of waves", "Creation of waves"],
  answer: "Combination of waves",
},
{
  question: "What is polarization?",
  options: ["Restriction of wave vibrations", "Wave reflection", "Wave absorption", "Wave acceleration"],
  answer: "Restriction of wave vibrations",
},
{
  question: "Which waves can be polarized?",
  options: ["Transverse waves", "Longitudinal waves", "Sound waves", "Pressure waves"],
  answer: "Transverse waves",
},
{
  question: "What is resonance frequency?",
  options: ["Natural vibration frequency", "Maximum frequency", "Minimum frequency", "Average frequency"],
  answer: "Natural vibration frequency",
},
{
  question: "What is centripetal force?",
  options: ["Force toward center of circle", "Outward force", "Gravitational force", "Friction force"],
  answer: "Force toward center of circle",
},
{
  question: "What is angular velocity measured in?",
  options: ["rad/s", "m/s", "N", "Hz"],
  answer: "rad/s",
},
{
  question: "What is torque?",
  options: ["Turning effect of force", "Linear force", "Energy", "Momentum"],
  answer: "Turning effect of force",
},
{
  question: "What is the SI unit of torque?",
  options: ["N·m", "J", "Pa", "kg"],
  answer: "N·m",
},
{
  question: "What is equilibrium?",
  options: ["Balanced forces", "Unbalanced forces", "Motion", "Acceleration"],
  answer: "Balanced forces",
},
{
  question: "What is static friction?",
  options: ["Friction preventing motion", "Friction during motion", "Air resistance", "Fluid drag"],
  answer: "Friction preventing motion",
},
{
  question: "What is kinetic friction?",
  options: ["Friction during motion", "Friction at rest", "Gravity", "Magnetism"],
  answer: "Friction during motion",
},
{
  question: "What is drag force?",
  options: ["Resistance from fluid", "Gravitational force", "Magnetic force", "Spring force"],
  answer: "Resistance from fluid",
},
{
  question: "What is viscosity?",
  options: ["Resistance of fluid to flow", "Density", "Pressure", "Temperature"],
  answer: "Resistance of fluid to flow",
},
{
  question: "What is Bernoulli's principle?",
  options: ["Faster fluid has lower pressure", "Higher pressure increases speed", "Energy is created", "Mass is conserved"],
  answer: "Faster fluid has lower pressure",
},
{
  question: "What is Pascal's principle?",
  options: ["Pressure applied is transmitted equally", "Energy conservation", "Heat transfer", "Electric flow"],
  answer: "Pressure applied is transmitted equally",
},
{
  question: "What is Archimedes' principle?",
  options: ["Buoyant force equals displaced fluid weight", "Gravity law", "Motion law", "Pressure law"],
  answer: "Buoyant force equals displaced fluid weight",
},
{
  question: "What is fluid pressure caused by?",
  options: ["Weight of fluid", "Heat", "Electricity", "Magnetism"],
  answer: "Weight of fluid",
},
{
  question: "What is hydrostatic pressure?",
  options: ["Pressure due to fluid at rest", "Moving fluid pressure", "Air pressure", "Electric pressure"],
  answer: "Pressure due to fluid at rest",
},
{
  question: "What is atmospheric pressure at sea level approximately?",
  options: ["101,325 Pa", "1,000 Pa", "10,000 Pa", "500,000 Pa"],
  answer: "101,325 Pa",
},
{
  question: "What instrument measures atmospheric pressure?",
  options: ["Barometer", "Thermometer", "Voltmeter", "Ammeter"],
  answer: "Barometer",
},
{
  question: "What is Young's modulus?",
  options: ["Measure of stiffness", "Measure of density", "Measure of heat", "Measure of charge"],
  answer: "Measure of stiffness",
},
{
  question: "What is stress?",
  options: ["Force per unit area", "Mass per volume", "Energy per second", "Velocity change"],
  answer: "Force per unit area",
},
{
  question: "What is strain?",
  options: ["Change in length divided by original length", "Force per area", "Energy stored", "Pressure"],
  answer: "Change in length divided by original length",
},
{
  question: "What is elastic deformation?",
  options: ["Returns to original shape", "Permanent deformation", "Breaks", "Melts"],
  answer: "Returns to original shape",
},
{
  question: "What is plastic deformation?",
  options: ["Permanent shape change", "Temporary shape change", "Melting", "Expansion"],
  answer: "Permanent shape change",
},
{
  question: "What is the SI unit of stress?",
  options: ["Pascal", "Newton", "Joule", "Watt"],
  answer: "Pascal",
},
{
  question: "What is thermal expansion?",
  options: ["Increase in size with temperature", "Decrease in size", "Loss of mass", "Gain of pressure"],
  answer: "Increase in size with temperature",
},
{
  question: "What is coefficient of expansion?",
  options: ["Rate of expansion per degree", "Rate of cooling", "Heat capacity", "Density change"],
  answer: "Rate of expansion per degree",
},
{
  question: "What is an ideal gas?",
  options: ["Gas obeying gas laws perfectly", "Cold gas", "Heavy gas", "Hot gas"],
  answer: "Gas obeying gas laws perfectly",
},
{
  question: "What is Boyle's Law?",
  options: ["Pressure inversely proportional to volume", "Pressure proportional to volume", "Volume proportional to temperature", "Energy conservation"],
  answer: "Pressure inversely proportional to volume",
},
{
  question: "What is Charles's Law?",
  options: ["Volume proportional to temperature", "Pressure proportional to volume", "Mass proportional to force", "Energy proportional to work"],
  answer: "Volume proportional to temperature",
},
{
  question: "What is the ideal gas equation?",
  options: ["PV = nRT", "F = ma", "V = IR", "E = mc²"],
  answer: "PV = nRT",
},
// Physics Questions 151–220

{
  question: "What is Avogadro's number approximately?",
  options: ["6.022 × 10²³", "3 × 10⁸", "9.8", "1.6 × 10⁻¹⁹"],
  answer: "6.022 × 10²³",
},
{
  question: "What is the SI unit of amount of substance?",
  options: ["Mole", "Gram", "Kilogram", "Atom"],
  answer: "Mole",
},
{
  question: "What is Brownian motion?",
  options: ["Random motion of particles", "Circular motion", "Wave motion", "Rotational motion"],
  answer: "Random motion of particles",
},
{
  question: "What is the kinetic theory of gases based on?",
  options: ["Motion of particles", "Magnetic fields", "Gravity", "Electric current"],
  answer: "Motion of particles",
},
{
  question: "Which particle carries a positive charge?",
  options: ["Proton", "Electron", "Neutron", "Photon"],
  answer: "Proton",
},
{
  question: "What is the elementary charge?",
  options: ["1.6 × 10⁻¹⁹ C", "9.8 C", "6.022 × 10²³ C", "3 × 10⁸ C"],
  answer: "1.6 × 10⁻¹⁹ C",
},
{
  question: "What is Coulomb's Law about?",
  options: ["Electric force between charges", "Magnetic force", "Gravity", "Pressure"],
  answer: "Electric force between charges",
},
{
  question: "What is an electric field?",
  options: ["Region where charges experience force", "Region of heat", "Region of pressure", "Region of sound"],
  answer: "Region where charges experience force",
},
{
  question: "What is the SI unit of electric field strength?",
  options: ["N/C", "Volt", "Ampere", "Ohm"],
  answer: "N/C",
},
{
  question: "What is electric potential energy?",
  options: ["Energy due to position in electric field", "Heat energy", "Sound energy", "Kinetic energy"],
  answer: "Energy due to position in electric field",
},
{
  question: "What is capacitance?",
  options: ["Ability to store electric charge", "Resistance to current", "Power output", "Magnetic strength"],
  answer: "Ability to store electric charge",
},
{
  question: "What device stores electrical energy?",
  options: ["Capacitor", "Resistor", "Transformer", "Motor"],
  answer: "Capacitor",
},
{
  question: "What is direct current (DC)?",
  options: ["Current in one direction", "Alternating current", "Magnetic current", "Static charge"],
  answer: "Current in one direction",
},
{
  question: "What is alternating current (AC)?",
  options: ["Current changing direction periodically", "Current flowing one way", "Static current", "Stored current"],
  answer: "Current changing direction periodically",
},
{
  question: "Who invented the AC power system?",
  options: ["Nikola Tesla", "Edison", "Newton", "Einstein"],
  answer: "Nikola Tesla",
},
{
  question: "What is electromagnetism?",
  options: ["Relationship between electricity and magnetism", "Heat and light", "Mass and force", "Energy and pressure"],
  answer: "Relationship between electricity and magnetism",
},
{
  question: "What is a magnetic field?",
  options: ["Region where magnetic forces act", "Electric field", "Pressure field", "Gravity field"],
  answer: "Region where magnetic forces act",
},
{
  question: "What is Earth's magnetic field commonly called?",
  options: ["Magnetosphere", "Atmosphere", "Lithosphere", "Hydrosphere"],
  answer: "Magnetosphere",
},
{
  question: "What is electromagnetic induction?",
  options: ["Generating voltage from changing magnetic field", "Creating heat", "Producing sound", "Generating gravity"],
  answer: "Generating voltage from changing magnetic field",
},
{
  question: "Who discovered electromagnetic induction?",
  options: ["Michael Faraday", "Newton", "Tesla", "Einstein"],
  answer: "Michael Faraday",
},
{
  question: "What is Lenz's Law?",
  options: ["Induced current opposes change causing it", "Energy conservation law", "Gravity law", "Wave law"],
  answer: "Induced current opposes change causing it",
},
{
  question: "What is a solenoid?",
  options: ["Coil of wire producing magnetic field", "Battery", "Capacitor", "Mirror"],
  answer: "Coil of wire producing magnetic field",
},
{
  question: "What is an electromagnet?",
  options: ["Magnet created by electric current", "Permanent magnet", "Natural magnet", "Radio wave"],
  answer: "Magnet created by electric current",
},
{
  question: "What is the SI unit of magnetic flux density?",
  options: ["Tesla", "Weber", "Henry", "Farad"],
  answer: "Tesla",
},
{
  question: "What is the photoelectric effect?",
  options: ["Emission of electrons by light", "Reflection of light", "Refraction of light", "Absorption of sound"],
  answer: "Emission of electrons by light",
},
{
  question: "Who explained the photoelectric effect?",
  options: ["Albert Einstein", "Newton", "Tesla", "Faraday"],
  answer: "Albert Einstein",
},
{
  question: "What is a quantum?",
  options: ["Smallest discrete amount of energy", "Type of atom", "Force", "Wave"],
  answer: "Smallest discrete amount of energy",
},
{
  question: "Who introduced quantum theory?",
  options: ["Max Planck", "Einstein", "Bohr", "Rutherford"],
  answer: "Max Planck",
},
{
  question: "What is Planck's constant symbol?",
  options: ["h", "c", "G", "k"],
  answer: "h",
},
{
  question: "What is wave-particle duality?",
  options: ["Matter and light show wave and particle properties", "Only waves exist", "Only particles exist", "Energy disappears"],
  answer: "Matter and light show wave and particle properties",
},
{
  question: "What is a nucleus?",
  options: ["Central core of atom", "Electron cloud", "Wave", "Photon"],
  answer: "Central core of atom",
},
{
  question: "Who discovered the atomic nucleus?",
  options: ["Ernest Rutherford", "Bohr", "Thomson", "Einstein"],
  answer: "Ernest Rutherford",
},
{
  question: "What is an isotope?",
  options: ["Atoms with same protons but different neutrons", "Atoms with different protons", "Charged atoms", "Molecules"],
  answer: "Atoms with same protons but different neutrons",
},
{
  question: "What is radioactive decay?",
  options: ["Spontaneous emission of radiation", "Absorption of energy", "Heating process", "Cooling process"],
  answer: "Spontaneous emission of radiation",
},
{
  question: "What are alpha particles?",
  options: ["Helium nuclei", "Electrons", "Photons", "Neutrons"],
  answer: "Helium nuclei",
},
{
  question: "What are beta particles?",
  options: ["High-speed electrons", "Protons", "Photons", "Helium nuclei"],
  answer: "High-speed electrons",
},
{
  question: "What are gamma rays?",
  options: ["High-energy electromagnetic radiation", "Sound waves", "Particles", "Magnetic waves"],
  answer: "High-energy electromagnetic radiation",
},
{
  question: "Which radiation has the highest penetrating power?",
  options: ["Gamma rays", "Beta particles", "Alpha particles", "Infrared"],
  answer: "Gamma rays",
},
{
  question: "What is half-life?",
  options: ["Time for half radioactive nuclei to decay", "Half a second", "Half the energy", "Half the mass"],
  answer: "Time for half radioactive nuclei to decay",
},
{
  question: "What is Einstein's famous equation?",
  options: ["E = mc²", "F = ma", "V = IR", "PV = nRT"],
  answer: "E = mc²",
},
{
  question: "What does c represent in E = mc²?",
  options: ["Speed of light", "Charge", "Current", "Capacitance"],
  answer: "Speed of light",
},
{
  question: "What is special relativity mainly concerned with?",
  options: ["Objects moving at high speed", "Gravity", "Heat", "Electric circuits"],
  answer: "Objects moving at high speed",
},
{
  question: "What is time dilation?",
  options: ["Time passes differently at high speeds", "Time stops", "Time speeds up always", "Time disappears"],
  answer: "Time passes differently at high speeds",
},
{
  question: "What is length contraction?",
  options: ["Objects shorten at high speeds", "Objects expand", "Objects disappear", "Objects gain mass"],
  answer: "Objects shorten at high speeds",
},
{
  question: "What is mass-energy equivalence?",
  options: ["Mass can be converted into energy", "Mass equals force", "Energy equals pressure", "Mass equals speed"],
  answer: "Mass can be converted into energy",
},
{
  question: "What is a semiconductor?",
  options: ["Material between conductor and insulator", "Perfect conductor", "Perfect insulator", "Magnet"],
  answer: "Material between conductor and insulator",
},
{
  question: "What is a diode?",
  options: ["Allows current in one direction", "Stores charge", "Measures voltage", "Produces sound"],
  answer: "Allows current in one direction",
},
{
  question: "What is a transistor?",
  options: ["Electronic switch or amplifier", "Battery", "Resistor", "Motor"],
  answer: "Electronic switch or amplifier",
},
{
  question: "What is superconductivity?",
  options: ["Zero electrical resistance", "Infinite resistance", "Magnetic repulsion only", "Heat conduction"],
  answer: "Zero electrical resistance",
},
{
  question: "At what condition does superconductivity occur?",
  options: ["Very low temperatures", "High temperatures", "Room temperature always", "High pressure only"],
  answer: "Very low temperatures",
},
{
  question: "What is plasma?",
  options: ["Ionized state of matter", "Solid", "Liquid", "Gas"],
  answer: "Ionized state of matter",
},
{
  question: "Which state of matter is most common in stars?",
  options: ["Plasma", "Solid", "Liquid", "Gas"],
  answer: "Plasma",
},
{
  question: "What is nanotechnology concerned with?",
  options: ["Matter at nanometer scale", "Large machines", "Astronomy", "Sound waves"],
  answer: "Matter at nanometer scale",
},
{
  question: "What is an LED?",
  options: ["Light Emitting Diode", "Low Energy Device", "Light Energy Detector", "Laser Emission Device"],
  answer: "Light Emitting Diode",
},
{
  question: "What is a laser?",
  options: ["Coherent beam of light", "Sound wave", "Electric current", "Magnetic field"],
  answer: "Coherent beam of light",
},
{
  question: "What does LASER stand for?",
  options: ["Light Amplification by Stimulated Emission of Radiation", "Light And Sound Energy Reflection", "Low Amplified Signal Energy Radiation", "None"],
  answer: "Light Amplification by Stimulated Emission of Radiation",
},
{
  question: "What branch of physics studies light?",
  options: ["Optics", "Mechanics", "Thermodynamics", "Nuclear Physics"],
  answer: "Optics",
},
{
  question: "What is an optical fiber?",
  options: ["Thin fiber transmitting light", "Electric wire", "Magnetic cable", "Sound tube"],
  answer: "Thin fiber transmitting light",
},
{
  question: "What phenomenon allows optical fibers to work?",
  options: ["Total internal reflection", "Diffraction", "Polarization", "Interference"],
  answer: "Total internal reflection",
},
{
  question: "What is total internal reflection?",
  options: ["Complete reflection inside a medium", "Refraction", "Diffraction", "Absorption"],
  answer: "Complete reflection inside a medium",
},
{
  question: "What is the SI unit of luminous flux?",
  options: ["Lumen", "Lux", "Candela", "Watt"],
  answer: "Lumen",
},
{
  question: "What is lux used to measure?",
  options: ["Illuminance", "Force", "Energy", "Power"],
  answer: "Illuminance",
},
{
  question: "What is the study of atomic nuclei called?",
  options: ["Nuclear Physics", "Optics", "Mechanics", "Thermodynamics"],
  answer: "Nuclear Physics",
},
{
  question: "What is the study of very small particles called?",
  options: ["Particle Physics", "Mechanics", "Optics", "Acoustics"],
  answer: "Particle Physics",
},
{
  question: "What is the Higgs boson often called?",
  options: ["God Particle", "Light Particle", "Gravity Particle", "Wave Particle"],
  answer: "God Particle",
},
{
  question: "What particle carries electromagnetic force?",
  options: ["Photon", "Electron", "Neutron", "Proton"],
  answer: "Photon",
},
{
  question: "What is the SI unit of power again?",
  options: ["Watt", "Volt", "Ampere", "Newton"],
  answer: "Watt",
},
{
  question: "What is the branch of physics dealing with sound?",
  options: ["Acoustics", "Optics", "Mechanics", "Thermodynamics"],
  answer: "Acoustics",
},
{
  question: "What is ultrasound?",
  options: ["Sound above 20,000 Hz", "Visible light", "Radio wave", "X-ray"],
  answer: "Sound above 20,000 Hz",
},
{
  question: "What is infrasound?",
  options: ["Sound below 20 Hz", "Sound above 20 kHz", "Visible light", "Gamma radiation"],
  answer: "Sound below 20 Hz",
},
{
  question: "What is the Doppler Effect?",
  options: ["Change in observed frequency due to motion", "Change in mass", "Change in temperature", "Change in pressure"],
  answer: "Change in observed frequency due to motion",
},
// Physics Questions 221–300

{
  question: "What is acoustics?",
  options: ["Study of sound", "Study of light", "Study of heat", "Study of atoms"],
  answer: "Study of sound",
},
{
  question: "What is resonance?",
  options: ["Large vibration at natural frequency", "Heat transfer", "Light reflection", "Magnetic effect"],
  answer: "Large vibration at natural frequency",
},
{
  question: "What is an echo?",
  options: ["Reflected sound", "Refracted sound", "Absorbed sound", "Generated sound"],
  answer: "Reflected sound",
},
{
  question: "What is sonar used for?",
  options: ["Detecting objects underwater", "Measuring temperature", "Generating electricity", "Measuring pressure"],
  answer: "Detecting objects underwater",
},
{
  question: "What is radar used for?",
  options: ["Detecting objects using radio waves", "Measuring sound", "Generating heat", "Measuring mass"],
  answer: "Detecting objects using radio waves",
},
{
  question: "What type of wave is light?",
  options: ["Electromagnetic wave", "Sound wave", "Water wave", "Mechanical wave"],
  answer: "Electromagnetic wave",
},
{
  question: "What type of wave requires a medium?",
  options: ["Sound wave", "Light wave", "Radio wave", "X-ray"],
  answer: "Sound wave",
},
{
  question: "What is the SI unit of wave frequency?",
  options: ["Hertz", "Joule", "Newton", "Tesla"],
  answer: "Hertz",
},
{
  question: "What is wave speed equal to?",
  options: ["Frequency × Wavelength", "Mass × Velocity", "Force × Distance", "Energy ÷ Time"],
  answer: "Frequency × Wavelength",
},
{
  question: "What is constructive interference?",
  options: ["Waves combine to increase amplitude", "Waves cancel completely", "Waves reflect", "Waves refract"],
  answer: "Waves combine to increase amplitude",
},
{
  question: "What is destructive interference?",
  options: ["Waves cancel each other", "Waves increase amplitude", "Waves accelerate", "Waves reflect"],
  answer: "Waves cancel each other",
},
{
  question: "What is diffraction most noticeable with?",
  options: ["Long wavelengths", "Short wavelengths", "High temperatures", "Strong magnets"],
  answer: "Long wavelengths",
},
{
  question: "What is refraction caused by?",
  options: ["Change in wave speed", "Change in amplitude", "Change in mass", "Change in force"],
  answer: "Change in wave speed",
},
{
  question: "Which color bends most in a prism?",
  options: ["Violet", "Red", "Yellow", "Orange"],
  answer: "Violet",
},
{
  question: "Which color bends least in a prism?",
  options: ["Red", "Blue", "Green", "Violet"],
  answer: "Red",
},
{
  question: "What is dispersion of light?",
  options: ["Splitting white light into colors", "Reflection of light", "Absorption of light", "Polarization"],
  answer: "Splitting white light into colors",
},
{
  question: "What forms a rainbow?",
  options: ["Refraction and reflection in water droplets", "Gravity", "Magnetism", "Pressure"],
  answer: "Refraction and reflection in water droplets",
},
{
  question: "What is a real image?",
  options: ["Image formed by actual light rays", "Image seen only in mirrors", "Virtual image", "Digital image"],
  answer: "Image formed by actual light rays",
},
{
  question: "What is a virtual image?",
  options: ["Image formed by apparent rays", "Real projection", "Physical object", "Laser image"],
  answer: "Image formed by apparent rays",
},
{
  question: "Which mirror always forms a virtual image?",
  options: ["Convex mirror", "Concave mirror", "Parabolic mirror", "Reflector"],
  answer: "Convex mirror",
},
{
  question: "What is the focal point of a lens?",
  options: ["Point where rays meet", "Center of lens", "Edge of lens", "Mirror surface"],
  answer: "Point where rays meet",
},
{
  question: "What is magnification?",
  options: ["Ratio of image size to object size", "Distance to image", "Light intensity", "Wave speed"],
  answer: "Ratio of image size to object size",
},
{
  question: "What instrument uses lenses to see tiny objects?",
  options: ["Microscope", "Telescope", "Periscope", "Spectroscope"],
  answer: "Microscope",
},
{
  question: "What instrument is used to observe distant stars?",
  options: ["Telescope", "Microscope", "Barometer", "Thermometer"],
  answer: "Telescope",
},
{
  question: "What is a spectroscope used for?",
  options: ["Analyzing light spectra", "Measuring force", "Measuring pressure", "Measuring sound"],
  answer: "Analyzing light spectra",
},
{
  question: "What is the visible spectrum?",
  options: ["Range of light visible to humans", "Radio waves", "X-rays", "Gamma rays"],
  answer: "Range of light visible to humans",
},
{
  question: "Which electromagnetic wave has the longest wavelength?",
  options: ["Radio waves", "Microwaves", "Infrared", "Gamma rays"],
  answer: "Radio waves",
},
{
  question: "Which electromagnetic wave has the shortest wavelength?",
  options: ["Gamma rays", "X-rays", "Ultraviolet", "Radio waves"],
  answer: "Gamma rays",
},
{
  question: "What are microwaves commonly used for?",
  options: ["Communication and cooking", "X-ray imaging", "Nuclear reactions", "Sound recording"],
  answer: "Communication and cooking",
},
{
  question: "What are infrared waves associated with?",
  options: ["Heat", "Radio transmission", "Nuclear decay", "Electric current"],
  answer: "Heat",
},
{
  question: "What are ultraviolet rays known for?",
  options: ["Causing sunburn", "Producing sound", "Creating gravity", "Generating pressure"],
  answer: "Causing sunburn",
},
{
  question: "What are X-rays mainly used for?",
  options: ["Medical imaging", "Cooking food", "Radio broadcasts", "Heating"],
  answer: "Medical imaging",
},
{
  question: "What are gamma rays produced by?",
  options: ["Nuclear processes", "Sound waves", "Magnets", "Water waves"],
  answer: "Nuclear processes",
},
{
  question: "What is nuclear energy obtained from?",
  options: ["Atomic nuclei", "Chemical bonds", "Gravity", "Sound"],
  answer: "Atomic nuclei",
},
{
  question: "What is a nuclear reactor used for?",
  options: ["Generating electricity", "Producing sound", "Creating gravity", "Generating pressure"],
  answer: "Generating electricity",
},
{
  question: "What is nuclear fusion?",
  options: ["Joining small nuclei", "Splitting nuclei", "Creating atoms", "Destroying energy"],
  answer: "Joining small nuclei",
},
{
  question: "What powers hydrogen bombs?",
  options: ["Nuclear fusion", "Nuclear fission", "Chemical energy", "Electricity"],
  answer: "Nuclear fusion",
},
{
  question: "What powers most nuclear power plants?",
  options: ["Nuclear fission", "Fusion", "Solar energy", "Wind energy"],
  answer: "Nuclear fission",
},
{
  question: "What is chain reaction?",
  options: ["Self-sustaining series of reactions", "Single reaction", "Heat transfer", "Magnetic effect"],
  answer: "Self-sustaining series of reactions",
},
{
  question: "What is antimatter?",
  options: ["Matter with opposite charges", "Dark matter", "Plasma", "Energy"],
  answer: "Matter with opposite charges",
},
{
  question: "What happens when matter meets antimatter?",
  options: ["Annihilation occurs", "Fusion occurs", "Nothing happens", "Freezing occurs"],
  answer: "Annihilation occurs",
},
{
  question: "What is dark matter?",
  options: ["Invisible matter detected by gravity", "Black-colored matter", "Antimatter", "Plasma"],
  answer: "Invisible matter detected by gravity",
},
{
  question: "What is dark energy?",
  options: ["Energy causing universe expansion", "Nuclear energy", "Heat energy", "Solar energy"],
  answer: "Energy causing universe expansion",
},
{
  question: "What is cosmology?",
  options: ["Study of the universe", "Study of atoms", "Study of sound", "Study of electricity"],
  answer: "Study of the universe",
},
{
  question: "What is the Big Bang theory?",
  options: ["Theory of universe origin", "Theory of gravity", "Theory of sound", "Theory of electricity"],
  answer: "Theory of universe origin",
},
{
  question: "What is the Sun expected to become before turning into a white dwarf?",
  options: ["Red Giant", "Neutron Star", "Black Hole", "Blue Giant"],
  answer: "Red Giant",
},
{
  question: "What is escape velocity?",
  options: ["Minimum speed to escape gravity", "Maximum speed", "Wave speed", "Sound speed"],
  answer: "Minimum speed to escape gravity",
},
{
  question: "What is the approximate escape velocity from Earth?",
  options: ["11.2 km/s", "5 km/s", "20 km/s", "50 km/s"],
  answer: "11.2 km/s",
},
{
  question: "What is a satellite?",
  options: ["Object orbiting another object", "A star", "A galaxy", "A black hole"],
  answer: "Object orbiting another object",
},
{
  question: "What keeps planets in orbit around the Sun?",
  options: ["Gravity", "Magnetism", "Pressure", "Electricity"],
  answer: "Gravity",
},
{
  question: "What keeps the Moon orbiting Earth?",
  options: ["Gravity", "Magnetism", "Wind", "Pressure"],
  answer: "Gravity",
},
{
  question: "What is orbital velocity?",
  options: ["Speed needed to stay in orbit", "Escape speed", "Sound speed", "Light speed"],
  answer: "Speed needed to stay in orbit",
},
{
  question: "What is geostationary orbit?",
  options: ["Satellite appears fixed over Earth", "Orbit around Moon", "Polar orbit", "Elliptical orbit"],
  answer: "Satellite appears fixed over Earth",
},
{
  question: "What is a space probe?",
  options: ["Uncrewed exploration spacecraft", "Space station", "Rocket fuel", "Satellite dish"],
  answer: "Uncrewed exploration spacecraft",
},
{
  question: "What is rocket propulsion based on?",
  options: ["Newton's Third Law", "Ohm's Law", "Boyle's Law", "Hooke's Law"],
  answer: "Newton's Third Law",
},
{
  question: "What is thrust?",
  options: ["Force pushing a rocket forward", "Rocket fuel", "Rocket mass", "Rocket speed"],
  answer: "Force pushing a rocket forward",
},
{
  question: "What is specific impulse?",
  options: ["Efficiency of rocket engines", "Rocket weight", "Rocket pressure", "Rocket size"],
  answer: "Efficiency of rocket engines",
},
{
  question: "What is the SI unit of impulse?",
  options: ["N·s", "J", "Pa", "W"],
  answer: "N·s",
},
{
  question: "Impulse equals?",
  options: ["Force × Time", "Force × Distance", "Mass × Velocity", "Energy × Time"],
  answer: "Force × Time",
},
{
  question: "What is conservation of momentum?",
  options: ["Total momentum remains constant", "Energy increases", "Mass disappears", "Velocity remains zero"],
  answer: "Total momentum remains constant",
},
{
  question: "What is an elastic collision?",
  options: ["Momentum and energy conserved", "Only momentum conserved", "Only energy conserved", "Nothing conserved"],
  answer: "Momentum and energy conserved",
},
{
  question: "What is an inelastic collision?",
  options: ["Momentum conserved but energy lost", "Nothing conserved", "Energy conserved only", "Perfect collision"],
  answer: "Momentum conserved but energy lost",
},
{
  question: "What is center of mass?",
  options: ["Average position of mass", "Geometric center", "Highest point", "Lowest point"],
  answer: "Average position of mass",
},
{
  question: "What is rotational inertia also called?",
  options: ["Moment of inertia", "Torque", "Momentum", "Angular force"],
  answer: "Moment of inertia",
},
{
  question: "What is angular momentum?",
  options: ["Rotational equivalent of momentum", "Rotational force", "Rotational energy", "Rotational pressure"],
  answer: "Rotational equivalent of momentum",
},
{
  question: "What law explains conservation of angular momentum?",
  options: ["Angular momentum remains constant if no external torque acts", "Newton's First Law", "Ohm's Law", "Hooke's Law"],
  answer: "Angular momentum remains constant if no external torque acts",
},
{
  question: "What is gyroscope motion based on?",
  options: ["Conservation of angular momentum", "Gravity", "Magnetism", "Pressure"],
  answer: "Conservation of angular momentum",
},
{
  question: "What is the SI unit of angular momentum?",
  options: ["kg·m²/s", "N", "J", "W"],
  answer: "kg·m²/s",
},
{
  question: "What is modern physics mainly concerned with?",
  options: ["Relativity and quantum mechanics", "Classical mechanics", "Heat transfer", "Fluid flow"],
  answer: "Relativity and quantum mechanics",
},
{
  question: "What are the two pillars of modern physics?",
  options: ["Quantum Mechanics and Relativity", "Mechanics and Optics", "Thermodynamics and Acoustics", "Electricity and Magnetism"],
  answer: "Quantum Mechanics and Relativity",
},
{
  question: "What is quantum mechanics?",
  options: ["Study of matter and energy at atomic scales", "Study of planets", "Study of sound", "Study of weather"],
  answer: "Study of matter and energy at atomic scales",
},
{
  question: "What is Schrödinger famous for?",
  options: ["Wave equation in quantum mechanics", "Gravity law", "Electric law", "Sound law"],
  answer: "Wave equation in quantum mechanics",
},
{
  question: "What principle states position and momentum cannot both be known exactly?",
  options: ["Heisenberg Uncertainty Principle", "Pauli Principle", "Ohm's Law", "Newton's Law"],
  answer: "Heisenberg Uncertainty Principle",
},
{
  question: "Who proposed the uncertainty principle?",
  options: ["Werner Heisenberg", "Einstein", "Bohr", "Planck"],
  answer: "Werner Heisenberg",
},
{
  question: "What is physics?",
  options: ["Study of matter, energy, and their interactions", "Study of life", "Study of chemicals", "Study of Earth"],
  answer: "Study of matter, energy, and their interactions",
},



];

const aiItems = [
  {
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Auto Internet", "Animal Idea", "Air Input"],
    answer: "Artificial Intelligence",
  },
  {
    question: "What is machine learning?",
    options: ["Learning from data", "Eating food", "Sleeping", "Flying"],
    answer: "Learning from data",
  },
  {
    question: "ChatGPT is an example of what?",
    options: ["AI model", "Planet", "Battery", "Virus"],
    answer: "AI model",
  },
  {
    question: "What is used to train AI?",
    options: ["Data", "Water", "Fire", "Stone"],
    answer: "Data",
  },
  {
    question: "What is a robot?",
    options: ["Programmable machine", "Cloud", "Rock", "Star"],
    answer: "Programmable machine",
  },
  {
    question: "What is deep learning?",
    options: ["AI using neural networks", "Learning underwater", "Reading books only", "Sleeping deeply"],
    answer: "AI using neural networks",
  },
  {
    question: "What is a neural network inspired by?",
    options: ["Human brain", "Car engine", "Ocean waves", "Tree roots"],
    answer: "Human brain",
  },
  {
    question: "What is an algorithm?",
    options: ["Step-by-step instructions", "A computer virus", "A battery type", "A planet"],
    answer: "Step-by-step instructions",
  },
  {
    question: "What is a dataset?",
    options: ["Collection of data", "A robot arm", "A screen", "A keyboard"],
    answer: "Collection of data",
  },
  {
    question: "What is supervised learning?",
    options: ["Learning from labeled data", "Learning without data", "Learning from dreams", "Learning by flying"],
    answer: "Learning from labeled data",
  },
  {
    question: "What is unsupervised learning?",
    options: ["Finding patterns without labels", "Learning with a teacher", "Learning from answers only", "Learning by typing"],
    answer: "Finding patterns without labels",
  },
  {
    question: "What is reinforcement learning?",
    options: ["Learning using rewards", "Learning from water", "Learning by guessing only", "Learning from music"],
    answer: "Learning using rewards",
  },
  {
    question: "What is natural language processing?",
    options: ["AI understanding human language", "AI cooking food", "AI building houses", "AI painting walls"],
    answer: "AI understanding human language",
  },
  {
    question: "What is computer vision?",
    options: ["AI understanding images", "Computer sleep mode", "Computer charging", "Computer sound"],
    answer: "AI understanding images",
  },
  {
    question: "What is speech recognition?",
    options: ["AI understanding spoken words", "AI drawing images", "AI making coffee", "AI cleaning rooms"],
    answer: "AI understanding spoken words",
  },
  {
    question: "What is a chatbot?",
    options: ["AI that chats with users", "A flying robot", "A video game", "A camera"],
    answer: "AI that chats with users",
  },
  {
    question: "What is generative AI?",
    options: ["AI that creates content", "AI that only deletes files", "AI that only charges phones", "AI that only drives cars"],
    answer: "AI that creates content",
  },
  {
    question: "What can generative AI create?",
    options: ["Text, images, music, and code", "Only rocks", "Only water", "Only planets"],
    answer: "Text, images, music, and code",
  },
  {
    question: "What is an AI model?",
    options: ["A trained system that makes predictions", "A toy car", "A phone case", "A food recipe"],
    answer: "A trained system that makes predictions",
  },
  {
    question: "What is training in AI?",
    options: ["Teaching a model using data", "Charging a battery", "Opening a website", "Cleaning a computer"],
    answer: "Teaching a model using data",
  },
  {
    question: "What is testing in AI?",
    options: ["Checking model performance", "Painting a robot", "Deleting data", "Turning off internet"],
    answer: "Checking model performance",
  },
  {
    question: "What is prediction in AI?",
    options: ["AI guessing an output from input", "AI sleeping", "AI eating", "AI walking only"],
    answer: "AI guessing an output from input",
  },
  {
    question: "What is classification?",
    options: ["Sorting data into categories", "Making a battery", "Drawing a circle", "Playing music"],
    answer: "Sorting data into categories",
  },
  {
    question: "What is regression in machine learning?",
    options: ["Predicting numbers", "Predicting colors only", "Drawing pictures", "Breaking data"],
    answer: "Predicting numbers",
  },
  {
    question: "What is data labeling?",
    options: ["Adding correct tags to data", "Deleting data", "Hiding data", "Printing data"],
    answer: "Adding correct tags to data",
  },
  {
    question: "What is overfitting?",
    options: ["Model learns training data too closely", "Model learns nothing", "Computer overheats", "Robot falls down"],
    answer: "Model learns training data too closely",
  },
  {
    question: "What is underfitting?",
    options: ["Model learns too little", "Model becomes perfect", "Model makes coffee", "Model gets bigger"],
    answer: "Model learns too little",
  },
  {
    question: "What is bias in AI?",
    options: ["Unfair or incorrect pattern in results", "Battery power", "Screen brightness", "Internet speed"],
    answer: "Unfair or incorrect pattern in results",
  },
  {
    question: "Why is AI ethics important?",
    options: ["To use AI safely and fairly", "To make AI heavier", "To remove computers", "To stop electricity"],
    answer: "To use AI safely and fairly",
  },
  {
    question: "What is automation?",
    options: ["Using machines to do tasks automatically", "Writing with a pen", "Walking outside", "Reading silently"],
    answer: "Using machines to do tasks automatically",
  },
  {
    question: "What is a self-driving car?",
    options: ["Car using AI to drive", "Car without wheels", "Car made of paper", "Car that flies always"],
    answer: "Car using AI to drive",
  },
  {
    question: "What is facial recognition?",
    options: ["AI identifying faces", "AI measuring weather", "AI cooking rice", "AI charging phones"],
    answer: "AI identifying faces",
  },
  {
    question: "What is image recognition?",
    options: ["AI identifying objects in images", "AI making sound", "AI moving chairs", "AI counting stars only"],
    answer: "AI identifying objects in images",
  },
  {
    question: "What is voice assistant technology?",
    options: ["AI responding to voice commands", "A silent computer", "A paper notebook", "A normal chair"],
    answer: "AI responding to voice commands",
  },
  {
    question: "Which is an example of a voice assistant?",
    options: ["Siri", "Keyboard", "Monitor", "Printer"],
    answer: "Siri",
  },
  {
    question: "Which company created ChatGPT?",
    options: ["OpenAI", "NASA", "Tesla only", "Samsung only"],
    answer: "OpenAI",
  },
  {
    question: "What does GPT stand for?",
    options: ["Generative Pre-trained Transformer", "General Phone Tool", "Global Power Test", "Graphic Print Text"],
    answer: "Generative Pre-trained Transformer",
  },
  {
    question: "What is a prompt?",
    options: ["Input given to AI", "Computer battery", "Robot wheel", "Internet cable"],
    answer: "Input given to AI",
  },
  {
    question: "What is prompt engineering?",
    options: ["Writing better instructions for AI", "Fixing bridges", "Building engines", "Repairing phones"],
    answer: "Writing better instructions for AI",
  },
  {
    question: "What is an AI hallucination?",
    options: ["AI giving false information confidently", "AI sleeping", "AI charging", "AI becoming invisible"],
    answer: "AI giving false information confidently",
  },
  {
    question: "What should users do with important AI answers?",
    options: ["Verify them", "Always trust blindly", "Delete them", "Ignore facts"],
    answer: "Verify them",
  },
  {
    question: "What is a large language model?",
    options: ["AI trained on large amounts of text", "A big keyboard", "A giant screen", "A large battery"],
    answer: "AI trained on large amounts of text",
  },
  {
    question: "What is text generation?",
    options: ["AI creating written content", "AI printing paper only", "AI deleting words", "AI making shoes"],
    answer: "AI creating written content",
  },
  {
    question: "What is image generation?",
    options: ["AI creating images", "AI measuring weight", "AI cleaning data only", "AI opening windows"],
    answer: "AI creating images",
  },
  {
    question: "What is AI translation?",
    options: ["AI converting one language to another", "AI changing colors", "AI charging laptop", "AI measuring distance"],
    answer: "AI converting one language to another",
  },
  {
    question: "What is sentiment analysis?",
    options: ["Detecting emotion in text", "Measuring temperature", "Counting batteries", "Finding planets"],
    answer: "Detecting emotion in text",
  },
  {
    question: "What is recommendation AI?",
    options: ["AI suggesting items to users", "AI washing clothes", "AI building walls", "AI planting trees"],
    answer: "AI suggesting items to users",
  },
  {
    question: "Where is recommendation AI commonly used?",
    options: ["Netflix and YouTube", "Only in farms", "Only in rockets", "Only in shoes"],
    answer: "Netflix and YouTube",
  },
  {
    question: "What is data privacy?",
    options: ["Protecting personal information", "Deleting all computers", "Making data louder", "Painting data"],
    answer: "Protecting personal information",
  },
  {
    question: "What is cybersecurity?",
    options: ["Protecting systems from digital attacks", "Building robots", "Making videos", "Cooking food"],
    answer: "Protecting systems from digital attacks",
  },
  {
    question: "Can AI help doctors?",
    options: ["Yes, by supporting diagnosis and analysis", "No, never", "Only by driving cars", "Only by playing games"],
    answer: "Yes, by supporting diagnosis and analysis",
  },
  {
    question: "Can AI replace all human thinking?",
    options: ["No, humans still make important decisions", "Yes, completely today", "Only at night", "Only in space"],
    answer: "No, humans still make important decisions",
  },
  {
    question: "What is a smart home device?",
    options: ["Device controlled using automation or AI", "A wooden chair", "A normal pencil", "A paper book"],
    answer: "Device controlled using automation or AI",
  },
  {
    question: "What is an autonomous robot?",
    options: ["Robot that can act without constant human control", "Robot without power", "Robot made of glass", "Robot that cannot move"],
    answer: "Robot that can act without constant human control",
  },
  {
    question: "What is a sensor in robotics?",
    options: ["Device that detects surroundings", "Robot food", "Robot shoe", "Robot password"],
    answer: "Device that detects surroundings",
  },
  {
    question: "What is an actuator in robotics?",
    options: ["Part that creates movement", "Part that stores images", "Part that makes passwords", "Part that deletes data"],
    answer: "Part that creates movement",
  },
  {
    question: "What is computer programming?",
    options: ["Writing instructions for computers", "Cooking food", "Painting walls", "Charging batteries"],
    answer: "Writing instructions for computers",
  },
  {
    question: "Which language is popular for AI development?",
    options: ["Python", "HTML only", "CSS only", "English only"],
    answer: "Python",
  },
  {
    question: "What is Python?",
    options: ["A programming language", "A planet", "A battery", "A type of car"],
    answer: "A programming language",
  },
  {
    question: "What is TensorFlow?",
    options: ["Machine learning framework", "Music app", "Video game", "Search engine"],
    answer: "Machine learning framework",
  },
  {
    question: "What is PyTorch?",
    options: ["Machine learning framework", "Camera lens", "Phone charger", "Operating system"],
    answer: "Machine learning framework",
  },
  {
    question: "What is an API?",
    options: ["Way for software to communicate", "A computer virus", "A keyboard button", "A robot arm"],
    answer: "Way for software to communicate",
  },
  {
    question: "What is cloud computing?",
    options: ["Using internet servers for computing", "Computing inside clouds", "Using only paper", "Turning off servers"],
    answer: "Using internet servers for computing",
  },
  {
    question: "Why do many AI systems use GPUs?",
    options: ["To process many calculations quickly", "To make screens brighter only", "To print documents", "To store water"],
    answer: "To process many calculations quickly",
  },
  {
    question: "What is a GPU?",
    options: ["Graphics Processing Unit", "General Power Utility", "Global Program Unit", "Great Phone Upgrade"],
    answer: "Graphics Processing Unit",
  },
  {
    question: "What is edge AI?",
    options: ["AI running on local devices", "AI only in space", "AI on paper", "AI without computers"],
    answer: "AI running on local devices",
  },
  {
    question: "What is cloud AI?",
    options: ["AI running on internet servers", "AI running in rain clouds", "AI without data", "AI inside batteries"],
    answer: "AI running on internet servers",
  },
  {
    question: "What is AI inference?",
    options: ["Using a trained model to produce results", "Deleting a model", "Training forever", "Turning off AI"],
    answer: "Using a trained model to produce results",
  },
  {
    question: "What is model accuracy?",
    options: ["How often a model is correct", "How heavy a model is", "How bright a screen is", "How loud a computer is"],
    answer: "How often a model is correct",
  },
  {
    question: "What is a confusion matrix used for?",
    options: ["Evaluating classification results", "Playing music", "Charging robots", "Drawing cartoons"],
    answer: "Evaluating classification results",
  },
  {
    question: "What is precision in AI?",
    options: ["How many selected results are correct", "How fast a battery charges", "How big a screen is", "How loud sound is"],
    answer: "How many selected results are correct",
  },
  {
    question: "What is recall in AI?",
    options: ["How many correct items were found", "Remembering passwords only", "Calling someone", "Deleting files"],
    answer: "How many correct items were found",
  },
  {
    question: "What is data cleaning?",
    options: ["Fixing or removing incorrect data", "Washing a computer", "Painting a database", "Deleting all apps"],
    answer: "Fixing or removing incorrect data",
  },
  {
    question: "What is feature in machine learning?",
    options: ["Input information used by a model", "A movie scene", "A phone button", "A robot color"],
    answer: "Input information used by a model",
  },
  {
    question: "What is feature extraction?",
    options: ["Selecting useful information from data", "Removing computer parts", "Downloading games", "Charging AI"],
    answer: "Selecting useful information from data",
  },
  {
    question: "What is clustering?",
    options: ["Grouping similar data", "Deleting data", "Writing emails", "Making robots fly"],
    answer: "Grouping similar data",
  },
  {
    question: "What is anomaly detection?",
    options: ["Finding unusual patterns", "Creating normal data", "Playing videos", "Drawing maps"],
    answer: "Finding unusual patterns",
  },
  {
    question: "What is AI used for in banking?",
    options: ["Fraud detection", "Growing plants", "Making shoes", "Building roads"],
    answer: "Fraud detection",
  },
  {
    question: "What is AI used for in education?",
    options: ["Personalized learning", "Only cooking", "Only weather control", "Only charging phones"],
    answer: "Personalized learning",
  },
  {
    question: "What is AI used for in agriculture?",
    options: ["Monitoring crops", "Making planets", "Creating oceans", "Building stars"],
    answer: "Monitoring crops",
  },
  {
    question: "What is AI used for in transport?",
    options: ["Route planning and autonomous driving", "Making food", "Painting houses", "Creating clouds"],
    answer: "Route planning and autonomous driving",
  },
  {
    question: "What is AI safety?",
    options: ["Making AI reliable and harmless", "Locking computers in a room", "Turning off electricity", "Deleting the internet"],
    answer: "Making AI reliable and harmless",
  },
  {
    question: "What is explainable AI?",
    options: ["AI whose decisions can be understood", "AI that cannot explain anything", "AI that only draws", "AI that only sleeps"],
    answer: "AI whose decisions can be understood",
  },
  {
    question: "What is artificial general intelligence?",
    options: ["AI with human-like general thinking ability", "A normal calculator", "A robot toy", "A simple website"],
    answer: "AI with human-like general thinking ability",
  },
  {
    question: "What is narrow AI?",
    options: ["AI designed for specific tasks", "AI that knows everything", "AI without purpose", "AI that has emotions"],
    answer: "AI designed for specific tasks",
  },
  {
    question: "Which is an example of narrow AI?",
    options: ["Spam email filter", "Human brain", "A pencil", "A chair"],
    answer: "Spam email filter",
  },
  {
    question: "What is a spam filter?",
    options: ["AI system that detects unwanted emails", "A water filter", "A camera", "A speaker"],
    answer: "AI system that detects unwanted emails",
  },
  {
    question: "What is optical character recognition?",
    options: ["AI reading text from images", "AI making music", "AI driving cars", "AI measuring heat"],
    answer: "AI reading text from images",
  },
  {
    question: "What does OCR stand for?",
    options: ["Optical Character Recognition", "Online Computer Robot", "Open Code Reader", "Object Camera Rotation"],
    answer: "Optical Character Recognition",
  },
  {
    question: "What is a virtual assistant?",
    options: ["Software that helps users with tasks", "A physical robot only", "A normal keyboard", "A paper diary"],
    answer: "Software that helps users with tasks",
  },
  {
    question: "What is a recommendation engine?",
    options: ["System that suggests content or products", "Car engine", "Rocket engine", "Robot motor"],
    answer: "System that suggests content or products",
  },
  {
    question: "What is model training data?",
    options: ["Examples used to teach the model", "Random decorations", "Phone numbers only", "Computer dust"],
    answer: "Examples used to teach the model",
  },
  {
    question: "What is validation data?",
    options: ["Data used to tune and check a model", "Data used to cook food", "Data used as wallpaper", "Data used as music"],
    answer: "Data used to tune and check a model",
  },
  {
    question: "What is test data?",
    options: ["Data used for final model evaluation", "Data deleted before training", "Data used as battery", "Data used for painting"],
    answer: "Data used for final model evaluation",
  },
  {
    question: "What is a token in language AI?",
    options: ["Piece of text processed by a model", "A coin only", "A robot wheel", "A camera part"],
    answer: "Piece of text processed by a model",
  },
  {
    question: "What is text summarization?",
    options: ["AI shortening long text", "AI making text longer only", "AI deleting all text", "AI translating images"],
    answer: "AI shortening long text",
  },
  {
    question: "What is AI code generation?",
    options: ["AI writing programming code", "AI charging laptop", "AI cleaning screen", "AI making wires"],
    answer: "AI writing programming code",
  },
  {
    question: "What is data mining?",
    options: ["Finding useful patterns in data", "Digging coal", "Deleting files", "Making robots"],
    answer: "Finding useful patterns in data",
  },
  {
    question: "What is big data?",
    options: ["Very large and complex data", "Large chair", "Big battery", "Huge robot only"],
    answer: "Very large and complex data",
  },
  {
    question: "What is the Internet of Things?",
    options: ["Connected smart devices", "Only websites", "Only robots", "Only AI models"],
    answer: "Connected smart devices",
  },
  {
    question: "What does IoT stand for?",
    options: ["Internet of Things", "Input Output Tool", "Internal Online Test", "Internet of Text"],
    answer: "Internet of Things",
  },
  {
    question: "What is AI personalization?",
    options: ["AI adapting to individual users", "AI becoming human", "AI changing weather", "AI painting roads"],
    answer: "AI adapting to individual users",
  },
  {
    question: "What is a decision tree?",
    options: ["Model that makes decisions using branches", "A real tree", "A robot plant", "A computer wire"],
    answer: "Model that makes decisions using branches",
  },
  {
    question: "What is a random forest?",
    options: ["Machine learning method using many decision trees", "A group of real trees", "A video game", "A forest robot"],
    answer: "Machine learning method using many decision trees",
  },
  {
    question: "What is linear regression?",
    options: ["Model predicting values using a line", "A robot walking straight", "A type of battery", "A sound wave"],
    answer: "Model predicting values using a line",
  },
  {
  question: "What is deepfake technology?",
  options: ["AI that creates realistic fake media", "A type of battery", "A search engine", "A robot sensor"],
  answer: "AI that creates realistic fake media",
},
{
  question: "What is AI bias caused by?",
  options: ["Biased or incomplete data", "Too much electricity", "Slow internet", "Robot movement"],
  answer: "Biased or incomplete data",
},
{
  question: "What is data annotation?",
  options: ["Adding labels to data", "Deleting files", "Charging AI", "Changing passwords"],
  answer: "Adding labels to data",
},
{
  question: "What is a training algorithm?",
  options: ["Method used to teach AI", "Computer screen", "Robot battery", "Internet cable"],
  answer: "Method used to teach AI",
},
{
  question: "What is a neural network layer?",
  options: ["Part of a neural network", "Computer wallpaper", "Robot skin", "Keyboard button"],
  answer: "Part of a neural network",
},
{
  question: "What is an input layer?",
  options: ["Layer that receives data", "Layer that prints results", "Battery layer", "Screen layer"],
  answer: "Layer that receives data",
},
{
  question: "What is an output layer?",
  options: ["Layer that gives final result", "Layer that stores food", "Layer that charges AI", "Layer that deletes files"],
  answer: "Layer that gives final result",
},
{
  question: "What is a hidden layer?",
  options: ["Layer between input and output", "Secret password", "Robot face", "Computer fan"],
  answer: "Layer between input and output",
},
{
  question: "What is model deployment?",
  options: ["Making AI available for use", "Deleting AI", "Painting a robot", "Opening a window"],
  answer: "Making AI available for use",
},
{
  question: "What is an AI assistant?",
  options: ["AI that helps users complete tasks", "A paper notebook", "A normal chair", "A light bulb"],
  answer: "AI that helps users complete tasks",
},
{
  question: "What is transfer learning?",
  options: ["Using knowledge from one task for another", "Moving files by hand", "Changing computer screen", "Copying a battery"],
  answer: "Using knowledge from one task for another",
},
{
  question: "What is fine-tuning?",
  options: ["Training a model further for a specific task", "Fixing a guitar", "Cleaning a computer", "Making a robot taller"],
  answer: "Training a model further for a specific task",
},
{
  question: "What is zero-shot learning?",
  options: ["Solving a task without examples", "Learning with zero data forever", "Deleting training data", "Turning AI off"],
  answer: "Solving a task without examples",
},
{
  question: "What is few-shot learning?",
  options: ["Learning from a few examples", "Learning from millions only", "Learning without input", "Learning from music"],
  answer: "Learning from a few examples",
},
{
  question: "What is natural language generation?",
  options: ["AI creating human-like text", "AI creating rain", "AI driving cars only", "AI making robots"],
  answer: "AI creating human-like text",
},
{
  question: "What is natural language understanding?",
  options: ["AI understanding text meaning", "AI charging phones", "AI drawing only", "AI flying"],
  answer: "AI understanding text meaning",
},
{
  question: "What is speech synthesis?",
  options: ["AI generating spoken voice", "AI reading images", "AI making cars", "AI deleting sound"],
  answer: "AI generating spoken voice",
},
{
  question: "What is text-to-speech?",
  options: ["Turning text into spoken audio", "Turning speech into images", "Turning robots into cars", "Turning data into water"],
  answer: "Turning text into spoken audio",
},
{
  question: "What is speech-to-text?",
  options: ["Turning spoken words into text", "Turning text into music", "Turning images into robots", "Turning code into batteries"],
  answer: "Turning spoken words into text",
},
{
  question: "What is object detection?",
  options: ["Finding objects in images", "Detecting batteries", "Finding planets only", "Checking internet speed"],
  answer: "Finding objects in images",
},
{
  question: "What is object tracking?",
  options: ["Following an object across frames", "Tracking phone battery", "Reading emails", "Writing code only"],
  answer: "Following an object across frames",
},
{
  question: "What is image segmentation?",
  options: ["Dividing an image into meaningful parts", "Deleting an image", "Making image blurry", "Charging a camera"],
  answer: "Dividing an image into meaningful parts",
},
{
  question: "What is face detection?",
  options: ["Finding faces in images", "Changing faces", "Deleting photos", "Making music"],
  answer: "Finding faces in images",
},
{
  question: "What is emotion recognition?",
  options: ["AI detecting emotions", "AI creating batteries", "AI painting roads", "AI washing clothes"],
  answer: "AI detecting emotions",
},
{
  question: "What is predictive analytics?",
  options: ["Using data to predict future outcomes", "Reading books", "Drawing cartoons", "Charging phones"],
  answer: "Using data to predict future outcomes",
},
{
  question: "What is fraud detection AI?",
  options: ["AI finding suspicious activity", "AI making money", "AI printing notes", "AI playing games"],
  answer: "AI finding suspicious activity",
},
{
  question: "What is a recommender system?",
  options: ["AI that suggests useful items", "A washing machine", "A normal calculator", "A chair"],
  answer: "AI that suggests useful items",
},
{
  question: "What is collaborative filtering?",
  options: ["Recommendations based on user behavior", "Cleaning data with water", "Filtering air", "Charging servers"],
  answer: "Recommendations based on user behavior",
},
{
  question: "What is content-based filtering?",
  options: ["Recommendations based on item features", "Filtering emails manually", "Cleaning computer screen", "Blocking all websites"],
  answer: "Recommendations based on item features",
},
{
  question: "What is AI in gaming used for?",
  options: ["Creating smart game characters", "Making food", "Charging controllers", "Printing posters"],
  answer: "Creating smart game characters",
},
{
  question: "What is a non-player character in games?",
  options: ["Computer-controlled character", "Human player", "Game controller", "Game screen"],
  answer: "Computer-controlled character",
},
{
  question: "What does NPC stand for?",
  options: ["Non-Player Character", "New Phone Code", "Network Power Cable", "Natural Program Computer"],
  answer: "Non-Player Character",
},
{
  question: "What is AI in healthcare used for?",
  options: ["Helping with diagnosis and treatment support", "Replacing all doctors instantly", "Cooking meals only", "Driving buses only"],
  answer: "Helping with diagnosis and treatment support",
},
{
  question: "What is AI in finance used for?",
  options: ["Risk analysis and fraud detection", "Growing crops only", "Making clothes", "Painting houses"],
  answer: "Risk analysis and fraud detection",
},
{
  question: "What is AI in customer service used for?",
  options: ["Answering customer questions", "Building roads", "Repairing shoes", "Creating planets"],
  answer: "Answering customer questions",
},
{
  question: "What is AI in marketing used for?",
  options: ["Personalizing ads and content", "Making rain", "Cooking food", "Building satellites"],
  answer: "Personalizing ads and content",
},
{
  question: "What is AI in security used for?",
  options: ["Detecting threats", "Making chairs", "Growing trees", "Charging laptops"],
  answer: "Detecting threats",
},
{
  question: "What is a smart camera?",
  options: ["Camera using AI to analyze images", "Camera made of paper", "Camera without lens", "Camera that cannot record"],
  answer: "Camera using AI to analyze images",
},
{
  question: "What is a smart speaker?",
  options: ["Speaker with voice assistant features", "Speaker made of wood only", "Speaker without sound", "Speaker that prints paper"],
  answer: "Speaker with voice assistant features",
},
{
  question: "What is autonomous navigation?",
  options: ["AI moving without human control", "Reading books", "Typing passwords", "Drawing circles"],
  answer: "AI moving without human control",
},
{
  question: "What is path planning in robotics?",
  options: ["Finding a route for a robot to move", "Planning a holiday", "Writing a song", "Making food"],
  answer: "Finding a route for a robot to move",
},
{
  question: "What is SLAM in robotics?",
  options: ["Mapping and locating at the same time", "A computer game", "A music tool", "A battery type"],
  answer: "Mapping and locating at the same time",
},
{
  question: "What does SLAM stand for?",
  options: ["Simultaneous Localization and Mapping", "Smart Learning AI Machine", "System Logic Auto Model", "Simple Language Assistant Mode"],
  answer: "Simultaneous Localization and Mapping",
},
{
  question: "What is a drone?",
  options: ["Unmanned flying machine", "Computer virus", "Phone app", "Gaming keyboard"],
  answer: "Unmanned flying machine",
},
{
  question: "How can AI help drones?",
  options: ["Navigation and object detection", "Making them eat", "Turning them into cars", "Deleting their cameras"],
  answer: "Navigation and object detection",
},
{
  question: "What is autonomous driving?",
  options: ["Vehicle driving itself using sensors and AI", "Manual driving only", "Driving without wheels", "Driving underwater only"],
  answer: "Vehicle driving itself using sensors and AI",
},
{
  question: "What is lidar used for?",
  options: ["Measuring distance with laser light", "Playing music", "Charging cars", "Cooking food"],
  answer: "Measuring distance with laser light",
},
{
  question: "What does LiDAR stand for?",
  options: ["Light Detection and Ranging", "Line Data and Robot", "Light Digital Auto Reader", "Local Data Radio"],
  answer: "Light Detection and Ranging",
},
{
  question: "What is computer vision used for in cars?",
  options: ["Detecting lanes, signs, and objects", "Making petrol", "Cleaning seats", "Changing tyres"],
  answer: "Detecting lanes, signs, and objects",
},
{
  question: "What is AI model compression?",
  options: ["Making models smaller and faster", "Printing models", "Deleting computers", "Making batteries bigger"],
  answer: "Making models smaller and faster",
},
{
  question: "What is model pruning?",
  options: ["Removing unnecessary parts of a model", "Cutting trees", "Cleaning a keyboard", "Changing a screen"],
  answer: "Removing unnecessary parts of a model",
},
{
  question: "What is quantization in AI?",
  options: ["Reducing number precision to speed models", "Counting robots", "Measuring water", "Increasing screen size"],
  answer: "Reducing number precision to speed models",
},
{
  question: "What is a transformer model?",
  options: ["Neural network architecture used in language AI", "Electrical device only", "Robot toy", "Computer cable"],
  answer: "Neural network architecture used in language AI",
},
{
  question: "What is attention in AI?",
  options: ["Method for focusing on important information", "Human focus only", "Robot emotion", "Screen brightness"],
  answer: "Method for focusing on important information",
},
{
  question: "What is self-attention?",
  options: ["AI comparing parts of input with each other", "A robot looking in mirror", "Computer sleep mode", "Manual typing"],
  answer: "AI comparing parts of input with each other",
},
{
  question: "What is embedding in AI?",
  options: ["Numerical representation of data", "Saving files in folders", "Installing apps", "Printing text"],
  answer: "Numerical representation of data",
},
{
  question: "What is vector search?",
  options: ["Finding similar data using embeddings", "Searching only by alphabet", "Finding lost phones", "Deleting vectors"],
  answer: "Finding similar data using embeddings",
},
{
  question: "What is semantic search?",
  options: ["Search based on meaning", "Search based only on exact letters", "Search without internet", "Search for robots only"],
  answer: "Search based on meaning",
},
{
  question: "What is RAG in AI?",
  options: ["Retrieval-Augmented Generation", "Robot Assisted Gaming", "Random AI Generator", "Remote Auto Guide"],
  answer: "Retrieval-Augmented Generation",
},
{
  question: "What does RAG help AI do?",
  options: ["Use retrieved information before answering", "Fly without wings", "Charge batteries", "Cook food"],
  answer: "Use retrieved information before answering",
},
{
  question: "What is a knowledge base?",
  options: ["Stored information used for answers", "Robot battery", "Computer screen", "Gaming mouse"],
  answer: "Stored information used for answers",
},
{
  question: "What is AI memory?",
  options: ["Stored context or information for future use", "Computer fan", "Robot wheel", "Screen color"],
  answer: "Stored context or information for future use",
},
{
  question: "What is a rule-based system?",
  options: ["System using fixed if-then rules", "System that learns like humans only", "A broken AI", "A camera"],
  answer: "System using fixed if-then rules",
},
{
  question: "What is an expert system?",
  options: ["AI using expert knowledge to make decisions", "A human expert only", "A battery", "A printer"],
  answer: "AI using expert knowledge to make decisions",
},
{
  question: "What is fuzzy logic?",
  options: ["Reasoning with degrees of truth", "Broken logic", "Robot language", "Computer virus"],
  answer: "Reasoning with degrees of truth",
},
{
  question: "What is genetic algorithm?",
  options: ["Optimization method inspired by evolution", "Human DNA test only", "Robot disease", "Computer virus"],
  answer: "Optimization method inspired by evolution",
},
{
  question: "What is swarm intelligence?",
  options: ["AI inspired by group behavior", "Only insect science", "Robot battery", "Data deletion"],
  answer: "AI inspired by group behavior",
},
{
  question: "What is artificial neural network?",
  options: ["Computing system inspired by brain neurons", "A real human brain", "A normal keyboard", "A phone charger"],
  answer: "Computing system inspired by brain neurons",
},
{
  question: "What is backpropagation?",
  options: ["Method used to train neural networks", "Moving robots backward", "Deleting data", "Recharging AI"],
  answer: "Method used to train neural networks",
},
{
  question: "What is gradient descent?",
  options: ["Method for reducing model error", "Walking downhill only", "Painting a graph", "Moving a robot down"],
  answer: "Method for reducing model error",
},
{
  question: "What is loss function?",
  options: ["Measure of model error", "Lost computer file", "Robot failure", "Deleted database"],
  answer: "Measure of model error",
},
{
  question: "What is optimization in AI?",
  options: ["Improving model performance", "Making computers heavier", "Deleting code", "Turning off servers"],
  answer: "Improving model performance",
},
{
  question: "What is an epoch in training?",
  options: ["One full pass through training data", "One second of AI use", "A robot movement", "A type of dataset"],
  answer: "One full pass through training data",
},
{
  question: "What is batch size?",
  options: ["Number of samples processed at once", "Size of battery", "Screen size", "Robot height"],
  answer: "Number of samples processed at once",
},
{
  question: "What is learning rate?",
  options: ["Step size for model updates", "School grade", "Typing speed", "Internet speed"],
  answer: "Step size for model updates",
},
{
  question: "What happens if learning rate is too high?",
  options: ["Training may become unstable", "AI becomes perfect", "Computer turns off", "Data disappears"],
  answer: "Training may become unstable",
},
{
  question: "What happens if learning rate is too low?",
  options: ["Training becomes very slow", "AI learns instantly", "Model disappears", "Battery explodes"],
  answer: "Training becomes very slow",
},
{
  question: "What is data augmentation?",
  options: ["Creating modified training examples", "Deleting examples", "Printing data", "Hiding data"],
  answer: "Creating modified training examples",
},
{
  question: "What is synthetic data?",
  options: ["Artificially generated data", "Paper data", "Damaged data", "Water data"],
  answer: "Artificially generated data",
},
{
  question: "What is AI governance?",
  options: ["Rules and policies for responsible AI use", "AI becoming prime minister", "Robot election", "Computer voting"],
  answer: "Rules and policies for responsible AI use",
},
{
  question: "What is responsible AI?",
  options: ["AI designed to be fair, safe, and reliable", "AI that never makes errors", "AI that replaces all humans", "AI without data"],
  answer: "AI designed to be fair, safe, and reliable",
},
{
  question: "What is human-in-the-loop AI?",
  options: ["Humans help guide or check AI decisions", "Humans live inside AI", "AI without humans", "Robot-only system"],
  answer: "Humans help guide or check AI decisions",
},
{
  question: "What is AI transparency?",
  options: ["Making AI processes understandable", "Making AI invisible", "Making robots clear like glass", "Deleting AI records"],
  answer: "Making AI processes understandable",
},
{
  question: "What is accountability in AI?",
  options: ["Responsibility for AI decisions and effects", "Counting AI models", "Charging AI systems", "Measuring internet speed"],
  answer: "Responsibility for AI decisions and effects",
},
{
  question: "What is fairness in AI?",
  options: ["Avoiding unfair treatment of groups", "Making AI look beautiful", "Making AI faster only", "Giving AI emotions"],
  answer: "Avoiding unfair treatment of groups",
},
{
  question: "What is AI regulation?",
  options: ["Laws and rules controlling AI use", "AI writing poems", "Robot dancing", "Computer cooling"],
  answer: "Laws and rules controlling AI use",
},
{
  question: "What is open-source AI?",
  options: ["AI software or models shared publicly", "AI kept secret", "AI without code", "AI used only offline"],
  answer: "AI software or models shared publicly",
},
{
  question: "What is proprietary AI?",
  options: ["AI owned and controlled by a company", "Free public AI only", "AI with no owner", "AI made by robots only"],
  answer: "AI owned and controlled by a company",
},
{
  question: "What is local AI?",
  options: ["AI running on your own device", "AI only in one village", "AI without electricity", "AI in space"],
  answer: "AI running on your own device",
},
{
  question: "What is multimodal AI?",
  options: ["AI that works with text, images, audio, or video", "AI that only reads text", "AI that only drives", "AI without inputs"],
  answer: "AI that works with text, images, audio, or video",
},
{
  question: "What is text-to-image AI?",
  options: ["AI creating images from text prompts", "AI reading books aloud", "AI deleting images", "AI charging cameras"],
  answer: "AI creating images from text prompts",
},
{
  question: "What is image-to-text AI?",
  options: ["AI describing or reading images", "AI making batteries", "AI cooking", "AI flying drones only"],
  answer: "AI describing or reading images",
},
{
  question: "What is video generation AI?",
  options: ["AI creating video content", "AI watching TV only", "AI deleting videos", "AI charging screens"],
  answer: "AI creating video content",
},
{
  question: "What is music generation AI?",
  options: ["AI creating music", "AI repairing speakers", "AI measuring sound only", "AI deleting songs"],
  answer: "AI creating music",
},
{
  question: "What is AI art?",
  options: ["Artwork created with AI tools", "Only hand painting", "A broken image", "A robot battery"],
  answer: "Artwork created with AI tools",
},
{
  question: "What is a diffusion model?",
  options: ["AI model often used for image generation", "A weather model only", "A battery model", "A robot movement"],
  answer: "AI model often used for image generation",
},
{
  question: "What is GAN short for?",
  options: ["Generative Adversarial Network", "General AI Number", "Global App Network", "Graphic Auto Name"],
  answer: "Generative Adversarial Network",
},
{
  question: "What is a GAN used for?",
  options: ["Generating realistic data", "Charging robots", "Printing books", "Measuring voltage"],
  answer: "Generating realistic data",
},
{
  question: "What are the two main parts of a GAN?",
  options: ["Generator and Discriminator", "Input and Battery", "Camera and Speaker", "Robot and Wheel"],
  answer: "Generator and Discriminator",
},
{
  question: "What is a discriminator in GANs?",
  options: ["Model that judges real vs fake data", "Model that generates electricity", "Robot motor", "Computer mouse"],
  answer: "Model that judges real vs fake data",
},
{
  question: "What is a generator in GANs?",
  options: ["Model that creates fake data", "Model that deletes files", "Robot sensor", "Computer fan"],
  answer: "Model that creates fake data",
},
{
  question: "What is AutoML?",
  options: ["Automated machine learning", "Automatic motor light", "Auto music library", "Artificial mobile link"],
  answer: "Automated machine learning",
},
{
  question: "What is MLOps?",
  options: ["Managing machine learning models in production", "Making music online", "Manual laptop operation", "Mobile login options"],
  answer: "Managing machine learning models in production",
},
{
  question: "What is model monitoring?",
  options: ["Checking AI performance after deployment", "Watching a screen only", "Charging the model", "Deleting model logs"],
  answer: "Checking AI performance after deployment",
},
{
  question: "What is model drift?",
  options: ["Model performance changing over time", "Robot sliding", "Computer moving", "Battery leaking"],
  answer: "Model performance changing over time",
},
{
  question: "What is data drift?",
  options: ["Input data changes over time", "Data floating away", "Files deleted", "Internet stops"],
  answer: "Input data changes over time",
},
{
  question: "What is AI alignment?",
  options: ["Making AI goals match human values", "Changing AI colors", "Making robots stand straight", "Connecting AI wires"],
  answer: "Making AI goals match human values",
},
{
  question: "What is AI misuse?",
  options: ["Using AI in harmful ways", "Charging AI slowly", "Using AI for learning", "Updating software"],
  answer: "Using AI in harmful ways",
},
{
  question: "What is data poisoning?",
  options: ["Corrupting training data to harm AI", "Deleting old photos", "Making data colorful", "Charging a server"],
  answer: "Corrupting training data to harm AI",
},
{
  question: "What is adversarial attack in AI?",
  options: ["Tricking AI with carefully changed inputs", "Repairing AI", "Training AI normally", "Improving data quality"],
  answer: "Tricking AI with carefully changed inputs",
},
{
  question: "What is AI robustness?",
  options: ["Ability to work reliably in different conditions", "AI screen brightness", "Robot weight", "Internet speed"],
  answer: "Ability to work reliably in different conditions",
},
{
  question: "What is neural machine translation?",
  options: ["AI translation using neural networks", "Manual translation", "Robot walking", "Text printing"],
  answer: "AI translation using neural networks",
},
{
  question: "What is named entity recognition?",
  options: ["Finding names, places, and organizations in text", "Naming robots", "Creating passwords", "Drawing images"],
  answer: "Finding names, places, and organizations in text",
},
{
  question: "What does NER stand for in AI?",
  options: ["Named Entity Recognition", "New Engine Robot", "Neural Energy Rate", "Network Error Report"],
  answer: "Named Entity Recognition",
},
{
  question: "What is part-of-speech tagging?",
  options: ["Labeling words as noun, verb, adjective, etc.", "Tagging photos", "Labeling wires", "Naming computers"],
  answer: "Labeling words as noun, verb, adjective, etc.",
},
{
  question: "What is text classification?",
  options: ["Sorting text into categories", "Making text invisible", "Drawing text", "Deleting sentences"],
  answer: "Sorting text into categories",
},
{
  question: "What is spam detection?",
  options: ["Identifying unwanted messages", "Cooking food", "Fixing phones", "Drawing robots"],
  answer: "Identifying unwanted messages",
},
{
  question: "What is topic modeling?",
  options: ["Finding themes in text data", "Building toy models", "Modeling clothes", "Painting topics"],
  answer: "Finding themes in text data",
},
{
  question: "What is keyword extraction?",
  options: ["Finding important words in text", "Deleting text", "Changing fonts", "Printing paper"],
  answer: "Finding important words in text",
},
{
  question: "What is semantic similarity?",
  options: ["How close meanings are", "How close files are physically", "How bright text is", "How fast typing is"],
  answer: "How close meanings are",
},
{
  question: "What is a corpus in NLP?",
  options: ["Large collection of text", "Robot body", "Computer battery", "Voice speaker"],
  answer: "Large collection of text",
},
{
  question: "What is tokenization?",
  options: ["Splitting text into smaller pieces", "Charging AI tokens", "Deleting text", "Making passwords"],
  answer: "Splitting text into smaller pieces",
},
{
  question: "What is stemming?",
  options: ["Reducing words to root form", "Growing plants", "Cutting wires", "Making robots"],
  answer: "Reducing words to root form",
},
{
  question: "What is lemmatization?",
  options: ["Reducing words to dictionary form", "Deleting grammar", "Changing language randomly", "Making sound"],
  answer: "Reducing words to dictionary form",
},
{
  question: "What is stop word removal?",
  options: ["Removing common words like 'the' and 'is'", "Stopping AI forever", "Deleting passwords", "Turning off text"],
  answer: "Removing common words like 'the' and 'is'",
},
{
  question: "What is an embedding model?",
  options: ["Model that converts data into vectors", "Model that prints paper", "Robot drawing model", "Battery model"],
  answer: "Model that converts data into vectors",
},
{
  question: "What is cosine similarity used for?",
  options: ["Measuring similarity between vectors", "Measuring temperature", "Measuring voltage", "Measuring robot speed"],
  answer: "Measuring similarity between vectors",
},
{
  question: "What is a vector database?",
  options: ["Database for storing and searching embeddings", "Database of only photos", "Battery storage", "Computer virus"],
  answer: "Database for storing and searching embeddings",
},
{
  question: "What is nearest-neighbor search?",
  options: ["Finding most similar data points", "Finding nearby houses", "Finding lost phones", "Searching by color only"],
  answer: "Finding most similar data points",
},
{
  question: "What is semantic embedding?",
  options: ["Vector representation of meaning", "A hidden website", "A robot chip", "A camera lens"],
  answer: "Vector representation of meaning",
},
{
  question: "What is context window in language models?",
  options: ["Amount of text the model can consider at once", "Computer screen window", "Browser tab", "Robot camera view"],
  answer: "Amount of text the model can consider at once",
},
{
  question: "What is temperature in AI text generation?",
  options: ["Setting controlling randomness", "Model heat level only", "Weather inside computer", "Battery temperature"],
  answer: "Setting controlling randomness",
},
{
  question: "What happens when AI temperature is higher?",
  options: ["Outputs become more random", "AI becomes colder", "AI stops working", "Data disappears"],
  answer: "Outputs become more random",
},
{
  question: "What happens when AI temperature is lower?",
  options: ["Outputs become more predictable", "AI overheats", "AI forgets everything", "Screen turns off"],
  answer: "Outputs become more predictable",
},
{
  question: "What is top-k sampling?",
  options: ["Choosing from the most likely tokens", "Selecting top websites", "Sorting photos", "Counting robots"],
  answer: "Choosing from the most likely tokens",
},
{
  question: "What is top-p sampling?",
  options: ["Choosing tokens from a probability group", "Picking top people", "Sorting batteries", "Finding passwords"],
  answer: "Choosing tokens from a probability group",
},
{
  question: "What is a system prompt?",
  options: ["Instruction that guides AI behavior", "Computer password", "Robot motor", "Website button"],
  answer: "Instruction that guides AI behavior",
},
{
  question: "What is a user prompt?",
  options: ["Instruction or question from the user", "AI battery", "Computer virus", "Robot wheel"],
  answer: "Instruction or question from the user",
},
{
  question: "What is prompt injection?",
  options: ["Tricking AI with malicious instructions", "Injecting a robot with oil", "Adding a battery", "Opening an app"],
  answer: "Tricking AI with malicious instructions",
},
{
  question: "What is jailbreak in AI?",
  options: ["Attempt to bypass AI safety rules", "Robot escaping prison", "Unlocking a phone only", "Deleting all prompts"],
  answer: "Attempt to bypass AI safety rules",
},
{
  question: "What is content moderation AI?",
  options: ["AI detecting harmful or unsafe content", "AI making movies", "AI charging phones", "AI writing music only"],
  answer: "AI detecting harmful or unsafe content",
},
{
  question: "What is AI guardrail?",
  options: ["Safety rule or control for AI", "Road barrier only", "Robot fence", "Keyboard cover"],
  answer: "Safety rule or control for AI",
},
{
  question: "What is personally identifiable information?",
  options: ["Data that can identify a person", "Robot serial number only", "Computer brand", "Weather data"],
  answer: "Data that can identify a person",
},
{
  question: "What does PII stand for?",
  options: ["Personally Identifiable Information", "Personal Internet Input", "Programmed Internal Intelligence", "Public Image Index"],
  answer: "Personally Identifiable Information",
},
{
  question: "Why should private data be protected in AI?",
  options: ["To prevent misuse and privacy harm", "To make AI heavier", "To reduce screen size", "To stop learning forever"],
  answer: "To prevent misuse and privacy harm",
},
{
  question: "What is federated learning?",
  options: ["Training across devices without centralizing data", "Training robots in a federation", "Learning only in one computer", "Deleting datasets"],
  answer: "Training across devices without centralizing data",
},
{
  question: "What is differential privacy?",
  options: ["Method to protect individual data in analysis", "Making data different colors", "Changing screen privacy", "Deleting AI models"],
  answer: "Method to protect individual data in analysis",
},
{
  question: "What is encryption?",
  options: ["Turning data into protected coded form", "Deleting text", "Changing fonts", "Compressing images only"],
  answer: "Turning data into protected coded form",
},
{
  question: "What is synthetic voice AI?",
  options: ["AI-generated voice", "Human voice only", "Broken microphone", "Silent audio"],
  answer: "AI-generated voice",
},
{
  question: "What is voice cloning?",
  options: ["AI copying a person's voice style", "Recording normal sound", "Making a robot louder", "Deleting voices"],
  answer: "AI copying a person's voice style",
},
{
  question: "What is AI watermarking?",
  options: ["Marking content as AI-generated", "Putting water on computer", "Making images wet", "Changing screen color"],
  answer: "Marking content as AI-generated",
},
{
  question: "What is AI detection?",
  options: ["Trying to identify AI-generated content", "Finding robots in space", "Detecting batteries", "Finding Wi-Fi"],
  answer: "Trying to identify AI-generated content",
},
{
  question: "What is model interpretability?",
  options: ["Understanding how a model makes decisions", "Translating languages only", "Increasing battery power", "Making robots faster"],
  answer: "Understanding how a model makes decisions",
},
{
  question: "What is a black-box model?",
  options: ["Model whose reasoning is hard to understand", "A black computer", "A hidden battery", "A robot suitcase"],
  answer: "Model whose reasoning is hard to understand",
},
{
  question: "What is a white-box model?",
  options: ["Model whose decisions are easier to inspect", "A white robot", "A clean screen", "A printer"],
  answer: "Model whose decisions are easier to inspect",
},
{
  question: "What is feature importance?",
  options: ["How much each input affects prediction", "How beautiful a feature is", "How large a file is", "How fast typing is"],
  answer: "How much each input affects prediction",
},
{
  question: "What is model evaluation?",
  options: ["Measuring how well AI performs", "Deleting AI results", "Changing AI color", "Updating phone screen"],
  answer: "Measuring how well AI performs",
},
{
  question: "What is F1 score?",
  options: ["Measure combining precision and recall", "A racing car only", "Keyboard key only", "Robot grade"],
  answer: "Measure combining precision and recall",
},
{
  question: "What is cross-validation?",
  options: ["Testing model on different data splits", "Crossing roads with AI", "Validating passwords", "Checking computer cables"],
  answer: "Testing model on different data splits",
},
{
  question: "What is a baseline model?",
  options: ["Simple model used for comparison", "Model under the floor", "Robot base only", "A battery level"],
  answer: "Simple model used for comparison",
},
{
  question: "What is hyperparameter tuning?",
  options: ["Adjusting settings that control training", "Tuning a radio only", "Fixing a robot sound", "Changing screen brightness"],
  answer: "Adjusting settings that control training",
},
{
  question: "What is a hyperparameter?",
  options: ["Training setting chosen before learning", "A learned model weight", "A robot part", "A battery type"],
  answer: "Training setting chosen before learning",
},
{
  question: "What are model weights?",
  options: ["Learned numbers inside a model", "Physical weight of a computer", "Robot metal parts", "Battery size"],
  answer: "Learned numbers inside a model",
},
{
  question: "What is a parameter in AI?",
  options: ["Value learned by a model", "Computer password", "Robot instruction manual", "Website link"],
  answer: "Value learned by a model",
},
{
  question: "What is model checkpointing?",
  options: ["Saving model progress during training", "Checking police checkpoint", "Stopping internet", "Restarting computer only"],
  answer: "Saving model progress during training",
},
{
  question: "What is early stopping?",
  options: ["Stopping training before overfitting", "Turning AI off forever", "Stopping a robot car", "Deleting data"],
  answer: "Stopping training before overfitting",
},
{
  question: "What is regularization?",
  options: ["Technique to reduce overfitting", "Making AI illegal", "Normal typing", "Robot repair"],
  answer: "Technique to reduce overfitting",
},
{
  question: "What is dropout in neural networks?",
  options: ["Temporarily ignoring some neurons during training", "Leaving school", "Deleting all data", "Turning off power"],
  answer: "Temporarily ignoring some neurons during training",
},
{
  question: "What is batch normalization?",
  options: ["Technique to stabilize neural network training", "Making batches equal size only", "Sorting files", "Cleaning data manually"],
  answer: "Technique to stabilize neural network training",
},
{
  question: "What is an activation function?",
  options: ["Function that helps neural networks learn patterns", "Power button", "Battery switch", "Robot starter"],
  answer: "Function that helps neural networks learn patterns",
},
{
  question: "What is ReLU?",
  options: ["A common activation function", "A robot name", "A database", "A programming language"],
  answer: "A common activation function",
},
{
  question: "What does ReLU stand for?",
  options: ["Rectified Linear Unit", "Real Learning Utility", "Robot Logic Unit", "Rapid Language Update"],
  answer: "Rectified Linear Unit",
},
{
  question: "What is sigmoid function used for?",
  options: ["Producing values between 0 and 1", "Making images sharper", "Charging AI", "Deleting errors"],
  answer: "Producing values between 0 and 1",
},
{
  question: "What is softmax used for?",
  options: ["Converting scores into probabilities", "Making robots soft", "Compressing files", "Changing text color"],
  answer: "Converting scores into probabilities",
},
{
  question: "What is a convolutional neural network?",
  options: ["Neural network often used for images", "Network for phone calls", "Robot control wire", "Text-only printer"],
  answer: "Neural network often used for images",
},
{
  question: "What does CNN stand for in AI?",
  options: ["Convolutional Neural Network", "Cable News Network only", "Computer Number Node", "Central Neural Notebook"],
  answer: "Convolutional Neural Network",
},
{
  question: "What is recurrent neural network?",
  options: ["Network designed for sequence data", "Network that never trains", "Robot battery", "Computer screen"],
  answer: "Network designed for sequence data",
},
{
  question: "What does RNN stand for?",
  options: ["Recurrent Neural Network", "Random Number Name", "Robot Neural Node", "Remote Network Notice"],
  answer: "Recurrent Neural Network",
},
{
  question: "What is LSTM?",
  options: ["A neural network type for long sequence memory", "A laptop brand", "A robot arm", "A search tool"],
  answer: "A neural network type for long sequence memory",
},
{
  question: "What does LSTM stand for?",
  options: ["Long Short-Term Memory", "Large System Text Model", "Learning Smart Task Machine", "Local Storage Test Mode"],
  answer: "Long Short-Term Memory",
},
{
  question: "What is time-series forecasting?",
  options: ["Predicting future values from time data", "Forecasting weather only", "Creating images", "Deleting time"],
  answer: "Predicting future values from time data",
},
{
  question: "What is anomaly detection used for?",
  options: ["Finding unusual data patterns", "Making normal data", "Charging servers", "Writing music"],
  answer: "Finding unusual data patterns",
},
{
  question: "What is self-supervised learning?",
  options: ["Learning from data using automatically created labels", "Learning without computers", "Learning only from humans", "Learning from robots only"],
  answer: "Learning from data using automatically created labels",
},
{
  question: "What is semi-supervised learning?",
  options: ["Learning from small labeled and large unlabeled data", "Learning with no data", "Learning by sleeping", "Learning only from pictures"],
  answer: "Learning from small labeled and large unlabeled data",
},
{
  question: "What is active learning?",
  options: ["AI asks for labels on useful examples", "AI exercises physically", "AI plays sports", "AI charges itself"],
  answer: "AI asks for labels on useful examples",
},
{
  question: "What is online learning in AI?",
  options: ["Model learns continuously from new data", "Learning only on websites", "Watching videos", "Taking school classes"],
  answer: "Model learns continuously from new data",
},
{
  question: "What is continual learning?",
  options: ["AI learning new tasks over time", "Learning once only", "Deleting old tasks", "AI sleeping"],
  answer: "AI learning new tasks over time",
},
{
  question: "What is catastrophic forgetting?",
  options: ["AI forgets old tasks after learning new ones", "AI deletes all files", "Human memory loss", "Computer crash"],
  answer: "AI forgets old tasks after learning new ones",
},
{
  question: "What is reinforcement learning agent?",
  options: ["Learner that takes actions to earn rewards", "A police agent", "A robot battery", "A search engine"],
  answer: "Learner that takes actions to earn rewards",
},
{
  question: "What is an environment in reinforcement learning?",
  options: ["World where the agent acts", "Weather only", "Computer room", "Robot charger"],
  answer: "World where the agent acts",
},
{
  question: "What is a reward in reinforcement learning?",
  options: ["Feedback signal for good actions", "Money only", "Battery charge", "Computer screen"],
  answer: "Feedback signal for good actions",
},
{
  question: "What is a policy in reinforcement learning?",
  options: ["Strategy for choosing actions", "Government law only", "Computer password", "Robot color"],
  answer: "Strategy for choosing actions",
},
{
  question: "What is Q-learning?",
  options: ["Reinforcement learning method", "Question writing", "Robot typing", "Database search"],
  answer: "Reinforcement learning method",
},
{
  question: "What is supervised learning best used for?",
  options: ["Tasks with labeled examples", "Tasks without any examples", "Only robot dancing", "Only drawing stars"],
  answer: "Tasks with labeled examples",
},
{
  question: "What is unsupervised learning best used for?",
  options: ["Finding hidden patterns", "Answering labeled questions only", "Cooking food", "Driving manually"],
  answer: "Finding hidden patterns",
},
{
  question: "What is classification accuracy?",
  options: ["Fraction of correct predictions", "Battery level", "Typing speed", "Screen size"],
  answer: "Fraction of correct predictions",
},
{
  question: "What is binary classification?",
  options: ["Classification with two classes", "Classification with many classes", "Only computer binary code", "Robot sorting wires"],
  answer: "Classification with two classes",
},
{
  question: "What is multiclass classification?",
  options: ["Classification with more than two classes", "Classification with one class", "Binary code only", "Sorting batteries"],
  answer: "Classification with more than two classes",
},
{
  question: "What is training loss?",
  options: ["Model error during training", "Lost training file", "Robot failure", "Battery loss"],
  answer: "Model error during training",
},
{
  question: "What is validation loss?",
  options: ["Model error on validation data", "Lost validation document", "Computer battery loss", "Training speed"],
  answer: "Model error on validation data",
},
{
  question: "What is AI scalability?",
  options: ["Ability to handle more users or data", "AI climbing stairs", "Robot size only", "Computer weight"],
  answer: "Ability to handle more users or data",
},
{
  question: "What is latency in AI systems?",
  options: ["Delay before getting a response", "AI intelligence level", "Computer color", "Robot height"],
  answer: "Delay before getting a response",
},
{
  question: "What is throughput in AI systems?",
  options: ["Amount of work handled over time", "Computer brightness", "Battery voltage", "Robot speed only"],
  answer: "Amount of work handled over time",
},
{
  question: "What is API rate limit?",
  options: ["Maximum allowed requests in a time period", "Battery charge limit", "Screen refresh rate", "Robot speed limit"],
  answer: "Maximum allowed requests in a time period",
},
{
  question: "What is an AI agent?",
  options: ["AI system that can take actions toward goals", "A normal calculator", "A printed book", "A simple chair"],
  answer: "AI system that can take actions toward goals",
},
{
  question: "What is tool use in AI agents?",
  options: ["AI using external tools to complete tasks", "Robot using hammer only", "Computer using mouse only", "Opening games"],
  answer: "AI using external tools to complete tasks",
},
{
  question: "What is planning in AI agents?",
  options: ["Breaking goals into steps", "Making holiday plans only", "Painting robots", "Charging batteries"],
  answer: "Breaking goals into steps",
},
{
  question: "What is autonomous AI agent?",
  options: ["AI that can act with limited human input", "AI that cannot act", "A calculator", "A normal website"],
  answer: "AI that can act with limited human input",
},
{
  question: "What is AI workflow automation?",
  options: ["Using AI to automate repeated work", "Manual typing only", "Paper filing only", "Turning off tasks"],
  answer: "Using AI to automate repeated work",
},
{
  question: "What is AI-powered search?",
  options: ["Search improved by AI understanding", "Search without data", "Only alphabetical search", "Deleting search results"],
  answer: "Search improved by AI understanding",
},
{
  question: "What is conversational AI?",
  options: ["AI designed to talk with humans", "AI that only draws", "AI that only calculates", "AI that cannot respond"],
  answer: "AI designed to talk with humans",
},
{
  question: "What is the main goal of AI?",
  options: ["To make machines perform intelligent tasks", "To replace electricity", "To create planets", "To stop computers"],
  answer: "To make machines perform intelligent tasks",
},
];




const generalItems = [
  {
    question: "What is the capital city of Nepal?",
    options: ["Kathmandu", "Pokhara", "London", "Delhi"],
    answer: "Kathmandu",
  },
  {
    question: "How many days are in a leap year?",
    options: ["366", "365", "364", "360"],
    answer: "366",
  },
  {
    question: "Which is the largest ocean?",
    options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "How many lungs does a human usually have?",
    options: ["2", "1", "3", "4"],
    answer: "2",
  },
  {
    question: "Which gas do humans need to breathe?",
    options: ["Oxygen", "Carbon dioxide", "Helium", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question: "What is the capital city of the United Kingdom?",
    options: ["London", "Manchester", "Birmingham", "Liverpool"],
    answer: "London",
  },
  {
    question: "Which planet do we live on?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Earth",
  },
  {
    question: "How many continents are there?",
    options: ["7", "5", "6", "8"],
    answer: "7",
  },
  {
    question: "Which is the largest continent?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    answer: "Asia",
  },
  {
    question: "Which animal is known as the king of the jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: "Lion",
  },
  {
    question: "How many colors are in a rainbow?",
    options: ["7", "5", "6", "8"],
    answer: "7",
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Tiger"],
    answer: "Cheetah",
  },
  {
    question: "Which is the tallest animal in the world?",
    options: ["Giraffe", "Elephant", "Horse", "Camel"],
    answer: "Giraffe",
  },
  {
    question: "How many legs does a spider have?",
    options: ["8", "6", "4", "10"],
    answer: "8",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["Heart", "Lungs", "Brain", "Kidney"],
    answer: "Heart",
  },
  {
    question: "Which organ controls the human body?",
    options: ["Brain", "Heart", "Liver", "Stomach"],
    answer: "Brain",
  },
  {
    question: "How many fingers does a human usually have on one hand?",
    options: ["5", "4", "6", "10"],
    answer: "5",
  },
  {
    question: "How many months are in a year?",
    options: ["12", "10", "11", "13"],
    answer: "12",
  },
  {
    question: "How many weeks are in a year approximately?",
    options: ["52", "40", "60", "30"],
    answer: "52",
  },
  {
    question: "Which day comes after Friday?",
    options: ["Saturday", "Sunday", "Thursday", "Monday"],
    answer: "Saturday",
  },
  {
    question: "Which month comes after January?",
    options: ["February", "March", "April", "December"],
    answer: "February",
  },
  {
    question: "How many hours are in a day?",
    options: ["24", "12", "48", "60"],
    answer: "24",
  },
  {
    question: "How many minutes are in one hour?",
    options: ["60", "30", "100", "24"],
    answer: "60",
  },
  {
    question: "Which is the smallest prime number?",
    options: ["2", "1", "3", "0"],
    answer: "2",
  },
  {
    question: "What is 10 + 5?",
    options: ["15", "10", "20", "5"],
    answer: "15",
  },
  {
    question: "What is 9 × 2?",
    options: ["18", "11", "20", "16"],
    answer: "18",
  },
  {
    question: "What shape has three sides?",
    options: ["Triangle", "Square", "Circle", "Rectangle"],
    answer: "Triangle",
  },
  {
    question: "What shape has four equal sides?",
    options: ["Square", "Triangle", "Circle", "Oval"],
    answer: "Square",
  },
  {
    question: "Which shape has no corners?",
    options: ["Circle", "Square", "Triangle", "Rectangle"],
    answer: "Circle",
  },
  {
    question: "Which color is made by mixing red and white?",
    options: ["Pink", "Green", "Blue", "Black"],
    answer: "Pink",
  },
  {
    question: "Which color is made by mixing blue and yellow?",
    options: ["Green", "Red", "Purple", "Orange"],
    answer: "Green",
  },
  {
    question: "Which fruit is yellow and curved?",
    options: ["Banana", "Apple", "Grape", "Orange"],
    answer: "Banana",
  },
  {
    question: "Which fruit is known for keeping doctors away in a saying?",
    options: ["Apple", "Mango", "Banana", "Grape"],
    answer: "Apple",
  },
  {
    question: "Which vegetable is orange and often eaten by rabbits?",
    options: ["Carrot", "Potato", "Onion", "Cabbage"],
    answer: "Carrot",
  },
  {
    question: "Which animal gives us milk?",
    options: ["Cow", "Lion", "Tiger", "Snake"],
    answer: "Cow",
  },
  {
    question: "Which animal gives us wool?",
    options: ["Sheep", "Dog", "Cat", "Horse"],
    answer: "Sheep",
  },
  {
    question: "Which bird is known for its beautiful tail feathers?",
    options: ["Peacock", "Crow", "Sparrow", "Pigeon"],
    answer: "Peacock",
  },
  {
    question: "Which bird can mimic human speech?",
    options: ["Parrot", "Eagle", "Duck", "Hen"],
    answer: "Parrot",
  },
  {
    question: "Which animal is known for its long trunk?",
    options: ["Elephant", "Giraffe", "Horse", "Goat"],
    answer: "Elephant",
  },
  {
    question: "Which animal is known for black and white stripes?",
    options: ["Zebra", "Tiger", "Leopard", "Cow"],
    answer: "Zebra",
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["France", "Italy", "Germany", "Spain"],
    answer: "France",
  },
  {
    question: "Which city is famous for the Eiffel Tower?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["China", "India", "Japan", "Nepal"],
    answer: "China",
  },
  {
    question: "Which country is famous for the Taj Mahal?",
    options: ["India", "Nepal", "Pakistan", "China"],
    answer: "India",
  },
  {
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "In which country is Mount Everest located?",
    options: ["Nepal", "Brazil", "Canada", "Egypt"],
    answer: "Nepal",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Nile River", "Amazon River", "Ganges River", "Yangtze River"],
    answer: "Nile River",
  },
  {
    question: "Which river flows through London?",
    options: ["River Thames", "River Nile", "River Ganges", "River Amazon"],
    answer: "River Thames",
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Antarctic Desert", "Sahara Desert", "Gobi Desert", "Thar Desert"],
    answer: "Antarctic Desert",
  },
  {
    question: "Which is the largest hot desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Thar Desert", "Kalahari Desert"],
    answer: "Sahara Desert",
  },
  {
    question: "Which country has the most people?",
    options: ["India", "China", "United States", "Brazil"],
    answer: "India",
  },
  {
    question: "Which language has the most native speakers?",
    options: ["Mandarin Chinese", "English", "Spanish", "Hindi"],
    answer: "Mandarin Chinese",
  },
  {
    question: "Which language is widely spoken in Nepal?",
    options: ["Nepali", "French", "Spanish", "Arabic"],
    answer: "Nepali",
  },
  {
    question: "What is the currency of Nepal?",
    options: ["Nepalese Rupee", "Indian Rupee", "Dollar", "Pound"],
    answer: "Nepalese Rupee",
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Pound Sterling", "Euro", "Dollar", "Rupee"],
    answer: "Pound Sterling",
  },
  {
    question: "What is the currency of the United States?",
    options: ["Dollar", "Pound", "Euro", "Yen"],
    answer: "Dollar",
  },
  {
    question: "Which country uses the yen?",
    options: ["Japan", "China", "India", "Nepal"],
    answer: "Japan",
  },
  {
    question: "Which country uses the euro?",
    options: ["Germany", "Nepal", "India", "Japan"],
    answer: "Germany",
  },
  {
    question: "What is the national animal of Nepal?",
    options: ["Cow", "Tiger", "Elephant", "Yak"],
    answer: "Cow",
  },
  {
    question: "What is the national bird of Nepal?",
    options: ["Danphe", "Peacock", "Eagle", "Parrot"],
    answer: "Danphe",
  },
  {
    question: "What is the national flower of Nepal?",
    options: ["Rhododendron", "Rose", "Lotus", "Sunflower"],
    answer: "Rhododendron",
  },
  {
    question: "Which festival is known as the festival of lights?",
    options: ["Tihar", "Dashain", "Holi", "Eid"],
    answer: "Tihar",
  },
  {
    question: "Which festival is known as the festival of colors?",
    options: ["Holi", "Tihar", "Christmas", "Dashain"],
    answer: "Holi",
  },
  {
    question: "Which gas do plants take in for photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Helium", "Nitrogen"],
    answer: "Carbon dioxide",
  },
  {
    question: "Which gas do plants release during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Methane"],
    answer: "Oxygen",
  },
  {
    question: "What do plants need to make food?",
    options: ["Sunlight, water, and carbon dioxide", "Only sand", "Only oxygen", "Only fire"],
    answer: "Sunlight, water, and carbon dioxide",
  },
  {
    question: "Which part of a plant absorbs water?",
    options: ["Roots", "Leaves", "Flowers", "Fruit"],
    answer: "Roots",
  },
  {
    question: "Which part of a plant makes food?",
    options: ["Leaves", "Roots", "Stem", "Flower"],
    answer: "Leaves",
  },
  {
    question: "Which part of the body helps us see?",
    options: ["Eyes", "Ears", "Nose", "Hands"],
    answer: "Eyes",
  },
  {
    question: "Which part of the body helps us hear?",
    options: ["Ears", "Eyes", "Nose", "Feet"],
    answer: "Ears",
  },
  {
    question: "Which part of the body helps us smell?",
    options: ["Nose", "Eyes", "Hands", "Ears"],
    answer: "Nose",
  },
  {
    question: "Which part of the body helps us taste?",
    options: ["Tongue", "Nose", "Eyes", "Skin"],
    answer: "Tongue",
  },
  {
    question: "How many teeth does an adult human usually have?",
    options: ["32", "20", "28", "40"],
    answer: "32",
  },
  {
    question: "Which bone protects the brain?",
    options: ["Skull", "Rib", "Spine", "Femur"],
    answer: "Skull",
  },
  {
    question: "Which bones protect the heart and lungs?",
    options: ["Ribs", "Skull", "Leg bones", "Finger bones"],
    answer: "Ribs",
  },
  {
    question: "What is the largest organ of the human body?",
    options: ["Skin", "Heart", "Brain", "Liver"],
    answer: "Skin",
  },
  {
    question: "Which organ helps us digest food?",
    options: ["Stomach", "Lungs", "Heart", "Brain"],
    answer: "Stomach",
  },
  {
    question: "Which organ filters blood and makes urine?",
    options: ["Kidney", "Heart", "Lungs", "Brain"],
    answer: "Kidney",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["Lungs", "Heart", "Liver", "Stomach"],
    answer: "Lungs",
  },
  {
    question: "What is water's chemical formula?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "What is common salt's chemical formula?",
    options: ["NaCl", "H2O", "CO2", "O2"],
    answer: "NaCl",
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["100°C", "0°C", "50°C", "200°C"],
    answer: "100°C",
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "100°C", "50°C", "10°C"],
    answer: "0°C",
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Iron", "Gold", "Copper"],
    answer: "Mercury",
  },
  {
    question: "Which metal is used in electric wires?",
    options: ["Copper", "Wood", "Plastic", "Rubber"],
    answer: "Copper",
  },
  {
    question: "Which material is attracted by a magnet?",
    options: ["Iron", "Wood", "Plastic", "Glass"],
    answer: "Iron",
  },
  {
    question: "Which force pulls objects down toward Earth?",
    options: ["Gravity", "Friction", "Sound", "Light"],
    answer: "Gravity",
  },
  {
    question: "Which energy comes from the Sun?",
    options: ["Solar energy", "Wind energy", "Sound energy", "Chemical energy"],
    answer: "Solar energy",
  },
  {
    question: "Which energy is produced by moving air?",
    options: ["Wind energy", "Solar energy", "Nuclear energy", "Heat energy"],
    answer: "Wind energy",
  },
  {
    question: "Which energy is stored in food?",
    options: ["Chemical energy", "Sound energy", "Light energy", "Wind energy"],
    answer: "Chemical energy",
  },
  {
    question: "Which device is used to call people?",
    options: ["Phone", "Spoon", "Chair", "Bottle"],
    answer: "Phone",
  },
  {
    question: "Which device is used to type text on a computer?",
    options: ["Keyboard", "Mouse", "Speaker", "Monitor"],
    answer: "Keyboard",
  },
  {
    question: "Which device displays computer output?",
    options: ["Monitor", "Keyboard", "Mouse", "Printer"],
    answer: "Monitor",
  },
  {
    question: "Which device is used to print documents?",
    options: ["Printer", "Speaker", "Mouse", "Camera"],
    answer: "Printer",
  },
  {
    question: "Which device is used to take photos?",
    options: ["Camera", "Keyboard", "Speaker", "Router"],
    answer: "Camera",
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Control Print Unit"],
    answer: "Central Processing Unit",
  },
  {
    question: "What does USB stand for?",
    options: ["Universal Serial Bus", "United System Box", "User Storage Button", "Universal Software Base"],
    answer: "Universal Serial Bus",
  },
  {
    question: "What does Wi-Fi help devices do?",
    options: ["Connect to the internet wirelessly", "Cook food", "Print money", "Make clothes"],
    answer: "Connect to the internet wirelessly",
  },
  {
    question: "Which sport uses a bat and ball?",
    options: ["Cricket", "Swimming", "Boxing", "Running"],
    answer: "Cricket",
  },
  {
    question: "Which sport is played with a football?",
    options: ["Football", "Tennis", "Chess", "Badminton"],
    answer: "Football",
  },
  {
    question: "How many players are on one football team on the field?",
    options: ["11", "7", "9", "5"],
    answer: "11",
  },
  {
    question: "Which game is played on a board with kings and queens?",
    options: ["Chess", "Football", "Cricket", "Tennis"],
    answer: "Chess",
  },
  {
    question: "How many squares are on a chessboard?",
    options: ["64", "32", "100", "49"],
    answer: "64",
  },
  {
    question: "Which sport uses a racket and shuttlecock?",
    options: ["Badminton", "Football", "Cricket", "Boxing"],
    answer: "Badminton",
  },
  {
  question: "Which is the largest mammal in the world?",
  options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
  answer: "Blue Whale",
},
{
  question: "Which animal is known as man's best friend?",
  options: ["Dog", "Cat", "Horse", "Cow"],
  answer: "Dog",
},
{
  question: "Which animal is called the ship of the desert?",
  options: ["Camel", "Horse", "Elephant", "Donkey"],
  answer: "Camel",
},
{
  question: "Which bird lays the largest eggs?",
  options: ["Ostrich", "Eagle", "Hen", "Duck"],
  answer: "Ostrich",
},
{
  question: "Which animal can change its color?",
  options: ["Chameleon", "Lion", "Zebra", "Elephant"],
  answer: "Chameleon",
},
{
  question: "Which insect makes honey?",
  options: ["Bee", "Ant", "Fly", "Mosquito"],
  answer: "Bee",
},
{
  question: "How many wings does a butterfly have?",
  options: ["4", "2", "6", "8"],
  answer: "4",
},
{
  question: "Which animal lives both on land and in water?",
  options: ["Frog", "Dog", "Lion", "Horse"],
  answer: "Frog",
},
{
  question: "Which fish is known for its sharp teeth?",
  options: ["Shark", "Goldfish", "Tuna", "Salmon"],
  answer: "Shark",
},
{
  question: "Which animal is famous for its pouch?",
  options: ["Kangaroo", "Tiger", "Rabbit", "Fox"],
  answer: "Kangaroo",
},
{
  question: "Which country is called the Land of the Rising Sun?",
  options: ["Japan", "China", "India", "Nepal"],
  answer: "Japan",
},
{
  question: "Which country is famous for pyramids?",
  options: ["Egypt", "France", "Brazil", "Canada"],
  answer: "Egypt",
},
{
  question: "Which city is known as the Big Apple?",
  options: ["New York", "London", "Paris", "Tokyo"],
  answer: "New York",
},
{
  question: "Which country is famous for kangaroos?",
  options: ["Australia", "Nepal", "Germany", "China"],
  answer: "Australia",
},
{
  question: "Which country is famous for pizza?",
  options: ["Italy", "Japan", "Canada", "Brazil"],
  answer: "Italy",
},
{
  question: "Which country is famous for Mount Fuji?",
  options: ["Japan", "Nepal", "India", "France"],
  answer: "Japan",
},
{
  question: "Which country has the Statue of Liberty?",
  options: ["United States", "United Kingdom", "France", "Germany"],
  answer: "United States",
},
{
  question: "Which country is famous for the Colosseum?",
  options: ["Italy", "Spain", "China", "Egypt"],
  answer: "Italy",
},
{
  question: "Which city is the capital of India?",
  options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
  answer: "New Delhi",
},
{
  question: "Which city is the capital of Japan?",
  options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
  answer: "Tokyo",
},
{
  question: "Which is the smallest continent?",
  options: ["Australia", "Europe", "Asia", "Africa"],
  answer: "Australia",
},
{
  question: "Which is the coldest continent?",
  options: ["Antarctica", "Asia", "Europe", "Africa"],
  answer: "Antarctica",
},
{
  question: "Which ocean is between Africa and Australia?",
  options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
  answer: "Indian Ocean",
},
{
  question: "Which ocean is the coldest?",
  options: ["Arctic Ocean", "Indian Ocean", "Pacific Ocean", "Atlantic Ocean"],
  answer: "Arctic Ocean",
},
{
  question: "Which is the largest island in the world?",
  options: ["Greenland", "Sri Lanka", "Madagascar", "Iceland"],
  answer: "Greenland",
},
{
  question: "Which is the longest wall in the world?",
  options: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Western Wall"],
  answer: "Great Wall of China",
},
{
  question: "Which river is considered holy in India?",
  options: ["Ganges", "Thames", "Nile", "Amazon"],
  answer: "Ganges",
},
{
  question: "Which is the largest rainforest?",
  options: ["Amazon Rainforest", "Congo Rainforest", "Daintree Rainforest", "Sundarbans"],
  answer: "Amazon Rainforest",
},
{
  question: "Which desert is in Africa?",
  options: ["Sahara Desert", "Gobi Desert", "Thar Desert", "Atacama Desert"],
  answer: "Sahara Desert",
},
{
  question: "Which mountain range contains Mount Everest?",
  options: ["Himalayas", "Alps", "Andes", "Rockies"],
  answer: "Himalayas",
},
{
  question: "How many sides does a pentagon have?",
  options: ["5", "4", "6", "8"],
  answer: "5",
},
{
  question: "How many sides does a hexagon have?",
  options: ["6", "5", "7", "8"],
  answer: "6",
},
{
  question: "How many sides does an octagon have?",
  options: ["8", "6", "7", "10"],
  answer: "8",
},
{
  question: "What is half of 100?",
  options: ["50", "25", "75", "10"],
  answer: "50",
},
{
  question: "What is 12 × 12?",
  options: ["144", "120", "132", "154"],
  answer: "144",
},
{
  question: "What is 100 ÷ 10?",
  options: ["10", "5", "20", "100"],
  answer: "10",
},
{
  question: "What is 25 + 25?",
  options: ["50", "40", "60", "45"],
  answer: "50",
},
{
  question: "What is 7 × 8?",
  options: ["56", "54", "64", "48"],
  answer: "56",
},
{
  question: "What is the Roman numeral for 10?",
  options: ["X", "V", "I", "L"],
  answer: "X",
},
{
  question: "What is the Roman numeral for 5?",
  options: ["V", "X", "I", "C"],
  answer: "V",
},
{
  question: "Which vitamin do we get from sunlight?",
  options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B"],
  answer: "Vitamin D",
},
{
  question: "Which vitamin is found in citrus fruits?",
  options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"],
  answer: "Vitamin C",
},
{
  question: "Which food is rich in calcium?",
  options: ["Milk", "Rice", "Sugar", "Oil"],
  answer: "Milk",
},
{
  question: "Which mineral helps make bones strong?",
  options: ["Calcium", "Iron", "Gold", "Silver"],
  answer: "Calcium",
},
{
  question: "Which mineral is important for blood?",
  options: ["Iron", "Calcium", "Sodium", "Potassium"],
  answer: "Iron",
},
{
  question: "Which part of blood carries oxygen?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  answer: "Red blood cells",
},
{
  question: "Which blood cells fight infections?",
  options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
  answer: "White blood cells",
},
{
  question: "What is the normal human body temperature approximately?",
  options: ["37°C", "25°C", "50°C", "100°C"],
  answer: "37°C",
},
{
  question: "How many bones are in an adult human body?",
  options: ["206", "100", "300", "150"],
  answer: "206",
},
{
  question: "Which is the longest bone in the human body?",
  options: ["Femur", "Skull", "Rib", "Spine"],
  answer: "Femur",
},
{
  question: "Which planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Mercury"],
  answer: "Mars",
},
{
  question: "Which planet is closest to the Sun?",
  options: ["Mercury", "Earth", "Mars", "Saturn"],
  answer: "Mercury",
},
{
  question: "Which planet is famous for rings?",
  options: ["Saturn", "Mars", "Venus", "Earth"],
  answer: "Saturn",
},
{
  question: "Which star gives light to Earth?",
  options: ["Sun", "Sirius", "Polaris", "Vega"],
  answer: "Sun",
},
{
  question: "What is Earth's natural satellite?",
  options: ["Moon", "Mars", "Sun", "Venus"],
  answer: "Moon",
},
{
  question: "How many planets are in our solar system?",
  options: ["8", "9", "7", "10"],
  answer: "8",
},
{
  question: "Which force keeps planets around the Sun?",
  options: ["Gravity", "Sound", "Friction", "Heat"],
  answer: "Gravity",
},
{
  question: "What do we call a group of stars forming a pattern?",
  options: ["Constellation", "Galaxy", "Planet", "Meteor"],
  answer: "Constellation",
},
{
  question: "What is the name of our galaxy?",
  options: ["Milky Way", "Andromeda", "Whirlpool", "Sombrero"],
  answer: "Milky Way",
},
{
  question: "What do astronauts travel in?",
  options: ["Spacecraft", "Submarine", "Train", "Bicycle"],
  answer: "Spacecraft",
},
{
  question: "Which is the main source of energy for Earth?",
  options: ["Sun", "Moon", "Wind only", "Stars only"],
  answer: "Sun",
},
{
  question: "What do we use to see distant objects in space?",
  options: ["Telescope", "Microscope", "Thermometer", "Compass"],
  answer: "Telescope",
},
{
  question: "Which tool is used to find direction?",
  options: ["Compass", "Clock", "Spoon", "Camera"],
  answer: "Compass",
},
{
  question: "Which tool measures time?",
  options: ["Clock", "Thermometer", "Ruler", "Compass"],
  answer: "Clock",
},
{
  question: "Which tool measures length?",
  options: ["Ruler", "Clock", "Compass", "Scale"],
  answer: "Ruler",
},
{
  question: "Which tool measures weight?",
  options: ["Scale", "Ruler", "Thermometer", "Clock"],
  answer: "Scale",
},
{
  question: "Which tool measures temperature?",
  options: ["Thermometer", "Barometer", "Compass", "Ruler"],
  answer: "Thermometer",
},
{
  question: "Which tool measures rainfall?",
  options: ["Rain gauge", "Thermometer", "Compass", "Scale"],
  answer: "Rain gauge",
},
{
  question: "Which tool measures air pressure?",
  options: ["Barometer", "Thermometer", "Ruler", "Clock"],
  answer: "Barometer",
},
{
  question: "Which tool is used to see very small things?",
  options: ["Microscope", "Telescope", "Camera", "Printer"],
  answer: "Microscope",
},
{
  question: "Which sense organ helps us feel touch?",
  options: ["Skin", "Eyes", "Ears", "Nose"],
  answer: "Skin",
},
{
  question: "Which sense organ helps us see colors?",
  options: ["Eyes", "Ears", "Tongue", "Nose"],
  answer: "Eyes",
},
{
  question: "Which sense organ detects sound?",
  options: ["Ears", "Eyes", "Skin", "Tongue"],
  answer: "Ears",
},
{
  question: "Which sense organ detects smell?",
  options: ["Nose", "Eyes", "Ears", "Skin"],
  answer: "Nose",
},
{
  question: "Which sense organ detects taste?",
  options: ["Tongue", "Nose", "Ears", "Eyes"],
  answer: "Tongue",
},
{
  question: "Which season comes after winter?",
  options: ["Spring", "Summer", "Autumn", "Monsoon"],
  answer: "Spring",
},
{
  question: "Which season is usually the hottest?",
  options: ["Summer", "Winter", "Spring", "Autumn"],
  answer: "Summer",
},
{
  question: "Which season is usually the coldest?",
  options: ["Winter", "Summer", "Spring", "Autumn"],
  answer: "Winter",
},
{
  question: "What do we call water falling from clouds?",
  options: ["Rain", "Snow", "Wind", "Fog"],
  answer: "Rain",
},
{
  question: "What do we call frozen rain?",
  options: ["Snow", "Steam", "Fog", "Mist"],
  answer: "Snow",
},
{
  question: "What do we call moving air?",
  options: ["Wind", "Rain", "Snow", "Cloud"],
  answer: "Wind",
},
{
  question: "What is formed when water vapor cools in the sky?",
  options: ["Clouds", "Rocks", "Fire", "Sand"],
  answer: "Clouds",
},
{
  question: "What is the color of clear daytime sky usually?",
  options: ["Blue", "Green", "Red", "Black"],
  answer: "Blue",
},
{
  question: "What do we call a very strong storm with rotating winds?",
  options: ["Tornado", "Rainbow", "Fog", "Cloud"],
  answer: "Tornado",
},
{
  question: "What appears in the sky after rain and sunlight?",
  options: ["Rainbow", "Star", "Moon", "Cloud"],
  answer: "Rainbow",
},
{
  question: "Which gas is most common in Earth's atmosphere?",
  options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
  answer: "Nitrogen",
},
{
  question: "Which gas is used by fire to burn?",
  options: ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"],
  answer: "Oxygen",
},
{
  question: "Which gas do humans breathe out?",
  options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Helium"],
  answer: "Carbon dioxide",
},
{
  question: "Which liquid is essential for life?",
  options: ["Water", "Oil", "Petrol", "Ink"],
  answer: "Water",
},
{
  question: "What is the solid form of water?",
  options: ["Ice", "Steam", "Gas", "Cloud"],
  answer: "Ice",
},
{
  question: "What is the gas form of water?",
  options: ["Steam", "Ice", "Rain", "Snow"],
  answer: "Steam",
},
{
  question: "Which material is used to make paper?",
  options: ["Wood", "Iron", "Glass", "Plastic"],
  answer: "Wood",
},
{
  question: "Which material is transparent?",
  options: ["Glass", "Wood", "Stone", "Iron"],
  answer: "Glass",
},
{
  question: "Which material is commonly used to make windows?",
  options: ["Glass", "Rubber", "Cotton", "Paper"],
  answer: "Glass",
},
{
  question: "Which material is waterproof?",
  options: ["Plastic", "Paper", "Cotton", "Wood"],
  answer: "Plastic",
},
{
  question: "Which material is used to make tyres?",
  options: ["Rubber", "Glass", "Paper", "Gold"],
  answer: "Rubber",
},
{
  question: "Which metal is known for being very precious?",
  options: ["Gold", "Iron", "Aluminium", "Tin"],
  answer: "Gold",
},
{
  question: "Which metal is light and used in aircraft?",
  options: ["Aluminium", "Gold", "Lead", "Iron"],
  answer: "Aluminium",
},
{
  question: "Which fuel is commonly used in cars?",
  options: ["Petrol", "Milk", "Water", "Juice"],
  answer: "Petrol",
},
{
  question: "Which vehicle travels on railway tracks?",
  options: ["Train", "Bus", "Car", "Bicycle"],
  answer: "Train",
},
{
  question: "Which vehicle flies in the sky?",
  options: ["Aeroplane", "Bus", "Ship", "Train"],
  answer: "Aeroplane",
},
{
  question: "Which vehicle travels on water?",
  options: ["Ship", "Car", "Train", "Bicycle"],
  answer: "Ship",
},
{
  question: "Which vehicle has two wheels and pedals?",
  options: ["Bicycle", "Car", "Bus", "Train"],
  answer: "Bicycle",
},
{
  question: "Which light tells vehicles to stop?",
  options: ["Red", "Green", "Yellow", "Blue"],
  answer: "Red",
},
{
  question: "Which traffic light means go?",
  options: ["Green", "Red", "Yellow", "White"],
  answer: "Green",
},
{
  question: "Which traffic light means wait or slow down?",
  options: ["Yellow", "Green", "Red", "Blue"],
  answer: "Yellow",
},
{
  question: "Which famous scientist developed the theory of relativity?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo", "Tesla"],
  answer: "Albert Einstein",
},
{
  question: "Who discovered gravity according to legend?",
  options: ["Isaac Newton", "Albert Einstein", "Galileo", "Edison"],
  answer: "Isaac Newton",
},
{
  question: "Who invented the light bulb?",
  options: ["Thomas Edison", "Newton", "Einstein", "Bell"],
  answer: "Thomas Edison",
},
{
  question: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Edison", "Newton", "Tesla"],
  answer: "Alexander Graham Bell",
},
{
  question: "Who was the first person to walk on the Moon?",
  options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
  answer: "Neil Armstrong",
},
{
  question: "Which country landed the first humans on the Moon?",
  options: ["United States", "Russia", "China", "Japan"],
  answer: "United States",
},
{
  question: "What year did humans first land on the Moon?",
  options: ["1969", "1975", "1950", "1980"],
  answer: "1969",
},
{
  question: "Who was the first person in space?",
  options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Einstein"],
  answer: "Yuri Gagarin",
},
{
  question: "What is the largest planet in our solar system?",
  options: ["Jupiter", "Saturn", "Earth", "Mars"],
  answer: "Jupiter",
},
{
  question: "Which planet is known as Earth's twin?",
  options: ["Venus", "Mars", "Mercury", "Jupiter"],
  answer: "Venus",
},
{
  question: "Which planet is famous for its Great Red Spot?",
  options: ["Jupiter", "Saturn", "Mars", "Earth"],
  answer: "Jupiter",
},
{
  question: "Which planet is the hottest in our solar system?",
  options: ["Venus", "Mercury", "Mars", "Jupiter"],
  answer: "Venus",
},
{
  question: "How many hearts does an octopus have?",
  options: ["3", "1", "2", "4"],
  answer: "3",
},
{
  question: "Which animal sleeps the most each day?",
  options: ["Koala", "Lion", "Dog", "Horse"],
  answer: "Koala",
},
{
  question: "Which animal is the largest land animal?",
  options: ["Elephant", "Giraffe", "Rhino", "Hippo"],
  answer: "Elephant",
},
{
  question: "Which bird cannot fly?",
  options: ["Ostrich", "Eagle", "Pigeon", "Parrot"],
  answer: "Ostrich",
},
{
  question: "What is a baby dog called?",
  options: ["Puppy", "Kitten", "Calf", "Foal"],
  answer: "Puppy",
},
{
  question: "What is a baby cat called?",
  options: ["Kitten", "Puppy", "Cub", "Calf"],
  answer: "Kitten",
},
{
  question: "What is a baby cow called?",
  options: ["Calf", "Foal", "Kid", "Cub"],
  answer: "Calf",
},
{
  question: "What is a group of fish called?",
  options: ["School", "Pack", "Herd", "Flock"],
  answer: "School",
},
{
  question: "What is a group of lions called?",
  options: ["Pride", "Pack", "Flock", "School"],
  answer: "Pride",
},
{
  question: "What is a group of wolves called?",
  options: ["Pack", "Pride", "Herd", "Flock"],
  answer: "Pack",
},
{
  question: "Which country is known as the Land of a Thousand Lakes?",
  options: ["Finland", "Canada", "Norway", "Sweden"],
  answer: "Finland",
},
{
  question: "Which country is famous for maple syrup?",
  options: ["Canada", "USA", "France", "Germany"],
  answer: "Canada",
},
{
  question: "Which country is home to the Amazon Rainforest?",
  options: ["Brazil", "Argentina", "Mexico", "Chile"],
  answer: "Brazil",
},
{
  question: "What is the capital of Australia?",
  options: ["Canberra", "Sydney", "Melbourne", "Perth"],
  answer: "Canberra",
},
{
  question: "What is the capital of Canada?",
  options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
  answer: "Ottawa",
},
{
  question: "What is the capital of Germany?",
  options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
  answer: "Berlin",
},
{
  question: "What is the capital of France?",
  options: ["Paris", "Lyon", "Nice", "Marseille"],
  answer: "Paris",
},
{
  question: "What is the capital of China?",
  options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
  answer: "Beijing",
},
{
  question: "What is the capital of South Korea?",
  options: ["Seoul", "Busan", "Incheon", "Daegu"],
  answer: "Seoul",
},
{
  question: "What is the capital of Thailand?",
  options: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
  answer: "Bangkok",
},
{
  question: "What is the capital of Egypt?",
  options: ["Cairo", "Alexandria", "Giza", "Luxor"],
  answer: "Cairo",
},
{
  question: "What is the capital of Russia?",
  options: ["Moscow", "St Petersburg", "Kazan", "Sochi"],
  answer: "Moscow",
},
{
  question: "What is the capital of Spain?",
  options: ["Madrid", "Barcelona", "Valencia", "Seville"],
  answer: "Madrid",
},
{
  question: "Which is the largest country by area?",
  options: ["Russia", "Canada", "China", "USA"],
  answer: "Russia",
},
{
  question: "Which is the smallest country in the world?",
  options: ["Vatican City", "Monaco", "Malta", "Nepal"],
  answer: "Vatican City",
},
{
  question: "How many players are on a basketball team on the court?",
  options: ["5", "6", "7", "11"],
  answer: "5",
},
{
  question: "How many players are on a volleyball team on the court?",
  options: ["6", "5", "7", "11"],
  answer: "6",
},
{
  question: "Which sport uses a hoop and ball?",
  options: ["Basketball", "Football", "Cricket", "Tennis"],
  answer: "Basketball",
},
{
  question: "Which sport uses a net and shuttlecock?",
  options: ["Badminton", "Tennis", "Football", "Basketball"],
  answer: "Badminton",
},
{
  question: "Which sport is known as the 'gentleman's game'?",
  options: ["Cricket", "Football", "Rugby", "Boxing"],
  answer: "Cricket",
},
{
  question: "What color are the stars on the US flag?",
  options: ["White", "Blue", "Red", "Green"],
  answer: "White",
},
{
  question: "How many stripes are on the US flag?",
  options: ["13", "10", "20", "50"],
  answer: "13",
},
{
  question: "Which is the most spoken language in the world by native speakers?",
  options: ["Mandarin Chinese", "English", "Spanish", "Hindi"],
  answer: "Mandarin Chinese",
},
{
  question: "Which language is spoken in Brazil?",
  options: ["Portuguese", "Spanish", "English", "French"],
  answer: "Portuguese",
},
{
  question: "Which language is primarily spoken in France?",
  options: ["French", "German", "Italian", "Spanish"],
  answer: "French",
},
{
  question: "What is the hardest natural substance on Earth?",
  options: ["Diamond", "Gold", "Iron", "Silver"],
  answer: "Diamond",
},
{
  question: "Which gemstone is typically red?",
  options: ["Ruby", "Emerald", "Sapphire", "Diamond"],
  answer: "Ruby",
},
{
  question: "Which gemstone is typically green?",
  options: ["Emerald", "Ruby", "Diamond", "Topaz"],
  answer: "Emerald",
},
{
  question: "Which gemstone is typically blue?",
  options: ["Sapphire", "Ruby", "Emerald", "Opal"],
  answer: "Sapphire",
},
{
  question: "Which planet has the most moons currently known?",
  options: ["Saturn", "Jupiter", "Mars", "Neptune"],
  answer: "Saturn",
},
{
  question: "How many teeth does a shark replace during its lifetime?",
  options: ["Thousands", "10", "50", "100"],
  answer: "Thousands",
},
{
  question: "Which animal is known for building dams?",
  options: ["Beaver", "Otter", "Rabbit", "Fox"],
  answer: "Beaver",
},
{
  question: "Which mammal can fly?",
  options: ["Bat", "Eagle", "Squirrel", "Owl"],
  answer: "Bat",
},
{
  question: "Which sea creature has eight arms?",
  options: ["Octopus", "Shark", "Dolphin", "Whale"],
  answer: "Octopus",
},
{
  question: "Which animal is the tallest mammal?",
  options: ["Giraffe", "Elephant", "Camel", "Horse"],
  answer: "Giraffe",
},
{
  question: "Which famous ship sank in 1912?",
  options: ["Titanic", "Britannic", "Mayflower", "Victory"],
  answer: "Titanic",
},
{
  question: "Which ocean did the Titanic sink in?",
  options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
  answer: "Atlantic Ocean",
},
{
  question: "What is the largest organ inside the human body?",
  options: ["Liver", "Heart", "Brain", "Lungs"],
  answer: "Liver",
},
{
  question: "How many chambers does the human heart have?",
  options: ["4", "2", "3", "5"],
  answer: "4",
},
{
  question: "What is the smallest bone in the human body?",
  options: ["Stapes", "Femur", "Rib", "Ulna"],
  answer: "Stapes",
},
{
  question: "Which blood type is known as the universal donor?",
  options: ["O Negative", "AB Positive", "A Positive", "B Negative"],
  answer: "O Negative",
},
{
  question: "Which blood type is known as the universal recipient?",
  options: ["AB Positive", "O Negative", "A Positive", "B Positive"],
  answer: "AB Positive",
},
{
  question: "How many teeth does a child usually have?",
  options: ["20", "32", "28", "16"],
  answer: "20",
},
{
  question: "Which vitamin helps blood clot?",
  options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
  answer: "Vitamin K",
},
{
  question: "Which planet is known for its blue color?",
  options: ["Neptune", "Mars", "Mercury", "Venus"],
  answer: "Neptune",
},
{
  question: "Which planet rotates on its side?",
  options: ["Uranus", "Earth", "Mars", "Jupiter"],
  answer: "Uranus",
},
{
  question: "What is the nearest galaxy to the Milky Way?",
  options: ["Andromeda", "Whirlpool", "Sombrero", "Pinwheel"],
  answer: "Andromeda",
},
{
  question: "Which planet is called the Morning Star?",
  options: ["Venus", "Mars", "Mercury", "Saturn"],
  answer: "Venus",
},
{
  question: "How many zodiac signs are there?",
  options: ["12", "10", "8", "14"],
  answer: "12",
},
{
  question: "Which day is known as the first day of the week in many calendars?",
  options: ["Monday", "Sunday", "Friday", "Wednesday"],
  answer: "Monday",
},
{
  question: "How many seconds are in one minute?",
  options: ["60", "100", "30", "120"],
  answer: "60",
},
{
  question: "How many seconds are in one hour?",
  options: ["3600", "600", "6000", "7200"],
  answer: "3600",
},
{
  question: "Which number comes after 999?",
  options: ["1000", "9999", "100", "1001"],
  answer: "1000",
},
{
  question: "Which shape has five sides?",
  options: ["Pentagon", "Hexagon", "Octagon", "Triangle"],
  answer: "Pentagon",
},
{
  question: "Which shape has six sides?",
  options: ["Hexagon", "Pentagon", "Octagon", "Square"],
  answer: "Hexagon",
},
{
  question: "Which shape has eight sides?",
  options: ["Octagon", "Hexagon", "Pentagon", "Triangle"],
  answer: "Octagon",
},
{
  question: "What is 15 × 10?",
  options: ["150", "100", "120", "200"],
  answer: "150",
},
{
  question: "What is 200 ÷ 4?",
  options: ["50", "40", "25", "100"],
  answer: "50",
},
{
  question: "What is 75 + 25?",
  options: ["100", "90", "110", "125"],
  answer: "100",
},
{
  question: "What is 90 - 45?",
  options: ["45", "40", "50", "35"],
  answer: "45",
},
{
  question: "Which number is an even number?",
  options: ["24", "15", "17", "19"],
  answer: "24",
},
{
  question: "Which number is an odd number?",
  options: ["13", "12", "20", "100"],
  answer: "13",
},
{
  question: "How many degrees are in a circle?",
  options: ["360", "180", "90", "270"],
  answer: "360",
},
{
  question: "How many degrees are in a right angle?",
  options: ["90", "180", "45", "360"],
  answer: "90",
},
{
  question: "What is the value of a dozen?",
  options: ["12", "10", "20", "24"],
  answer: "12",
},
{
  question: "How many months have 31 days?",
  options: ["7", "6", "5", "8"],
  answer: "7",
},
{
  question: "Which month has the fewest days?",
  options: ["February", "January", "March", "December"],
  answer: "February",
},
{
  question: "How many years are in a decade?",
  options: ["10", "100", "5", "20"],
  answer: "10",
},
{
  question: "How many years are in a century?",
  options: ["100", "10", "50", "1000"],
  answer: "100",
},
];

export const baseQuestions = {
  space: makeSet(spaceItems, "Space"),
  physics: makeSet(physicsItems, "Physics"),
  ai: makeSet(aiItems, "AI Technology"),
  general: makeSet(generalItems, "General Knowledge"),
};