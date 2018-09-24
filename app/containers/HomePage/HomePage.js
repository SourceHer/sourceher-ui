/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Landing from './../../images/landing.jpg';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      login: false
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  /**
   * Changes to login view from signup
   * 
   */
  handleLogin() {
    this.setState({
      login: true
    });
  }

  /**
   * Signup with details
   */
  handleSignup() {
    
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="SourceHer homepage" />
        </Helmet>
        <div className="home-page">
          <section>
            <Grid
              container
              direction="row"
            >
              <Grid item xs={6}>
                <img src={Landing} alt="Landing page banner" />
              </Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  className="paper"
                >
                  <Card className="card">
                    <CardContent>
                      <Typography className="title" component="p" variant="subheading">
                        Source<strong>Her.</strong>
                      </Typography>

                      <Typography variant="display1">
                        BE APART OF A GROWING INDUSTRY AND JOIN MORE WOMEN IN TECH.
                      </Typography>

                      <Typography variant="subheading" className="subheading">
                        Find and hire more qualified women in tech. Hiring women in senior roles at your
                        company is good for your business and your company’s growth.
                      </Typography>

                      <form className="login">
                        <Grid container spacing={40}>
                          <Grid item xs={12}>
                            <TextField
                              id="fullName"
                              name="fullName"
                              label="Name"
                              fullWidth
                              autoComplete="Name"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              id="email"
                              name="email"
                              label="Email"
                              fullWidth
                              autoComplete="Email"
                            />
                          </Grid>

                          <Grid item xs={this.state.login ? 12 : 6}>
                            <TextField
                              id="password"
                              name="password"
                              label="Password"
                              fullWidth
                              type="password"
                              autoComplete="Password"
                            />
                          </Grid>

                          <Grid item xs={6} className={this.state.login ? "hide" : "show"}>
                            <TextField
                              id="confirmpassword"
                              name="confirmpassword"
                              label="Confirm Password"
                              fullWidth
                              type="password"
                              autoComplete="ConfirmPassword"
                            />
                          </Grid>

                          <Grid item xs={4} className={this.state.login ? "hide" : "show"}>
                            <Button variant="contained" color="primary" spacing={8} onClick={this.handleSignup}>
                              Signup
                            </Button>
                          </Grid>

                          <Grid item xs={6} className={this.state.login ? "show" : "hide"}>
                            <div style={{textAlign: 'center'}}>
                                <Button variant="contained" color="primary" spacing={8}>
                                  Login
                                </Button>
                            </div>
                          </Grid>

                          <Grid item xs={8} className={this.state.login ? "hide" : "show"}>
                            <Typography component="p" variant="subheading">
                              Already have an account ? <a href="#" onClick={this.handleLogin}>Login Here</a>
                            </Typography>
                          </Grid>

                          <Grid item xs={6} className={this.state.login ? "show" : "hide"}>
                            <Typography component="p" variant="subheading">
                              <a href="#">Forgot Password ?</a>
                            </Typography>
                          </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func
};
