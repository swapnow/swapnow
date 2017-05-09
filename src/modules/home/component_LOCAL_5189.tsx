import React from 'react';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {

  }

  public render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top navbar-padded text-uppercase app-navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed p-x-0" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="../">
                <span>Swap</span>
              </a>
            </div>
            <div className="navbar-collapse collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li >
                  <a href="#">Browse</a>
                </li>
                <li className="active">
                  <a href="#">Who are we?</a>
                </li>
                <li >
                    <div id="status"></div>
                    <div className="fb-login-button" data-scope="email" data-max-rows="1" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true" data-onlogin="checkLoginState();"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="block app-block-intro">
          <div className="container text-center">
            <h1 className="block-title m-b-sm text-uppercase app-myphone-brand">Swap</h1>
            <p className="lead m-b-lg p-b-md">Best marketplace for students, exclusively.</p>
            <img src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg"/>
          </div>
        </div>

        <div className="container container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-xs-6 col-md-4">
              <a href="#" className="thumbnail">
                <img className="img-circle img-responsive" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg" alt="..."/>
              </a>
            </div>
            <div className="col-xs-6 col-md-4">
              <a href="#" className="thumbnail">
                <img className="img-circle img-responsive" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg" alt="..."/>
              </a>
            </div>
            <div className="col-xs-6 col-md-4">
              <a href="#" className="thumbnail">
                <img className="img-circle img-responsive" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg" alt="..."/>
              </a>
            </div>
          </div>
        </div>

        <div className="block block-bordered-lg">
          <div className="container text-center app-translate-15" data-transition="entrance">
            <blockquote className="pull-quote">
              <img className="img-circle" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg"/>
              <p>
                “Task management. Calendars. Email. They all have one thing in common&hellip;literally no one enjoys managing them. Thanks to years of research, we can now predict every single thing you'll ever have to do or go to. Yeah, we're that good.”
              </p>
              <cite>Mark Otto, Creator of Mochi</cite>
            </blockquote>
          </div>
        </div>

        <div className="block block-bordered-lg p-b-0 app-block-stats">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6">
                <img
                  src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg"
                  className="app-translate-5"
                  data-transition="entrance"/>
                <hr className="m-t-0 m-b-lg m-x-auto visible-xs"/>
              </div>
              <div className="col-md-5 col-sm-6 text-xs-center text-sm-left">
                <p className="lead">
                  We've been working for over 100 years to build the best possible app for all your needs. We're glad that others agree.
                </p>
                <div className="row m-y-md">
                  <div className="col-xs-6">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">92m</h1>
                      <span className="statcard-desc">Downloads</span>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">8m</h1>
                      <span className="statcard-desc">Reviews</span>
                    </div>
                  </div>
                </div>
                <div className="row hidden-sm">
                  <div className="col-xs-6 m-b-lg">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">78k</h1>
                      <span className="statcard-desc">Developers</span>
                    </div>
                  </div>
                  <div className="col-xs-6 m-b-lg">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">97%</h1>
                      <span className="statcard-desc">Happiness</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block block-bordered-lg">
          <div className="container">
            <div className="row">
            <div className="col-sm-8 col-sm-offset-2 text-center m-b-lg">
              <p className="lead m-x-auto">With over <strong>20 years of collective experience</strong>, we take the unthinkable and make it just a couple quick taps away.</p>
            </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <ul className="featured-list">
                  <li className="m-b-lg">
                    <div className="featured-list-icon text-primary">
                      <span className="icon icon-image"></span>
                    </div>
                    <p className="featured-list-icon-text m-b-0"><strong>Upload unlimited images</strong></p>
                    <p className="featured-list-icon-text">
                      We process all the images you upload and take full advantage of modern cloud based storage to host them at blazing fast speeds.
                    </p>
                  </li>

                  <li className="m-b-lg">
                    <div className="featured-list-icon text-primary">
                      <span className="icon icon-hour-glass"></span>
                    </div>
                    <p className="featured-list-icon-text m-b-0"><strong>Tracked time savings</strong></p>
                    <p className="featured-list-icon-text">
                      This means you save tons of time by using our world class task manager and calendar and constantly reminds you how great it is.
                    </p>
                  </li>

                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="featured-list">

                  <li className="m-b-lg">
                    <div className="featured-list-icon text-primary">
                      <span className="icon icon-cloud"></span>
                    </div>
                    <p className="featured-list-icon-text m-b-0"><strong>Share from anywhere</strong></p>
                    <p className="featured-list-icon-text">
                      Do it over the cloud, from anywhere, on any device. Mochi is super fast and always available, to not only you, but all your friends
                    </p>
                  </li>

                  <li className="m-b-lg">
                    <div className="featured-list-icon text-primary">
                      <span className="icon icon-emoji-neutral"></span>
                    </div>
                    <p className="featured-list-icon-text m-b-0"><strong>Use stickers and express yourself</strong></p>
                    <p className="featured-list-icon-text">
                      Share with emoji anyone in the world. We've baked them directly into Mochi. These probably won't help with productivity though.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="block block-bordered-lg p-l-0 p-t-0 p-r-0">
          <div id="carousel-example-generic-2" className="carousel carousel-light slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic-2" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic-2" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic-2" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <p className="lead m-x-auto text-center">
                          Instead of guessing how much time you spend on each of your tasks, why not have automagically record everything and have easy reporting without lifting a finger? <span className="hidden-xs">Well now you can with ease.</span>
                        </p>
                      </div>
                    </div>
                    <img className="img-responsive m-t-lg app-block-game-img" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg"/>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <p className="lead m-x-auto text-center">
                          Instead of guessing how much time you spend on each of your tasks, why not have automagically record everything and have easy reporting without lifting a finger? <span className="hidden-xs">Well now you can with ease.</span>
                        </p>
                      </div>
                    </div>
                    <img className="img-responsive m-t-lg app-block-game-img" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg"/>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <p className="lead m-x-auto text-center">
                          Instead of guessing how much time you spend on each of your tasks, why not have automagically record everything and have easy reporting without lifting a finger? <span className="hidden-xs">Well now you can with ease.</span>
                        </p>
                      </div>
                    </div>
                    <img className="img-responsive m-t-lg app-block-game-img" src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg"/>
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic-2" role="button" data-slide="prev">
              <span className="icon icon-chevron-thin-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic-2" role="button" data-slide="next">
              <span className="icon icon-chevron-thin-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="block block-bordered-lg block-overflow-hidden p-b-0 app-block-design">
          <div className="container">
            <div className="row pos-r">
              <div className="col-sm-7 text-xs-center text-sm-left">
                <p className="lead">
                  We focused on design relentlessly. We loved it so much, we spent just as much time taking these crazy high resolution photos. Here are some more stats on that.
                </p>
                <div className="row">
                  <div className="col-xs-4">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">1m</h1>
                      <span className="statcard-desc">Photos</span>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">2k</h1>
                      <span className="statcard-desc">gigs</span>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <div className="statcard">
                      <h1 className="statcard-number block-title">7</h1>
                      <span className="statcard-desc">Friends</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right app-block-design-img">
            <img src="http://pre15.deviantart.net/7b1e/th/pre/i/2014/180/7/1/natalie_portman___keira_knightley_by_thatnordicguy-d7og2jx.jpg" className="app-translate-50" data-transition="entrance"/>
          </div>
        </div>

        <div className="block block-bordered-lg text-center">
          <div className="container-fluid">
            <p className="lead m-b-md">
              Join over 900,000 nerds already using Mochi. Get the Mochi App <strong>free</strong> forever!
            </p>
            <form className="form-inline">
              <input className="form-control m-b" placeholder="Email Address"/>
              <input className="form-control m-b" type="password" placeholder="Create a Password"/>
              <button className="btn btn-primary m-b">Get started</button>
            </form>
            <small className="text-muted">
              By clicking "Get started" I agree to Mochi's
              <a href="#">Terms of service</a>
            </small>
          </div>
        </div>

        <div className="block app-block-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 m-b">
                <ul className="list-unstyled list-spaced">
                  <li><h6 className="text-uppercase">Products</h6></li>
                  <li>Todo</li>
                  <li>Calendario</li>
                  <li>Email Town</li>
                  <li>Pomodorotary</li>
                  <li>ChillTower</li>
                </ul>
              </div>
              <div className="col-sm-2 m-b">
                <ul className="list-unstyled list-spaced">
                  <li><h6 className="text-uppercase">Extras</h6></li>
                  <li>AutotuneU</li>
                  <li>Freestyler</li>
                  <li>Chillaxation</li>
                </ul>
              </div>
              <div className="col-sm-2 m-b">
                <ul className="list-unstyled list-spaced">
                  <li><h6 className="text-uppercase">Support</h6></li>
                  <li>Online Support</li>
                  <li>Telephone Sales</li>
                  <li>Help Desk</li>
                  <li>Workshops</li>
                </ul>
              </div>
               <div className="col-sm-6">
                <h6 className="text-uppercase">About</h6>
                <p>Shoutout to Invision team for creating the <a href="http://www.invisionapp.com/do">Do UI kit</a> that we used to fake our app screenshots. Also to the Dribbble community for providing phone mockups that look amazing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;