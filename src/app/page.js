"use client";

import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <ReactLenis root />

      <div>
        <section className="hero">
          <div className="hero-img">
            <img src="/hero-img.jpg" alt="" />
          </div>

          <div className="hero-mask" />

          <div className="hero-grid-overlay">
            <img src="/grid-overlay.svg" alt="" />
          </div>

          <div className="marker marker-1">
            <span className="marker-icon" />
            <p className="marker-label">Anchor Field</p>
          </div>

          <div className="marker marker-2">
            <span className="marker-icon" />
            <p className="marker-label">Drift Field</p>
          </div>

          <div className="hero-content">
            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h1>Location Framework</h1>
              </div>
            </div>

            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h2>Coordinate Mapping</h2>
                <p>
                  Terrain data is interpreted through directional vectors.
                  Movement responds to relative position rather than absolute
                  distance.
                </p>
              </div>
            </div>

            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h2>Active Locations</h2>
                <p>
                  Key points are indexed within the field. Each location
                  functions as a reference for spatial alignment and transition
                  logic.
                </p>
              </div>
            </div>

            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h2>Spatial Center</h2>
                <p>
                  The system converges toward a balanced focal region. Motion
                  decelerates as positional variance reaches equilibrium.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-scroll-progress-bar" />
        </section>

        <section className="outro">
          <p>The system has reached its final spatial state.</p>
        </section>
      </div>
    </>
  );
}
