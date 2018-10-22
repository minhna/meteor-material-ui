import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(function() {
  // ServiceConfiguration.configurations.upsert(
  //   { service: 'facebook' },
  //   {
  //     $set: {
  //       loginStyle: 'popup',
  //       appId: 'THE_APP_ID', // See table below for correct property name!
  //       secret: 'THE_KEY',
  //     },
  //   },
  // );
  // ServiceConfiguration.configurations.upsert(
  //   { service: 'google' },
  //   {
  //     $set: {
  //       loginStyle: 'popup',
  //       clientId: 'THE_CLIENT_ID', // See table below for correct property name!
  //       secret: 'SOME_KEY',
  //     },
  //   },
  // );
});

Accounts.onCreateUser((options, user) => {
  if (!user.services.google) {
    throw new Meteor.Error('otv.vn only 1', 'Chỉ đăng nhập với tài khoản @otv.vn.');
  }

  const userEmail = user.services.google.email;
  if (!/@otv.vn$/.test(userEmail)) {
    throw new Meteor.Error('otv.vn only 2', 'Chỉ đăng nhập với tài khoản @otv.vn..');
  } else {
    const user2 = user;
    if (!user.profile) {
      user2.profile = {
        name: user.services.google.name || user.services.google.email,
        avatar: user.services.google.picture,
      };
    }
    // Don't forget to return the new user object at the end!
    return user2;
  }
});

Accounts.onLogin(function(user) {
  const { google: googleService } = user.user.services;
  if (!googleService) {
    throw new Meteor.Error('otv.vn only 3', 'Chỉ đăng nhập với tài khoản @otv.vn.');
  }
  const { name, email } = googleService;

  if (!/@otv.vn$/.test(email)) {
    Meteor.users.update(
      { _id: user.user._id },
      {
        $set: {
          'services.resume.loginTokens': [],
          'profile.name': name || email,
        },
      }, { multi: true },
    );
  } else {
    // update username ?!
    console.log(`welcome ${name || email}`);
  }
});
