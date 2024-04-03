import "./terminal.css";

export default function Terminal() {
  return (
    <div class="wrapper">
      <div class="terminal">
        <div class="terminal__header">
          <div class="terminal__header-buttons">
            <div class="terminal__header-button terminal__header-button--close"></div>
            <div class="terminal__header-button terminal__header-button--minimize"></div>
            <div class="terminal__header-button terminal__header-button--maximize"></div>
          </div>
        </div>
        <div class="terminal__content">
          <div class="terminal__content-block">
            <div class="terminal__content-shell">~ david$</div>
            <div class="terminal__content-command terminal__content-command--2">
              ls
            </div>
            <div class="terminal__content-print terminal__content--delay-2-anim">
              Desktop Documents Downloads Pictures Videos
            </div>
          </div>
          <div class="terminal__content-block terminal__content--delay-3-anim">
            <div class="terminal__content-shell">~ david$</div>
            <div class="terminal__content-command terminal__content-command--10 terminal__content--delay-3">
              echo $USER
            </div>
            <div class="terminal__content-print terminal__content--delay-13-anim">
              David López Castellote
            </div>
          </div>
          <div class="terminal__content-block terminal__content--delay-14-anim">
            <div class="terminal__content-shell">~ david$</div>
            <div class="terminal__content-command terminal__content-command--3 terminal__content--delay-14">
              pwd
            </div>
            <div class="terminal__content-print terminal__content--delay-17-anim">
              /home/david
            </div>
          </div>
          <div class="terminal__content-block terminal__content--delay-18-anim">
            <div class="terminal__content-shell">~ david$</div>
            <div class="terminal__content-command terminal__content-command--16 terminal__content--delay-18">
              cat package.json
            </div>
            <div class="terminal__content-print terminal__content--delay-34-anim">
              <pre></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
