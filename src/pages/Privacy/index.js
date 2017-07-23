import React, { Component } from 'react';

// import components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Privacy extends Component {
  render () {
    document.title = "Privacy Policy";

    return (
      <div>
        <NavBar />
        <div className="container body">
          <h1>Privacy Policy</h1>
          <p>Giveaway Picker is a web app providing logged in
          users of Instagram to pick a user for giveways.</p>
          <p>This Privacy Policy describes how and when Giveaway Picker
            collects, uses and shares your information when you use the app.
            Giveaway Picker receives your information through Instagram APIs.
            For example, you send us information when you allow Giveaway Picker
            access to your public Instagram information. When using Giveaway
            Picker, you consent to the collection, transfer, manipulation, storage,
            disclosure and other uses of your information as described in this
            Privacy Policy. Irrespective of which country you reside in or supply
            information from, you authorize Giveaway Picker to use your
          information any country where Giveaway Picker operates.</p>

          <h2>Information Collection and Use</h2>
          <p>We collect and use your information below:</p>
          <h3>Posts, comments, likes, relationships (following and followed-by), and tags</h3>
          <p>Giveaway Picker is primarily designed to provide a convenient way
            to pick winners for giveaways. Most of the information you provide
            us is your public information on Instagram. This includes not only
            your photos or videos, comments you received or made, likes you
            received or gave, your followers and people who follow you, and tags
          you used under your Instagram’s account.</p>

          <h3>Google Analytics</h3> <p>We reserve the right to install Google Analytics
          to collect your behaviors in using Giveaway Picker.</p>

          <h2>Law and Harm</h2>
          <p>Notwithstanding anything to the contrary in
            this Policy, we may preserve or disclose your information if we believe
            that it is reasonably necessary to comply with a law, regulation or
            legal request; to protect the safety of any person; to address fraud,
            security or technical issues; or to protect Giveaway Picker's rights
            or property. However, nothing in this Privacy Policy is intended to
            limit any legal defenses or objections that you may have to a third
          party, including a government, request to disclose your information.</p>

          <h2>Changes to this Policy</h2>
          <p>We may revise this Privacy Policy from time to time. The most
            current version of the policy will govern our use of your
            information and will always be at <a href="http://www.mandychen.me/privacy">
              http://www.mandychen.me/privacy
            </a>. If we make a change to this policy that, in our
            sole discretion, is material, we will update at <a href="http://www.mandychen.me/privacy">
              http://www.mandychen.me/privacy
            </a>. By continuing to access or use the Services after those changes
          become effective, you agree to be bound by the revised Privacy Policy.</p>
          If there are any questions regarding this privacy policy you may
          contact us using the following email: <a href="mailto:mandychen@alumni.ubc.ca">
          mandychen@alumni.ubc.ca</a>.
          <p>Last edited: July 22nd, 2017</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Privacy;
