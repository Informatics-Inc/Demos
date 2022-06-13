<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>ABOMS Mobile App Theme & Components</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <? require_once("inc/head.inc.php"); ?>
  </head>

  <body>
    <div class="mobile-container">
      <div class="padding">
        <div class="headline" style="margin-bottom: 0px;">ABOMS Mobile App Theme & Components</div>
      </div>
      
      <div class="hr"></div>

      <div class="padding">
        <div class="subheading" style="margin-bottom: 0;">App Bar</div>
      </div>

      <div class="appbar">
        <a href="#" class="appbar-btn">
          <i class="material-symbols-outlined appbar-btn-icn">notifications</i>
        </a>

        <div class="appbar-title">Dashboard</div>
        
        <a href="#" class="appbar-btn">
          <i class="material-symbols-outlined appbar-btn-icn">add_circle</i>
        </a>
        
        <a href="#" class="appbar-btn">
          <i class="material-symbols-outlined appbar-btn-icn">assignment_turned_in</i>
        </a>
      </div>

      <br/>

      <div class="appbar">
        <a href="#" class="appbar-btn">
          <i class="material-symbols-outlined appbar-btn-icn">close</i>
        </a>
       
        <div class="appbar-title">Full Screen Modal</div>
      </div>

      <br/>

      <div class="appbar">
        <a href="#" class="appbar-btn">
          <i class="material-symbols-outlined appbar-btn-icn">arrow_back</i>
        </a>
        
        <div class="appbar-title">Subpage View</div>
      </div>

      <br/>

      <div class="padding">
        <div class="subheading">Banners</div>

        <div class="banner">
          <div class="avatar banner-icn-bg">
            <i class="material-symbols-outlined avatar-icn banner-icn">done</i>
          </div>

          <div class="banner-content">
            <div class="banner-text"><strong>Default banner</strong></div>
            <div class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          </div>
        </div>

        <br/>

        <div class="banner success">
          <div class="avatar banner-icn-bg">
            <i class="material-symbols-outlined avatar-icn banner-icn">done</i>
          </div>

          <div class="banner-content">
            <div class="banner-text"><strong>Success banner</strong></div>
            <div class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          </div>
        </div>

        <br/>

        <div class="banner warning">
          <div class="avatar banner-icn-bg">
            <i class="material-symbols-outlined avatar-icn banner-icn">done</i>
          </div>

          <div class="banner-content">
            <div class="banner-text"><strong>Warning banner</strong></div>
            <div class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          </div>
        </div>

        <br/>

        <div class="banner danger">
          <div class="avatar banner-icn-bg">
            <i class="material-symbols-outlined avatar-icn banner-icn">done</i>
          </div>

          <div class="banner-content">
            <div class="banner-text"><strong>Danger banner</strong></div>
            <div class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          </div>
        </div>

        <br/>

        <div class="banner">
          <div class="avatar banner-icn-bg">
            <i class="material-symbols-outlined avatar-icn banner-icn">done</i>
          </div>

          <div class="banner-content">
            <div class="banner-text"><strong>Banner with action buttons</strong></div>
            <div class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          </div>

          <div class="banner-action">
            <a class="banner-action-item" href="#">Action Item #1</a>
            <a class="banner-action-item" href="#">Action Item #2</a>
          </div>
        </div>
      </div>

      <div class="padding">
        <div class="subheading" style="margin-bottom: 0;">Bottom Navigation</div>
      </div>

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

      <br/>

      <div class="padding">
        <div class="subheading">Buttons</div>

        <div class="btn">
          <div class="btn-text">Primary button</div>
        </div>

        <br/>

        <div class="btn outlined">
          <div class="btn-text">Primary outlined button</div>
        </div>

        <br/>

        <div class="btn secondary">
          <div class="btn-text">Secondary button</div>
        </div>

        <br/>

        <div class="btn outlined-secondary">
          <div class="btn-text">Secondary outlined button</div>
        </div>

        <br/>

        <div class="btn alt">
          <div class="btn-text">Alternative button</div>
        </div>

        <br/>

        <div class="btn">
          <div class="btn-text">Icon & text button</div>
          <i class="material-symbols-outlined btn-icn right">arrow_forward</i>
        </div>

        <br/>

        <div class="btn lg">
          <div class="btn-text">Large button</div>
        </div>

        <br/>

        <div class="btn-group">
          <div class="btn secondary icn">
            <i class="material-symbols-outlined btn-icn">arrow_back</i>
          </div>

          <div class="btn secondary icn">
            <i class="material-symbols-outlined btn-icn">save</i>
          </div>

          <div class="btn">
            <div class="btn-text">Button group</div>
          </div>
        </div>

        <br/>
      </div>

      <div class="padding">
        <div class="subheading">Cards</div>

        <div class="card">
          <div class="card-header">
            <div class="card-header-left">
              <i class="material-symbols-outlined">pin_drop</i> Card Heading
            </div>
          </div>

          <div class="card-content" style="padding-top: 5px;">
            <div class="card-content-list-item">
              <div class="card-content-list-item-left">
                <div class="text-small text-muted">Label #1</div>
              </div>

              <div class="card-content-list-item-middle">
                <div class="text-small">Value of Label #1</div>
              </div>
              
              <div class="card-content-list-item-right">
                <a href="#" class="card-content-list-item-btn text-small">
                  <i class="material-symbols-outlined card-content-list-item-btn-icn">edit</i>
                </a>
              </div>
            </div>
            
            <div class="divider"></div>

            <div class="card-content-list-item">
              <div class="card-content-list-item-left">
                <div class="text-small text-muted">Label #2</div>
              </div>

              <div class="card-content-list-item-middle">
                <div class="text-small">Value of Label #2</div>
              </div>
              
              <div class="card-content-list-item-right">
                <a href="#" class="card-content-list-item-btn text-small">
                  <i class="material-symbols-outlined card-content-list-item-btn-icn">edit</i>
                </a>
              </div>
            </div>
            
            <div class="divider"></div>

            <div class="card-content-list-item">
              <div class="card-content-list-item-left">
                <div class="text-small text-muted">Label #3</div>
              </div>

              <div class="card-content-list-item-middle">
                <div class="text-small">Value of Label #3</div>
              </div>
              
              <div class="card-content-list-item-right">
                <a href="#" class="card-content-list-item-btn text-small">
                  <i class="material-symbols-outlined card-content-list-item-btn-icn">edit</i>
                </a>
              </div>
            </div>
            
            <div class="divider"></div>

            <div class="card-content-list-item">
              <div class="card-content-list-item-left">
                <div class="text-small text-muted">Label #4</div>
              </div>

              <div class="card-content-list-item-middle">
                <div class="text-small">Value of Label #4</div>
              </div>
              
              <div class="card-content-list-item-right">
                <a href="#" class="card-content-list-item-btn text-small">
                  <i class="material-symbols-outlined card-content-list-item-btn-icn">edit</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br/>
      
        <div class="card">
          <div class="card-header" style="color: #b2b8c0; font-size: 12px;">
            <div class="card-header-left">
              Label for group
            </div>
            <div class="card-header-right">
              1/3
            </div>
          </div>

          <div class="divider"></div>

          <a href="#" class="card-title">
            <div class="card-title-left">
              <div class="avatar avatar-purple">
                <i class="material-symbols-outlined avatar-icn">book</i>
              </div>
            </div>

            <div class="card-title-text">
              <div class="headline card-title-text-headline">Main Heading #1</div>
              <div class="subheading card-title-text-subheading"><strong>Meta:</strong> Data goes here</div>
            </div>

            <div class="card-title-right">
              <i class="material-symbols-outlined card-title-right-icn" style="margin-right: -5px;">arrow_forward_ios</i>
            </div>
          </a>

          <div class="divider"></div>

          <a href="#" class="card-title">
            <div class="card-title-left">
              <div class="avatar avatar-green">
                <i class="material-symbols-outlined avatar-icn">currency_exchange</i>
              </div>
            </div>

            <div class="card-title-text">
              <div class="headline card-title-text-headline">Main Heading #2</div>
              <div class="subheading card-title-text-subheading"><strong>Meta:</strong> Data goes here</div>
            </div>

            <div class="card-title-right">
              <i class="material-symbols-outlined card-title-right-icn" style="margin-right: -5px;">arrow_forward_ios</i>
            </div>
          </a>

          <div class="divider"></div>

          <a href="#" class="card-title">
            <div class="card-title-left">
              <div class="avatar avatar-gold">
                <i class="material-symbols-outlined avatar-icn">comment</i>
              </div>
            </div>

            <div class="card-title-text">
              <div class="headline card-title-text-headline">Main Heading #3</div>
              <div class="subheading card-title-text-subheading"><strong>Meta:</strong> Data goes here</div>
            </div>

            <div class="card-title-right">
              <i class="material-symbols-outlined card-title-right-icn" style="margin-right: -5px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>

      <br/>

      <div class="card fullwidth">
        <div class="card-content" style="padding-bottom: 0px;">
          <div class="card-content-media">
            <div class="card-content-media-img">
              <img src="img/img.png" alt="Placeholder Image" />
            </div>
            <div class="card-content-media-headlline">The Headline for the First Article Goes Here Aute Irure Dolor in Reprehenderit in Voluptate Velit Esse</div>
          </div>

          <div class="text-small text-muted" style="margin-bottom: 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div class="divider"></div>
        </div>

        <div class="card-footer">
          <div class="card-footer-left">
            <i class="material-symbols-outlined" style="font-size: 13px; line-height: 13px;">assignment_turned_in</i> 1hr
            <i class="material-symbols-outlined" style="font-size: 13px; line-height: 13px; margin-left: 15px;">monetization_on</i> 100.00
          </div>

          <div class="card-footer-right">
            <a href="#" class="card-footer-btn">
              <i class="material-symbols-outlined card-footer-btn-icn">more_horiz</i>
            </a>
          </div>
        </div>
      </div>

      <div class="card fullwidth">
        <div class="card-content" style="padding-bottom: 0px;">
          <div class="card-content-media">
            <div class="card-content-media-headlline">The Headline for the Second Article Goes Here Excepteur Sint Occaecat Cupidatat non Proident Sunt Culpa Qui Officia Deserunt Mollit</div>
          </div>

          <div class="text-small text-muted" style="margin-bottom: 15px;">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div class="divider"></div>
        </div>

        <div class="card-footer">
          <div class="card-footer-left">
            <i class="material-symbols-outlined" style="font-size: 13px; line-height: 13px;">assignment_turned_in</i> 1hr
            <i class="material-symbols-outlined" style="font-size: 13px; line-height: 13px; margin-left: 15px;">monetization_on</i> 100.00
          </div>
          
          <div class="card-footer-right">
            <a href="#" class="card-footer-btn">
              <i class="material-symbols-outlined card-footer-btn-icn">more_horiz</i>
            </a>
          </div>
        </div>
      </div>

      <br/>

      <div class="padding">
        <div class="subheading">Form Elements</div>

        <div class="textinput">
          <input type="text" id="text-input-default" class="textinput-input" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="textinput">
          <input type="text" id="text-input-icn" class="textinput-input icn" />
          <div class="textinput-label">
            <div class="textinput-label-text">
              Text input with icon
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
          <a href="#" class="textinput-btn">
            <i class="material-symbols-outlined textinput-btn-icn">visibility</i>
          </a>
        </div>

        <br/>

        <div class="textinput">
          <textarea id="text-input-multilines" class="textinput-input multiline" style="height: 112px;"></textarea>
          <div class="textinput-label">
            <div class="textinput-label-text">
              Textarea
              <div class="textinput-label-gap"></div>
            </div>
          </div>
          <div class="textinput-outline"></div>
        </div>

        <br/>

        <div class="checkbox">
          <input type="checkbox" id="checkbox-input-default" class="checkbox-input">
          <div class="checkbox-icn">
            <i class="material-symbols-outlined checkbox-icn-checked">check_box</i>
            <i class="material-symbols-outlined checkbox-icn-unchecked">check_box_outline_blank</i>
          </div>
          <div class="checkbox-label">
            <div class="checkbox-label-text">Single checkbox</div>
          </div>
          <div class="checkbox-outline"></div>
        </div>

        <br/>

        <div class="radio-btn">
          <input type="radio" name="radio-btn-input" value="Radio button option #1" class="radio-btn-input">
          <div class="radio-btn-icn">
            <i class="material-symbols-outlined radio-btn-icn-checked">radio_button_checked</i>
            <i class="material-symbols-outlined radio-btn-icn-unchecked">radio_button_unchecked</i>
          </div>
          <div class="radio-btn-label">
            <div class="radio-btn-label-text">Radio button option #1</div>
          </div>
          <div class="radio-btn-outline"></div>
        </div>

        <div class="radio-btn">
          <input type="radio" name="radio-btn-input" value="Radio button option #2" class="radio-btn-input">
          <div class="radio-btn-icn">
            <i class="material-symbols-outlined radio-btn-icn-checked">radio_button_checked</i>
            <i class="material-symbols-outlined radio-btn-icn-unchecked">radio_button_unchecked</i>
          </div>
          <div class="radio-btn-label">
            <div class="radio-btn-label-text">Radio button option #2</div>
          </div>
          <div class="radio-btn-outline"></div>
        </div>

        <div class="radio-btn">
          <input type="radio" name="radio-btn-input" value="Radio button option #3"class="radio-btn-input">
          <div class="radio-btn-icn">
            <i class="material-symbols-outlined radio-btn-icn-checked">radio_button_checked</i>
            <i class="material-symbols-outlined radio-btn-icn-unchecked">radio_button_unchecked</i>
          </div>
          <div class="radio-btn-label">
            <div class="radio-btn-label-text">Radio button option #3</div>
          </div>
          <div class="radio-btn-outline"></div>
        </div>
      </div>

      <div class="padding">
        <div class="subheading">Typography</div>

        <div class="hr"></div>
        
        <div class="headline">Headline</div>

        <div class="subheading">Subheading</div>

        <div class="display">Display</div>
        
        <div class="paragraph">Paragraph text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        
        <div class="paragraph text-small">Small text ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

        <div class="paragraph">
          <a href="#" class="link">Hyper link - ipsum dolor sit amet</a>
        </div>

        <div class="paragraph">
          <span class="text-bold">Bold Text</span><br/>
          <span class="text-italic">Italic Text</span><br/>
          <span class="text-muted">Muted Text</span><br/>
          <span class="text-success">Success Text</span><br/>
          <span class="text-warning">Warning Text</span><br/>
          <span class="text-danger">Danger Text</span><br/>
        </div>
      </div>

      <div class="hr"></div>

      <div class="padding">
        <div class="subheading">Resources</div>

        <div class="paragraph">
          <span class="text-bold">Links</span><br />
          - <a href="https://callstack.github.io/react-native-paper/index.html" target="_blank" class="link">React Native Paper</a><br />
          - <a href="https://github.com/fateh999/react-native-paper-dropdown" target="_blank" class="link">React Native Paper - Dropdown</a><br />
          - <a href="https://fonts.google.com/icons" target="_blank" class="link">Material Symbols</a><br />
        </div>
      </div>

      <div class="hr"></div>
      
      <div class="padding">
        <div class="paragraph">
          <span class="text-bold">Font family</span><br />
          <span class="text-small">
          Body text: 'Montserrat', sans-serif<br />
          Icons: 'Material Symbols Outlined'
          </span>
        </div>
      </div>

      <div class="hr"></div>
      
      <div class="padding">
        <div class="paragraph">
          <span class="text-bold">Colors</span><br />
          <span class="text-small">
          Body background Color: #f0f4f8<br />
          Muted: #818181<br />
          Success: #39ad39<br />
          Warning: #cda800<br />
          Danger: #d12c2c<br />
          Link & primary button color: #007bff<br />
          Headline, subheading, display color & app bar, bottom navigation background color: #334357<br />
          Secondary button color: #8494a5<br />
          Text input border color: #beccdb<br />
          Input label color: #99a1ab<br />
          Card subtitle and footer text color: #99a1ab<br />
          Horizontal rule line  color: #d7e0e9<br />
          ABOMS purple: #a954b4<br />
          ABOMS green: #13b98e<br />
          ABOMS gold: #cda800
          </span>
        </div>
      </div>

      <div class="hr"></div>

      <div class="padding">
        <div class="paragraph">
          <span class="text-bold">Sizing & Spacing</span><br />
          <span class="text-small">
          General container padding: 15px<br />
          Spacing after headline: 25px<br />
          Input height: 56px<br />
          Headline & Display font size: 27px<br />
          Subheading font size: 19px<br />
          Paragraph font size: 15px<br />
          Small font size: 12px<br />
          Border radius: 5px<br />
          General icon size: 24px
          </span>
        </div>
      </div>

      <br/> <br/> <br/> <br/> <br/>

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

    </div>
  </body>
</html>