"use client";
import Image from "next/image";
import { useState } from "react";
const growers = [
  {
    name: "Hill Country Blooms",
    place: "Nuwara Eliya",
    type: "Cut flowers",
    flower: "✿",
    color: "peach",
    text: "Fresh stems, grown with care in the cool hill country.",
  },
  {
    name: "Orchid Grove",
    place: "Kandy",
    type: "Orchids",
    flower: "❀",
    color: "lilac",
    text: "A little patience. A lot of love. Extraordinary orchids.",
  },
  {
    name: "Green Leaf Nursery",
    place: "Gampaha",
    type: "Plants",
    flower: "❧",
    color: "sage",
    text: "Bring a little more green into your everyday life.",
  },
];
export default function Home() {
  const [filter, setFilter] = useState("All growers");
  const [search, setSearch] = useState("");
  const [joined, setJoined] = useState(false);
  const visible = growers.filter(
    (g) =>
      (filter === "All growers" || g.type === filter) &&
      `${g.name} ${g.place} ${g.type}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="announcement">
        Rooted in Sri Lanka. Growing together. &nbsp; ✳
      </div>
      <header className="wrap header">
        <a className="brand" href="#">
          ✳ Flora<span>Connect</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#discover">Discover growers</a>
          <a href="#about">Our story</a>
          <a href="#community">Community</a>
        </nav>
        <a className="button small" href="#community">
          Let’s grow together ↗
        </a>
      </header>
      <main>
        <section className="wrap hero">
          <div>
            <p className="eyebrow">● &nbsp; A PLACE FOR PEOPLE WHO GROW</p>
            <h1>
              Good things
              <br />
              grow <em>together.</em>
            </h1>
            <p className="intro">
              Connecting Sri Lanka’s flower growers, plant lovers, and local
              communities. Find your people. Share your passion. Watch it bloom.
            </p>
            <div className="actions">
              <a className="button" href="#discover">
                Explore the community <span>↗</span>
              </a>
              <a className="text-link" href="#about">
                Get to know us →
              </a>
            </div>
            <div className="community-note">
              <div className="avatars" aria-hidden="true">
                <span>NS</span>
                <span>AP</span>
                <span>KM</span>
              </div>
              <p>
                Small beginnings.
                <br />
                <strong>Endless possibilities.</strong>
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/flowers.jpg"
              alt="Delicate pink blossoms reaching toward the sunlight"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
              className="hero-photo"
            />
            <span className="image-label">GROW LOCAL. BLOOM TOGETHER.</span>
            <div className="floating-note">
              <span>✿</span>
              <p>
                A little connection.
                <br />
                <strong>A whole lot of growth.</strong>
              </p>
            </div>
          </div>
        </section>
        <div className="values-strip">
          <div className="wrap values">
            <span>Rooted in connection</span>
            <b>✳</b>
            <span>Grown with care</span>
            <b>✳</b>
            <span>Inspired by nature</span>
            <b>✳</b>
            <span>Proudly Sri Lankan</span>
          </div>
        </div>
        <section id="discover" className="wrap discover">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEET YOUR GROWING COMMUNITY</p>
              <h2>
                Discover something <em>lovely.</em>
              </h2>
            </div>
            <p>
              From hillside nurseries to backyard gardens,
              <br />
              there’s a story behind every bloom.
            </p>
          </div>
          <div className="filter-bar">
            <div className="filters" aria-label="Filter growers">
              {["All growers", "Cut flowers", "Orchids", "Plants"].map(
                (item) => (
                  <button
                    key={item}
                    className={filter === item ? "filter active" : "filter"}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            <label className="search">
              <span aria-hidden="true">⌕</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find a grower or location"
                aria-label="Find a grower or location"
              />
            </label>
          </div>
          <p className="sample-label">
            A peek at what’s possible · Sample grower profiles
          </p>
          <div className="grower-grid">
            {visible.map((g) => (
              <article className="grower-card" key={g.name}>
                <div className={`grower-art ${g.color}`}>
                  <span className="tag">{g.type}</span>
                  <span className="flower" aria-hidden="true">
                    {g.flower}
                  </span>
                  <span className="art-caption">GROWN WITH LOVE</span>
                </div>
                <div className="card-copy">
                  <p className="location">↗ {g.place}, Sri Lanka</p>
                  <h3>{g.name}</h3>
                  <p>{g.text}</p>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <div className="empty-state">
              <p>No sample growers match your search.</p>
              <button
                className="text-link"
                onClick={() => {
                  setSearch("");
                  setFilter("All growers");
                }}
              >
                Show all growers →
              </button>
            </div>
          )}
        </section>
        <section id="about" className="wrap about">
          <span className="about-symbol" aria-hidden="true">
            ✳
          </span>
          <div>
            <p className="eyebrow">MORE THAN FLOWERS</p>
            <h2>
              A community with
              <br />
              <em>room to grow.</em>
            </h2>
          </div>
          <div>
            <p>
              We believe the best things happen when people connect.
              FloraConnect is a space for Sri Lankan growers, associations, and
              enthusiasts to learn from each other and celebrate what they love.
            </p>
            <a className="text-link" href="#community">
              Put down roots with us ↗
            </a>
          </div>
        </section>
        <section id="community" className="wrap join">
          <span className="join-flower" aria-hidden="true">
            ❀
          </span>
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Let’s make something <em>bloom.</em>
          </h2>
          <p>
            Grower, dreamer, or just getting your hands in the soil?
            <br />
            There’s a place for you here.
          </p>
          <button className="button cream" onClick={() => setJoined(true)}>
            Join the community ↗
          </button>
          <p className="join-status" role="status">
            {joined
              ? "Thanks for your interest! Community registration is coming soon."
              : "A growing idea. An open invitation."}
          </p>
        </section>
      </main>
      <footer className="wrap footer">
        <a href="#" className="brand">
          ✳ Flora<span>Connect</span>
        </a>
        <p>Made for people. Inspired by nature.</p>
        <span>© 2026 FloraConnect · Sample website</span>
      </footer>
    </>
  );
}
