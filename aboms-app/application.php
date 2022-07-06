<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Application Listing - ABOMS Mobile App Theme</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <? require_once("inc/head.inc.php"); ?>
  </head>

  <body>
    <div class="mobile-container" style="display: flex; flex-direction: column;">
      <div class="appbar" style="position: fixed; width: 390px; z-index: 50;">
        <a href="#" class="appbar-btn">
          <i class="material-symbols-outlined appbar-btn-icn">arrow_back</i>
        </a>
        
        <div class="appbar-title">Applications</div>
      </div>

      <div class="titlebar" style="margin-top: 56px;">
        <div class="paragraph text-small muted" style="margin-bottom: 5px;">Section Name #1</div>
        <div class="titlebar-title text-inverted" style="margin-bottom: 20px;">Application #1</div>
      </div>

      <div class="padding">
        <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input one
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" disabled="disabled" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input two
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Dropdown select input one
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
          <i class="material-symbols-outlined textinput-more">expand_more</i>
        </div>

        <br/>

        <div class="subheading" style="margin-bottom: 5px;">Application Subheading</div>
        <div class="paragraph text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input three
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" disabled="disabled" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input four
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" disabled="disabled" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input five
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="btn-group">
          <div class="btn secondary icn">
            <i class="material-symbols-outlined btn-icn">arrow_back</i>
          </div>

          <div class="btn">
            <div class="btn-text">Next Step</div>
            <i class="material-symbols-outlined btn-icn right">arrow_forward</i>
          </div>
        </div>

        <br/> <br/>

      </div>

      <div style="flex: 1"></div>

      <div class="bottom-nav">
        <a href="#" class="bottom-nav-item active">
          <div class="bottom-nav-item-icn">
            <i class="material-symbols-outlined">dashboard</i>
          </div>

          <div class="bottom-nav-item-text">Dashborad</div>
        </a>

        <a href="#" class="bottom-nav-item">
          <div class="bottom-nav-item-icn">
            <i class="material-symbols-outlined">school</i>
          </div>

          <div class="bottom-nav-item-text">CM</div>
        </a>

        <a href="#" class="bottom-nav-item">
          <div class="bottom-nav-item-icn">
            <i class="material-symbols-outlined">history</i>
          </div>

          <div class="bottom-nav-item-text">History</div>
        </a>

        <a href="#" class="bottom-nav-item">
          <div class="bottom-nav-item-icn">
            <i class="material-symbols-outlined">person_filled</i>
          </div>

          <div class="bottom-nav-item-text">Profile</div>
        </a>

        <a href="#" class="bottom-nav-item">
          <div class="bottom-nav-item-icn">
            <i class="material-symbols-outlined">menu</i>
          </div>

          <div class="bottom-nav-item-text">
            More
          </div>
        </a>
      </div>
    </div>

    <script>
      const textinputs = document.getElementsByClassName("textinput-input");
      for (var index = 0; index < textinputs.length; index++) {
        let input = document.getElementById(textinputs[index].id);
        input.addEventListener('blur', (event) => {
          if(event.target.value.trim() == '') {
            event.target.classList.remove("filled");
          } else {
            event.target.classList.add("filled");
          }
        });
      }
    </script>
  </body>
</html>