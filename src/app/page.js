export default function Home() {
  return (
    <>
      <div class="container">
        <div class="hero">
          <div class="hero-img">
            <img src="/hero-img.jpg" alt="">
          </div>

          <div class="hero-mask" />

          <div class="hero-grid-overlay">
            <img src="/grid-overlay.svg" alt="">
          </div>
          
          <div class="marker marker-1">
            <span class="marker-icon"></span>
            <div class="marker-label">Anchor Field</div>
          </div>

           <div class="marker marker-2">
            <span class="marker-icon"></span>
            <div class="marker-label">Drift Field</div>
          </div>

        </div>
        <div class="outro"></div>
      </div>
    </>
  );
}
